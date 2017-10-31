

**Symptoms**


- I am interested in using Unity Ads to monetize games and would like to familiarize myself with the terminology.
- I am a new user of Unity Ads and would like to better understand the terms I see in the Unity Ads dashboard.



**Cause**



You would like to better understand the terms used in Unity Ads and the dashboard.



**Resolution**



**Ad requests**  are generated during SDK initialization.  **Available**  corresponds to responses to the number of successful  **ad requests** . There are a few things to be aware of:


- The content of these  **available**  responses is a list of up to 25 ads.
- As long as there is at least one ad available, the response is only counted as one  **available**  for each ad request regardless of the number of ads available.
- For performance reasons, the reported values for  **ad request**  and  **available**  are samplings and not actual values - every 23rd  **ad request**  and  **available**  is counted and multiplied by 23 to obtain its value. This is why you'll notice the values for  **ad request**  and  **available**  are multiples of 23.
- After initialization, another  **ad request**  is sent to refresh the list of available ads for every 10 started.



Fill rate is the  **available**  total divided by the number of  **ad requests** .



Lastly, impressions relate to  **started**  while completions relate to  **views** . The values for  **started**  and  **views**  are actual values - they are not sampled values like those for  **ad****requests**  and  **available** .

