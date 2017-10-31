

**Symptoms**


- The iOS build download says  *No Install - Your device is not provisioned for this build.*
- When I try to download the build it shows  *Unable to Download App*  as iOS dialog popup
- When I try to download the build it shows  *Unable to Download Application - AppName could not be installed at this time.*  dialog popup after successful download.



**Cause**



There are several possible causes:


- Device storage is full
- Problems with the current session
- The device  *UDID*  is not registered in the mobile provisioning profile
- The device  *UDID*  is a fake  *UDID*
- The ad hoc distribution provisioning profile is corrupted
- The device was restored from a backup and is causing a conflict for over-the-air distribution
- The certificate used for the provisioning profile is  *revoked*  or has  *expired*
- There was a network timeout
- Architecture settings of the build and the device are incompatible (can sometimes happen when "Build Active Architecture Only" is on when building)
- Not using Mobile Safari
- Mobile Safari is used in  *private*  mode



There might be different issues which are not known yet. As there are different versions of iOS those issues and their resolution might not have an effect on all versions.



**Resolution**



To ascertain the correct cause of your problem, you need to connect the test device with a development Mac, open the XCode organizer and choose your connected devices from the sidebar in the devices window. Select the console and install the app again. It will show the exact cause of the problem in the console.



The iOS build download says  ***No Install - Your device is not provisioned for this build** .*  A very likely cause for the message  *No Install - Your device is not provisioned for this build* is that your UDID is not registered in the development or distribution mobile provisioning profile. You can visit [https://build.cloud.unity3d.com/login/me](https://build.cloud.unity3d.com/login/me) on the device and send your build manager the details directly via the  *Email this Info*  option. The project needs to be rebuild after adding the UDID and uploading the new provisioning profile so update the build. Read more about the build process [here](https://build.cloud.unity3d.com/support/guides/ios).



*NOTE* : There are 3rd party apps which provide you with your UDID which might report fake UDIDs (possibly starting with fffff). You should always use the UDID reported by iTunes.



In rare occasions, the current session of the device is broken. This may occur, for example, when you apply a backup of your phone, or the session cookies get corrupted. In such a case, please reset the device by visiting device reset page [https://build.cloud.unity3d.com/device/reset](https://build.cloud.unity3d.com/device/reset) which will redirect you to the Unity Cloud Build page after resetting the device session info. If not, please visit it [manually](https://build.cloud.unity3d.com/) and log out and log in again to finish the reset process correctly.



Additionally, ensure you are using Safari not in private mode. Unity Cloud Build is not guaranteed to work in other browsers on iOS. Furthermore you can clear the Cache and Cookies of Safari in the Settings menu under 'Safari'.



"When I try to download the build it shows  ***Unable to Download App***  as iOS dialog popup." If you are having this error appear, your connection might not be stable enough to download the build. Please ensure with your ISP that the connection is stable. If you are in doubt, test a different connection such as over 3G or wired connection. Please also ensure that you have enough free space on your device.



Additionally, it might be possible that the certificate used for the provisioning profile was revoked or deleted. In this case you need to update the certificate and regenerate the provisioning profile. After updating the files via the Unity Cloud Build dashboard, please make sure to rebuild the app, otherwise the change will not have the desired affect. For more information about this topic please read [here](http://stackoverflow.com/questions/25733299/ios-8-cant-install-enterprise-app).



When I try to download the build it shows  **Unable to Download Application - AppName could not be installed at this time**  as iOS dialog popup after successful download: Please check all above mentioned resolutions as well. Additionally, make sure the device that you want to install the build supports the architecture of the build. Read more about the error message [here](http://stackoverflow.com/questions/14375387/iphone-app-could-not-be-installed-at-this-time%20).



**More Information**



For more information about the iOS build process, please read [here](https://build.cloud.unity3d.com/support/guides/ios). 
Discuss the issue in the Forums [here](http://forum.unity3d.com/threads/unable-to-download-app.367586/).



For more information about the  *Unable to Download App*  message read [here](http://stackoverflow.com/questions/25733299/ios-8-cant-install-enterprise-app) and for more information about the Unable to  *Download Application - AppName could not be installed at this time.*  message please read [here](http://stackoverflow.com/questions/14375387/iphone-app-could-not-be-installed-at-this-time%20). If you need more information about distribution profiles read [here](https://developer.apple.com/library/ios/qa/qa1878/_index.html).





