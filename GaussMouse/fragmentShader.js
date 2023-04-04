#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float gaussMouse() {
    vec2 dist = (gl_FragCoord.xy - u_mouse )/u_resolution;
    float sigma = 0.5;
	return 1.0 / (6.28 * pow(sigma, 2.0)) * exp(-(pow(dist[0], 2.0) + pow(dist[1], 2.0)) / 2.0 / pow(sigma, 2.0));
}

float timeOff(float offset) {
    return sin(u_time * 2.0 + offset) + 1.0;
}

void main() {
    vec3 rgb = vec3(timeOff(0.0), timeOff(1.0), timeOff(2.0)) * gaussMouse() * (sin(u_time * 2.0) + 1.0);
	gl_FragColor = vec4(rgb,1.0);
}
