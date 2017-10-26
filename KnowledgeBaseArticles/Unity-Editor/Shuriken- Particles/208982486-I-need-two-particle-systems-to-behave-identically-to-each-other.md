
        

**Symptoms** 

*   When I create two or more particle systems, they behave differently to each other even when I have the same properties set.

![](/hc/en-us/article_attachments/204017186/particleseed_Before.gif)

**Cause** 

This only occurs when random ranges are used in a particle system. The random ranges are created by a Particle random seed.

![](/hc/en-us/article_attachments/204227663/Screen_Shot_2016-05-25_at_17.15.33.png)

**Resolution** 

You can solve this by creating a script (or using the example script below) to set the Random Seed manually via [ParticleSystem.randomSeed](https://docs.unity3d.com/ScriptReference/ParticleSystem-randomSeed.html). This will ensure that any random ranges will match up to each other.

*In this GIF, the particles that look like shadows are a duplicate of the particles in the air, but both use the same seed.* 

![](/hc/en-us/article_attachments/204017526/ParticleSeed2.gif)

You can use this script to set the Random Seed on the particle systems assigned to setSeedParticles.

using UnityEngine;
    using System.Collections;
    
[ExecuteInEditMode]
    public class SetParticleSeed : MonoBehaviour {
    
    public ParticleSystem[] setSeedParticles;
        public int ParticleSeed;
        public bool forceNewSeed;
    
    void Start () {
            if (setSeedParticles.Length > 0) {
                for(int i = 0; i < setSeedParticles.Length; i++) {
                    setSeedParticles[i].randomSeed = (uint) ParticleSeed;
                }
            }  
        }
    
     void Update () {
            if (forceNewSeed) {
                ParticleSeed = Random.Range(0,int.MaxValue);
                Debug.Log("Particle seed: " + ParticleSeed);
    
            if (setSeedParticles.Length > 0) {
                    for(int i = 0; i < setSeedParticles.Length; i++) {
                        setSeedParticles[i].randomSeed = (uint) ParticleSeed;
                    }
                }
    
             forceNewSeed = false;
            }
        }
    }

**More Information** 

[Random Particle Seed - http://docs.unity3d.com/ScriptReference/ParticleSystem-randomSeed.html](http://docs.unity3d.com/ScriptReference/ParticleSystem-randomSeed.html)

      