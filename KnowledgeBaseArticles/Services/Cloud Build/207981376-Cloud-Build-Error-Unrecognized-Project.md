
        

**Symptoms** 

*   My build is failing with the error below:

![](/hc/en-us/article_attachments/203149933/ProjectSubdirectoryError.png)

**Cause** 

This error is caused when the ProjectSettings and Assets folders are contained within a sub-directory of the folder targeted by Unity Cloud Build in your source code repository.

**Resolution** 

You can create a new target and define the name of the SubDirectory. Cloud Build will then know to look in this SubDirectory for the project it needs to build.

![](/hc/en-us/article_attachments/203003326/ProjectSubdirectoryError_NewTarget.png)

**More Information** 

For more information please read [here](https://build.cloud.unity3d.com/support/). 

      