#define RED vec3(0.8, 0, 0)
#define BLUE vec3(0, 0, 0.8)
#define GREEN vec3(0, 0.5, 0)
#define CYAN vec3(0, 0.5, 0.8)
#define BLACK vec3(0)
#define WHITE vec3(1)
#define GRAY vec3(.3)
#define LIGHTGRAY vec3(.8)
#define LIGHTRED vec3(0.9, 0.5, 0.5)
#define LIGHTBLUE vec3(0.5, 0.5, 0.9)

#define STYLE_DRAW_POLYGONS   0x01
#define STYLE_DRAW_GENERATOR  0x02
#define STYLE_DRAW_TRIANGLES  0x04
#define STYLE_DRAW_CIRCLES    0x08
#define STYLE_SHADE_TRIANGLES 0x10
#define STYLE_FIX_COLOR       0x20

#define FACE_COLOR_PRIMARY    0
#define FACE_COLOR_RAINBOW    1
#define FACE_COLOR_RANDOM     2

#define LOADC(c, reg) texelFetch(c, reg, 0)
#define LOAD(reg) texelFetch(iChannel0, reg, 0)

#define LOAD1(reg) LOAD(reg).x
#define LOAD2(reg) LOAD(reg).xy
#define LOAD3(reg) LOAD(reg).xyz
#define LOAD4(reg) LOAD(reg)

#define PROJ_DISK     0
#define PROJ_HALF     1
#define PROJ_BAND     2
#define PROJ_INV_DISK 3
#define PROJ_ORTHO    4
#define PROJ_KLEIN    5

#define NUM_PROJ      6.

#define CLAMP_ABS(x, m) clamp((x), -(m), (m))

#define TRI_NEXT(i)   ((2 + (i)*(5 - 3*(i)))/2)
#define TRI_LAST(i,j) (3 - (i) - (j))

#define PI 3.141592653589793

#define BIT_VERT_IS_FACE     0
#define BIT_PERP_HAS_LENGTH  3
#define BIT_PERP_SPLITS_EDGE 6

#define QUERY_BIT(flags, bit, idx) (((flags) & (1 << ((bit)+(idx)))) != 0)

#define PQR_MIN 2.
#define PQR_MAX 9.

#define PCOLOR vec3(1, 0, 0)
#define RCOLOR vec3(1, 1, 0)
#define QCOLOR vec3(0, 0, 1)

#define CENTER_STATIONARY 0.
#define CENTER_SWEEPING   1.
#define CENTER_ROTATING   2.
#define CENTER_GYRATING   3.


const mat3 VCOLORS = mat3(PCOLOR, QCOLOR, RCOLOR);

// global projection variables
int activeProj;

float px;
float lineSize;


bool isConformal;
bool shouldDrawDisk;

vec4 sceneBox;
vec2 sceneOrigin;

vec4 iconsBox;
vec4 pqrBox;
vec4 projBox;
float projSize;

float iconSize;
float pqrSize;

// global vars for inset triangle
mat3 insetEdges;
mat3 insetBisectors;
mat3 insetVerts;
mat3 insetEdgePoints;

vec2 insetOrigin;
float insetPx;
mat2 insetR;
float insetPointSize;

//////////////////////////////////////////////////////////////////////
// rotate vector by 90 degrees

vec2 perp(vec2 p) {
    return vec2(-p.y, p.x);
}


//////////////////////////////////////////////////////////////////////
// general hyperbolic functions

// return p but with z flipped
vec3 hyperConj(vec3 p) {
    return vec3(p.xy, -p.z);
}

// hyperDot(u, v) = dot(u, hyperConj(v)) = dot(hyperConj(u), v)
float hyperDot(vec3 u, vec3 v) {
    return dot(u.xy, v.xy) - u.z*v.z;   
}

// return cross product with negative z
// hyperDot(x, hyperCross(x, y)) = hyperDot(y, hyperCross(x, y)) = 0
vec3 hyperCross(vec3 x, vec3 y) {
    return hyperConj(cross(x, y));
}

// flip point if necessary to lie in upper hyperboloid and normalize it
// so that hyperDot(u, u) = -1
vec3 hyperNormalizeP(vec3 u) {
    float s = u.z < 0. ? -1. : 1.;
    return u * (s / sqrt(-hyperDot(u, u)));
}

// normalize geodesic so that hyperDot(v, v) = 1
vec3 hyperNormalizeG(vec3 v) {
    return v / sqrt(hyperDot(v, v));
}

// distance between two points
float hyperDistPP(vec3 u, vec3 v) {
    return acosh(max(1.0, -hyperDot(u, v)));
}

// distance between point and line
float hyperDistPG(vec3 u, vec3 v) {
    return asinh(hyperDot(u, v));
}

// construct geodesic from two points
vec3 geodesicFromPoints(vec3 u, vec3 v) {
    return hyperNormalizeG(hyperCross(u,v));
}

// construct geodesic perpendicular to l passing thru x
#define geodesicPerpThruPoint(l,x) geodesicFromPoints(l,x)

// intersection of two geodesics - undefined if they don't intersect
vec3 intersectGG(vec3 l, vec3 f) {
    return hyperNormalizeP(hyperCross(l, f));
}

// construct bisector of two points
vec3 hyperBisector(vec3 u, vec3 v) {
    return hyperNormalizeG(hyperCross(u+v, hyperCross(u, v)));
}

// reflect point across geodesic
vec3 reflectPG(vec3 x, vec3 l) {
    return x - (2.*hyperDot(x,l)/hyperDot(l,l))*l;
}

// translate the origin to a specific point
vec3 hyperTranslate(vec3 p, vec3 t) {
    
    if (dot(t.xy, t.xy) < 1e-7) { return p; }
    
    vec3 flipz = vec3(1, 1, -1);
    vec3 o = vec3(0, 0, 1);
    
    vec3 tp1 = t+o;
    vec3 tx1 = cross(t, o) * flipz;
    
    // bisector of t and origin
    vec3 b = cross(t+o, tx1);
    
    // reflect across bisector
    p -= (2.*hyperDot(p, b)/hyperDot(b,b))*b;
    
    // reflect direction of t
    vec2 n = t.xy;
    p.xy = p.xy - (2.*dot(n, p.xy)/dot(n,n))*n;
     
    return p;

}

// construct angular bisector at intersection of l1 & l2
vec3 hyperAngleBisector(vec3 l1, vec3 l2) {
    return hyperNormalizeG(l1 - l2);
}

// set up a triangle with angles pi/p, pi/q, pi/r, anchored at origin
mat3 setupTriangle(vec3 pqr) {
    
    vec3 angles = PI/pqr;
    
    vec3 cpqr = cos(angles);
    float sp = sin(angles.x);
    
    float a = (cpqr.x*cpqr.y + cpqr.z)/sp;
    float b = cpqr.y;
    float c = sqrt(a*a + b*b - 1.);
 
    return mat3(vec3(-b, a, c),
                vec3(-cpqr.x, -sp, 0),
                vec3(1, 0, 0));
    
}

// construct triangle vertices from edges
mat3 hyperTriVerts(mat3 edges) {
    
    mat3 verts;
    
    for (int i=0; i<3; ++i) {
        int j = TRI_NEXT(i);
        int k = TRI_LAST(i, j);
        verts[i] = intersectGG(edges[j], edges[k]);
    }
    
    return verts;
    
}

// construct angle bisectors at vertices of triangle
mat3 hyperTriAngleBisectors(mat3 edges) {
    
    mat3 bisectors;
    
    for (int i=0; i<3; ++i) {
        int j = TRI_NEXT(i);
        int k = TRI_LAST(i, j);
        bisectors[i] = hyperAngleBisector(edges[j], edges[k]);
    }
    
    return bisectors;
    
}

// construct perpendiculars to edges passing thru generator
mat3 hyperTriPerps(mat3 edges, vec3 generator) {
    
    mat3 perps;
    
    for (int i=0; i<3; ++i) {
        perps[i] = geodesicPerpThruPoint(edges[i], generator);
    }
    
    return perps;
    
}


//////////////////////////////////////////////////////////////////////
// complex math functions

vec2 complexLog(vec2 z) {
    return vec2(log(length(z)), atan(z.y, z.x));
}

vec2 complexExp(vec2 z) {
    return exp(z.x) * vec2(cos(z.y), sin(z.y));
}

vec2 complexInv(vec2 z) {
    return vec2(z.x, -z.y) / dot(z, z);   
}

vec2 complexMul(vec2 a, vec2 b)  {
    return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);    
}

vec2 complexAtanh(vec2 z) {
    return 0.5*(complexLog(vec2(1, 0) + z) - complexLog(vec2(1, 0) - z));
}

vec2 complexTanh(vec2 z) {
    
    vec2 e2z = complexExp(2.*z);
    
    vec2 num = e2z - vec2(1, 0);
    vec2 denom = e2z + vec2(1, 0); 
    
    return complexMul(num, complexInv(denom));

}

//////////////////////////////////////////////////////////////////////
// Poincaré disk projection functions

float diskMetric(vec2 d) {
    return 0.5*(1. - dot(d, d));
}

bool diskPointValid(vec2 d) {
    return dot(d, d) < 1.;
}

vec2 diskProjValid(vec2 d, bool pad) {
    
    float DISK_MAX = pad ? 0.95 : 0.875;
    
    float l = length(d);
    if (l > DISK_MAX) { d *= DISK_MAX/l; }
    return d;
    
}

vec2 diskFromHyperboloid(vec3 p) {
    return p.xy / (1. + p.z);
}

vec3 hyperboloidFromDisk(vec2 d) {
    float s = dot(d, d);
    return vec3(2.*d, 1.+s) / (1. - s); 
}

//////////////////////////////////////////////////////////////////////
// Poincaré half-plane projection functions

bool halfPointValid(vec2 h) {
    return h.y > 0.;
}

vec2 halfProjValid(vec2 h, bool pad) {
    float ey = pad ? 0.01 : 0.1;
    return vec2(h.x, max(h.y, ey));
}

float halfMetric(vec2 h) {
    return h.y;
}

vec2 halfFromDisk(vec2 d) {
    
    float dx2 = d.x*d.x;
    float dy1 = (d.y - 1.);
    float k = 1./(dx2 + dy1*dy1);
    
    float hx = 2.*d.x*k;
    float hy = -(dx2 + dy1*(d.y + 1.))*k;
    
    return vec2(hx, hy);

}

vec2 diskFromHalf(vec2 h) {
    
    float hx2 = h.x*h.x;
    float hy1 = (h.y + 1.);
    float k = 1./(hx2 + hy1*hy1);
    
    float dx = 2.*h.x*k;
    float dy = (hx2 + (h.y - 1.)*hy1)*k;
    
    return vec2(dx, dy);
    
}

//////////////////////////////////////////////////////////////////////
// Band projection functions

bool bandPointValid(vec2 b) {
    return abs(b.y) < 1.;
}

vec2 bandProjValid(vec2 b, bool pad) {
    const vec2 BAND_LIMITS = vec2(1.125, 0.85);
    return CLAMP_ABS(b, BAND_LIMITS + (pad ? 0.05 : 0.));
}

#define BAND_SCL (4./PI)

float bandMetric(vec2 b) {
    return (2./PI)*cos(b.y*0.5*PI);
}

vec2 bandFromDisk(vec2 z) {
    return BAND_SCL*complexAtanh(z);
}

vec2 diskFromBand(vec2 z) {
    return complexTanh(z / BAND_SCL);
}

//////////////////////////////////////////////////////////////////////
// inverted poincare disk projection functions

vec2 invertDisk(vec2 p) {
    return p / dot(p, p);
}

bool invDiskPointValid(vec2 p) {
    return dot(p, p) > 1.;
}

vec2 invDiskProjValid(vec2 p, bool pad) {
    
    float DISK_MIN = pad ? 1.15 : 1.25;
    
    if (p == vec2(0)){ 
        return vec2(0, 1.65);
    }
    
    
    float l = length(p);
    
    return l < DISK_MIN ? p*DISK_MIN/l : p;
    
}

float invDiskMetric(vec2 p) {
    float d = dot(p, p);
    return 0.5*(1. - 1./d)*d;
}

//////////////////////////////////////////////////////////////////////
// orthographic projection functions

vec2 orthoFromHyperboloid(vec3 p) {
    return p.xy;
}

vec3 hyperboloidFromOrtho(vec2 o) {
    return vec3(o, sqrt(1. + dot(o, o)));
}

mat2x3 hyperboloidFromOrthoJacobian(vec2 o) {
    
    float s = 1./sqrt(1. + dot(o, o));
    
    vec3 j0 = vec3(1, 0, o.x*s);
    vec3 j1 = vec3(0, 1, o.y*s);
    
    return mat2x3(j0, j1);

}

float orthoMetric(vec2 o) {
 
    float w = 1./(1. + dot(o, o));
    
	// hyper-dot products of jacobian above    
    float j00 = 1. - o.x*o.x*w;
    float j01 = -o.x*o.y*w;
    float j11 = 1. - o.y*o.y*w; 

    // inspired by equation 1.4 of Arvo 2001
    float dA = sqrt(j00*j11 - j01*j01);
    
    return 1.0 / sqrt(dA);

    
}

//////////////////////////////////////////////////////////////////////
// klein projection functions

vec2 kleinFromDisk(vec2 d) {    
    return 2.*d / (1. + dot(d, d)); 
}

vec2 diskFromKlein(vec2 k) {
    float z = sqrt(1. - dot(k, k));
    vec2 d = k / (1. + z);
    return d;
}

mat2 kleinFromDiskJacobian(vec2 d) {
    
	vec2 d2 = d*d;
    
    float z = (1. + dot(d,d));
    float h = 2.0/(z*z);
    
    float m00 = (-d2.x + d2.y + 1.);
    float m11 = (d2.x - d2.y + 1.);
    
    float m01 = -2.*d.x*d.y;
    
    return mat2(m00, m01, m01, m11)*h;
                   
}

float kleinMetric(vec2 k) {

    vec2 d = diskFromKlein(k);
    
    vec2 d2 = d*d;
    
    float z = (1. + dot(d,d));
    
    float m00 = (-d2.x + d2.y + 1.);
    float m11 = (d2.x - d2.y + 1.);
        
    // determinant of jacobian above
    return diskMetric(d) * sqrt(2.*m00*m11 - 4.*d2.x*d2.y)/z;

}

//////////////////////////////////////////////////////////////////////
// generic projection functions - just call functions above
// depending on activeProj

vec2 fromHyperboloid(vec3 p) {
    
    if (activeProj == PROJ_DISK) {
        return diskFromHyperboloid(p);
    } else if (activeProj == PROJ_HALF) {
        return halfFromDisk(diskFromHyperboloid(p));
    } else if (activeProj == PROJ_BAND) {
        return bandFromDisk(diskFromHyperboloid(p));
    } else if (activeProj == PROJ_INV_DISK) {
        return invertDisk(diskFromHyperboloid(p));
    } else if (activeProj == PROJ_ORTHO) {
        return orthoFromHyperboloid(p);
    } else if (activeProj == PROJ_KLEIN) {
        return kleinFromDisk(diskFromHyperboloid(p));
    }
    
}

vec3 toHyperboloid(vec2 q) {
    
    if (activeProj == PROJ_DISK) {
        return hyperboloidFromDisk(q);
    } else if (activeProj == PROJ_HALF) {
        return hyperboloidFromDisk(diskFromHalf(q));
    } else if (activeProj == PROJ_BAND) {
        return hyperboloidFromDisk(diskFromBand(q));
    } else if (activeProj == PROJ_INV_DISK) {
        return hyperboloidFromDisk(invertDisk(q));
    } else if (activeProj == PROJ_ORTHO) {
        return hyperboloidFromOrtho(q);
    } else {
        return hyperboloidFromDisk(diskFromKlein(q));
    }
    
}

bool pointValid(vec2 q) {
    
    if (activeProj == PROJ_DISK || activeProj == PROJ_KLEIN) {
        return diskPointValid(q);
    } else if (activeProj == PROJ_INV_DISK) {
        return invDiskPointValid(q);
    } else if (activeProj == PROJ_HALF) {
        return halfPointValid(q);
    } else if (activeProj == PROJ_BAND) {
        return bandPointValid(q);
    } else {
        return true;
    }
    
}

vec2 projValid(vec2 q, bool pad) {
    
    if (activeProj == PROJ_DISK || activeProj == PROJ_KLEIN) {
        return diskProjValid(q, pad);
    } else if (activeProj == PROJ_INV_DISK) {
        return invDiskProjValid(q, pad);
    } else if (activeProj == PROJ_HALF) {
        return halfProjValid(q, pad);
    } else if (activeProj == PROJ_BAND) {
        return bandProjValid(q, pad);
    } else {
        return q;
    }

}

float metric(vec2 q) {
    
    if (activeProj == PROJ_DISK) {

        return diskMetric(q);

    } else if (activeProj == PROJ_HALF) {

        return halfMetric(q);

    } else if (activeProj == PROJ_BAND) {
        
        return bandMetric(q);
        
    } else if (activeProj == PROJ_INV_DISK) {
        
        return invDiskMetric(q);
        
    } else if (activeProj == PROJ_KLEIN) {
        
        return kleinMetric(q);
                        
    } else { // PROJ_ORTHO
            
        return orthoMetric(q);
        
    }

}

//////////////////////////////////////////////////////////////////////
// pixel coords <-> scene coords

vec2 sceneFromFrag(vec2 f) {
    return (f - sceneOrigin) * px;
}

vec2 fragFromScene(vec2 s) {
    return s / px + sceneOrigin;
}



//////////////////////////////////////////////////////////////////////
// initialize the viewport transformation & UI globals

void setupProjection(in int p, vec2 res) {
    bool flip = res.y > res.x;
    vec2 dims = flip ? res.yx : res.xy;
    sceneBox.xy = vec2(0.5*dims.x, 0.5*dims.y);
    sceneBox.zw = 0.5*dims;
    sceneOrigin = sceneBox.xy;
    
    activeProj = p;
    
    float smin = min(sceneBox.z, sceneBox.w);
    lineSize = 0.008 * smin;

    if (activeProj == PROJ_HALF) {
        px = 1.0 / sceneBox.w;
        sceneOrigin.y = -0.01 / px;
    } else if (activeProj == PROJ_INV_DISK) {
        px = 3.0 / smin;
        lineSize *= 0.125;
    } else if (activeProj == PROJ_ORTHO) {
        px = 3.0 / smin;
    } else if (activeProj == PROJ_BAND) {
        px = 0.98 / sceneBox.w;
    } else { // klein/disk
        px = 1.04 / smin;
    }   
        
    lineSize *= px;
    
    isConformal = (activeProj < PROJ_ORTHO);
    
    shouldDrawDisk = (activeProj == PROJ_DISK || 
                      activeProj == PROJ_INV_DISK || 
                      activeProj == PROJ_KLEIN);
    
    if (isConformal) {
        
        vec2 uv = projValid(sceneFromFrag(0.5*res.xy), false);
        float m = metric(uv);
        lineSize /= m;
        
    }
   
}

////////////////////////////////////////////////////////
// Poincaré disk from inset box
vec2 diskFromInset(vec2 fragCoord) {
    return insetR*((fragCoord - insetOrigin)*insetPx);
}


/* Hyperbolic Wythoff explorer v2, by mattz
   License https://creativecommons.org/licenses/by-nc-sa/3.0/

   Click in the display to move the center. Shift + click to
   set rotation. All of the UI elements on the left are 
   interactive.

   Keys:
    
     ENTER   Generate a random tiling!
     + or -  Next/prev random tiling
     SPACE   Show or hide the UI
     C       Reset center position & rotation - halt motion
     G       Toggle gyrating motion
     R       Toggle continuous rotation
     T       Toggle translation along geodesic - a little 
             glitchy sometimes due to numerical inaccuracy :(
     SHIFT   Reveal central point

   These keys duplicate functionality in the UI:
  
     [ or ]  Previous/next projection
     1-7     Set generator point
     Q or A  Increment/decrement degree of 1st triangle vertex
     W or S  Increment/decrement degree of 2nd triangle vertex
     E or D  Increment/decrement degree of 2nd triangle vertex
     YUIOP   Draw style options
     JKL     Color schemes
     X       Fix color (forced when translating along geodesic)

   This shader is basically https://www.shadertoy.com/view/wtj3Ry 
   with a few improvements:

     - using hyperboloid model instead of Poincaré disk for
       "native" coordinate representation simplifies (LOL) 
       code and increases numerical stability

     - added several other models/projections of the hyperbolic
       plane besides Poincaré disk:

        - Upper half-plane
        - Band
        - Inverted Poincaré disk
        - Orthographic projection
        - Beltrami-Klein model

     - added support for translation along geodesics

     - added support for rotation, continuous rotation mode

     - added a new coloring type: random gradients of Viridis
       see https://www.shadertoy.com/view/WlfXRN

     - added a new draw style: circle packing

     - use flat shading for rainbow/HSV coloring, looks cooler

   Have fun!
   -mattz

*/

// scene transform globals
mat2 sceneRotate;
vec3 sceneCenter;
vec3 sceneWrap;

//////////////////////////////////////////////////////////////////////
// isometries to manipulate scene

vec3 sceneTransformFwd(vec3 p) {
    p = hyperTranslate(p, sceneWrap);
    p.xy = sceneRotate * p.xy;
    p = hyperTranslate(p, sceneCenter);
    return p;
}

vec3 sceneTransformInv(vec3 p) { 
    p = hyperTranslate(p, vec3(-sceneCenter.xy, sceneCenter.z));
    p.xy = p.xy * sceneRotate;
    p = hyperTranslate(p, vec3(-sceneWrap.xy, sceneWrap.z));
    return p;
}

//////////////////////////////////////////////////////////////////////
// repeated reflections of triangle till it lands on x

float flipTriangleToPoint(inout mat3 edges, in vec3 x) {
   
    // negative = odd, positive = even
    float parity = 1.0;
    
    int insideCount = 0;
    int i = 0;
    
    // enough flips to cover the hyperboloid hopefully
    for (int iter=0; iter<60; ++iter) {
        
        // test if x is inside edge i
        if (hyperDot(x, edges[i]) < 0.) {
            
            if (++insideCount == 3) {
                break;
            }
            
        } else {

            // not done yet
            insideCount = 0;

            // get indices of other two edges
            int j = TRI_NEXT(i);
            int k = TRI_LAST(i, j);

            // reflect edge j and k about edge i
            edges[j] = reflectPG(edges[j], edges[i]);
            edges[k] = reflectPG(edges[k], edges[i]);

            // flip sign on edge i
            edges[i] = -edges[i];

            // flip parity
            parity = -parity;

        } // x outside edge
        
        // increment test edge
        i = TRI_NEXT(i);
        
    } // for each flip
        
    return parity;

}

//////////////////////////////////////////////////////////////////////
// return integers such that x is nearest perpendicular, 
// y is nearest face, and z is second-nearest face.
//
// note that y == z if the perpendicular is a mirror (i.e. lies 
// on an edge incident to a right angle)

ivec3 computeFace(vec3 x, mat3 verts, vec3 generator, 
                  mat3 perps, int triangleFlags) {

    // approx. distances to each perpendicular
    vec3 pdists = -hyperConj(x) * perps;
    
    // true unsigned distances along hyperboloid
    vec3 pdistsTrue = asinh(abs(pdists));

    // will hold return value
    ivec3 face;
    
    // dist to nearest perp
    float dmin = 1e5;

    // dist from cur point to generator
    float gdist = hyperDistPP(x, generator);

    // for each perp
    for (int i=0; i<3; ++i) {

        // if zero length, ignore it
        if (!QUERY_BIT(triangleFlags, BIT_PERP_HAS_LENGTH, i)) {
            continue;
        }
        
        // compute distance to ray from perpendicular to edge

        // get the line perpendicular to perps[i] passing thru generator
        vec3 l = geodesicPerpThruPoint(perps[i], generator);

        // if x is over that line, take distance to generator, otherwise distance to perp
        float d = hyperDot(x, l)*hyperDot(verts[i], l) > 0. ? gdist : pdistsTrue[i];

        // update dmin
        if (d < dmin) { 
            dmin = d;
            face.x = i;
        }

    }
    
    // now face.x holds index of closest perp

    // get vertices along the edge that perp is perpendicular to
    face.y = TRI_NEXT(face.x);
    face.z = TRI_LAST(face.x, face.y);

    // if not a mirror edge...
    if (QUERY_BIT(triangleFlags, BIT_PERP_SPLITS_EDGE, face.x)) {
        // see which side of perp we lie on
        if (pdists[face.x]*hyperDot(verts[face.y], perps[face.x]) > 0.) {
            face = face.xzy; 
        } else {
            face = face.xyz; 
        }
    } else if (QUERY_BIT(triangleFlags, BIT_VERT_IS_FACE, face.y)) {
        // was a mirror edge so choose the only valid vertex along it
        face = face.xyy;
    } else {
        face = face.xzz;
    }
    
    return face;
    
}

//////////////////////////////////////////////////////////////////////
// from https://www.shadertoy.com/view/WlfXRN

vec3 palette(float t) {

    const vec3 c0 = vec3(0.2777273272234177, 0.005407344544966578, 0.3340998053353061);
    const vec3 c1 = vec3(0.1050930431085774, 1.404613529898575, 1.384590162594685);
    const vec3 c2 = vec3(-0.3308618287255563, 0.214847559468213, 0.09509516302823659);
    const vec3 c3 = vec3(-4.634230498983486, -5.799100973351585, -19.33244095627987);
    const vec3 c4 = vec3(6.228269936347081, 14.17993336680509, 56.69055260068105);
    const vec3 c5 = vec3(4.776384997670288, -13.74514537774601, -65.35303263337234);
    const vec3 c6 = vec3(-5.435455855934631, 4.645852612178535, 26.3124352495832);

    return c0+t*(c1+t*(c2+t*(c3+t*(c4+t*(c5+t*c6)))));

}

//////////////////////////////////////////////////////////////////////
// based on https://www.shadertoy.com/view/4sfGzS

vec2 noise( in vec3 x ) {

    vec3 p = floor(x);
    vec3 f = fract(x);
	f = f*f*(3.0-2.0*f);
	vec2 uv = (p.xy+vec2(27.0,11.0)*p.z) + f.xy;
	vec4 t = textureLod( iChannel2, (uv+0.5)/256.0, 0.0);
	return mix( t.xz, t.yw, f.z );
    
}    

//////////////////////////////////////////////////////////////////////
// random rgb values, just to look cool

vec3 rando(vec3 x, vec3 v, vec3 vOrig, float vgmax, bool fixColors) {

    float dz = vOrig.z - 1.;

    float k = length(vOrig.xy);
    const float kmax = 1.0;
    
    vec2 cs = (k < kmax ? vOrig.xy : vOrig.xy*kmax/k);
    float r = dz < 1e-3 ? 0. : acosh(vOrig.z);

    vec2 scl = fixColors ? vec2(1.5, 0.2) : vec2(127, 1);
    
    vec2 n = noise(vec3(scl.x*cs, scl.y*r) + 85.);
    
    float theta = n.y*2.*PI;
    
    vec3 l = vec3(cos(theta), sin(theta), 0); 
    
    l = hyperTranslate(l, v);
    
    const float margin = 0.125;
    const float basescl = 1. - 2.*margin;
    
    float d = hyperDistPG(x, l);
    float offset = d * margin / vgmax;
    
    vec3 color = palette(smoothstep(0., 1., n.x)*basescl + margin + offset);

    return color*color; // to counter sqrt in main
   
}

//////////////////////////////////////////////////////////////////////    
// hue from color in [0, 1]

vec3 hue(float h) {
    vec3 c = mod(h*6.0 + vec3(2, 0, 4), 6.0);
	return clamp(min(c, -c+4.0), 0.0, 1.0);
}

//////////////////////////////////////////////////////////////////////
// rainbow coloring based on Poincaré disk projection
       
vec3 rainbow(vec3 x) {
    vec2 d = diskFromHyperboloid(x);
    float h = 0.5*atan(d.x, d.y)/PI;
    vec3 rgb = hue(h);
    return mix(rgb, WHITE, 1.-dot(d.xy, d.xy));
}

//////////////////////////////////////////////////////////////////////
// for coloring tiling - each polygon gets a constant fill color

vec3 getFaceColor(vec3 x, int idx, int perpToMirror, 
                  mat3 verts, mat3 perps, int style, float vgmax,
                  bool fixColors) {
    
            
    if (style == FACE_COLOR_PRIMARY) {
    
        // primary colors just care about index for red/blue/yellow
        return VCOLORS[idx];
        
    } else {
        
        // other colorings depend on vertex position - get vertex for this face
        vec3 v = verts[idx];
        
        // flip it about mirror if necessary
        if (perpToMirror >= 0) { v = reflectPG(v, perps[perpToMirror]); }
        
        vec3 vOrig = fixColors ? v : sceneTransformInv(v);

        if (style == FACE_COLOR_RAINBOW) {
            return rainbow(vOrig);
        } else {
            return rando(x, v, vOrig, vgmax, fixColors);
        }
        
    }

}

//////////////////////////////////////////////////////////////////////
// construct a line from 2 points

vec3 line2D(vec2 a, vec2 b) {
    vec2 n = perp(b - a);
    return vec3(n, -dot(n, a));
}

//////////////////////////////////////////////////////////////////////
// 2D distance to line

float lineDist2D(vec3 l, vec2 p) {
    float s = length(l.xy);
    return (dot(l.xy, p) + l.z)/s;
}

//////////////////////////////////////////////////////////////////////
// 2D distance to line

float lineDist2D(vec2 a, vec2 b, vec2 p) {
    return lineDist2D(line2D(a, b), p);
}

//////////////////////////////////////////////////////////////////////
// 2D distances to line and line segment

vec2 lineSegDist2D(vec2 a, vec2 b, vec2 p) {

    p -= a;
    b -= a;
    
    vec2 n = normalize(perp(b));
    
    float u = clamp(dot(p, b)/dot(b, b), 0., 1.);
    
    return vec2(dot(b, n) - dot(p, n), length(p-u*b));
    
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {

    ///////////////////////////////////////////////////
    // load data from registers
    
    vec4 pqr = vec4(6, 5, 2, 0);
    vec3 gbary = vec3(1, 0, 1);
    vec4 center = vec4(0, 0, 0, 0); 
    ivec4 flags = ivec4(1, 0,0x0fff, 0);
    vec2 rvec = vec2(1, 0);
    vec3 time = vec3(0, 1, 0);
    vec4 wrap = vec4(0, 0, 0, 0);
    
    bool paused = (time.x == time.y);
    
    sceneCenter = center.xyz;
    sceneWrap = vec3(0, 0, 1);
    sceneRotate = mat2(rvec, perp(rvec));
    
    int drawStyle = flags.x;
    int faceColor = flags.y;
    int triangleFlags = flags.z;
    
    ///////////////////////////////////////////////////
	// set up projection and draw tiling if valid

    setupProjection(int(pqr.w), iResolution.xy);
    
    vec2 uv = sceneFromFrag(fragCoord);
    
    vec3 colorOut = WHITE;

    bool drawTiling = pointValid(uv);
    
    // compute edges from PQR
    mat3 edges;
 
    bool fixColors = ((center.w == CENTER_SWEEPING) ||
                      bool(flags.x & STYLE_FIX_COLOR));
   
    // draw tiling
    if (drawTiling) {
        edges = setupTriangle(pqr.xyz);
        insetEdges = edges;

        ///////////////////////////////////////////////////
        // handle scroll

        // see if scroll pos stored as hyperboloid coords or
        // scene coords (latter need projection)
        if (sceneCenter.z == 0.) {
            sceneCenter = toHyperboloid(projValid(sceneCenter.xy, false));
        }
        
        vec2 ctrScene = fromHyperboloid(sceneCenter);
         
        // deal with wrap
        if (center.w == CENTER_SWEEPING) {
    
            float dist = wrap.w;

            vec3 u = vec3(0, 0, 1);

            dist *= fract(time.z) - 0.5;

            sceneWrap = hyperNormalizeP(u*cosh(dist) + wrap.xyz*sinh(dist));

        }
        
        ///////////////////////////////////////////////////
        // triangle setup

        // translate edges by scroll position
        for (int i=0; i<3; ++i) {
            edges[i] = sceneTransformFwd(edges[i]);
        }       

        // project current frag pos to the hyperboloid
        vec3 x = toHyperboloid(uv);
        
        x = toHyperboloid(fromHyperboloid(x));

        // flip triangle on top of current frag pos
        float parity = flipTriangleToPoint(edges, x);

        // compute vertices
        mat3 verts = hyperTriVerts(edges);
        
        // compute generator position from barycentric coords
        vec3 generator = hyperNormalizeP(verts * gbary);

        // compute perpendiculars thru generator to edges
        mat3 perps = hyperTriPerps(edges, generator);

        // compute max dist to vert from generator
        float vgmax = -1e5;
        
        for (int i=0; i<3; ++i) {
            vgmax = max(vgmax, hyperDistPP(verts[i], generator));
        }
        
        // compute radii for drawing circles below
        vec3 rads = vec3(1e5);
        
        if (bool(drawStyle & STYLE_DRAW_CIRCLES)) {
            for (int i=0; i<3; ++i) {
                if (QUERY_BIT(triangleFlags, BIT_VERT_IS_FACE, i)) {
                    int j = TRI_NEXT(i);
                    int k = TRI_LAST(i, j);
                    rads[i] = min(rads[i], abs(hyperDot(verts[i], perps[j])));
                    rads[i] = min(rads[i], abs(hyperDot(verts[i], perps[k])));
                }
            }
            rads = asinh(rads);
        }
            
        /////////////////////////////////////////////////////////////////
        // find out which polygon face we lie on

        // face.x = closest perp
        // face.y = closest vert index
        // face.z = second closest vert index

        ivec3 face = computeFace(x, verts, generator, perps, triangleFlags);
        
        float fparity = hyperDot(verts[face.y], perps[face.x]) < 0. ? -1. : 1.; 

        int perpToMirror = face.z == face.y ? face.x : -1;
        
        // colors for each face
        vec3 faceFG = getFaceColor(x, face.y, -1, 
                                   verts, perps, faceColor, vgmax,
                                   fixColors);
        
        vec3 faceBG = getFaceColor(x, face.z, perpToMirror, 
                                   verts, perps, faceColor, vgmax,
                                   fixColors);	

        /////////////////////////////////////////////////////////////////
        // shade the current pixel

        vec3 accum = vec3(0); 
        vec2 origUV = uv;

        // 4-Rook Antialiasing
        // https://blog.demofox.org/2015/04/23/4-rook-antialiasing-rgss/
        const vec2 deltas[4] = vec2[4](
            vec2(0.125, 0.375),
            vec2(-0.375, 0.125),
            vec2(0.375, -0.125),
            vec2(-0.125, -0.375)
        );

        // we will do either 1 or 4 subpixels - only need to 
        // worry about AA if projection is not conformal
        float subPixelCoverage = isConformal ? 1.0 : 0.5;
        float subPixelWeight = subPixelCoverage * subPixelCoverage;
        float subPixelOffset = isConformal ? 0.0 : px;

        // antialiasing distance
        float lengthScale = metric(uv)/(px*subPixelCoverage);

        // shade up to 4 sub-pixels
        for (int i=0; i<4; ++i) {

            // sub-pixel offset
            uv = origUV + subPixelOffset * deltas[i];
            
            // project
            x = toHyperboloid(uv);

            // dists to triangle edges
            vec3 edists = -hyperConj(x) * edges;
            float emin = min(edists[0], min(edists[1], edists[2]));

            // dist to polygon edges/perps
            float pmin = fparity*hyperDot(x, perps[face.x]);

            // shade fg vs BG
            float fgWeight = smoothstep(-0.5, 0.5, pmin*lengthScale*0.5);
            
            vec3 subPixelColor = mix(faceBG, faceFG, fgWeight);
            
            // shade triangles
            if (bool(drawStyle & STYLE_SHADE_TRIANGLES)) { 
                float brightWeight = smoothstep(-0.5, 0.5, parity*emin*lengthScale);
                subPixelColor *= mix(0.75, 1.0, brightWeight);
            }
            
            // draw triangle outlines
            if (bool(drawStyle & STYLE_DRAW_TRIANGLES)) {
                float tWeight = smoothstep(0.0, 1.0, (emin - 0.5*lineSize)*lengthScale);
                subPixelColor *= mix(0.33333, 1.0, tWeight);
            }

            // draw polygon edges, generator, and circles
            float bdist = 1e5;

            if (bool(drawStyle & STYLE_DRAW_POLYGONS)) {
                bdist = min(bdist, abs(pmin) - lineSize);
            }

            if (bool(drawStyle & STYLE_DRAW_GENERATOR)) {
                bdist = min(bdist, hyperDistPP(x, generator)- 4.*lineSize);
            }
            
            if (bool(drawStyle & STYLE_DRAW_CIRCLES)) {
                float cmin = 1e5;
                for (int i=0; i<3; ++i) {
                    if (QUERY_BIT(triangleFlags, BIT_VERT_IS_FACE, i)) {
                        float cdist = (hyperDistPP(x, verts[i])-rads[i]);
                        cmin = min(cmin, cdist);
                    }
                }
                bdist = min(bdist, -cmin);
            }
            
            // shade in black
            subPixelColor *= smoothstep(0.0, 1.0, bdist*lengthScale);

            // accumulate this subpixel
            accum += subPixelWeight * subPixelColor;

            // only need to do one sample for conformal maps (AA just for klein & ortho)
            if (isConformal) { break; }

        }
        
        // done with tiling
        colorOut = accum;
    fragColor = vec4(sqrt(colorOut), 1);
    } else {
        fragColor = vec4(0, 0, 0,1);
    }

    // approximate gamma correction
    
}
