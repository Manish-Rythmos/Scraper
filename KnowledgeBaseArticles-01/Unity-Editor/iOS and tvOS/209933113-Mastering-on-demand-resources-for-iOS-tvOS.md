

**Symptoms**


- App size is bigger than the over-the-air download limit and forces iOS users to download the app via WiFi.
- I use AssetBundles, but I would like to support on-demand resources on iOS and tvOS.



**Cause**



My app is bigger than the over-the-air download limit on iOS and bigger than the main application Bundle size on tvOS.



I want to get the best download size, storage utilisation and runtime performance for my iOS and tvOS app.



**Resolution**



Additional to [App slicing](https://developer.apple.com/library/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html#//apple_ref/doc/uid/TP40012582-CH35-SW1), which consists of app executable slicing with [Bitcode Support in iOS & tvOS](/hc/en-us/articles/209933103) and [Optimizing iOS & tvOS app size with resource slicing](/hc/en-us/articles/208412046), you can use [on-demand resources](https://developer.apple.com/library/prerelease/ios/documentation/FileManagement/Conceptual/On_Demand_Resources_Guide/) to both reduce initial application download sizes and reduce the device storage usage by removing no longer needed assets. Generally, any resource that is not strictly needed to launch an app is a candidate for being loaded or unloaded on-demand. For example, consider a level-based game: the application does not need Level 10 when the user is still playing Level 3. On the other hand, the first levels may be safely unloaded when the user plays Level 16. In Unity, the best and easiest way is to organize your data with AssetBundles. These can be easily modified with only a couple of steps to support on-demand resources (ODR).



If you would like to know how to master on-demand resource for Apple platforms in Unity please read [here](http://blogs.unity3d.com/2015/11/26/mastering-on-demand-resources-for-apple-platforms/).

**More Information**
- Read more about [Optimizing iOS & tvOS apps with app thinning and IL2CPP](/hc/en-us/articles/208411836)
- Read more about on-demand resources management with Unity [here](http://blogs.unity3d.com/2015/11/26/mastering-on-demand-resources-for-apple-platforms/).



This article applies to Unity versions 5.2.0p1 and higher, XCode 7 and higher, iOS 9.0 and higher

