
        

**Symptoms** 

*   I want to play sounds from a script that is attached to a Prefab
*   I want to add several sounds to the script instead of just playing audio from the Audio Source itself.

**Cause** 

You have imported an audio file into the Unity Editor which creates an AudioClip. You want to:

*   Attach your AudioClip to an Audio Source to play it back in your game
*   Use the Audio Source in a script to trigger sounds to play at specific points in your game

**Resolution** 

The AudioClip is the actual sound file that will be played back. The Audio Source is a controller for starting and stopping playback of that clip, and modifying other audio properties. Audio Sources need to be attached as a component to a GameObject. GameObjects do not do anything on their own. You need to add the Audio Source as a component to a GameObject to make this object become an Audio feature.

To create a new Audio Source:

*   Import your audio files into your Unity Project. These are now  **AudioClips** .
*   Go to  **GameObject**  and click  **Create Empty**  from the menu.
*   With the new  **GameObject**  selected in the inspector, click  **Add Component** .
*   You can search for  **Audio Source**  and select this. An  **Audio Source**  will be attached to the  **GameObject**  in the inspector.
*   Assign your  **AudioClip**  to the  **Audio Source** .

Once you have your **Audio Source** set up correctly, there are two ways to trigger sounds from a script:  

1.  The first method to achieve this would be to not have an  **AudioClip**   **Variable**  at all, but instead attach an  **Audio Source**  component to your  **GameObject**  (or to the pickup object), and drag the  **AudioClip**  into that  **Audio Source**  Component. You could then trigger the sound by calling  **audio.Play();**  from a script on the same object.
2.  The second method to achieve this is would be to trigger the sound by calling  ***AudioSource.PlayClipAtPoint();** *  This will play the sound at the position of the player object that this script is placed on in the 3D world.

**More Information** 

For scripting reference to calling **audio.Play();** then see this document [here](http://docs.unity3d.com/ScriptReference/AudioSource.Play.html)

For scripting reference to calling **AudioSource.PlayClipAtPoint();** then see this document [here](http://docs.unity3d.com/ScriptReference/AudioSource.PlayClipAtPoint.html)

      