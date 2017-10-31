

**Symptoms**



I’m using [www.LoadFromCacheOrDownload](https://docs.unity3d.com/ScriptReference/WWW.LoadFromCacheOrDownload.html) to download AssetBundles but I’m getting an error: “Cannot load cached AssetBundle. A file of the same name is already loaded from another AssetBundle.”



**Cause**



This error is thrown because Unity will only allow you to have a single instance of a particular AssetBundle loaded in your application at one time. This means you are trying to access to a previously loaded Assetbundle, like this:


```
AssetBundle bundle = www.assetBundle;

```


And you haven't unloaded it with [AssetBundle.Unload](https://docs.unity3d.com/ScriptReference/AssetBundle.Unload.html) yet.



This also applies for AssetBundle variants because the only difference between them are the individual Assets contained in it and the variant name, which is appended to the AssetBundle Name to identify it. However, when loaded they are considered the same AssetBundle, so it is not possible to load more than one variant of an AssetBundle at the same time.
 
**Resolution**



Keep track of loaded AssetBundles and unload them when you are no longer using them. A guide to properly managing loaded AssetBundles can be found in our [AssetBundles usage patterns tutorial](https://unity3d.com/learn/tutorials/topics/best-practices/assetbundle-usage-patterns).



If you still get this error and have lost track of the current AssetBundles, you can use [Resources.FindObjectsOfTypeAll](https://docs.unity3d.com/ScriptReference/Resources.FindObjectsOfTypeAll.html) to find the already loaded AssetBundles in the memory as shown below.


```
AssetBundle[] bundles = Resources.FindObjectsOfTypeAll();
Debug.Log("number of bundles " + bundles.Length);

for (int i=0; i< bundles.Length; i++)
{Debug.Log("Bundle: " + bundles[i].name);
}

```


**More Information**



For more information, take a look at the following documentation:


- [Keeping track of loaded AssetBundles documentation](https://docs.unity3d.com/Manual/keepingtrackofloadedassetbundles.html)
- [AssetBundle script reference documentation](https://docs.unity3d.com/ScriptReference/AssetBundle.html)
- [Downloading AssetBundles documentation](https://docs.unity3d.com/Manual/DownloadingAssetBundles.html)
- [AssetBundles and the AssetBundle Manager tutorial ](https://unity3d.com/es/learn/tutorials/topics/scripting/assetbundles-and-assetbundle-manager)

