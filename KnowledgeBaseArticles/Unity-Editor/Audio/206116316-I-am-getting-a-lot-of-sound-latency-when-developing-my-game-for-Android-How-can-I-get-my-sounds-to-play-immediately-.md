
        

**Symptoms** 

*   I am developing a game on Android and I get a lot of sound delay when I play an AudioClip.

**Cause** 

You have made a game for Android. When you are playing AudioClips in real-time there is an unacceptable amount of latency in the response you hear back.

**Resolution** 

Typically, the audio-in latency needs to be below 25ms to be useable.

On iOS, audio-in latency is around 20ms, which is perfect for recording software or producing real-time effects. On Android, however, the latency is around 200-300ms, which causes a noticeable delay in the sound you hear in real-time.

A workaround you can try to fix this issue within Unity is change the DSP Buffer Size to set your audio to Best Latency in the Audio Manager:

1.  In the Unity Editor click Edit
2.  Click Project Settings
3.  Select Audio. You will see the DSP Buffer Size in the list of options within the Audio Manager in your Inspector view;  *Default, Best latency, Good latency, Best Performance.* 
4.  Select  ***Best latency* **  to see if this improves your audio response in real time.

**More Information** 

If this method fails to improve your latency, you can purchase and download this [plugin](https://www.assetstore.unity3d.com/en/#!/content/35295) via Unity’s Asset Store which has been developed to provide easy access to the native Android audio system for low-latency audio playback.

      