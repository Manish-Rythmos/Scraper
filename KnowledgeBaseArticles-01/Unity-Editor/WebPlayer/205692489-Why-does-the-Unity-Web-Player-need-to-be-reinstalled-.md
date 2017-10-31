

**Symptoms**


- I am trying to play a game using the Unity Web Player
- I am receiving an error that the Web Player needs to be reinstalled.



**Cause**



Sometimes a setting in the local network can block the connection to our servers. This means that the Web Player is unable to connect to us to download updates and behaves as though it needs to be reinstalled.



**Resolution**



If you have tried the troubleshooting [advice](http://docs.unity3d.com/Manual/TroubleShootingWebplayer.html) and had no luck, it may be a connectivity issue in your network:



1) You have a firewall or proxy in place. These can block the connection to our servers. Please try allowing these ports in your settings: 80 and 443.



2) You have an anti-virus software that is blocking the connection. Please try disabling this and seeing if the Web Player will work.



3) You are using Google Chrome. Chrome now blocks plug-ins by default. To get around this if you are using a version of Chrome before 45, you can type ‘About:Flags' into the URL space and then enable NPAPI. Alternatively, you could try the game in a different browser.



4) You have a weak or intermittent Internet connection - this is less likely than the points above.



Please try the suggestions in points 1-3. If these do not solve it, get in touch with us [here](/hc/en-us/requests/new).



**More Information** 

These problems are occurring more frequently as the NPAPI which the Web Player uses to run is being blocked by more browsers. We are encouraging our developers to move their games to WebGL as a result. Please see this blog post for more details: http://blogs.unity3d.com/2015/10/08/unity-web-player-roadmap/

