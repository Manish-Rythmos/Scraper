

**Symptoms**


- I have created some buttons that use the default behaviour for the UGUI button, but even after I have customized the state colors for the button, I cannot get the button to get brighter, or highlight, as I would expect?

**Cause**  
The default behaviour for the UGUI button is to use the Color Tint transition method which multiplies the color of the image component by the button component's state color (E.G (Image components colour) &ast; (Button Highlight Color)). As the normal and highlight color states of the button component is set to full white by default. This means the color will match the one set in the Image component color for both states. The colors set in the Button states are not HDR, so can not go past white, meaning that you can only darken the overall color in the highlight if the normal color is set to white.  

![](/hc/en-us/article_attachments/207750306/Default.PNG)



**Resolution**



You can get around this issue in multiple ways depending on what the final look of the button should be.


- **Standard Color Tint**



![](/hc/en-us/article_attachments/207873506/Button_ColorTint.gif)



This gives you some limited control when it comes to making the button lighter. I have included this method so you can compare how the default button states work compared to some of the other methods. The base color has an HSV value of 215. This gives a small amount of room (255 - 215 = 40 to play with) to lighten the button up with, as seen in the GIF above.


- **Color multiplier**



![](/hc/en-us/article_attachments/207873526/Button_Multiplier.gif)



The color multiplier value takes the HSV value of the state color of the button and multiplies it against the float specified in the range slider of the Button's Color Multiplier field (See below). This gives a far greater result than the color tinting, but might not yield the correct highlight color. This can be achieved through other methods further down the page.



![](/hc/en-us/article_attachments/207932823/ColorMulitplier.PNG)



In this example, I have halved the normal state's original HSV value to 215 to 108 (HSV value are specified in integers). This then means once we apply the Color Multiplier to the normal state, it will look very close to the original button color. It also means that out highlight state, which was left as 255 (white), will be twice as bright when the highlighted color state is active (in effect, doubling the base color of RGB (255, 176, 59) to (510, 352, 118)).


- **Overlay layer**



![](/hc/en-us/article_attachments/207873546/Button_Overlay.gif)



Using an overlay allows you to add another sprite on top of the base button, which gives you great control over the final color of the highlight state.



![](/hc/en-us/article_attachments/207929466/Overlay.PNG)



In the image above, I have implemented the overlay highlight by placing the base state of the button on its own separate game object (Button\_OverlayLayer) with the button artwork.



![](/hc/en-us/article_attachments/207935363/Overlay02.PNG)



It took all the saturation from the Image component of the game object OverlayLayer and set its value to what I wanted the final highlight colour to be (it is a near white in this example, but you could have any colour). The button colour states were then set to be fully transparent for the normal colour (so that it has no effect by default) and then fully opaque in the highlighted colour state (this will show the colour set in the image component).


- **Animated**



![](/hc/en-us/article_attachments/207880783/Button_Animated.gif)



The last method is to use the Animation transition type. This allows you do many things within the transition (changing any keyable state on the game object or a parented game object like scale, position and rotation). In this transition, I had keyframed the highlighted trigger to animate the image component's color from the orange color to blue over 0.25 seconds.



![](/hc/en-us/article_attachments/207935663/Animated.PNG)







**More Information**



All the buttons used in this article can be found in the example project here: [Example project containing the buttons above.](/hc/article_attachments/207931346/ButtonKBArticle.zip)


- [https://docs.unity3d.com/Manual/script-Button.html](https://docs.unity3d.com/Manual/script-Button.html)
- https://docs.unity3d.com/Manual/script-SelectableTransition.html

