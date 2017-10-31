

**Symptoms**


- I am testing a live build of my game and I can't see any ads.
- Ads were working at one point, and now they are not.



**Cause**



You may be using an incorrect game ID, or you may have hit the daily limit of available ads.



**Resolution**



There are a number of potential solutions if you are unable to see any ads in your game:


- Have you initialized Unity Ads? Are you using the correct game ID? Note that these are platform-dependent, so make sure to use an iOS game ID on an iOS game.
- Are you waiting for Unity Ads to be ready before attempting to show the ads? It usually takes a few seconds to download the ad, and before this  *IsReady()*  returns false.
- Is your device connected to the internet?
- Have you shown too many ads for the day? There's a hard limit of 25 ads per day per user. [Register your device as a test device](https://support.unity3d.com/hc/en-us/articles/218324523) in the dashboard to ensure things are set up properly and you receive unlimited test ads.



**More Information**



Please be aware that the availability of ads is not guaranteed. This is why we provide methods to first check if ads are ready and can be shown.



**By default, users are limited to 25 ads per day per app on a rolling 24-hour basis. Users are also limited to seeing the same ad only once per hour.**



For most of Europe and North America, this typically is not an issue. In countries where fill may be somewhat limited, the effects of this can be more obvious. For instance, if there are only 12 ad campaigns available in a user's country, they will only be able to see up to 12 ad campaigns per hour.



In any case, if the user exhausts their daily limit of 25 ads, they won't see any more ads until the next day. During development, it's recommended that you enable test mode to ensure you always have test ads available.

