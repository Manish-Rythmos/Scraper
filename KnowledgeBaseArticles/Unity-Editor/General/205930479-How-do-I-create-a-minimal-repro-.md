
        

**Symptoms** 

*   My project is too large to submit via the Bug Reporter. I want to find out if there a way I can simplify the upload
*   I want to speed up the process of reporting my bug

**Cause** 

You are experiencing a bug in Unity and want report this via the Bug Reporter. The Bug Reporter requests you attach a project to it, but your project is too large.

To produce a minimal sized project for upload you can create a minimal reproducible (repro) rather than upload your entire project. This will not only make for a faster upload and reproducibility of your issue, but as a bonus it can help you troubleshoot it yourself before submitting.

**Resolution** 

To create a minimal reproducible:

1.  Ensure that you have made a back up of your project.
2.  

Open your project in Unity and open the affected scene

3.  

Remove extraneous items from the scene - assets not required to see issue

4.  Right click on the scene file in project view and  **Export**  the scene as a package.
5.  

Create a new project entirely and name appropriately

6.  

Import your scene package into a new scene and make sure you fix and replace any missing scripts

7.  

Click Play or Build to test your issue is still applicable

8.  

Go to **Help > Report a bug**  where the whole new minimal project will be attached

**More Information** 

For more information on how to submit a Bug Report then see this article [here](/hc/en-us/articles/206336985-How-do-I-submit-a-bug-report-)

      