**Symptoms**  
- The AssetBundle I built with the OSX Editor does not work in my Windows build (or vice-versa).
- The shader packed into the AssetBundle with the OSX Editor does not work in my Windows build and shows as pink.

**Cause**
- If you want to use a shader from an AssetBundle built from Mac to Windows.
- If you want to use a shader from an AssetBundle built from Windows to Mac.

**Resolution**
- Check if you have the "Mac Build Support" and "Windows Build Support" components installed.
- You have must add the DirectX and OpenGL graphics APIs in the Player Settings.
- Build your bundle for BuildTarget.StandaloneOSXUniversal or BuildTarget.StandaloneWindow depends on your case.

**More Information** This article applies to Unity versions 5.0+More information about installation and Components: [http://docs.unity3d.com/Manual/InstallingUnity.html](http://docs.unity3d.com/Manual/InstallingUnity.html)