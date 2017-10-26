
        

**Symptoms** 

*   I need to set Animation Curve Interpolation via Scripting

**Cause** 

You are trying to set animation curves by script and when interpolation is done you get the following result: 

![](/hc/en-us/article_attachments/202514423/FinalPlsDon.png)

**Resolution** 

To solve this issue do the following two things:

1.  Call [AnimationClip.EnsureQuaternionContinuity](http://docs.unity3d.com/ScriptReference/AnimationClip.EnsureQuaternionContinuity.html) after you have manually set via script the Animation Curve properties.
2.  Save the assets with [AssetDatabase.SaveAssets](http://docs.unity3d.com/ScriptReference/AssetDatabase.SaveAssets.html)

Please see the example code below for guidance: 

         AnimationClip clip = new AnimationClip ();
         //If using Unity 5
         clip.legacy = true;
         // Rotation
         AnimationCurve CurveRot = new AnimationCurve ();
         AnimationCurve CurveRotY = new AnimationCurve ();
         AnimationCurve CurveRotZ = new AnimationCurve ();
         AnimationCurve CurveRotW = new AnimationCurve ();
         float time = 0.5f;
         //stepValues [0,1,0,10]
         Quaternion angle = Quaternion.Euler (0, 0, stepValues[i] * 180.0f);
         CurveRot.AddKey (time, angle.x);
         CurveRotY.AddKey (time, angle.y);
         CurveRotZ.AddKey (time, angle.z);
         CurveRotW.AddKey (time, angle.w);    
         clip.SetCurve ("", typeof(Transform),"localRotation.z", CurveRot);
         clip.SetCurve ("",typeof(Transform),"localRotation.y", CurveRotY);
         clip.SetCurve ("",typeof(Transform),"localRotation.z", CurveRotZ);
         clip.SetCurve ("",typeof(Transform),"localRotation.w", CurveRotW);
         //This ensures a smooth interpolation
         clip.EnsureQuaternionContinuity ();
         String newCName = "Comp1_L_1";
         AssetDatabase.CreateAsset (clip,ANIM_CLIP_PATH+newCName+".anim");
         AssetDatabase.SaveAssets ();

**More Information** 

[http://docs.unity3d.com/Manual/animeditor-AnimationCurves.html](http://docs.unity3d.com/Manual/animeditor-AnimationCurves.html) 

This article applies to Unity versions 5.x

      