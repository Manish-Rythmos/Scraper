
        

**Symptoms** 

*   I want to choose the preference order of Graphics APIs so my game has a wider range of supported Graphics APIs
*   I want to remove support for older Graphics APIs such as OpenGL ES 2.0.

**Cause** 

The Graphics APIs per platform are by default set to be chosen automatically by Unity when the game is launched. In order to change this, the user must manually override this default setting by selecting their desired Graphics APIs in Player Settings, per platform.

**Resolution** 

The Graphics API preference order can be overridden in the Player Settings (Edit > Project Settings > Player). Select the platform from the tabs at the top (active build target is selected by default). You can then deselect Auto Graphics API and choose which Graphics APIs should be supported for your game. The preference order is from top to bottom.

![](/hc/en-us/article_attachments/204035906/Player_Settings_Graphics_API.png)

(Screen shot of the Player Settings, overriding the preference order of Graphics APIs for the Windows Standalone platform)

**More Information**   

[PlayerSettings.SetGraphicsAPIs](http://docs.unity3d.com/ScriptReference/PlayerSettings.SetGraphicsAPIs.html)

      