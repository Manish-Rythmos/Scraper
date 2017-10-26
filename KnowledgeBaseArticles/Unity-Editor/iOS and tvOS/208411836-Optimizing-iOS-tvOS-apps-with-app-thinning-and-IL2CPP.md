
        

**Symptoms** 

*   App size is bigger than the over-the-air download limit and forces iOS users to download the app via WiFi.
*   I want to use resource slicing and bitcode on iOS and tvOS.
*   I use AssetBundles, but I would like to support on-demand resources on iOS and tvOS.
*   The universal binary of the app or single slices are bigger than allowed from the Apple submission guidelines.

**Cause** 

My app is bigger than the over-the-air download limit on iOS and bigger than the main application bundle size on tvOS. 

I want to get the best download size, storage utilisation and runtime performance for my iOS and tvOS app.

The [otool](http://www.unix.com/man-page/osx/1/otool/) report shows that single binary slices (32bit, 64bit) or the universal binary are bigger than the allowed limits from the Apple submission guidelines.

**Resolution** 

[App slicing](https://developer.apple.com/library/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html#//apple_ref/doc/uid/TP40012582-CH35-SW1) is very useful on iOS and tvOS platforms, as it helps the developers to pack more assets into the initial app bundle and still stay within the over-the-air download limit on iOS and main application bundle size on tvOS. There are two flavors of app slicing: app executable slicing and app resource slicing.

*   Read more about app executable slicing in [Bitcode Support in iOS & tvOS](/hc/en-us/articles/209933103)
*   Read more about resource slicing in [Optimizing iOS & tvOS app size with resource slicing](/hc/en-us/articles/208412046)

You can use [on-demand resources](https://developer.apple.com/library/prerelease/ios/documentation/FileManagement/Conceptual/On_Demand_Resources_Guide/) to both reduce initial application download sizes and reduce the device storage usage by removing no longer needed assets.

*   Read more about on-demand resources in [Mastering on-demand resources for iOS & tvOS](/hc/en-us/articles/209933113) 

[IL2CPP](http://blogs.unity3d.com/2015/05/06/an-introduction-to-ilcpp-internals/) converts ahead-of-time (AOT) C# code into C++ code which will be compiled into the final binary of your app using XCode and LLVM. This can lead to bigger universal binaries or app slices (32bit,64bit). You code can be optimised.

*   Read more about IL2CPP build size optimization in [IL2CPP build size optimizations](/hc/en-us/articles/208412186) 
 **More Information** 

*   Read more about app executable slicing in [Bitcode Support in iOS & tvOS](/hc/en-us/articles/209933103)
*   Read more about resource slicing in [Optimizing iOS & tvOS app size with resource slicing](/hc/en-us/articles/208412046)
*   Read more about on-demand resources in [Mastering on-demand resources for iOS & tvOS](/hc/en-us/articles/209933113)
*   Read more about IL2CPP build size optimization in [IL2CPP build size optimizations](/hc/en-us/articles/208412186) 

This article applies to Unity versions 5.2.0p1 and higher, XCode 7 and higher, iOS 9.0 and higher

      