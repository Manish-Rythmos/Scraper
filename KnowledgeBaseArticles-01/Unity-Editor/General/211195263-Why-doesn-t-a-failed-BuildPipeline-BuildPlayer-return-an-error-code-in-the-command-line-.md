

**Symptoms**


- Using  **-executeMethod**  and  **BuildPipeline.BuildPlayer**  fails when running Unity from the command line, and the exit code 0 (successful) is received where fail is expected.

**Cause**

When a build fails when using BuildPipeline.BuildPlayer, Unity will continue working on the method after BuildPipeline.BuildPlayer has completed. Once the entire method is run, Unity will stop returning the successful error code.

If there are any exceptions or crashes when opening the project, an error code of failed will be returned.

**Resolution**



BuildPipeline.BuildPlayer returns a string - if this string is empty, the build was successful. The following code shows an example of reading the error and exiting Unity, sending the value 0 if the build was successful and 1 if it failed.


```
string error = BuildPipeline.BuildPlayer( levels, "iOS ", BuildTarget.iOS, BuildOptions.None );
if( string.IsNullOrEmpty( error ) )
    EditorApplication.Exit( 0 );
else
    EditorApplication.Exit( 1 );

```
Alternatively, if a specific exit code is required (not 1), then when an exception is thrown (for example  **throw new System.Exception( "error message" );** ), Unity Editor will exit with exit code 1.

Note that when calling  **EditorApplication.Exit**  from script, -quit is not necessary to automatically exit the Editor once it is completed as the method will already exit the Editor before the end. If an exception is thrown or other errors occur, however, the Editor will remain open if -quit is not used.

**More Information**

For more information, consult the following documentation:


- [Command line arguments](http://docs.unity3d.com/Manual/CommandLineArguments.html)
- [BuildPipeline.BuildPlayer](https://docs.unity3d.com/ScriptReference/BuildPipeline.BuildPlayer.html)
- [EditorApplication.Exit](http://docs.unity3d.com/ScriptReference/EditorApplication.Exit.html)

