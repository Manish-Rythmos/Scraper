
        

**Symptoms** 

*   When I open Unity 5.x on my Windows machine I receive this error:

![](/hc/en-us/article_attachments/201757883/unity_error.jpg)

**Cause** 

You have downloaded Unity 5.x on a Windows machine and are unable to launch the Editor. This happens because you need to have administrative privileges within your network to install and run Unity 5.x. Unity is not allowed to write your license file in this directory without admin privileges.

**Resolution** 

You will need to change the administrative permissions for the users on your machine. To do this:

*   Locate the the folder  *"C:/ProgramData/Unity"*  (this may be a hidden folder, if you cannot find it, you can change the explorer settings to make hidden folders visible.)
*   When you locate the  *"Unity_v5.x.ulf"*  file, right click  **Properties.** 
*   Click on the  **Security**  tab and then click  **Edit.** 
*   Select your required group or user names and check the  **Allow**  box for  **Full control** .
*   Click  **Apply.** 

**More Information** 

If you are still unable to launch the Editor, this may be caused by a bug. To submit a Bug Report, please see this article [here](/hc/en-us/articles/206336985-How-do-I-submit-a-bug-report-).

      