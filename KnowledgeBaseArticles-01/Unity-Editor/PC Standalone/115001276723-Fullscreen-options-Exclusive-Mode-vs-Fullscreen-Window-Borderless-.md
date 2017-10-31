

**Symptoms**


- I would like some clarification regarding building for Windows and choosing fullscreen mode. Which is the "correct" choice, and why?

Cause

In the Player Settings for Windows Standalone there are options to set which mode should be used for fullscreen. Fullscreen Window (Borderless) or Exclusive Mode. It can be confusing which mode should be used for your game. See image below:



![PlayerSettingsFullscreenMode.png](/hc/article_attachments/115003655006/PlayerSettingsFullscreenMode.png)

Resolution

Sadly there is no definitive answer as it depends on the game, the user's hardware and the user's intended usage. Fullscreen Window (Borderless) allows for quicker process focus switching (alt-tab), but will consume slightly more resources as it is still rendering the desktop. Normally users with multi-monitor setups or users with the need to alt-tab to other applications (web browser, music player etc) prefer Fullscreen Window (Borderless).



If profiling reveals the game is approaching its limit for VRAM then Exclusive Mode may be better, allowing users to gain a slight performance improvement.



A common solution is to default to one mode and then allow the user to override it if they want/need. Users can specify the fullscreen window mode by using the standalone player command line argument `-window-mode` with either `exclusive` or `borderless` values when launching the game, e.g., `-window-mode exclusive`. This could be set up by users in Steam, or alternatively a custom launcher could be created to allow users to select this setting before launching the game with the custom launch options.



It is not bad practice to use exclusive mode as default (there are many users out there that even prefer this mode as it can sometimes give better performance with their hardware).

More Information

There was an issue with exclusive mode in Unity 5.4: [https://issuetracker.unity3d.com/issues/a-game-in-exclusive-fullscreen-freezes-after-an-alt-plus-tab](https://issuetracker.unity3d.com/issues/a-game-in-exclusive-fullscreen-freezes-after-an-alt-plus-tab) but this was fixed in the Unity 5.4.2p2 patch release.



Information verified accurate for Unity 5.4.3p4.

