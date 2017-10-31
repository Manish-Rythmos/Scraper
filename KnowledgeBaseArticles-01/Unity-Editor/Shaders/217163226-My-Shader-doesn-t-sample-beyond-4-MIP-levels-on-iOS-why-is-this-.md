

**Symptoms**


- I am finding that my MIP maps seem to be missing when I sample them in Metal or GLES on an Apple iOS device.



**Cause**



The issue you're finding is as designed. On iOS, GLES gets clamped (GL\_TEXTURE\_MAX\_LEVEL=3), which prevents looking past the fourth MIP level in compressed Textures. This is due to the minimum MIP size being limited to 16 pixels by the driver. This doesn't occur on Metal, but has been capped by Unity to make functionality consistent.



**Resolution**



To get round this, you can switch to a non-PVRTC form of compression ( **Compressed**  and  **Crunched**  both use PVRTC).



![](/hc/en-us/article_attachments/211106023/Screen_Shot_2016-11-25_at_15.18.42.png)



This isn't the case if you use 16-bit or 24-bit (true color) for your Texture compression. This is will come with a larger memory footprint, but will behave as you expect.



**More Information**



For more information, consult the following documentation:


- [CG Shader texCUBElod reference](http://http.developer.nvidia.com/Cg/texCUBElod.html)
- [Texture importer override documentation](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html)
- [Texture importer documentation](https://docs.unity3d.com/Manual/class-TextureImporter.html%20)



Save

