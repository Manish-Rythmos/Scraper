

**Symptoms**


- I am the sound designer for all the sound and music in a game
- My audio files have a sample rate of 48kHz (24bit), but they play back at 44kHz (16bit), which is 2 semitones lower.
- I want to know if Unity supports audio sampling rates higher than 44kHz (16bit)



**Cause**



You are producing sound and music to be imported into a game. You want to be able to play inputs of any sample rate into Unity without the output sampling rate being dramatically reduced.



**Resolution**



Unity will play an AudioClip of any input sample rate and will seamlessly resample the audio to Unity's selected output sample rate 44kHz.



*Audio Output Sample Rates at 44kHz (16bit)*



All compressed formats (vorbis, mp3, adpcm etc) convert the AudioClip to 16bit prior to encoding. The compression results in smaller files but with somewhat lower quality but this format is best for medium length sound effects and music.



*Audio Output Sample Rates higher than 48kHz (24bit)*



Unity is able however, to support audio output sampling rates higher than 44kHz. If you wish to produce AudioClips in a higher sample rate, this is possible depending on the compression format. If you leave the data uncompressed (PCM) it should stay at 48kHz (24bit). In general, PCM is the only thing that potentially preserves the bit depth. This option offers higher quality at the expense of larger file size and is best for very short sound effects.



Setting the sample rate from scripts is not supported in Unity versions 5 and above. This has to be manually set in the Sample Rate Setting. You can modify the sample rate by doing the following:


1. Click directly on the AudioClip you have imported into your Project.
2. The following window will appear in your Inspector



![](/hc/en-us/article_attachments/201817646/5.png)



3. Change the Sample Rate Setting in one of three ways:


- ***Preserve Sample Rate***  - This setting keeps the sample rate unmodified by default
- ***Optimize Sample Rate***  - This setting automatically optimizes the sample rate according to the highest frequency content analyzed.
- ***Override Sample Rate***  - This setting allows manual overriding of the sample rate and can be used to discard frequency content.



**More Information**

