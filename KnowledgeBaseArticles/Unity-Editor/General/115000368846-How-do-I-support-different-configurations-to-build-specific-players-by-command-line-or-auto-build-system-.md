
        

**Symptoms** 

*   I need to support different build settings for specific scenarios in my project (for example a build disabling the hardware statistics flag or removing custom analytics events), and call each of these configurations by command line or auto build system (for example Jenkins).
*   I need to support automated builds of my game for iOS, Android, iOSTest, AndroidTest, WebGL or others, and call all of them by command line to integrate them with my build system.

**Cause** 

Unity builds different players but uses some similar global settings for all of them. For example, if the project uses Custom Defines by using **PlayerSettings.SetScriptingDefineSymbolsForGroup** , you may want to disable this feature for a particular test build but enable it for the production build. Unity doesn’t support this feature by itself, so you must create different build scripts to support custom settings.

**Resolution** 

You can do this with Unity Cloud Build, which supports a lot of settings for getting multiple builds for different scenarios. For more information, see the [Unity Cloud Build documentation](https://docs.unity3d.com/Manual/UnityCloudBuild.html).

Alternatively, you can create a method to make build validations, change settings and build different players. These methods have to be inside a script file located in an Editor folder, for example **Assets/Editor/Builders/AndroidBuilder.cs** . The class also doesn’t need to extend any Unity class - the only requirement is that static functions are used.

For example, you want three different builders for Android, AndroidTest and iOS and use the command line (or auto build system) to create them automatically. As seen below, you can create two scripts: **AndoidBuilder.cs (Assets/Editor/Builders/AndroidBuilder.cs)** and **iOSBuilder.cs (Assets/Editor/Builders/iOSBuilder.cs)** :

**AndroidBuilder.cs:** 

using UnityEditor;
    
class AndroidBuilder
    {
        static void ProductionBuild()
        {
            // ... your code here, validations, flag changes, etc.
    
        // Build the player.\
            BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
            buildPlayerOptions.scenes = new[] { "Assets/Scene1.unity", "Assets/Scene2.unity" };
            buildPlayerOptions.locationPathName = "AndroidProdBuild";
            buildPlayerOptions.target = BuildTarget.Android;
            buildPlayerOptions.options = BuildOptions.None;
            BuildPipeline.BuildPlayer(buildPlayerOptions);
        }
    
    static void TestBuild ()
        {
            // ... your code here, validations, flag changes, etc.
    
        // Build the player.\
            BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
            buildPlayerOptions.scenes = new[] { "Assets/SceneTest1.unity", "Assets/SceneTest2.unity" };
            buildPlayerOptions.locationPathName = "AndroidTestBuild";
            buildPlayerOptions.target = BuildTarget.Android;
            buildPlayerOptions.options = BuildOptions.None;
            BuildPipeline.BuildPlayer(buildPlayerOptions);
        }
    }

**iOSBuilder.cs:** 

using UnityEditor;
    
class iOSBuilder
    {
    
    static void ProductionBuild()
        {
            // ... your code here, validations, flag changes, etc.
    
        // Build the player.\
            BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
            buildPlayerOptions.scenes = new[] { "Assets/Scene1.unity", "Assets/Scene2.unity" };
            buildPlayerOptions.locationPathName = "iOSProdBuild";
            buildPlayerOptions.target = BuildTarget.iOS;
            buildPlayerOptions.options = BuildOptions.None;
            BuildPipeline.BuildPlayer(buildPlayerOptions);
        }
    }

Then, you can call each builder function using these commands:

*   */Path/To/Unity -quit -batchmode -executeMethod AndroidBuilder.ProductionBuild* 
*   */Path/To/Unity -quit -batchmode -executeMethod AndroidBuilder.TestBuild* 
*   */Path/To/Unity -quit -batchmode -executeMethod iOSBuilder.ProductionBuild* 

Another approach is to have just one builder script and use arguments by command line to select which player should be built. You can find an example of what the script should look like below:

**Builder.cs:** 

using UnityEditor;
    using System;
    
class Builder
    {
        static void iOSProductionBuild()
        {
            // ... your code here, validations, flag changes, etc.
    
        // Build the player.\
            BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
            buildPlayerOptions.scenes = new[] { "Assets/Scene1.unity", "Assets/Scene2.unity" };
            buildPlayerOptions.locationPathName = "iOSProdBuild";
            buildPlayerOptions.target = BuildTarget.iOS;
            buildPlayerOptions.options = BuildOptions.None;
            BuildPipeline.BuildPlayer(buildPlayerOptions);
        }
    
    static void AndroidProductionBuild()
        {
            // ... your code here, validations, flag changes, etc.
    
        // Build the player.\
            BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
            buildPlayerOptions.scenes = new[] { "Assets/Scene1.unity", "Assets/Scene2.unity" };
            buildPlayerOptions.locationPathName = "AndroidProdBuild";
            buildPlayerOptions.target = BuildTarget.Android;
            buildPlayerOptions.options = BuildOptions.None;
            BuildPipeline.BuildPlayer(buildPlayerOptions);
        }
    
    static void AndroidTestBuild()
        {
            // ... your code here, validations, flag changes, etc.
    
        // Build the player.\
            BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions();
            buildPlayerOptions.scenes = new[] { "Assets/SceneTest1.unity", "Assets/SceneTest2.unity" };
            buildPlayerOptions.locationPathName = "AndroidTestBuild";
            buildPlayerOptions.target = BuildTarget.Android;
            buildPlayerOptions.options = BuildOptions.None;
            BuildPipeline.BuildPlayer(buildPlayerOptions);
        }

        static void Build ()
        {
            string[] arguments = Environment.GetCommandLineArgs();
            switch ( arguments[1] )
            {
                case "Android":
                    AndroidProductionBuild();
                    break;
                case "AndroidTest":
                    AndroidTestBuild();
                    break;
                case "iOS":
                    iOSProductionBuild();
                    break;
                default:
                    AndroidProductionBuild();
                    break;
            }
        }
    }

You can then call the builder function using these commands:

*   */Path/To/Unity -quit -batchmode -executeMethod Builder.Build Android* 
*   */Path/To/Unity -quit -batchmode -executeMethod Builder.Build AndroidTest* 
*   */Path/To/Unity -quit -batchmode -executeMethod Builder.Build iOS* 

You can extend this approach by using additional arguments (such as **-target=Android|iOS -env=prod|dev** ) and custom arguments if needed.

You can combine these ideas with your auto build system to automatically create different players for different requirements and avoid human error when building.

This is a short list of customizations you can get with this approach:

*   A development build for different scenarios.
*   Custom scripting #define directives by using PlayerSettings.SetScriptingDefineSymbolsForGroup.
*   Include/exclude plugins.
*   Include/exclude specific Scenes.
*   Edit any Asset file located in MyProject/ProjectSettings/*.asset (for example AudioManager.asset, GraphicsSettings.asset, and ProjectSettings.asset).
*   Update resources using C# scripts.
*   Turn your custom plugins on or off according to your project’s needs (for example by platform, by rendering API, or by any other particular feature).
*   Use any C# script if needed.

**More Information** 

For more information, consult the following documentation:

*   [Command line arguments documentation](https://docs.unity3d.com/Manual/CommandLineArguments.html) 
*   [BuildPipeline.BuildPlayer script reference documentation](https://docs.unity3d.com/ScriptReference/BuildPipeline.BuildPlayer.html)
*   [Microsoft Método Environment.GetCommandLineArgs () documentation](https://msdn.microsoft.com/es-es/library/system.environment.getcommandlineargs(v=vs.110).aspx)
*   [Custom scripting #define directives documentation](https://docs.unity3d.com/Manual/UnityCloudBuildCustomScriptingDefineDirectives.html)
      