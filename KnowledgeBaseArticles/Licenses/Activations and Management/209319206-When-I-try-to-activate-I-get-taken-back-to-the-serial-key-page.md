
        

**Symptoms** 

*   When I activate, I get taken back to the serial number page
*   I received a pop-up to say that my activation was successful. After clicking 'OK', the serial number page reopens and I cannot proceed

**Cause** 

This error, involving an infinite loop of returns to the serial number page, is caused by a change to the time zone of the machine. Unity writes the last activation time/date, without recording the current time zone, in the settings (registry / plist). If the time zone is altered, Unity cannot activate successfully.

**Resolution** 

Our License Team are working on a fix for this at the moment. For now, the workaround is to delete the LSValue registry on windows or plist entry on mac. These are found in the locations listed below.

***Macintosh 4.x users:** * 

~/Library/Preferences/com.unity3d.UnityEditor4.x.plist -> LSValue

***Windows 4.x users:** * 

HKEY_CURRENT_USER\Software\Unity Technologies\Unity Editor 4.x\LSValue_h916498513

1.  Close the Unity Editor.
2.  Open  *"Command Prompt"*  as administartor
3.  Type "regedit" (without quote marks) inside command prompt then press Enter. The registry Editor will then appear
4.  Navigate to HKEY_CURRENT_USER > Software > Unity Technologies > Unity Editor 4.x
5.  Delete the file LSValue_h916498513
6.  Open Unity Editor.

***Macintosh 5.x users:** * 

~/Library/Preferences/com.unity3d.UnityEditor5.x.plist -> LSValue

***Windows 5.x users:** * 

1.  Close the Unity Editor.
2.  Open  *"Command Prompt"*  as administartor
3.  Type "regedit" (without quote marks) inside command prompt then press Enter. The registry Editor will then appear
4.  Navigate to HKEY_CURRENT_USER > Software > Unity Technologies > Unity Editor 5.x
5.  Delete the file LSValue_h9164985
6.  Open Unity Editor.

**More Information** 

      