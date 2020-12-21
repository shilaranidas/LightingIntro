#version 430 core

in vec3 colour;
in vec2 texCoord;
out vec4 frag_colour;

uniform sampler2D texture0;
uniform vec3 ambientColour;
uniform float ambientStrength;

void main()
{
	vec4 ambient = vec4(ambientColour, 1.0f) * ambientStrength;
	frag_colour = texture(texture0, texCoord) * vec4(colour, 1.0f) * (ambient);
}