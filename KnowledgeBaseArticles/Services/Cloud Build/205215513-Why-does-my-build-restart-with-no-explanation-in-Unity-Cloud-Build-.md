
        

**Symptoms** 

*   I received the error  *"oops something happened,"*  which made my build restart.
*   There is an unusually high restart rate for the iOS and Android builds on our project.
*   There is an unusually high restart rate only for iOS build on our project. 

**Cause** 

Your builds keep restarting and/or failing due to an inability to check out the project from your SVN server in a reasonable amount of time. This could be due to the following factors:

*   Your have a large project which you are trying to build locally and your build needs to checkout the project first.
*   You may have a weaker SCM server depending on where you are geographically located.
*   Your project seems to be much more prone to restarts than others.

**Resolution** 

Your project will restart more frequently if something has gone wrong with the build. This depends on where your source control is hosted, how large your total project is in source control and also how large your compiled Unity project is, as this could produce time-outs. You should check the settings of your firewall and overall connection and checkout speed of your SCM server. If you host it on a external service, you can test the connection speed if you checkout your project locally and compare it with other services. Test different services to find a hoster which suits your project requirements in combination with Unity Cloud Build.

Restarts on iOS occur as some projects seem much more prone to restarts than others. iOS projects will always be a little more likely to restart as they can hang in either the Unity or the Xcode steps with post-processing, which is unique to iOS as the XCode manipulation API is only available for iOS projects. 

Restarted builds are not subject to cool-downs, and if you have a high level of restarts, you can create a new Cloud Build support ticket [here](/hc/en-us/requests/new) or in the [Unity Cloud Build forums](http://forum.unity3d.com/threads/constant-restarting-hanging-on-processing.305986/#post-2001258). The Cloud Build team can monitor the build clients used for your project and advise you on how to resolve your issue.

**More Information** 

      