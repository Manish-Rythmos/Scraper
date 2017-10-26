
        

**Symptoms** 

I want to symbolicate a call stack from a crash that happened on my Android (IL2CPP) production build in libil2cpp.so, but I have been unable to find the symbols for that library.

**Cause** 

The symbols files are created for each build in the ProjectFolder/Temp/ directory and removed when the Editor application is exited, which is why you may not have seen them.  

**Resolution** 

You can get the symbols from the following locations after each build:

*   *ProjectFolder\Temp\StagingArea\libs\x86\libil2cpp.so.debug* 
*   *ProjectFolder\Temp\StagingArea\libs\armeabi-v7a\libil2cpp.so.debug* 

Make sure to not close the Unity Editor before copying the symbols files to a different folder.

You can also use a post-process build script like the one below:

using UnityEngine;
    using System.Collections;
    using UnityEditor.Callbacks;
    using UnityEditor;
    using System.IO;
    using System;
    
public class MyBuildPostprocessor    
{
            [PostProcessBuildAttribute()]
            public static void OnPostprocessBuild(BuildTarget target, string pathToBuiltProject)
            {
                    if (target == BuildTarget.Android)
                        PostProcessAndroidBuild(pathToBuiltProject);
            }
    
        public static void PostProcessAndroidBuild(string pathToBuiltProject)
            {
                    UnityEditor.ScriptingImplementation backend = UnityEditor.PlayerSettings.GetScriptingBackend(UnityEditor.BuildTargetGroup.Android) as UnityEditor.ScriptingImplementation;
    
                if (backend == UnityEditor.ScriptingImplementation.IL2CPP)
                    {
                            CopyAndroidIL2CPPSymbols(pathToBuiltProject, PlayerSettings.Android.targetDevice);
                    }
            }
    
        public static void CopyAndroidIL2CPPSymbols(string pathToBuiltProject, AndroidTargetDevice targetDevice)
            {
                    string buildName = Path.GetFileNameWithoutExtension(pathToBuiltProject);
                    FileInfo fileInfo = new FileInfo(pathToBuiltProject);
                    string symbolsDir = fileInfo.Directory.Name;
                    symbolsDir = symbolsDir + "/"+buildName+"_IL2CPPSymbols";
    
                CreateDir(symbolsDir);
    
                switch (PlayerSettings.Android.targetDevice)
                    {
                          case AndroidTargetDevice.FAT:
                            {
                                CopyARMSymbols(symbolsDir);
                                CopyX86Symbols(symbolsDir);
                                break;
                            }
                          case AndroidTargetDevice.ARMv7:
                            {
                                CopyARMSymbols(symbolsDir);
                                break;
                            }
                          case AndroidTargetDevice.x86:
                            {
                                CopyX86Symbols(symbolsDir);
                                break;
                            }
                          default:
                          break;
                    }
            }

            const string libpath = "/../Temp/StagingArea/libs/";
            Const string libFilename = "libil2cpp.so.debug";
            private static void CopyARMSymbols(string symbolsDir)
            {
                    string sourcefileARM = Application.dataPath + libpath + "armeabi-v7a/" + libFilename;
                    CreateDir(symbolsDir + "/armeabi-v7a/");
                    File.Copy(sourcefileARM, symbolsDir + "/armeabi-v7a/libil2cpp.so.debug");
            }
    
        private static void CopyX86Symbols(string symbolsDir)
            {
                    string sourcefileX86 = Application.dataPath + libpath + "x86/libil2cpp.so.debug";
                    File.Copy(sourcefileX86, symbolsDir + "/x86/libil2cpp.so.debug");
            }
    
        public static void CreateDir(string path)
            {
                    if (Directory.Exists(path))
                        return;
    
                Directory.CreateDirectory(path);
            }
    } 

**More Information** 

For more information, consult the following documentation:

*   [An introduction to IL2CPP internals ](https://blogs.unity3d.com/es/2015/05/06/an-introduction-to-ilcpp-internals/)
*   [How can I get symbols in Instruments during profiling?](https://support.unity3d.com/hc/en-us/articles/210141723-How-can-I-get-symbols-in-Instruments-during-profiling-)
*   [How can I symbolicate iOS crash logs from Projects generated with Cloud Build?](https://support.unity3d.com/hc/en-us/articles/208593736-How-can-I-symbolicate-iOS-crash-logs-from-projects-generated-with-Cloud-Build-)
*   [How to symbolicate iOS and tvOS crash logs](https://support.unity3d.com/hc/en-us/articles/208593516-How-to-symbolicate-iOS-tvOS-crashlogs)
*   [How do you debug on Android?](https://support.unity3d.com/hc/en-us/articles/205485376-How-do-you-debug-on-Android-)
*   [IL2CPP documentation](https://docs.unity3d.com/Manual/IL2CPP.html)
      