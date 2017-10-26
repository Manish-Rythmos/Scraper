
        

**Symptoms** 

*   We want to allow music from other apps if the user has the music turned off in our game and Unity API does not give access to "Override iPod Music".

**Cause** 

*   "Override iPod Music" is not accessible from code.

**Resolution** 

Using the native API from iOS, you can change the music source application:

<extern "C" {
        #import <AVFoundation/AVFoundation.h>
        #import <AudioToolbox/AudioToolbox.h>
        bool _IsMusicPlaying (){ 
            if ([[AVAudioSession sharedInstance] isOtherAudioPlaying ]){ 
                return true; 
            } 
            return false; 
        }
    }

**More Information** 

*   [https://developer.apple.com/library/prerelease/ios/documentation/AudioVideo/Conceptual/AVFoundationPG/Articles/00_Introduction.html](https://developer.apple.com/library/prerelease/ios/documentation/AudioVideo/Conceptual/AVFoundationPG/Articles/00_Introduction.html)
*   [https://developer.apple.com/library/prerelease/ios/documentation/MusicAudio/Reference/CAAudioTooboxRef/index.html](https://developer.apple.com/library/prerelease/ios/documentation/MusicAudio/Reference/CAAudioTooboxRef/index.html)

This article applies to Unity versions 5.0+

      