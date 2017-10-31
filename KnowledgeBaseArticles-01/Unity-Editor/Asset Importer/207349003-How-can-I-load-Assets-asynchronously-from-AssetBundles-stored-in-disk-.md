**Symptoms**  
- The asset content of AssetBundles is loading from the disk in a synchronous manner.



**Cause**

The main thread is blocked while loading the assets. This can make the game have hiccups. 

**Resolution**



To load the objects of the AssetBundles in an asynchronous way, in order to avoid blocking the main thread of the computer, you need to call the [AssetBundle.LoadAssetAsync](http://docs.unity3d.com/ScriptReference/AssetBundle.LoadAssetAsync.html) method.



To learn more about this, please see the sub-section about  *loading objects from an AssetBundles asynchronously* in Unity's [Loading AssetBundles](http://docs.unity3d.com/Manual/LoadingAssetBundles.html) documentation page.

**More Information** http://docs.unity3d.com/Manual/AssetBundlesIntro.htmlThis article applies to Unity version 5.3



