**Symptoms**  
- I have some Scripts/Assets for demos and internal tools
- All those Scripts are included in my project when I build, even though my scenes do not reference them in my asset bundles.

**Cause** 
You want to create a demo, prototype or internal tools. After that, you want to work on your final project, and all those scripts are included in your project when built.  

**Resolution** 
Currently, there is not way to exclude directories from the build process, but there is a workaround:
- To exclude specific scripts, you can use the macro UNITY\_EDITOR at the start of your code and it will be excluded for builds.


```
#if (UNITY_EDITOR) 
... your class/code ...
#endif
```

- To exclude directories, you can use symlinks (symbolic links). Try putting the scripts you want to exclude in a folder outside the Assets folder and create a symlink into Resources that points to that folder, so when you want to exclude those assets, you just need to remove the symlink and then recreate it.


```
OTestCode/
MyProject/Assets/TestCode >> OTestCode 
```
**More Information** 
More information about Platform Dependent Compilation: [http://docs.unity3d.com/Manual/PlatformDependentCompilation.html](http://docs.unity3d.com/Manual/PlatformDependentCompilation.html)  More information about special folders, which can be used to exclude assets with special folder names:[http://docs.unity3d.com/Manual/SpecialFolders.html](http://docs.unity3d.com/Manual/SpecialFolders.html)

This article applies to Unity versions 5.0+

