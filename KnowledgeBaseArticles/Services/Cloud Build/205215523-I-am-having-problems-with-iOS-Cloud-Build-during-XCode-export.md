
        

**Symptoms** 

*   I am getting build errors when building my iOS project in Unity Cloud Build appearing in the Xcode project.

**Cause** 

You are building a iOS project on Unity Cloud Build and the project uses a 3rd Party Plugin.

**Resolution** 

Build errors can occur if the post process is not finding the Xcode project and cannot add the appropriate libraries. That path should be passed to OnPostProcessBuild, but your plugin probably does not use this path in their post build process. You need to do this manually with the XCode API.

Some 3rd party plugins, or your own code, require a way to modify the XCode project to add libraries or files, which can be done using [post process attributes](http://docs.unity3d.com/ScriptReference/Callbacks.PostProcessBuildAttribute.html) and the [XCode manipulation API](https://bitbucket.org/Unity-Technologies/xcodeapi/downloads).

You can read more about the XCode manipulation API [here](https://bitbucket.org/Unity-Technologies/xcodeapi/downloads). You can also see how to add frameworks there.

There are several Forum posts available, which can help to solve different issues related to iOS projects.

*   Add [frameworks via post process scripts](http://forum.unity3d.com/threads/unity-xcode-api.281305/#post-2204369) to the XCode project.
*   Add items to [info.plist via post process scripts](http://forum.unity3d.com/threads/ho...targets-info-plist-using-the-xcodeapi.330574/) to the XCode project.
*   Add [other linker flags for missing libraries](http://forum.unity3d.com/threads/ios-build-errors-from-missing-libraries.318494/#post-2066679) in 3rd party tools
*   Activate [iCloud settings](http://forum.unity3d.com/threads/icloud-with-cloud-build.303844/#post-2030466)
*   Add [security Frameworks](http://forum.unity3d.com/threads/solved-ios-build-failed-pushwoosh-dependency.293192/)
*   XCode [Frameworks](http://forum.unity3d.com/threads/xcode-frameworks.284621/)

      