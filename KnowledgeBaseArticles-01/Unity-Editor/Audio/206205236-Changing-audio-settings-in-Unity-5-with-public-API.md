

**Symptoms**


- The docs state that in Unity 5 you can no longer set the speakerMode via API, but instead must use project settings->audio to set this



**Cause** 
Setting AudioSettings.speakerMode is deprecated and has been replaced by audio project settings and the AudioSettings.GetConfiguration/AudioSettings.Reset API



**Resolution**



In Unity 5, if you want to change the AudioSettings, the new API must be used:



AudioConfiguration \_audioConfig = AudioSettings.GetConfiguration ();
        \_audioConfig.speakerMode = AudioSettings.driverCapabilities;
        AudioSettings.Reset (\_audioConfig);



**More Information** 
[http://docs.unity3d.com/ScriptReference/AudioSettings.GetConfiguration.html](http://docs.unity3d.com/ScriptReference/AudioSettings.GetConfiguration.html)
[http://docs.unity3d.com/ScriptReference/AudioSettings.Reset.html](http://docs.unity3d.com/ScriptReference/AudioSettings.Reset.html)



This article applies to Unity versions 5.0+

