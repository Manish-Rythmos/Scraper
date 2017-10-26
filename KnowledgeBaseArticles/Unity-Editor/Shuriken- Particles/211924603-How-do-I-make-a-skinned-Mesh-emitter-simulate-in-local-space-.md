
        

**Symptoms** 

*   I want to attach some particles to simulate in local space and be emitted from a skinned mesh emitter. The effect should look like the particles are attached to the mesh, moving one to one with the animated mesh.

**Cause** 

![](/hc/en-us/article_attachments/205360426/SkinnedMeshEmitter.gif)

This is down to the way the skinned mesh render works differently to a normal mesh. Due to the vertices of the skinned mesh render being repositioned by the bones / joints influencing them, the particle system would need to keep track of its source triangle. To do this would be a very costly process. 

**Resolution** 

![](/hc/en-us/article_attachments/205405663/MeshEmitter.gif)

If the skinned mesh is rigidly skinned (like the sword above), then a Mesh could be used instead. 

***Mesh solution** * 

We first need to parent the particle effect under the same bone that the rigidly skinned mesh is being animated under. In the instance of the sword it looked like this:

![](/hc/en-us/article_attachments/205579606/Heritance.PNG.png)

Instead of using a skinned mesh emitter on the particle effect, it has been changed to a mesh emitter. Mesh emitter requires use of the mesh to emit from. We can get a copy of the mesh used in the skinned mesh renderer from the skinned mesh FBX in this instance. We can find this by expanding the skinned mesh FBX (Sword.fbx in the example below). The animation of the skinned mesh render in the example (Sword_SkinnedMesh) is being animated by the bone Sword_Bone. I have parented the particle FX to the Sword_Bone so that it inherits the same motion.

![](/hc/en-us/article_attachments/205622443/mesh_emitter.png)

I then set the FX up to use a Mesh as the emitter. In the picture above, you can see the mesh has been set to the exported mesh based on the one used on the Skinned Mesh Render.

The FX is now using a proxy of the skinned mesh render and because it is also parented to the correct bone under the skeleton of the skinned mesh render, the particle FX and skinned mesh render match up correctly.

**More Information** 

Unity's Particle overview video tutorial - [http://unity3d.com/learn/tutorials/topics/graphics/particle-system?playlist=17102](http://unity3d.com/learn/tutorials/topics/graphics/particle-system?playlist=17102)

      