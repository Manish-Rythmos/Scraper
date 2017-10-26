
        

**Symptoms** 

*   I have a iOS or tvOS crash log which does not have any symbols. 

**Cause** 

A app crashed and a crash log is available but it does not show the symbols as the dSYMs are not loaded.

**Resolution**  

When the the function names are not symbolicated:

    0 <my_games_name> 0x0123d88c 0xa3000 + 18458764  
    1 <my_games_name> 0x0165a650 0xa3000 + 22771280  
    2 <my_games_name> 0x010fbbac 0xa3000 + 17140652  
    3 <my_games_name> 0x0182b774 0xa3000 + 24676212  
    ...  
    27 <my_games_name> 0x012408d4 0xa3000 + 18471124

You can use the built-in system from Xcode, which uses .dSYM files for auto translating crash logs. When the .dSYM files are visible to spotlight (e.g. on the development machine) it will auto translate the crash logs as soon as they are opened. If you want to view crash logs on a different machine you need .dSYM fiels. This can be utilised with Unity Cloud Build as well. Please see symbolicating Unity Cloud Build crash logs [here](/hc/en-us/articles/208593736) if you want to learn how the auto symbolication works for .dSYM files which have not been deployed to a desktop machine yet. 

In iTunes Connect, the crash logs will be symbolised as well if you have uploaded the .dSYM files with your app. This is highly recommended, as you only can symbolicate crash logs with the .dSYM files which have been created when you built the game. .dSYM files are generated during the application build prepare step in Xcode. To read more about .dSYM files and how to generate them and where to find, please read [here](/hc/en-us/articles/210141723). 

Alternatively, you can use Xcode lldb commands to get the name of the function using the address displayed in the crash report. These are the steps:

1.  Build your app with stripping disabled.
2.  Put a breakpoint in Main.mm
3.  Use this command in the Xcode console: image lookup --address

    (lldb) image lookup --address 0x012408d4

You should keep in mind that binaries might be loaded at different offset, as it is visible from callstack (offset is 0xa3000).  In that case you need to subtract original offset and add the new one in the current debugging session.

If you have troubles with system libraries rather than your code or Unity related code you can work around this issue.

           0   libsystem_platform.dylib 0x000000019726ce5c 0x197268000 + 20060
           1   libsystem_c.dylib 0x00000001971253e0 0x197124000 + 5088
           2   MyNewPlugin 0x000000010003ac70 0x10002c000 + 60528
           3   UIKit 0x000000018d5f90b0 0x18d5b0000 + 299184

Instead of using the application's dSYM you use the [framework](http://stackoverflow.com/questions/26079056/atos-does-not-symbolicate-system-frameworks-libraries-properly) of the iOS version that the device has when crashed. e.g. for the UIKit symbols of the iOS 8.1.1

xcrun atos -arch arm64 -o ~/Library/Developer/Xcode/iOS DeviceSupport/8.1.1 (12B436)/Symbols/System/Library/Frameworks/UIKit.framework/UIKit -l 0x18d5b0000 0x000000018d5f90b0

More about command line symbolication can be read [here](https://possiblemobile.com/2015/03/symbolicating-your-ios-crash-reports/).  

If you want to learn more about demystifying iOS application crash report you can read [here](http://www.raywenderlich.com/23704/demystifying-ios-application-crash-logs). If you need to symbolicate crash logs from Unity Cloud Build generated builds please read [here](/hc/en-us/articles/208593736). 

Note: Unity Support also requires .dSYM files of your build to symbolicate your call. It's easier if you symbolicate them directly before sending them to Support.

 **More Information** 

*   Read more about Instruments [here](https://developer.apple.com/library/tvos/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/).
*   Read more about dSYM [here](https://developer.apple.com/library/ios/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/LocatingSymbolsforYourData.html).
*   Read more about profiling and symbols [here](/hc/en-us/articles/210141723). 
*   Read more about profiling [here](http://blogs.unity3d.com/2016/02/01/profiling-with-instruments/). 
*   Read about symbolicating Unity Cloud Build crash logs [here](/hc/en-us/articles/208593736).
*   Read more about command line symbolication [here](http://stackoverflow.com/questions/26079056/atos-does-not-symbolicate-system-frameworks-libraries-properly), [here](https://possiblemobile.com/2015/03/symbolicating-your-ios-crash-reports/) and [here](https://www.raywenderlich.com/23704/demystifying-ios-application-crash-logs).  

**Properties** 

This article applies to Unity versions 4.6.0f1 and higher, XCode 6 and higher, iOS 6.0 and higher

      