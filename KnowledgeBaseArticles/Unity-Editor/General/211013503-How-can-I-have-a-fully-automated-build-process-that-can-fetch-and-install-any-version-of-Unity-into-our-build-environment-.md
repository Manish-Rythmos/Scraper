**Symptoms**
- I need to be able to install Unity to a specific path on MacOSX and Windows. Also, I want to automate the installation by downloading separate components and installing myself.

**Cause**  You may not want to use the download assistant to install.  **Resolution**  If you want to automate the installation of Unity, you could use the the command line (or a script) without the Download Assistant.  ***On Windows:***

You can use on Windows this command to install Unity silently to a specific folder:


```
UnitySetup64.exe /S /D=C:\Your Directory\Unity

```


In this case, the command installs Unity silently to the folder  *C:\Your Directory\Unity* , which will be the root of the Unity installation. The Unity Editor executable will, in this case, be installed in  *C:\Your Directory\Unity\Editor\Unity.exe* . “/D” argument must be last and without quotes, even if the path contains spaces.



***On OSX:***


```
sudo installer [-dumplog] -package Unity.pkg -target /
```


*Separate Components:*



In addition, if you want to install the components separately, you can use the same commands with all the component installers. The urls for them are:

**For Windows:** http://download.unity3d.com/download\_unity/{Changeset}/Windows64EditorInstaller/UnitySetup64.exehttp://download.unity3d.com/download\_unity/{Changeset}/WindowsDocumentationInstaller/UnityDocumentationSetup.exe
http://download.unity3d.com/download\_unity/{Changeset}/WindowsDevelopmentWebPlayerInstaller/UnityWebPlayerDevelopment.exe
http://download.unity3d.com/download\_unity/{Changeset}/WindowsStandardAssetsInstaller/UnityStandardAssetsSetup.exe
http://download.unity3d.com/download\_unity/{Changeset}/WindowsExampleProjectInstaller/UnityExampleProjectSetup.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Windows-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Android-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-iOS-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-AppleTV-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Linux-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Mac-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Metro-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-UWP-IL2CPP-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Samsung-TV-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-Tizen-Support-for-Editor-{version}.exe
http://download.unity3d.com/download\_unity/{Changeset}/TargetSupportInstaller/UnitySetup-WebGL-Support-for-Editor-{version}.exe  **For OSX:** http://download.unity3d.com/download\_unity/{Changeset}/MacEditorInstaller/Unity.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacDocumentationInstaller/Documentation.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacWebPlayerInstaller/WebPlayer.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacStandardAssetsInstaller/StandardAssets.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacExampleProjectInstaller/Examples.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-Mac-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-Android-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-iOS-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-AppleTV-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-Linux-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-Samsung-TV-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-Tizen-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-{version}.pkg
http://download.unity3d.com/download\_unity/{Changeset}/MacEditorTargetInstaller/UnitySetup-Windows-Support-for-Editor-{version}.pkg It is important to note that the order is important (you should install the Editor first and then the components).  **More Information**[Installing Unity](http://docs.unity3d.com/Manual/InstallingUnity.html)        