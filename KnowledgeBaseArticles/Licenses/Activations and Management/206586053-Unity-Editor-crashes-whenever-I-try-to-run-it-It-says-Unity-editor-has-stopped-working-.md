
        

**Symptoms** 

*   I want to run Unity on Windows, but it crashes on startup
*   I have upgraded to Windows 10. I am using the latest version of the Unity Editor, but I receive an error stating "Unity Editor has stopped working"

**Cause** 

You have upgraded your machine to Windows 10 and you have finished installing the latest version of Unity on your machine. Your Editor crashes on startup with a popup window from Windows showing the following error message:

![](/hc/en-us/article_attachments/202079533/0243.unity-error-message.PNG)

If you are using the Unity 5.2 64-bit installation, third party proxy integration can crash Unity at the Project Browser.

**Resolution** 

Firstly, please check if you have any of the following third party software installed on your machine:

*   Lavasoft Ad-Aware Web Companion
*   OpenCandy (Windows computers can come with these pre-installed)
*   Qustodio
*   Nahimic drivers
*   Astrill VPN or similar

You will need to make sure these software programs are disabled. Then to fix this error:

1.  Downloaded the latest version of Unity [here](https://unity3d.com/get-unity/download/archive) and select to install just the editor in the drop down menu.
2.  Opening Unity from the command line as described [here](http://docs.unity3d.com/Manual/CommandLineArguments.html).

If the information above does not solve your issues, please create a crash dump file and send in a bug report.

To create a crash dump file:

When Unity crashes and you get "Unity Editor has stopped working" dialog, **do not ** press "Close program", instead:

*   

Open **Task Manager** 

*   

Go to **Details** 

*   

Find ***Unity.exe** *  and right click on this file

*   

Click  ***Create dump file** * .

This will create a dump file. You can then open the Bug Reporter and attach the dump file to the report.

Please note that creating a dump file might take several seconds, depending on your hard drive speed.

**More Information** 

For more information on submitting a bug report then see this article [here](/hc/en-us/articles/206336985-How-do-I-submit-a-bug-report-)

      