
        

**Symptoms** 

When trying to enter play mode, I am receiving the error below:

All compiler errors have to be fixed before entering playmode

**Cause** 

If any of the scripts in your Unity project have errors that do not allow Unity to compile the scripts, then this error will be displayed. You will not be able to enter play mode if this error is present.

**Resolution** 

You will need to look at all errors that are being flagged in the console and fix them. 

Note: If you cannot see any errors in the console but the message still appears it may be an issue with a script using the namespace UnityEngine.Networking;

If the script is not being used then comment out the sections where the errors appear. 

Once all scripts are free of errors, Unity can compile the scripts and you can enter play mode.

**More Information** 

      