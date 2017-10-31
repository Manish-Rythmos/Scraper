**Symptoms**  
- The state of the Animator gets reset when you change the AnimatorControllerClips at runtime.
- When you try to change the AnimationClip, it does not work the second time that is changed.



**Cause**



It is expected that the Animator is reset when you change a clip. Unity needs to save the Animator state before replacing the AnimationClip and set it back after it has been replaced, but that feature is not implemented in some versions of Unity.



**Resolution**



As a workaround you can use scripting to save and restore the state of the Animator when changing the AnimationClip.


```
void ChangeClip(AnimationClip clip ){    Animator anim = GetComponent<Animator>(); 
    AnimatorOverrideController overrideController =         new AnimatorOverrideController();
    AnimatorStateInfo[] layerInfo = new AnimatorStateInfo[anim.layerCount];
    for (int i = 0; i < anim.layerCount; i++)
    {
        layerInfo[i] = anim.GetCurrentAnimatorStateInfo(i);
    }

    overrideController.runtimeAnimatorController = anim.runtimeAnimatorController;
    overrideController[currentClipName] = clip;
    anim.runtimeAnimatorController = overrideController;

    // Force an update
    anim.Update(0.0f);

    // Push back state
    for (int i = 0; i < anim.layerCount; i++)
    {
        anim.Play(layerInfo[i].nameHash, i, layerInfo[i].normalizedTime);
    }
    currentClipName = clip.name;
}

```




**More Information**  Please also see this Forum [post](http://forum.unity3d.com/threads/swapping-override-clips-at-runtime.298557/). This article applies to Unity version 5.1.1f1       