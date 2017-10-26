
        

**Symptoms** 

*   I am trying to integrate Unity Ads into my project.
*   I have enabled Unity Ads but I am still getting the error "'Advertisements' does not exist in the namespace 'UnityEngine'".

**Cause** 

You are building for a platform that is not supported by Unity Ads or you haven't enabled Ads for your project yet.

**Resolution** 

*   Ensure Ads is toggled  **ON**  in the Services window.
*   Unity Ads is only supported on iOS and Android, so you should select iOS or Android as a build target.
*   If your project is meant to be built for platforms other than iOS and Android, you could add a UNITY_ADS [conditional define](https://docs.unity3d.com/ScriptReference/Advertisements.Advertisement.Show.html). This means that building with Unity Ads will not affect other platforms.

**More Information** 

For more information, see documentation on [platform dependent compilation](https://docs.unity3d.com/Manual/PlatformDependentCompilation.html).

      