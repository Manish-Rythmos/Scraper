
        

**Symptoms**  

*   My baked/ static objects do not cast shadows on my RealTime lit meshes (characters/ marked non-static).

![](/hc/en-us/article_attachments/203800146/May-13-2016_17-20-07.gif)

In this shot, The red block would be expected to cast a shadow on the white and green objects.

**Cause** 

Static meshes with baked lightmaps no longer cast RealTtime shadows and therefore do not shadow meshes that are RealTime lit/ have not been marked as static. Other meshes marked as static will affect each other during the baking process.

**Resolution** 

Unity has two options to help simulate the effect of having static meshes cast shadows on RealTime lit meshes:

*   The use of  **light probes**  can help tint the characters indirect lighting to look like they are in shadows providing the light probes are in the correct location to sample that shadowed area. This can be quite labour intensive and also would not work correctly on objects using high direct lighting information like specular objects. An example of this would be a character in a cave where the character would be darker like the surrounding environment, but still receive a specular highlight from the direction of the Sun (directional) light. 

![](/hc/en-us/article_attachments/204012143/May-13-2016_17-37-40.gif)

In this example, you can see the green and white objects are being affected by the light probes which sample the baked shadows.

*   The second is to use the cast shadows type  **Shadows Only**  in a mesh renderer. The best way to do this is to duplicate any mesh renderers that cast defining shadows that you want to influence the RealTime lit meshes and set their cast shadow type to Shadows only.

![](/hc/en-us/article_attachments/204012213/May-13-2016_17-41-42.gif)


Here the red cube has a duplicate of itself which has been set to Shadows Only. This then casts shadows onto the green and white object which are dynamic.

 **More Information** 
[Documentation](http://docs.unity3d.com/Manual/LightProbes.html) on light probes.
This article applies to Unity version 5.3.1 and beyond.

      