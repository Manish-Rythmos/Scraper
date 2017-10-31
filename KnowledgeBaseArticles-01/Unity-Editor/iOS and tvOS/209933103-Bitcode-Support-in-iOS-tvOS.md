

**Symptoms**


- My application build size increased by 130-150 MB after switching to Unity 5.3.x.
- App size is bigger with Bitcode enabled than when disabled.
- I want to use Bitcode on iOS and tvOS.



**Cause**



We enabled [Bitcode](https://developer.apple.com/library/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html) support as default for iOS projects in Unity 5.3.0f1. It's an Apple technology, which allows them to re-optimize your application after submission to the App Store. This is a great thing and should not be disabled if possible! Though, it requires to send way more information about your application as part of submission. When your application gets processed by App Store this additional information will be stripped away from your package and won't increase final download size for your users. This technology is already mandatory for tvOS and watchOS applications, so we have enabled it for iOS to help you to optimize the app for your customer. There are two main causes which still might be generate problems when turning on Bitcode.


- Your app is bigger than the over-the-air download limit on iOS and bigger than the main application bundle size on tvOS because Bitcode is enabled.
- You want to get the best download size, storage utilisation for my iOS and tvOS app.



**Resolution**



Before changing anything, you first need to understand what Apple requires and where their limits are. Once you have understood those limits, you can retrieve the size of your application. Read more about [IL2CPP build size optimizations](/hc/en-us/articles/208412186).



***Bitcode Size***



The figures below were made with an empty Unity 5.3.4p1 project. It was archived in Xcode 7.3 and exported with distribution profile for App Store deployment.



You should make a build of your application, locate where Xcode puts built files (Window->Organizer in the Archives tab).



![](/hc/en-us/article_attachments/203473556/Screen_Shot_2016-04-14_at_19.23.31.png)



Now navigate the Terminal.app to the folder the .ipa was generated in and run:



*otool -l <your\_app\_name>.app/<your\_app\_name>* 

Inspect its output and look for something like "segname \_\_LLVM":

cmd LC\_SEGMENT
cmdsize 124
segname \_\_LLVM
vmaddr 0x00fac000
vmsize 0x07ce0000
fileoff 15564800
filesize 130940928



The "filesize" attribute is your Bitcode size.



Note: if you have build for more than one architecture there could couple of such segments in your app. You need to account them accordingly.



***Empty Project Example***



This empty project was created with Unity 5.3.4p1. Archived with Xcode 7.3 and exported with distribution profile for App Store deployment.


- IPA size: 159MB (Unity-iPhone.ipa)



Extracted IPA:


- 18MB BCSymbolMaps (symbol files supporting Bitcode, won't be delivered to end user)
- 243MB Payload (includes game assets, extra files and executable, which was 238M)
- 58MB Symbols (these are symbol files, won't be delivered to end user)



The Payload, consists mostly of executable + standard engine assets. Since assets are only ~5 MB, the focus is on executable. It can be analyzed it with otool as well, by running it twice:


1. otool -arch armv7 -l <exec\_name>
2. otool -arch arm64 -l <exec\_name>



The segment sizes of the reports are following:


1. armv7:
 1. TEXT segment (code): 7.5 MB
 2. DATA segment (various static fields for code and il2cpp metadata): 0.3 MB
 3. LLVM (Bitcode) segment: 111.1 MB (will be stripped by Apple servers and won't be delivered to end users).
 4. LINKEDIT (linking with dynamic libraries) segment: 0.9 MB&ast;
2. arm64:
 1. TEXT segment (code): 8.4 MB
 2. DATA segment (various static fields for code and il2cpp metadata): 0.5 MB
 3. LLVM (Bitcode) segment: 110.2 MB (will be stripped by Apple servers and won't be delivered to end users).
 4. LINKEDIT (linking with dynamic libraries) segment: 0.8 MB&ast;



Exec size without Bitcode for armv7 is 8.7 MB and for arm64 it is 9.7 MB.
Total exec size without Bitcode: 18.4 MB
Estimated installation size (exec + assets): 23.4 MB
Expected download size without app thinning : 1.25 MB (compressed assets) + 15.9 MB (TEXT segment, which doesn't compress well because of encryption) + 0.5 MB (DATA+LINKEDIT, they compress pretty well) = 17.65 MB



&ast;if you do not use an archive build, instead a normal  *Build and Run*  .ipa, the LINKEDIT size is increased by a factor 5. This can be monitored when checking the install size of an empty project on the device. Using the  *Build and Run* option  in  XCode results in an installation size of 44.5MB for an universal build. Compared to an installed app via an .ipa produces by exporting the archived build to an .ipa which is 23.4MB for an universal build. The export function can be seen in the image above.



Bitcode is only enabled when using Archive Build. Once you upload the app to iTunes Connect you can view the expected sizes for Compressed file Size, Download Size and Install Size for all platforms and Universal build. Read more about [IL2CPP build size optimizations](/hc/en-us/articles/208412186).



***Disable Bitcode***



Sometimes it is necessary to disable Bitcode support. Some 3rd party tools to not support Bitcode yet and you need to continue without Bitcode until the tools support it. Read more on how to disable bit support in [How to disable Bitcode support?](/hc/en-us/articles/207942813-How-to-disable-Bitcode-support-)

**More Information**
- Read more about [Optimizing iOS & tvOS apps with app thinning and IL2CPP](/hc/en-us/articles/208411836)
- Learn more on how to disable bit support in [How to disable Bitcode support?](/hc/en-us/articles/207942813-How-to-disable-Bitcode-support-)
- Read more about build size with Bitcode support [here](http://forum.unity3d.com/threads/unity-5-3-x-build-size-increase-faq.383533/)
- Description of [Bitcode technology](https://developer.apple.com/library/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html)



This article applies to Unity versions 5.2.0p1 and higher, XCode 7 and higher, iOS 9.0 and higher

