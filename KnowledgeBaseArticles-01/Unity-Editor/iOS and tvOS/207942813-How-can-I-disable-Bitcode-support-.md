

**Symptoms**


- I am developing a game for iOS platform
- I want to set ENABLE\_BITCODE=NO in the Xcode project as the default setting for a Xcode project exported by Unity.
- I have several third party libraries which still do not support Bitcode on iOS.



**Cause**



In version 5.3.1p1 Bitcode support was enabled by default.



**Resolution**



An easy way to disable Bitcode support is by using UnityEditor.iOS.Xcode.PBXProject helper class.



The documentation is available here:


- [http://docs.unity3d.com/ScriptReference/iOS.Xcode.PBXProject.html](http://docs.unity3d.com/ScriptReference/iOS.Xcode.PBXProject.html)



And the source code is available here :


- [https://bitbucket.org/Unity-Technologies/xcodeapi](https://bitbucket.org/Unity-Technologies/xcodeapi)



The following is an example of how you can change the ENABLE\_BITCODE property:


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;

public static class MyBuildPostprocess
{
    [PostProcessBuild(999)]
    public static void OnPostProcessBuild( BuildTarget buildTarget, string path)
    {
        if(buildTarget == BuildTarget.iOS)
        {
            string projectPath = path + "/Unity-iPhone.xcodeproj/project.pbxproj";

            PBXProject pbxProject = new PBXProject();
            pbxProject.ReadFromFile(projectPath);

            string target = pbxProject.TargetGuidByName("Unity-iPhone");            
            pbxProject.SetBuildProperty(target, "ENABLE_BITCODE", "NO");

            pbxProject.WriteToFile (projectPath);
        }
    }
}
```


**More Information**



It is not recommend to disable Bitcode, but there are cases were it is inevitable. Read more about what benefits you gain by letting Bitcode enabled [here](/hc/en-us/articles/209933103).



This article applies to Unity versions 5.3.1p1 and higher

