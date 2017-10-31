

**Symptoms**


- I don't understand what "ad request" and "ad start" mean. Are the ads not being served to users?



**Cause**



You would like to better understand the terms "ad request" and "ad start" and the relation between them.



If the ratio between the two is low, this may indicate that the SDK is being initialized more often than users are playing Unity Ads in your game.



**Resolution**



An  **ad request**  is counted when the SDK initializes using your game ID. The SDK requests a campaign from our servers.



An  **ad start**  is counted every time a video begins playing on a device.



The SDK may be initialized more often than users are playing Unity Ads in your game for the following reasons:


- The integration is such that most players do not have the opportunity to watch videos.
- The integration is such that players are not strongly incentivized to watch videos.
- The game uses a mediation service that initializes Unity Ads, but rarely calls our videos.

