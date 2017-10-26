
        

**Symptoms** 

*   I want to debug a game I am running on an Android device.

**Cause** 

You want to perform Android device debugging in either MonoDevelop or Visual Studio. This could be because of the following:

*   There are objects with script components on them that are missing their script reference. 
*   The game hits breakpoints when running in Unity.
*   Your game crashes and does not run on an Android device.

**Resolution** 

First, you will need to have your Android developer environment setup before you can test your Unity games on the device. This involves downloading and installing the Android SDK with the different Android platforms and adding your physical device to your system. See this [document](http://docs.unity3d.com/Manual/android-sdksetup.html) for steps on how to download and add the Android SDK path to Unity.

You can attach the MonoDevelop debugger to an Android device with ADB via TCP/IP. The process is described in our documentation [here](http://docs.unity3d.com/Manual/AttachingMonoDevelopDebuggerToAnAndroidDevice.html).

Debugging Unity scripts on an Android device also works through Visual Studio. The only difference will be choosing ***Attach Unity Debugger* ** in Visual Studio instead of ***Attach to process * ** in MonoDevelop.

**More Information** 

1.  https://docs.unity3d.com/Manual/android-sdksetup.html
2.  https://docs.unity3d.com/Manual/AttachingMonoDevelopDebuggerToAnAndroidDevice.html

      