

**Symptoms**


- When I profile my game I can observe multiple instances of the same shader are getting loaded.



**Cause**



If you have two AssetBundles using the same shader or material, but they are not tagged into any AssetBundle, Unity will pack the shader in each bundle. This could also happen if you use your shader/material in a local scene and pack the shader/material into an AssetBundle.



**Resolution**



Choose which assets will be on AssetBundles and which in the executable. You can pack your materials or shaders into one common AssetBundle (for example art.unity3d) and load this bundle first.



**More Information**



[https://docs.unity3d.com/Manual/AssetBundlesIntro.html](https://docs.unity3d.com/Manual/AssetBundlesIntro.html)



[https://docs.unity3d.com/Manual/Shaders.html](https://docs.unity3d.com/Manual/Shaders.html)



[https://docs.unity3d.com/Manual/BuildingAssetBundles.html](https://docs.unity3d.com/Manual/BuildingAssetBundles.html)



[https://unity3d.com/learn/tutorials/topics/best-practices/assetbundle-usage-patterns](https://unity3d.com/learn/tutorials/topics/best-practices/assetbundle-usage-patterns)



[https://support.unity3d.com/hc/en-us/articles/208380753-Shaders-are-pink-when-loaded-from-an-AssetBundle](https://support.unity3d.com/hc/en-us/articles/208380753-Shaders-are-pink-when-loaded-from-an-AssetBundle)

