
        

**Symptoms** 

*   I made a standalone player build but when trying to run it an error is thrown:

Error: could not preload global game manager #0

**Cause** 

Unity could not load the **globalgamemanagers.asset** file from the **YourGame_Data** folder because it is corrupted.

This can happen for multiple reasons:

*   If you are submitting the exported files to an FTP server, it’s important to know that sometimes FTP servers make changes to the files if you upload them as  **ASCII file transfer type** , which will transfer the files as regular text files.
*   You have a corrupted installation of Unity Editor and have created a build with it.
*   You are running out of disk space.

**Resolution** 

There are a number of possible solutions for this problem:

*   If you are downloading the files from an FTP server, make sure the binary files don’t get transferred as text files - force  **binary transfer type**  in your FTP transfer software when submitting a Unity exported build.
*   If the above doesn’t work, try reinstalling Unity and then exporting the application again.
*   Make sure you are not running out of disk space.

**More Information** 

See full documentation on [troubleshooting the Editor](https://docs.unity3d.com/Manual/TroubleShootingEditor.html) for more information.

      