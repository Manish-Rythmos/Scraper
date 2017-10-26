
        

**Symptoms** 

*   There is a crash when you try to load an  **A** ssetBundle that contains a scene. This error appears: "InvalidOperationException: This method cannot be used on a streamed scene AssetBundle.at UnityEngine.AssetBundle.LoadAllAssets (System.Type type) [0x00000] in <filename unknown>:0"

**Cause** 

In Unity 5.3.4p5, it is possible to call LoadAllAssets to load scenes if the AssetBundle is a scene bundle. If you upgrade to 5.3.5p5 however, it will crash or show an error.

**Resolution** 

It is not necessary to call LoadAllAssets when you load scenes from AssetBundles.

You can check if a bundle is a streamed scene using AssetBundle.isStreamedSceneAssetBundle and avoid to use LoadAllAssets when the AssetBundle contains an scene.

www = new WWW( urlServer + bundleName);

yield return www;

AssetBundle bundle = www.assetBundle;

if ( bundle.isStreamedSceneAssetBundle)

{

SceneManager.LoadSceneAsync( sceneName , LoadSceneMode.Additive  );  
}

**More Information** 

This article is for Unity version 5.3.5p5.

**[https://docs.unity3d.com/Manual/AssetBundlesIntro.html](https://docs.unity3d.com/Manual/AssetBundlesIntro.html)** 

**[https://unity3d.com/learn/tutorials/topics/best-practices/guide-assetbundles-and-resources](https://unity3d.com/learn/tutorials/topics/best-practices/guide-assetbundles-and-resources)** 

      