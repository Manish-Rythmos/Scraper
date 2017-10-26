
        

**Symptoms** 

*   I want to add or remove animation clips in the animation controller at runtime.

**Cause** 

You are trying to do one of the following:

*   Set up a new animation clip at runtime using [Mecanim](http://docs.unity3d.com/460/Documentation/Manual/MecanimAnimationSystem.html).
*   Change or Remove an animation clip during runtime.

**Resolution** 

It is not possible to add or remove clips at runtime with Mecanim, but you can override them with [AnimatorOverrideController](http://docs.unity3d.com/ScriptReference/AnimatorOverrideController.html) to dynamically change the animation clips.

Please see this article [here](/hc/en-us/articles/205845885-Animator-state-is-reset-when-AnimationClips-are-replaced-using-an-AnimatorControllerOverride) which describes how the AnimatorOverrideController is used to override clips from a controller to change the dynamics of animations.

**More Information** 

In Unity 5.2 there is a new [Playable API](http://docs.unity3d.com/Manual/Playables.html) that will allow you to play clips on Animator components without a controller.

This article applies to Unity version 5.1.1f1

      