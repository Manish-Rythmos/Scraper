
        

**Symptoms** 

*   My game builds fine locally, but it fails in Unity Cloud Build.

**Cause** 

There are a number of reasons why this could happen, but the most common cause is not adding all your files to your source control.

**Resolution** 

Sometimes your source control won't have all the files that your local machine has. First, you should check if it builds locally from a fresh checkout by doing the following:

1.  Clone/checkout your Project into a new directory from source control.
2.  Open the Unity Project in the same version of the Editor that you are trying to build with in Cloud Build.
3.  Build a version of your Project for the same platform you are targeting in Cloud Build.
4.  Verify that the errors received in your Cloud Build log are not apparent during this local build.

If it still looks fine locally, try doing a clean build from the dashboard (see below).

![](/hc/en-us/article_attachments/115000835286/CleanBuild.png)

**More Information** 

Be sure to keep an eye on [our forums](https://forum.unity3d.com/forums/unity-cloud-build.61/), where we post about current issues that could be affecting your builds.

      