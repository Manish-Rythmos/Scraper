

**Symptoms**


- An AssetBundle with only one scene has a bigger size than expected, but all the GameObjects in the scene are in other AssetBundles.
- If I edit the manifest file, it looks fine.



**Cause** 
The AssetBundle which includes only the scene also includes the default shaders. It is showed on the Editor.log as unity\_builtin\_extra.



**Resolution**


- Create a new Standard Surface Shader, add to another AssetBundle and rebuild the AssetBundles.


- Download the built-in shaders from [http://unity3d.com/get-unity](http://unity3d.com/get-unity) and include those shaders in your project. Change the first line of the built-in shaders from  *Shader "Skybox/Cubemap”*  to  *Shader “AssetBundles/Skybox/Cubemap* ”. Add them all to an AssetBundle and assign to your objects.



**More Information** 
[http://forum.unity3d.com/threads/custom-shaders-and-asset-bundles-on-ios.144014/](http://forum.unity3d.com/threads/custom-shaders-and-asset-bundles-on-ios.144014/)



This article applies to Unity versions 5.0+

