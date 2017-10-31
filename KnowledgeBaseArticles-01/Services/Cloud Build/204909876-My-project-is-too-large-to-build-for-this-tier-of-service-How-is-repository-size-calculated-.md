

**Symptoms**


- My cloud build project has failed because my repository has gone over the GB size limit for my plan.
- I would like to know how the repository size is calculated.



**Cause**



You are subscribed to one of the following Unity Cloud Build plans:


- Free Plan
- Pro Plan
- Studio Plan
- Enterprise Plan



You are trying to build your project, but you are receiving the following error based on your Unity Cloud Build subscription plan:



*"postcheckoutstatus failed. Project is too large to build for this tier of service. (2.01 GB exceeds limit by 12.49 MB). See[https://build.cloud.unity3d.com/plans/](https://build.cloud.unity3d.com/plans/) to upgrade."*



This limit is based on the size of your repository.



**Resolution**



Unity Cloud Build calculates the size of all files downloaded from the source control and tries to exclude all hidden files specific to the source control.



If you have the Library or Temp folders in your source control they will be included in the size calculation. Please make sure these Folders are unchecked before you build your project.



If your Library or Temp folders are unchecked and you are still receiving this building failure you can create a new Cloud Build support ticket [here](/hc/en-us/requests/new) or post in the [Unity Cloud Build forums](http://forum.unity3d.com/threads/project-size-vs-repo-size.306905/). The Cloud Build team can monitor the build clients used for your project and advise you on how to resolve your issue.



**Note** : Even if your project is in a subfolder of your repository Unity Cloud Build will still clone the whole repository and calculate the size against the whole repository and not only for your project subfolder.



**More Information**



You can see the repo size limits required for each tier of Unity Cloud Build [here](https://build.cloud.unity3d.com/plans/).

