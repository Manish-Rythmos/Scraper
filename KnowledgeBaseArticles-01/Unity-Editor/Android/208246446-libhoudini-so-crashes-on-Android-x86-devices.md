**Symptoms**

- Unity crashes when starting in Android x86 devices and the log shows an exception on libhoudini.so.

**Cause**  

libhoudini is a proprietary ARM translation layer for x86-powered Android devices. It allows an app that has NDK binaries for ARM, but not x86, to still run on x86 hardware, albeit not as quickly as it would with native x86 binaries.If libhoudini can translate everything, the app will work normally, but as Unity is updating and adding more features, libhoudini lacks some ability to translate everything fully. Result of that is an crash of ARM apps in x86 environment.  

**Resolution**

Changing the  *Device Filter*  on [Android Player Settings](http://docs.unity3d.com/Manual/class-PlayerSettingsAndroid.html) solves the problem.



If the  *Device Filter*  is set to 'FAT (ARMv7+x86)' it will double the size of the libraries but none of the assets are duplicated. However, two APKs can be created, one for x86 and one for ARMv7 and publish both on Play Store.



[http://developer.android.com/intl/zh-cn/google/play/publishing/multiple-apks.html](http://developer.android.com/intl/zh-cn/google/play/publishing/multiple-apks.html)



One thing to consider with FAT APK is that on x86 all native plugins (.so) should have both arm and x86 versions or Android may decide to use ARM on emulator instead of x86 when the count of libs is less for x86.

**More Information**

[http://docs.unity3d.com/Manual/class-PlayerSettingsAndroid.html](http://docs.unity3d.com/Manual/class-PlayerSettingsAndroid.html)       