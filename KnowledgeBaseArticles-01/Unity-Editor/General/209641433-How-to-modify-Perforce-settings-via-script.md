**Symptoms**

- [EditorPrefs](http://docs.unity3d.com/ScriptReference/EditorPrefs.html) class allows me to modify Perforce settings via script, but the keys are not published on Unity Docs.

**Cause**
[EditorPrefs](http://docs.unity3d.com/ScriptReference/EditorPrefs.html) class allows to modify Perforce settings via script to minimize user input. The keys are not published on Unity Docs, but are accessible on BitBucket. 

**Resolution**

The source of the built-in version control plugins that are shipped with Unity is open source on [Bitbucket](https://bitbucket.org/Unity-Technologies/versioncontrolplugins).



Perforce settings are visible here: [VersionControlPlugins/P4Plugin/Source/P4ConfigCommand.cpp](https://bitbucket.org/Unity-Technologies/versioncontrolplugins/src/dba3f95436497a5cc91c661772671e0e3f87e7e6/P4Plugin/Source/P4Command.cpp?at=master&amp;fileviewer=file-view-default) and all the commands are available.



The most important ones to note are:



*vcPerforceUsername -> string* 
*vcPerforcePassword -> string* 
*vcPerforceWorkspace -> string* 
*vcPerforceServer -> string* 
*vcPerforceHost -> string* 
*vcSharedLogLevel -> one of these strings: "notice", "fatal" or "info'*



The following script is executed when the Editor is launched and changes the Perforce settings:


```
using UnityEngine;
using UnityEditor;

[InitializeOnLoad]
public class PerforceSettings {
    static PerforceSettings () {
        EditorUserSettings.SetConfigValue ("vcPerforceUsername",  "myUserName");
        EditorUserSettings.SetConfigValue ("vcPerforcePassword",  "myPassword");
        EditorUserSettings.SetConfigValue ("vcPerforceWorkspace", "myWorkspace");
        EditorUserSettings.SetConfigValue ("vcPerforceServer",    "10.11.12.13:1234");
        EditorUserSettings.SetConfigValue ("vcPerforceHost",      "Hostname");
        EditorUserSettings.SetConfigValue ("vcSharedLogLevel",    "info");  //"notice", "fatal" or "info";
    }
}

```
  **More Information**
  [P4ConfigCommand.cpp](https://bitbucket.org/Unity-Technologies/versioncontrolplugins/src/dba3f95436497a5cc91c661772671e0e3f87e7e6/P4Plugin/Source/P4Command.cpp?at=master&amp;fileviewer=file-view-default)[http://docs.unity3d.com/ScriptReference/EditorPrefs.html](http://docs.unity3d.com/ScriptReference/EditorPrefs.html)       