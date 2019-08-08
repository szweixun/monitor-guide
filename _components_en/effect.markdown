---
index: 0.03
---

### {{page.title}}
The window which can control the effect of component. You can add shadow effect in component or define animation and click event which will run in monitoring mode.


- **Shadow**  
![shadow-02][shadow-02]  
Set the shadow effect of component. It can adjust the location, blurring effect and color of shadow.
1. X, Y coordinates (Number) - Adjust the coordinates for a location of shadow based on component.
![shadow-03][shadow-03]
1. Size(Number) - Adjust the blurring effect of shadow.
![shadow-04][shadow-04]
1. Color(Number) - Adjust the color of shadow.
![shadow-05][shadow-05]

- **Retention**  
The length of time that the component remains on the board. That is, when the retention ends, the component disappears from the board.  
However, when a change occurs in the component property within the retention, the moment of the retention will be reset.

- **Animation**  
![animation-01][animation-01]  
You can set the animations of component which will run when converts to preview and monitoring mode.
  - Event point
  1. onCreate - Operate animation from the moment of running view mode.
  1. onChange - Operate when the data of component has been changed.
  - Animation type
  1. Rotation-CW  
  ![animation-02][animation-02]  
  1. Rotation-CWW  
  ![animation-03][animation-03]  
  1. Vibration  
  ![animation-04][animation-04]  
  1. Hearbeat  
  ![animation-05][animation-05]  
  1. Moving-Right  
  ![animation-06][animation-07]  
  1. Moving-Left  
  ![animation-07][animation-06]  
  1. Moving-Bottom  
  ![animation-08][animation-09]  
  1. Moving-Top  
  ![animation-09][animation-08]  
  1. Outline  
  ![animation-10][animation-10]  


- **Hover event**  
Set the event which will be fired when the cursor of mouse is over the component. After creating the variable, set the variable and the value of variable which will be changed when the mouse is over the component.
  - Highlight - Highlight the border when the cursor of mouse is over the component.  
  **(When checked, the mouse event will also be applied in 'tab event'.)**  
  ![hover-01][hover-01]  
  - Variable information - Select the variable which will change the value when the cursor of mouse is over the component.
  - Value - Change the value of selected variable when the cursor of mouse is over the component.




- **Tab event**  
Set the event which will be fired when the component is clicked. It basically provides ‘GoTo’, ‘Link Open’, ‘Link Move’, and can set the variable and the value of variable which will be changed when the component is clicked after the user additionally creating variable.  
  **(If want to fire a highlight event when the mouse is over the component, you can select 'highlight' of 'hover event'.)**  
  - Variable information - Select the variable which will change the value when the component is selected.
   1. GoTo - Move to the screen of the corresponding SCENE.
   1. StopPlaying - 
   1. LinkOpen - Open the corresponding URL in a new window.
   1. LinkMove - Move to the corresponding URL.
   1. InfoWindow - 
   1. (Component variable) – The data of component.
  - Value – Change the value of selected variable when the component is clicked.




[shadow-02]: {{site.baseurl}}/assets/components/properties/shadow-02.png
{: height="200px" }

[shadow-03]: {{site.baseurl}}/assets/components/properties/shadow-03.png
{: height="200px" }

[shadow-04]: {{site.baseurl}}/assets/components/properties/shadow-04.png
{: height="200px" }

[shadow-05]: {{site.baseurl}}/assets/components/properties/shadow-05.png
{: height="200px" }


[animation-01]: {{site.baseurl}}/assets/components/properties/animation-01.gif
{: width="400" height="100px" style="margin-bottom: 30px; margin-left:100px"}

[animation-02]: {{site.baseurl}}/assets/components/properties/animation-02.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-03]: {{site.baseurl}}/assets/components/properties/animation-03.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-04]: {{site.baseurl}}/assets/components/properties/animation-04.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-05]: {{site.baseurl}}/assets/components/properties/animation-05.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-06]: {{site.baseurl}}/assets/components/properties/animation-06.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-07]: {{site.baseurl}}/assets/components/properties/animation-07.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-08]: {{site.baseurl}}/assets/components/properties/animation-08.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-09]: {{site.baseurl}}/assets/components/properties/animation-09.gif
{: width="200px" height="200px" style="margin-bottom: 30px"}

[animation-10]: {{site.baseurl}}/assets/components/properties/animation-10.gif
{: width="500px" height="300px" style="margin-bottom: 30px"}


[hover-01]: {{site.baseurl}}/assets/components/properties/hover-01.png
{: height="200px" }
