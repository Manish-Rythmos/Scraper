

**Symptoms**


- App size is bigger than the over-the-air download limit and forces iOS users to download the app via WiFi.
- I want to use resource slicing on iOS and tvOS.



**Cause**



My app is bigger than the over-the-air download limit on iOS and bigger than the main application bundle size on tvOS.



I want to get the best download size and storage utilisation for my iOS and tvOS app.



**Resolution**



The primary objective of app resource slicing is to reclaim wasted bandwidth and space in cases when there are several variants of the same asset. Usage of different asset variants is frequently needed because there is large difference of hardware capabilities between the most recent and older, but still widely used iOS devices. Most of the time developers need to use assets of different quality to fully utilize the most performant devices without penalizing the rest. Prior to iOS 9.0, all asset variants had to be included into the main app bundle. That wasted bandwidth and storage space on devices, as all but one asset variants were unused. By employing app resource slicing, it’s possible to exclude any unneeded assets from the application bundle.



If you would like to know how to perform resource slicing with Unity please read [here](http://blogs.unity3d.com/2015/12/28/optimizing-ios-app-size-with-resource-slicing/).

**More Information**  
- Read more about [Optimizing iOS & tvOS apps with app thinning and IL2CPP](/hc/en-us/articles/208411836)
- Read more about [Resource Slicing](http://blogs.unity3d.com/2015/12/28/optimizing-ios-app-size-with-resource-slicing/).



This article applies to Unity versions 5.2.0p1 and higher, XCode 7 and higher, iOS 9.0 and higher

