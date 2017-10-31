

**Symptoms**


- I am only seeing Unity test ads and not any live ads in my game, which is live. Why is this?
- Why am I still seeing tests ads even with test mode off?



**Cause**



Your game may still have test mode enabled, which only shows Unity test ads.



**Resolution**



Test mode can be disabled from the Unity Ads dashboard by doing the following:


1. Log in to the [Unity Ads dashboard](https://dashboard.unityads.unity3d.com/).
2. Select your project from the list of projects.
3. Select the platform (Google Play Store or Apple App Store).
4. Select the  **Settings**  tab.
5. Select the toggle switch to turn on  **override client test mode** .
6. Select the  **Force test mode OFF for all devices**  option.
7. Select  **Save**  to save your changes.



![](/hc/en-us/article_attachments/115000600523/testmode.png)



After making these changes, test mode will be disabled from the game. Restart the game for the changes to take effect. When the app restarts, it will initialize Unity Ads with a new ad request and will pull live ads instead of test ads.



**More Information**



If you are initializing ads with code, remember that the second parameter in the initialize method is  **testMode** . Setting this to true means test mode is on. For more information, see documentation on [Advertisement.Initialize](https://docs.unity3d.com/ScriptReference/Advertisements.Advertisement.Initialize.html).

