
        

**Symptoms** 

*   I am unable to see Shadows on my Android Device

**Cause** 

You are making a game in Unity which you want to deploy to an Android mobile platform.

You have made an environment for the scene which includes a directional light and shadows are visible in the editor. When you export your project as an .apk however, you find that the shadows have disappeared from view. This makes the scene appear flat and unrealistic:

![](/hc/en-us/article_attachments/201936366/2055-missing-shadows.jpg)

**Resolution** 

Shadows require hardware support, so the Android device must be capable of showing them. Device supports shadows if it has a ***"GL_OES_depth_texture"** * extension.

To determine whether your required device supports shadows:

*   Run the Unity application on the device.
*   During the application start up, Unity will print out all available extensions. All extensions' names start with  ***"GL_"** * .
*   If you can't see the  ***"GL_OES_depth_texture"* **  listed, then your device does not support shadows.

Unfortunately, there is no resolution if real shadows are not supported on your specific device. The solution for this is to wait for a new version to be released or roll back a patch release. 

*Please note that Android disabled shadows for Intel PowerVR devices to avoid graphics artifacts. Unfortunately this means there is no current solution for this at present.* 

**More Information** 

You can check the website for our latest patch releases [here](https://unity3d.com/unity/qa/patch-releases)

      