
        

**Symptoms** 

*   I can hear a lot of distortion when I play my audio clips in Unity.
*   I want to configure my audio settings to control audio clipping and distortion on my audio clips.

**Cause** 

You have an issue with audio clipping in your master mix when playing my audio clips in Unity which makes your audio distort.

You would like to be able to control audio clipping and distortion using a limiter and would like to find out if Unity has a feature included to configure your audio settings in real time.

**Resolution** 

Unity does not have a built-in compressor, which means any waveforms that add up to over 1 will distort. (This will invariably happen if you are importing high-quality and/or loud clips.)

You can use the Audio Manager in Unity’s Editor to tweak the maximum Volume of all sounds played in the scene. 

To open the Audio Manager:

*   Click  *“Edit”* 
*   Select  *“Project Settings”* 
*   Select  *“Audio”* 

You can apply these configurations individually to each clip **before** mixdown, if you decrease the volume enough, you will be able to get rid of distortion.

**More Information** 

For more information on the configuration settings in the Audio Manager then see this document [here](http://docs.unity3d.com/Manual/class-AudioManager.html)

      