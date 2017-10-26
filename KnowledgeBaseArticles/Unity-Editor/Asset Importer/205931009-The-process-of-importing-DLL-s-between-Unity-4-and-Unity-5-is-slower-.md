
        

**Symptoms** 

*   Importing a DLL in Unity 5 is in the order of 5-10 times slower than in Unity 4.

**Cause**   
The assemblies need to be updated by AssemblyUpdater. (With the introduction of Unity 5.0 the upgrade process is automated with AssemblyUpdater and ScriptUpdater).  

**Resolution**   
With Unity 5.x a new .Net attribute (UnityAPICompatibilityVersionAttribute) was introduced. This can be applied to assemblies to declare that they only use APIs that are compatible with a specific Unity version. When the assembly updating tool runs, it checks the assembly being processed for this attribute. It assumes the assembly does not need to be updated if the version in the attribute matches the current Unity version (Application.unityVersion).

With this change, a line like the following can be added:  
[assembly: UnityEngine.UnityAPICompatibilityVersion("1.2.3f1")] // in C# and Boo  
@assembly: UnityEngine.UnityAPICompatibilityVersion("1.2.3f1") // in UnityScript  

The updater will not bother to check the assembly containing this code when it gets imported into Unity (if Unity has the same version, i.e, 1.2.3f1).

**More Information**   
[http://blogs.unity3d.com/2015/01/06/assemby-updater-faster-api-usage-detection/](http://blogs.unity3d.com/2015/01/06/assemby-updater-faster-api-usage-detection/)  
[http://blogs.unity3d.com/2014/06/23/unity5-api-changes-automatic-script-updating/ ](http://blogs.unity3d.com/2014/06/23/unity5-api-changes-automatic-script-updating/%20)

This article applies to Unity versions 5.0+

      