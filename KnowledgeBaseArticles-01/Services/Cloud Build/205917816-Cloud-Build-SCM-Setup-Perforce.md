

**Symptoms**


- I would like to configure my Unity project in Cloud Build.
- My code is hosted on a Perforce SCM server.



**Cause**



Perforce SCM is similar to other SCM systems but needs some more specific configuration.



**Resolution**



***Step 1***



After logging in, click 'Add New' at the top of the page and enter your  **Server URL**  in the following format:



Non-SSL: host:port
SSL: ssl:host:port



Set  **SCM Type**  to 'Perforce' if it was not automatically detected and click the  **Next**  button.



![](/hc/en-us/article_attachments/201820403/step1.png)



***Step 2***



The system will verify your Host/URL information, and then ask for credentials for accessing the Perforce system. Enter the  **Username**  and  **Password**  of a user with read-only access to the Perforce workspace you wish to use and then click the  **Next**  button.



![](/hc/en-us/article_attachments/201820433/step2.png)



***Step 3***



Once a connection has been successfully made, you will be presented with a choice of  **Client Workspace**  where your code is stored. When you make a selection, the  **View**  field will auto-populate with a view path associated with the chosen workspace. Click the  **Next**  to configure your project and platform targets.



![](/hc/en-us/article_attachments/201684826/step3.png)



***Step 4***



Enter a  **Project Name** ,  **Project Subfolder**  (only if your Unity project is not in the workspace root), and choose the  **Unity Version**  to build with. You have the option to choose which  **Supported Platforms**  you will build for, and whether or not any of them will  **Auto-Build** . Click  **Next**  button to continue.



![](/hc/en-us/article_attachments/201684846/step4.png)



***Step 5***



If you chose Android as a supported platform, you will be asked for a  **Bundle ID**  and  **Credentials**  to use during the build. Specify both and click  **Next** .



![](/hc/en-us/article_attachments/201684886/step5.png)



***Step 6***



If you chose iOS as a supported platform, you will be asked for a  **Bundle ID** ,  **Xcode Version**  to build with, and  **Mobile Provision/p12 Files**  from the Apple Developer Center that will be used for this project. Click  **Next**  once the information and files have been provided.



![](/hc/en-us/article_attachments/201684896/step6.png)



***Step 7***



All set! Your desired platform builds will now be configured and set to begin building for the first time.



![](/hc/en-us/article_attachments/201684926/step7.png)



Once the builds have been started, you will be redirected to the Project History screen, where you will see your builds queued.



![](/hc/en-us/article_attachments/201684976/step8.png)



**More Information**



[https://build.cloud.unity3d.com/support/](https://build.cloud.unity3d.com/support/)



[http://forum.unity3d.com/threads/perforce-unicode-support-url-format.264776/#post-2434668](http://forum.unity3d.com/threads/perforce-unicode-support-url-format.264776/#post-2434668)

