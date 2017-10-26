
        

**Symptoms** 

*   I have implemented Unity Ads into my game, but I am not seeing very many ads.

**Cause** 

Users are limited by default to 25 ads per day (on a rolling 24 hour bases) per app. Users are also limited to seeing the same ad only once per hour.

The amount of ads seen can also depend on the ad campaigns available in a user's country.

**Resolution** 

Please be aware, the availability of ads is not guaranteed. This is why we provide methods to first check if ads are ready and can be shown.

For most of Europe and North America, this typically is not an issue. In countries where fill may be somewhat limited, the effects of this can be more obvious. For instance, if there are only 12 ad campaigns available in a user's country, they will only be able to see up to 12 ad campaigns per hour.

In any case, if the user exhausts their daily limit of 25 ads, they will not see any more ads until the next day. During development, it is recommended that you enable test mode to ensure you will always have test ads available.

      