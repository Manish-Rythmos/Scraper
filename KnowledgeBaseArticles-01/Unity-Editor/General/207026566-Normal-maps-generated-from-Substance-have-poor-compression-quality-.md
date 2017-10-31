

**Symptoms**


- Normal maps within procedural materials (which are generated dynamically) are showing to have lost quality when compressed.
- Substance Designer generated a new material with a normal map that had certain quality. When it was compressed in Unity, this same material changed quality.



**Cause**



Substance Designer uses an image without compression to calculate the normal map. When the .SBAR file format is exported to Unity, it is saved with compression. Here the artefacts occur, since there is a loss of quality.



**Resolution**



There are a couple of things you can try:


- Use a higher level of JPEG quality in the Bitmap's properties in Substance designer.
- Use a method of compression that allows you to maintain the level of quality.



**More Information**



This article applies to Unity versions 5.x





