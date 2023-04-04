#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

vec4 mouse2Color() {
    float normMouseX = u_mouse[0] / u_resolution[0];
    float normMouseY = u_mouse[1] / u_resolution[1];
    
    return vec4(normMouseX, normMouseY, 0.0, 1.0);
}

void main() {
    gl_FragColor = mouse2Color();
}
