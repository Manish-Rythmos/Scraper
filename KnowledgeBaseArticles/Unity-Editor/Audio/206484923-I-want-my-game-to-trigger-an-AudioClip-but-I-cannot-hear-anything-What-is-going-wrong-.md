
        

**Symptoms** 

*   I am having trouble playing AudioClips during specific events
*   I want audio to play when my player enters a trigger zone
*   I cannot hear any audio playing

**Cause** 

You have created a C# script for an audio trigger in Unity that tells the audio to start playing when a player enters a trigger zone and stop when the player exits. 

You have assigned an AudioClip to an Audio Source and attached this to a GameObject in your game.

Your script shows no errors according to the Console (located in the bottom left corner of the Unity Editor), but when your player enters the trigger zone you cannot hear any audio playing.

**Resolution** 

There are potentially two reasons for not hearing the audio when entering a trigger zone:

1.  *The * ***Audio Source* **  *is located too far away from the audio listener attached to the * ***Scene’s Main Camera* **  *. This causes the sound to fade too much to be heard.* 
2.  **You do not have a * ***Rigidbody* **  *attached to your * ***Collider * **  *or* ***GameObject* **  *. Trigger events are only sent if a * ***Collider * **  *or * ***GameObject * **  *has a * ***Rigidbody* **  *attached.* * 

You can make the **Audio Source** be heard at a longer distance by changing the min/max distance properties in the **3D Sound Settings** in your **Inspector** . Or you can make the audio play at the specific distance you want it to be heard by attaching the **Audio Source** to your **Player Controller’s Main Camera** in the **Hierarchy** window.

Select your chosen **Collider** and ensure it is set to “is trigger” in the Inspector. Click **Add Component** . You can search **Rigidbody** and attach this to your **Collider** . You can add a **Rigidbody** to a **GameObject** the same way. The trigger will not register a collision with an incoming **Rigidbody** so instead you will need to modify your script to call ***OnTriggerEnter();* ** when the **Rigidbody** enters or exits the trigger zone. Below is a C# script showing how audio is played as soon as the Player enters a trigger zone.

**![](/hc/en-us/article_attachments/201975103/1.png)** 

**More Information** 

For more information on Colliders then see this documentation [here](http://docs.unity3d.com/ScriptReference/Collider.html)

      