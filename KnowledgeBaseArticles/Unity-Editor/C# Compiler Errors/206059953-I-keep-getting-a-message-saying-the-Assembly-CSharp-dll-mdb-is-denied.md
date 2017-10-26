
        

**Symptoms** 

*   I keep getting a compiler error whenever I use C# in my game.

**Cause** 

You are creating a game on a Windows machine and you a receiving the following internal compiler error when you try to compile your project:

*"Unhandled Exception: System.UnauthorizedAccessException: Access to the path "C:\...\Temp\Assembly-CSharp.dll.mdb" is denied."* 

**Resolution** 

This error is caused by one of the following:

*   You have an anti-virus software that is blocking the connection.
*   You need to have administrative privileges within your network to run the  *Assembly-CSharp.dll.mdb * file in your Temp folder.

To stop this error from appearing, you will need to ensure your connection is not being blocked by an anti-virus software:

*   Close the entire unity application
*   Disable any anti-virus that may be blocking your connection.
*   Locate the Temp Folder and delete it entirely

Then you will need to change the admin privileges for the file causing these issues. Go into the folder:

*C:\Users\Public\Documents\Unity Projects\New project\Temp\* 

*   When you locate the  *Assembly-CSharp-firstpass.dll*  file, right click  **Properties** .
*   Click on the  **Security**  tab and then click  **Edit** .
*   Select your required group or user names and check the  **Allow**  box for  **Full control** .
*   Click  **Apply** 

**More Information** 

If this resolution does not work for you, then you might be experiencing a bug.

For more information on how to submit a bug report then see this article [here](/hc/en-us/articles/206336985-How-do-I-submit-a-bug-report-)

When your bug is submitted, you will receive an automatic confirmation email containing your bug number. Once you get your bug number, you can send it to Support to make sure it gets assigned to the right team quickly.

You can contact Support [here](/hc/en-us/requests/new).

      