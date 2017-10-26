
        

**Symptoms** 

*   You get an Android crash log from your users. 
*   You can’t understand the call stack as it only reports memory addresses.

**Cause** 

When you build in release mode, the symbols are not packed with the APK. If your app crashed, the call stack will only show the memory address.  

**Resolution** 

From Unity 5.3.5p2 and 5.4.0, the Android symbols are stored in your Unity installation folder.

You can find the Android symbols here:

*   For **MacOS:**  

*/Applications/Unity/PlaybackEngines/AndroidPlayer/Variations/mono/Release/Symbols* 

*   For **Windows:**  

*C:\Program Files\Unity\Editor\Data\PlaybackEngines\AndroidPlayer\Variations\mono\Release\Symbols\armeabi-v7a\libunity.sym.so* 

You can use addr2line tool and the symbols file to convert the memory addresses into function names and create a call stack.

For example, let's say you have the following crash log: 

05-26 18:06:51.311: A/libc(26986): Fatal signal 11 (SIGSEGV) at 0x000004e4 (code=1), thread 27024 (Worker Thread)
    05-26 18:06:51.411: I/DEBUG(242): *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
    05-26 18:06:51.411: I/DEBUG(242): Build fingerprint: 'Xiaomi/cancro_wc_lte/cancro:4.4.4/KTU84P/V6.7.1.0.KXDCNCH:user/release-keys'
    05-26 18:06:51.411: I/DEBUG(242): Revision: '0'
    05-26 18:06:51.411: I/DEBUG(242): pid: 26986, tid: 27024, name: Worker Thread  >>> com.u.demo <<<
    05-26 18:06:51.411: I/DEBUG(242): signal 11 (SIGSEGV), code 1 (SEGV_MAPERR), fault addr 000004e4
    
 I/DEBUG(242): backtrace:
     I/DEBUG(242):     #00  pc 006d4960  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #01  pc 006d4c0c  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #02  pc 006d4c0c  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #03  pc 006d4c0c  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #04  pc 006d4c0c  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #05  pc 001c5510  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #06  pc 001c595c  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #07  pc 001c4ec0  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #08  pc 0043a05c  /data/app-lib/com.u.demo-1/libunity.so
     I/DEBUG(242):     #09  pc 0000d248  /system/lib/libc.so (__thread_entry+72)
     I/DEBUG(242):     #10  pc 0000d3e0  /system/lib/libc.so (pthread_create+240)

In the above call stack, the bold numbers (such as **006d4960** ) are the memory addresses of the functions that were executing when the crash happened, and at the end of the line is the library used ( **libunity.so** in this instance).

You can get the symbol from each memory addresses by executing the addr2line tool on each memory address:

> ./arm-linux-androideabi-addr2line -f -C -e   /Applications/Unity.app/Content/PlaybackEngines/AndroidPlayer/Variations/mono/Release/Symbols/armeabi-v7a/libunity.sym.so 0043a05c

*   **-f**  - Show function names 
*   **-C**  - Demangle function names 
*   **-e**  - Set the input file name

After you execute the command with each memory address, you will get the proper call stack when the app crashed:

I/DEBUG(242): backtrace:
     I/DEBUG(242):  #00 AnimationPlayable::PrepareAnimationEvents(float, dynamic_array<AnimationClipEventInfo, 4u>&)
     I/DEBUG(242):  #01  AnimationPlayable::PrepareAnimationEvents(float, dynamic_array<AnimationClipEventInfo, 4u>&)
     I/DEBUG(242):  #02  AnimationPlayable::PrepareAnimationEvents(float, dynamic_array<AnimationClipEventInfo, 4u>&)
     I/DEBUG(242):  #03  AnimationPlayable::PrepareAnimationEvents(float, dynamic_array<AnimationClipEventInfo, 4u>&)
     I/DEBUG(242):  #04 AnimationPlayable::PrepareAnimationEvents(float, dynamic_array<AnimationClipEventInfo, 4u>&)
     I/DEBUG(242):  #05  JobQueue::ExecuteJobFunc(JobInfo*)
     I/DEBUG(242):  #06  JobQueue::ExecuteJobFromHighPriorityStack()
     I/DEBUG(242):  #07  JobQueue::WorkLoop(void*)
     I/DEBUG(242):  #08  Thread::RunThreadWrapper(void*)  18:06:51.501: I/DEBUG(242):     #09  pc 0000d248  /system/lib/libc.so (__thread_entry+72)
     I/DEBUG(242):     #10  pc 0000d3e0  /system/lib/libc.so (pthread_create+240)

In this case, we can read the call stack properly and detect that the crash happened due to animation events. This information is useful for a number of purposes, including:

*   Creating a bug report.
*   Reviewing patch releases for a possible fix.
*   Reviewing the code for a possible issue.

You can find the addr2line tool in your Android NDK at the following address:

*/android-ndk_auto-r10e/toolchains/arm-linux-androideabi-4.9/prebuilt/darwin-x86_64/bin/arm-linux-androideabi-addr2line* 

**Note:** Always use the symbols from the same version of the Editor from which you built the APK, otherwise you will get wrong values.

**More Information** 

For more information, consult the following documentation:

*   [How to use the symbolicate function](https://bitbucket.org/davehampson/symbolicate)
*   [Android NDK homepage ](https://developer.android.com/ndk/index.html)
*   [Unity Issue Tracker ](https://issuetracker.unity3d.com)
*   [Unity patch releases homepage ](https://unity3d.com/unity/qa/patch-releases)
*   [Troubleshooting Android documentation](https://docs.unity3d.com/Manual/TroubleShootingAndroid.html)
      