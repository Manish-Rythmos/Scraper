

**Symptoms**


- I want to make our terrain tools run at an interactive speed.



**Cause**



You have implemented some in-house terrain forming tools, but applying any changes to a terrain results in a dramatic drop in performance making them barely usable.



**Resolution**



When creating you own terrain editing tools, TerrainData.SetHeights is naturally slower. This is because it needs to recalculate all the terrain LOD information, which is done on every call to SetHeights.



A patch was released for 5.2.0a3 where the SetHeightsDelayedLOD API was introduced to improve the speed at which TerrainData.SetHeights recalculates the LOD information.



In this patch release, the Editor uses two internal functions:


- SetHeightDelayedLOD()
- ApplyDelayedHeightmapModification()



With SetHeightDelayedLOD(), the LOD calculation can be skipped or delayed while editing, and is triggered once the mouse button is released.



In interactive editing scenarios, it is advised to call [TerrainData.SetHeightsDelayLOD](http://docs.unity3d.com/ScriptReference/TerrainData.SetHeightsDelayLOD.html) instead, followed by [Terrain.ApplyDelayedHeightmapModification](http://docs.unity3d.com/ScriptReference/Terrain.ApplyDelayedHeightmapModification.html) when the user completes an editing action.



**More Information**



For more information on TerrainData.SetHeights see this document [here](http://docs.unity3d.com/ScriptReference/TerrainData.SetHeights.html).



Go [here](https://unity3d.com/unity/qa/patch-releases?version=5.2) to download the relevant patch where this SetHeightsDelayedLOD API has been implemented.

