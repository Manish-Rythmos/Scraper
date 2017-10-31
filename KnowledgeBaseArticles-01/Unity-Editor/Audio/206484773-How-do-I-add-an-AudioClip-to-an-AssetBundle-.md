

**Symptoms**


- I want to create an AssetBundle for my Unity 5 project, which contains a collection of AudioClips.
- My project uses thousands of audio clips. I do not want to import them as individual files.



**Cause**



You are creating a game in Unity 5 and wish to create an AssetBundle to contain your Audio Assets. You have previously successfully built an AssetBundle in previous versions of Unity but when you try to build an AssetBundle with AudioClips in Unity 5, it is not working.



**Resolution**



AssetBundles are files which you can export from Unity to contain assets of your choice. These files use a proprietary compressed format. This allows you to stream in content, such as models, textures and AudioClips. AssetBundles have been designed to simplify downloading content to your application.



Please note that this feature is only available to Unity Professional users.



You can create a AssetBundle in the Editor from a drop down section at the bottom of the Inspector window. By default the AssetBundle option is set to None, meaning the asset will not be written into an AssetBundle. You can create new AssetBundle, give it a name, for example  *“AudioClips”*  and then use these new AssetBundle names as the destination for the asset.



In order to add audio clips to your AssetBundle:


- Add an  **Audio Source**  component to a  **GameObject**
- Add the  **AudioClip**  to the  **Audio Source**
- Create a  **Prefab**  on the  **GameObject**
- Add the returned  **Prefab**  to the  **AssetBundle** .



**More Information**



For more information on creating AssetBundles then see this document [here](http://docs.unity3d.com/Manual/AssetBundlesIntro.html)



For more information on building AssetBundles in Unity 5 then see this document [here](http://docs.unity3d.com/Manual/BuildingAssetBundles5x.html)





