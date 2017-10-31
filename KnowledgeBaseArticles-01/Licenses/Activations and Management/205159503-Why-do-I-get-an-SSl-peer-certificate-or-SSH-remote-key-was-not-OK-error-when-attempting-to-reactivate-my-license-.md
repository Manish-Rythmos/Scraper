

**Symptoms**


- I want to reactivate my license.
- I am receiving this error: "SSl peer certificate or SSH remote key was not OK"



![](/hc/en-us/article_attachments/201518696/Screen_Shot_2015-10-01_at_10.06.35.png)



**Cause**



This is usually due to a connectivity issue between your machine and our license servers. It can be resolved either by adjusting some of your settings, or by performing a Manual Activation.



**Resolution**



The reason you are not getting the right SSL certificate or SSH remote key is due to one of the following issues:


- You have a firewall or proxy in place which is interrupting your connection to the license server. Please try allowing these ports in your settings: 80 and 443.
- You have an anti-viral software that is blocking the connection. Please try disabling this and seeing if the Editor will work.
- You have a weak or intermittent Internet connection - this is less likely than the points above.



**More Information**



If this does not solve the problem you may need to perform a Manual Activation.



To perform a Manual Activation:


- Temporarily switch off your Internet
- Run Unity and you will be prompted to initiate the Manual Activation process.
- Follow the steps shown in this [document](http://docs.unity3d.com/Manual/ManualActivationGuide.html).





