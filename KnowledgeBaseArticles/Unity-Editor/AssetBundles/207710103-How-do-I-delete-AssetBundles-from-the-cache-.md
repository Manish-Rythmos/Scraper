
        

**Symptoms**  

*   I cannot download new AssetBundles.
*   I want to update or remove an old version of my AssetBundles.

**Cause** 

You may be running out of space in your device (this issue was [fixed](https://issuetracker.unity3d.com/issues/ios-www-dot-loadfromcacheordownload-does-not-remove-least-used-asset-bundle-if-storage-is-full) in 5.3.4p2 and old AssetBundles are now deleted if there is no available space). Alternatively there may be problems with the downloaded AssetBundles.

**Resolution** 

****Solution #* 1:* ** 

*   Use  **Caching.CleanCache()**  to delete all AssetBundles that have been cached by the current application.
*   

**Caching.CleanCache()**  returns a bool depending if it was able to complete the operation or not:

public static void CleanCache ()  
{  
   if (Caching.CleanCache ())   
   {  
      Debug.Log("Successfully cleaned the cache.");  
   }  
   else   
   {  
      Debug.Log("Cache is being used.");  
   }  
} 

****Solution #* 2:* ** 

*   Use  **Caching.expirationDelay**  to set the number of seconds that an AssetBundle may remain unused in the cache before it is automatically deleted. When a bundle is downloaded, the timestamp is stored for that given bundle.

*   To set the  **expirationDelay**  property, there needs to be an entry for your application in the Cache folder. That setting is stored in a file in your applications's root Cache folder. If the folder for your application does not exist, the file cannot be written. For that entry to exist you need to first request a bundle. So in order to set the  **expirationDelay** , first request at least one bundle which will create the folder for your app's bundles. You could use any bundle just to make sure the folder exists before you call that property.

Both solutions can be used individually, or at the same time.

**More Information** 

[http://docs.unity3d.com/ScriptReference/Caching.html](http://docs.unity3d.com/ScriptReference/Caching.html)

[http://docs.unity3d.com/ScriptReference/Caching.CleanCache.html](http://docs.unity3d.com/ScriptReference/Caching.CleanCache.html)

[http://docs.unity3d.com/ScriptReference/Caching-expirationDelay.html](http://docs.unity3d.com/ScriptReference/Caching-expirationDelay.html)

      