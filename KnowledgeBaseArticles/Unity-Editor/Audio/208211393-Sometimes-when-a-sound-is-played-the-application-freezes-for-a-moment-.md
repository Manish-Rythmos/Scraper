**Symptoms**
- Sometimes when a sound is played, the application freezes for a moment.

**Cause**  Sound effects and music/ambient sounds should be used in different ways to avoid this problem.  **Resolution**

Try these suggestions when using sound files:



***Music and/or Ambient Sounds****:***



Music is stored in long Audio Clips so it can consume a lot of memory. You have two options here:


1. Use Load Type “Streaming” and Compression Format “Vorbis”. This combination will use the least amount of memory, but will require some CPU power and disk I/O throughput.
2. Use Load Type “Compressed In Memory” and Compression Format “Vorbis”. The only difference from the first solution is that it will exchange the disk I/O with some memory requirement. Note that you can adjust the Quality slider to decrease compressed clip size in exchange of sound quality. Usually 100 percent is too high. We recommend around 70 percent. Note that if you have more than 2 music/ambient sounds clips playing like this, it can consume a serious amount of CPU power.



***Sound Effects:***



Sounds effects are usually short or medium Audio Clips. Also these can be played frequently or rarely. Here are some rules:


1. For frequently played and short Audio Clips, use Decompress On Load and PCM or ADPCM Compression Format. When PCM is chosen, no decompression is needed and if the audio clip is short it will load very quickly. You can also use ADPCM. This requires decompression, but it is much lighter to decompress than Vorbis.
2. For frequently played but medium Audio Clips, use Compressed In Memory and ADPCM Compression Format. ADPCM is around 3.5 times smaller than raw PCM and the decompression algorithm will not consume as much CPU as Vorbis.
3. For rarely played and short Audio Clips use Compressed In Memory and ADPCM. For the same reason as described in point 2.
4. For rarely played and medium Audio Clips, use Compressed In Memory and Vorbis Compression Format. This SFX might be too long to be stored using ADPCM and played too rarely, therefore the additional CPU power required to decompress would not be a such pain.

  **More Information**  [http://docs.unity3d.com/Manual/class-AudioClip.html](http://docs.unity3d.com/Manual/class-AudioClip.html)       