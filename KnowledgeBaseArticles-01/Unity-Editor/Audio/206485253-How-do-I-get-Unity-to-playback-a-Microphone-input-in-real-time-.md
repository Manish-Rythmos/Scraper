

**Symptoms**


- I want to develop an application with my Microphone device
- I cannot get real time audio playback from my Microphone input without latency occurring



**Cause**



You are unable to play back audio from a Microphone source in real time. You may be experiencing one of the following issues:


- During playback you can hear an inaudible chopped noise
- The audio recorded continues to play in an infinite feedback loop
- The audio heard during playback has a fair amount of latency and does not sound immediately.



**Resolution**



To ensure your Microphone audio plays back in real time:


1. Firstly, you will need to set the microphone as an  **AudioClip**  and attach this  **AudioClip**  onto an  **Audio Source** . You will need to set the audio to loop by checking the loop tick box in your  **Audio Source**  component in the Inspector. You will then be able to use the spectrum data off the  **Audio Source** , rather than the  **Audio Listener.**
2. Secondly, you will need to attach a script to the  **Audio Source**  which tells Unity that the Microphone device to start recording an  **AudioClip** . For this you will need to call  **Microphone.Start();**



To control latency you will also need to call  ***Microphone.GetPosition();***  and choose your desired latency sample rate. If you want no latency you can set this to  ***“0”***  samples before the audio starts to play. See the below script to see how this script is executed.



![](/hc/en-us/article_attachments/201975443/4.png)



Please note that you need to add the permissions to the app (iOS, Android, Windows Phone, Web Player), to use the microphone. The permissions are added if you have a reference to  **UnityEngine.Microphone**  in your script.



However, on Android specifically this feature is not strictly required as it breaks compatibility with Android TV.



**More Information**



For scripting reference to calling  **Microphone.Start();**  then see this document [here](http://docs.unity3d.com/ScriptReference/Microphone.Start.html)



For scripting reference to calling  **Microphone.GetPosition();**  then see this document [here](http://docs.unity3d.com/ScriptReference/Microphone.GetPosition.html)





