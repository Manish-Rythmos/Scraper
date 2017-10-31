

**Symptoms**


- I am building a game via Unity Cloud Build to iOS/Android and it is taking a long time to complete.
- I am on a tight deadline and I need a faster processing speed to build my larger projects.



**Cause**



You are experiencing a noticeable drop in build speed when you are building your project in Unity Cloud Build.



You may notice this happens more frequently with iOS and Android builds, which are taking over an hour to complete, when compared to local builds in Unity.



You may find that Cloud Build takes 20 minutes for an empty project, while the local build only takes around 7 minutes.



**Resolution**



Cloud Build usually takes a few minutes extra processing time per build than your local build.
This is due to the following tasks Cloud Build will need to perform to complete each build:


- Each build needs to checkout the project first - The checkout can take a variable amount of time, depending on your hosting solution. The smaller your repository is, the faster the checkout.
- After the checkout, it will verify if it needs to build the  **library cache**  first or not - It usually has to import a fair number of assets the first time to build the library cache. If  **library caching**  is turned on, the following are processed much faster.



Builds with Cloud Build can be  *2-3 times*  as long as a local build, but this also depends on the size of your project. If you have many restarts, or if your builds fail, these factors can also affect the build time.



Each build needs to  **checkout**  the project from your repository. This varies in download speed depending on your source code hoster and connection to our systems. If you see builds with unusual slow build times, you can also check the status pages of your source code hoster to see if they have problems right now. Big hosters like [GitHub](https://status.github.com/) or [BitBucket](http://status.bitbucket.org/) provide their own status page similar to the [Unity Cloud](http://status.cloud.unity3d.com/) status page.



The first import of a project will be slightly longer when using  **library caching**  as it builds the Library first. This however, should improve the build speed after the first successful build. If you encounter issues with Library Caching please read the tips found [here](http://forum.unity3d.com/threads/library-cache-being-rebuilt-every-single-time.358168/#post-2318240). 
Unity Cloud Build is a  *continuous integration system* . The power of Unity Cloud Build is in the capacity of creating distributed and parallel builds. You will gain the most power if you build all platforms for several test purposes at the same time. For example, you can create a Build for Google Play Store, Amazon App Store, a test version, release version and different iOS versions at the same time in parallel.



This helps you to integrate a continuous build pipeline which enables you to work to short deadlines and your developers will not be waiting too long for local builds.



If you notice extraordinary build times, you can create a Cloud Build support ticket [here](/hc/en-us/requests/new) or tell us about it in the [Cloud Build Forum](http://forum.unity3d.com/threads/euhm-whaaaaat.345868/). The Cloud Build team can monitor the build clients used for your project and advise you on how to resolve your issue.



The build time can also be increased by restarts. If you encounter many restarts please read [here](/hc/en-us/articles/205215513).



**More Information**



Unity Cloud Build has become an increasingly crucial part of many developers workflow and a number of developers have requested faster processing speeds for large projects with very demanding build requirements.



We offer dedicated servers for those customers. Although the Cloud Build remains free, there will be a monthly charge for dedicated servers in the Enterprise Tier. 
If you think you may need dedicated servers for your upcoming projects, please contact us at [cloudbuild@unity3d.com](mailto:cloudbuild@unity3d.com) for details. For more information read [here](http://forum.unity3d.com/threads/access-to-dedicated-build-servers-in-unity-cloud-build.284052/).



For information on general website failures, please see this [article](https://support.unity3d.com/hc/en-us/articles/211247943?flash_digest=a81dd242015f7bf918badfbab3bd7643f10b760d).





