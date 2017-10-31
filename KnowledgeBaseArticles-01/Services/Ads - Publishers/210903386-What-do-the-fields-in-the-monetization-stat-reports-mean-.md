

**Symptoms**


- I use Unity Ads for my game, but am unsure as to what the different terms found in the report mean.



**Cause**



You would like to know what the following terms mean:


- ad requests
- available ad requests
- fill rate
- starts
- views / completions



**Resolution**



***Ad requests***  are typically generated during SDK initialization.

***Available***  number of successful ad requests.

***Fill rate***  is the number of available divided by the number of ad requests. (generally 99%+)



A few things to be aware of:


1. By default, the service offers  up to 25 ads per day. Additional ad requests will return false.
2. As long as there is at least one ad available, the response is only counted as 1 available for each ad request regardless of the number of ads available.
3. For performance reasons, the reported values for ad request and available are samplings and not actual values; every 23rd ad request and available is counted and multiplied by 23 to obtain its value. This is why you will notice values for ad request and available as multiples of 23.
4. After initialization, another ad request is sent to refresh the list of available ads after every 10 started.



***Starts*** are generated when a video begins playing.

***Views*** or ***completions*** are generated when a video completes. The values for started and views are actual values; they are not sampled like those for ad requests and available.





