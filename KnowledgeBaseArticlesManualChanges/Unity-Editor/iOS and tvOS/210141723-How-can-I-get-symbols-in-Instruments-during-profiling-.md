

**Symptoms**


- Profiling a Unity app in the XCode profiler Instruments does not show symbols.
- I have built the app with dSYM enabled, but it does not show the symbols correctly.
- I already run Instruments with symbols, but suddenly the symbols vanished.



**Cause**



Starting Instruments, or restarting a session, does not show symbols for user code although the solution is built with dSYM.



**Resolution**



Symbols are useful to identify the function responsible for allocations or crashes. You need to build your app with symbols (stored in dSYM file) to show function names instead of cryptic memory addresses during profiling. This will guide you through building a Unity project and profiling it via Xcode/Instruments. This is useful if you want to profile time spent in various methods, or if you want to see some allocations that Unity profiler might fail to catch for some reason.


1. `Unity:`**Build**  iOS Development Build from Unity (Shift + Command + B)
2. `Xcode:`**Stop**  Running App if applicable (Command + .)
3. `Xcode:`**Clean**  Product (Shift + Command + K)
4. `Xcode:`**Build**  Product (Command + B)
5. `Xcode:` Open Log Navigator (Command + 7) to find your projects  **`.app.dSYM`** path.&ast;

 1. `Log:` Find entry for  **Generating `ProductName.app.dSYM`** .
 2. `Log:` Click the icon on right side of entry for more info.
 3. `Log:` Memorise the  **`.app.dSYM`** path.

	  1. `Path:` Will be similar to `/Users/YourUserName/Library/Developer/Xcode/DerivedData/Unity-iPhone-bqqxaseotmttydgblyqetnfdzqtg/Build/Products/&lt;mode&gt;-iOS/YourProjectName.app.dSYM`
6. `Xcode:`Open Profiler (Command + I) of choice.

 1. `Example:` Choose  **Allocations** .
 2. `Example:` Stop Trace (Command + R) after some time.
7. `Profiler:` Re-Symbolicate Document to get Symbols  *if needed* .

 1. `dSYM:` In the top menu, go to  **File/Re-Symbolicate Document...**
 2. `dSYM:` Enter your Binary name in  **Search box** .

	  1. `Note:` This is your Unity project name.
 3. `dSYM:` Locate  **`.app.dSYM`**  for your  **Binary** .

	  1. `Locate:` Select your Binary and press  **Locate**
	  2. `Locate:` Browse to your `.app.dSYM` and press  **Open** .
	  3. `Locate:` If you get error here about  **UUID** , do a clean/rebuild.
 4. `dSYM:` Press  **Symbolicate** .
8. `Profiler:&#xA0;`Your profiler should now have useful information and correct symbols.

&ast;alternatively you can use the Project Explorer to find the dSYM file by clicking onto the Derived Data arrow and go to  *Products/<Mode>-iphoneos/* . ![](/hc/en-us/article_attachments/203797543/Screen_Shot_2016-04-22_at_12.00.57.png) If you want to symbolicate crash logs you can read about it [here](/hc/en-us/articles/208593516).  

**More Information**

- Read more about Instruments [here](https://developer.apple.com/library/tvos/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/).
- Read more about dSYM [here](https://developer.apple.com/library/ios/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/LocatingSymbolsforYourData.html).
- Read more about symbolising iOS crash logs [here](/hc/en-us/articles/208593516).
- Read more about profiling [here](http://blogs.unity3d.com/2016/02/01/profiling-with-instruments/).



This article applies to Unity versions 4.6.0f1 and higher, Xcode 6 and higher, iOS 6.0 and higher

