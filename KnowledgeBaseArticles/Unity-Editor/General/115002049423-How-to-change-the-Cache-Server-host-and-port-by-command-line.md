
        

**Symptoms** 

*   I would like to change the  **“server:port”**  info in my project to connect to another Cache Server without loading the Editor UI because of my automation system. 
*   I would like to connect to different Cache Servers depending on my particular build needs from the command line.

**Cause** 

Unity uses the settings introduced by the Editor (UI) following this path: **“Preferences > Cache Server > IP Address.”**  So what happens if you use an automation build system, and the system needs to connect to different Cache Servers according to some conditions?

For example, the iOS-Debug version uses the Cache Server 1 <127.0.0.1:3030>, and the iOS-Production version uses the Cache Server 2 <127.0.0.1:3031>.

We cannot change this info in the Editor (UI) because our automation system does not load the Editor (UI). Instead, it runs Unity from the command line.

**Resolution** 

This setting is an EditorPrefs, so we can change its value by using the EditorPrefs class (check the documentation link below).  We have to use an Editor Script and call a function (static function) by command line, which changes the Cache Server info and then runs the build.

An option for the command should support the IP and the PORT as arguments, having something like:

***OSX Terminal:* ** 

/Applications/Unity/Unity.app/Contents/MacOS/Unity -batchmode -executeMethod Builder.iOSDebug -ip=<IP> -port=<PORT> -logFile

***Windows CMD:* ** 

Path/To/Unity.exe -batchmode -executeMethod Builder.iOSDebug -ip=<IP> -port=<PORT> -logFile

Something important here is the missing “-quit” argument. On OSX this argument will break the functionality of EditorPrefs, because of this, we have to use EditorApplication.Exit(0) in our script, as a workaround.

Now, we can follow these steps to solve this issue:

*   Create a new script called “Builder.cs” inside of a folder called Editor (might be Assets/Editor/Builder.cs, but this location is not mandatory).
*   In our Builder.cs script we will add a function to read the command and its arguments.
*   If the argument list includes an option like “-ip=” and “-post=”, the script will get their values and will change the Cache Server settings.
*   Finally, the script will dispatch our build process (You could also use this step to run other processes, for example updating your server cache, reimporting assets, etc).

Builder.cs:

using UnityEngine;  
using UnityEditor;  
using System;  

class Builder  
{     
    // This method will get any param from the arguments and its value.  
    static string GetParam ( string[] args, string param, string defaultValue )  
    {  
        string tmpValue = defaultValue;  
        for (int i = 0; i < args.Length; i++)   
        {  
            if (args [i].IndexOf (param) != -1)   
            {  
                tmpValue = args [i].Split ('=') [1].Trim ();  
            }  
        }  

        return String.IsNullOrEmpty ( tmpValue ) ? defaultValue : tmpValue;  
    }  

    static void iOSDebug ()  
    {  
        // Get the IP from the command line argument list, if it doesn't have any IP argument, uses localhost by default.  
        string tmpIP = GetParam (Environment.GetCommandLineArgs (), "ip=", "127.0.0.1" );  

        // Get the PORT from the command line argument list, if it doesn't have any PORT argument, uses 0 by default.  
        string tmpPort = GetParam (Environment.GetCommandLineArgs (), "port=", "0" );   
        // Show the Cache Server current settings.  
        Debug.Log ("Show the Cache Server current settings ...");  
        Debug.Log (EditorPrefs.GetBool ("CacheServerEnabled"));  
        Debug.Log (EditorPrefs.GetString ("CacheServerIPAddress", "Unknown"));  

        // Set the new settings.  
        Debug.Log ("Changing the Cache Server settings ...");  
        EditorPrefs.SetBool ("CacheServerEnabled", true);  
        EditorPrefs.SetString ("CacheServerIPAddress", tmpIP + ":" + tmpPort );  

        // Show the new values.  
        Debug.Log ("Done: ");  
        Debug.Log (EditorPrefs.GetBool ("CacheServerEnabled"));  
        Debug.Log (EditorPrefs.GetString ("CacheServerIPAddress", "Unknown"));  

        // To use this method from command line use

       // \$ /Applications/Unity/Unity.app/Contents/MacOS/Unity -batchmode -executeMethod Builder.iOSDebug -logFile  
        // \$ /Applications/Unity/Unity.app/Contents/MacOS/Unity -batchmode -executeMethod Builder.iOSDebug -ip=<IP> -port=<PORT> -logFile  

        // As you can see, the command doesn't have the argument "-quit", that is because this parameter will fail the EditorPrefs functionality on OSX.   
        // To workaround that issue we need to skip it and use EditorApplication.Exit(0) instead.  
        // It will work with "-quit" option on Windows anyway.  
        EditorApplication.Exit(0);  
    }  
}

**More Information** 

*   [https://docs.unity3d.com/ScriptReference/EditorPrefs.html](https://docs.unity3d.com/ScriptReference/EditorPrefs.html)
*   [https://docs.unity3d.com/ScriptReference/EditorApplication.Exit.html](https://docs.unity3d.com/ScriptReference/EditorApplication.Exit.html)
*   [https://docs.unity3d.com/Manual/CommandLineArguments.html](https://docs.unity3d.com/Manual/CommandLineArguments.html)
*   [https://docs.unity3d.com/Manual/CacheServer.html](https://docs.unity3d.com/Manual/CacheServer.html)
*   [https://support.unity3d.com/hc/en-us/articles/115000368846-How-do-I-support-different-configurations-to-build-specific-players-by-command-line-or-auto-build-system-](https://support.unity3d.com/hc/en-us/articles/115000368846-How-do-I-support-different-configurations-to-build-specific-players-by-command-line-or-auto-build-system-)
      