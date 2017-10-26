
        

**Symptoms** 

*    I have lots of AudioClips that I want to play from one audio source.

**Cause** 

You have a GameObject in your game that you want to play a variety of sounds on simultaneously. You are able to attach empty GameObjects to the main GameObjects and set each one as an Audio Source to play the sounds, but you want to know if there is an easier way to achieve this without creating multiple child GameObjects.

**Resolution** 

You can attach several Audio Sources to the same GameObject in the Inspector, and get them to play at the same time by calling ***PlayOneShot();* ** in a script.

You need the Audio Source attached to your main GameObject and then attach a script to the Audio Source. You can call the script to play multiple AudioClips in the following way:

**![](/hc/en-us/article_attachments/201975723/script.png)** 

When you have created this script you will be able to drag your required AudioClips into the relevant script components.

**More Information** 

For more information on calling ***AudioSource.PlayOneShot(); ** * then see this document [here](http://docs.unity3d.com/ScriptReference/AudioSource.PlayOneShot.html)

      