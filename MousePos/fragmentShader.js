#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

vec4 mouse2Color() {
    vec2 normMouse = u_mouse / u_resolution;
    
    return vec4(normMouse, 0.0 , 1.0);
}

void main() {
	// gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
    gl_FragColor = mouse2Color();
}
