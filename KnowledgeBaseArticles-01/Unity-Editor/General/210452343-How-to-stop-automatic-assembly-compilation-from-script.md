

**Symptoms**


- I do not always want Unity to reload my script assemblies.
- Recompiling script files during play mode is causing problems.



**Cause**



Unity will recompile any changes to script files as soon as the changes are imported.



**Resolution**



Unity provides a method for preventing the script assemblies from being loaded.



Firstly, create an Editor Script that will be loaded at while the project is open with [[InitializeOnLoad]](http://docs.unity3d.com/ScriptReference/InitializeOnLoadAttribute.html), and receive update events from the Editor with the [EditorApplication.update](http://docs.unity3d.com/ScriptReference/EditorApplication-update.html) delegate.


```
using UnityEditor;using UnityEngine;[InitializeOnLoad]public class CompilerOptionsEditorScript{     static CompilerOptionsEditorScript()     {         EditorApplication.update += OnEditorUpdate;     }      static void OnEditorUpdate()     {         if( EditorApplication.isCompiling )             Debug.Log( "Scripts are compiling" );     }}
```


When [EditorApplication.isCompiling](http://docs.unity3d.com/ScriptReference/EditorApplication-isCompiling.html) is detected, use [EditorApplication.LockReloadAssemblies()](http://docs.unity3d.com/ScriptReference/EditorApplication.LockReloadAssemblies.html) where needed to prevent Unity from compiling the scripts until [EditorApplication.UnlockReloadAssemblies()](http://docs.unity3d.com/ScriptReference/EditorApplication.UnlockReloadAssemblies.html) is called.



To prevent scripts recompiling during PlayMode, [EditorApplication.isPlaying](http://docs.unity3d.com/ScriptReference/EditorApplication-isPlaying.html) can be used to detect if the Editor is in PlayMode; and the [EditorApplication.playmodeStateChange](http://docs.unity3d.com/ScriptReference/EditorApplication-playmodeStateChanged.html) event for changes to the state.


```
using UnityEditor;using UnityEngine;[InitializeOnLoad]public class CompilerOptionsEditorScript{    static bool waitingForStop = false;     static CompilerOptionsEditorScript()    {        EditorApplication.update += OnEditorUpdate;    }    static void OnEditorUpdate()    {        if( ! waitingForStop             && EditorApplication.isCompiling             && EditorApplication.isPlaying )        {             EditorApplication.LockReloadAssemblies();             EditorApplication.playmodeStateChanged                  += PlaymodeChanged;             waitingForStop = true;        }    }    static void PlaymodeChanged()    {        if( EditorApplication.isPlaying )             return;                EditorApplication.UnlockReloadAssemblies();        EditorApplication.playmodeStateChanged             -= PlaymodeChanged;        waitingForStop = false;    }}
```


**More Information**



[http://docs.unity3d.com/Manual/RunningEditorCodeOnLaunch.html](http://docs.unity3d.com/Manual/RunningEditorCodeOnLaunch.html)
[http://docs.unity3d.com/ScriptReference/EditorApplication.html](http://docs.unity3d.com/ScriptReference/EditorApplication.html)

