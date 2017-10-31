

**Symptoms**


- My shaders/materials/models loaded from an AssetBundle are pink, missing, or broken
- Shaders that are not loaded from an AssetBundle work correctly



**Cause**



This could be due to a couple of reasons. For example, the shader code inside the AssetBundle may not be supported by the target platform. Another reason could be that there is a reference to the shader stored in the Bundle, but not included in the built player.

**Resolution**  The AssetBundle needs to be built for the correct target platform, for example for Bundles intended to be used on iOS devices: `BuildPipeline.BuildAssetBundles(&quot;AssetBundles&quot;, BuildAssetBundleOptions.None, BuildTarget.iOS);`





The  *Always Included Shaders*  list in [Graphics Settings](http://docs.unity3d.com/Manual/class-GraphicsSettings.html) needs to stay the same between building and loading the AssetBundle. Unity checks the  *Always Included Shaders*  list in  *Graphics Settings.* If a shader is in there, a reference to the shader will be stored in the AssetBundle instead of platform specific shader code. If you then remove this shader from the  *Always Included Shaders*  list then it might not be included in your built player, resulting in the shader not being found as the AssetBundle still only includes the reference to the shader.



The Graphics APIs list in the target platform's  *Player Settings*  should contain all needed APIs when building the AssetBundle. If the list changes between building and loading the AssetBundle then the shader code built into the AssetBundle could be for the wrong API, resulting in the shader being unsupported on the target platform.



**More Information**



When using one Unity project to build the AssetBundles and another Unity project to load the AssetBundles, the problem could be due to the projects having different Graphics APIs lists, or Always Included Shaders lists.

