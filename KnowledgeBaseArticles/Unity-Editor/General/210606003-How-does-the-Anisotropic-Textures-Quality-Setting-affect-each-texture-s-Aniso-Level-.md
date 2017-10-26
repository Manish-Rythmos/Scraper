
         
 **Symptoms** 

*   I do not understand how the Anisotropic Textures field in Quality Settings affects the Aniso Level for each of my textures.
*   The anisotropic filtering for my textures is not what I expected.

**Cause** 

The [Anisotropic Textures](https://docs.unity3d.com/Manual/class-QualitySettings.html) field in Quality Settings has the options Disabled, Per Texture and Forced On. It can be confusing how this relates to the Aniso Level exposed in the [Texture Importer](https://docs.unity3d.com/Manual/class-TextureImporter.html) for each texture. 


 **Resolution** 

In the Texture Importer, an Aniso Level of either 0 or 1 means disabled; higher values represent different levels of Anisotropic filtering.
The setting in Quality Settings (Anisotropic Textures) can be Disabled, Per Texture or Forced On. This is where Aniso Level 0 and 1 differ; 0 means always disabled and 1 (and higher values) can be overridden by the setting in Quality Settings. Forced On clamps the Aniso Level between 9 and 16 (unless a texture has Aniso Level set to 0, in which case it stays disabled for that texture).

 **More Information** 

[Texture.anisoLevel](http://docs.unity3d.com/ScriptReference/Texture-anisoLevel.html)
      