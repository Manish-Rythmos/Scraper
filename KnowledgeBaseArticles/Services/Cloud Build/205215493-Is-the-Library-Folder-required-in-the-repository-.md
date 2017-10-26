
        

**Symptoms** 

*   My build has failed.
*   When I build my project locally, it crashes and I get a  *"file not found"*  error.

**Cause** 

There are a couple of possibilities for what could be going wrong:

*   There are files conflicting with the checked in meta data library in the Library Folder.
*   There are missing library files for specific plugins such as .a or .dll which can create compiler errors.

**Resolution** 

The short answer is 'no', the Library Folder is not required in the repository.

You will not need to include your Library folder in the code repository, as Unity Cloud Build will generate the Library folder automatically when it processes your project for the first time. You can however, disable Library caching in the Unity Cloud Build options if it causes problems, as Library caching is activated by default to improve the build speed after the first checkout.

Sometimes it is necessary to perform a Clean Build, which can be done in the dropdown menu in the Unity Cloud Build dashboard. This will clear the Library cache and create a new one.  

Additionally, please make sure that you check in any Library files for specific plugins such as .a or .dll. When you create a build and these files are ignored by an ignore file of the SCM, it is likely to fail the build.

**More Information** 

For more information on steps to your build process then see this guide for Cloud Build Advanced Features [here](https://build.cloud.unity3d.com/support/guides/advancedfeatures)

For more information on publishing builds then see this document [here](http://docs.unity3d.com/Manual/PublishingBuilds.html)

For more information about Library caching please see this [thread](http://forum.unity3d.com/threads/library-cache-being-rebuilt-every-single-time.358168/). 

For more information about the Library folder please see this [thread](http://forum.unity3d.com/threads/should-we-include-the-following-files-in-the-ucb-targeted-repository.306955/). 

      