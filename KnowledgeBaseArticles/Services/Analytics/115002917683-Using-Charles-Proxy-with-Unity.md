
        

**Symptoms** 

*   I don't see the event data that I would expect to see on my Analytics Dashboard. I want to confirm that my device is sending Analytics events from my Unity game.

**Cause** 

You might see delays in data (or no data at all) appearing on your Unity Analytics Dashboard, and want to confirm that your mobile application is indeed sending events. You also might want to confirm that expected events are firing at the correct location within your game.

**Resolution** 

Charles Proxy is a great utility that allows you to monitor network activity on your mobile device from your PC. When configured correctly, you are able to see individual network requests and responses as they are generated on your mobile device. This can be handy to confirm that your game is sending events over the network to the Unity data center. This article will explain the steps to get Charles Proxy installed and operating successfully and will give you the ability to watch individual network calls from your mobile device as they are being made during your game execution.

The general steps are as follows, details below under More Information.

*   Install and configure Charles Proxy on your PC or Mac
*   Configure your Android or iOS mobile device to use your PC as a network proxy
*   Launch your game and monitor the network activity in Charles 

**More Information** 

Here are the detailed steps to install and configure Charles Proxy

1. Install Charles Proxy on your PC or Mac. You can install it from [here](https://www.charlesproxy.com/download/latest-release/) . The 30 day free trial is fully functional, but will only run for 30 minutes at a time.

2. Upon launching, you should see a screen like this. Note the two toolbar buttons, Clear events and Start/Pause recording. Note that the Structure tab is selected which groups the events by URL. The Sequence tab shows all events in chronological order.

![Charles1.png](/hc/article_attachments/115009779466/Charles1.png)

3. If you don't see the Request and Response tabs on the right pane, go to Preferences/Viewers and uncheck the two Combine checkboxes as shown here:

![Charles2.png](/hc/article_attachments/115009917183/Charles2.png)

4. To avoid seeing local traffic on the PC/Mac, from the Proxy menu, uncheck Windows Proxy/macOS Proxy.

5. Enable SSL proxying by navigating to the Proxy menu and choosing SSL Proxying Settings. On the next dialog box, check Enable SSL Proxying, and Add *.* as in the following image:

![Charles3.png](/hc/article_attachments/115009780406/Charles3.png)

6. We will now configure your mobile device to use your PC as the network proxy. 

**For Android:** 

*   Two-finger swipe from the top of the device (if using the default UI)
*   Choose the gear icon from the top of the screen (to go to Settings)
*   Select Wi-Fi
*   Select the same Wifi network that you are using on your PC using a long press which will provide the additional option to Modify Network
*   Check Show Advanced Options which will allow you to set a Manual Proxy
*   For Proxy hostname, use the IP address of your PC. You can easily obtain this value from within Charles by selecting Local IP Address from the Help menu
*   For Proxy port, use the Charles default of 8888
*   Select Save
*   Stop and Restart Wi-Fi on the device by selecting the On/Off slider (or restart the device)
*   You will likely receive a pop up in Charles asking to to Allow or Deny the device requests
*   On the device, browse to chls.pro/ssl to download and install the Charles certificate. Name the certificate to your choosing.
*   On the PC/Mac, ensure that Recording is enabled.
*   On the device, launch your game.
*   You should now start to see the events being recorded (see note on Android Nougat below). You should see requests being sent to one or more of the following URLs. Expand them to see the actual events.

https://config.uca.cloud.unity3d.com

https://api.uca.cloud.unity3d.com (generally the one you want to monitor)

https://cdp.cloud.unity3d.com

If you are running Android Nougat 7, you will need to perform the additional steps:

*   In your Unity project, add the following to the `application` element in your android manifest:

`android:networkSecurityConfig="@xml/network_security_config"`

*   Create a `network_security_config.xml` file in the following folder:

`Assets/Plugins/Android/res/xml`

*   Contents of network_security_config.xml:

        <network-security-config>
            <base-config>
                <trust-anchors>
                    <certificates src="user" />
                    <certificates src="system" />
                </trust-anchors>
            </base-config>
        </network-security-config>

*   Build and deploy the app using Android Studio

**For IOS:** 

The steps are similar as above.

*   Go to Settings/Wi-Fi
*   Next to the Wifi network name, click the "i" (information) icon
*   Scroll down to the HTTP PROXY section
*   Set the Server and Port as above (do not check Authentication)
*   Stop and then start Wifi
*   Download and install the Charles certificate as above by browsing to chls.pro/ssl on the device
*   Trust the certificate by going to Settings/General/About/Certificate Trust Settings, and select Enable Full Trust for Root Certificates for the Charles Proxy certificate.
*   Launch your Analytics-enabled Unity application. You should begin to see the events listed in Charles.

  **For PC - Windows 10:** 

*   In Charles, from the SSL Proxying menu, choose Install Charles Root Certificate
*   In the subsequent dialog, choose Install Certificate. Choose Current User, and choose Automatically select the certificate store, then Finish.
*   We will now run the Windows Certificate Manager from the Windows Start Menu, All Apps, Windows System, and Run. In the Run dialog, enter certmgr.msc and click OK.
*   By clicking and dragging, move the Charles Proxy CA certificate from the Personal/Certificates store to the Trusted Root Certification Authorities/Certificates store as shown below. Charles should now capture and display network traffic on your PC

![Charles4.png](/hc/article_attachments/115010267643/Charles4.png)

 ``

      