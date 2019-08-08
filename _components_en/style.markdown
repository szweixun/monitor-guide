---
index: 0.02
---
### {{page.title}}
The window in which can set the style property of component. It describes about the style property.

- Transparency: Set the transparency of component. (0 ~ 1, 0: Invisible, 1: Visible)
- Text style
  - Font: Set the font of component text.
  - Font size: Set the size of component text.
  - Line spacing: Set the line spacing of component text.
  - Color: Set the color of component text.
  - Bold: Set the text of component bold.
  - Italic: Set the text of component italic.

- Fill style
  - No Fill: Clear the background.
  - Solid: Fill the background with a solid color.
  - Gradient: Apply the gradient to background.
    - Type: Linear Gradient (Shade from one color to another along a line), Radial Gradient (Shade one interior color and the other exterior color along a circular pattern)
    - Rotation: Rotate the background by the set angle.
    - Direction: Can select a background of a desired angle (increase/decrease by 45 degrees) from the dropdown list.
    - Color stop: It is a color wheel that specifies the color on both sides of the gradient slider.
  - Pattern: Insert the image as pattern.
    - Image: Select the image in the file store.
    - Align: Align Left Top, Top, Right Top, Left, Center, Right, Left Bottom, Bottom, Right Bottom.
    - Offset X: Move the entire background horizontally by a certain value from the starting point.
    - Offset Y: Move the entire background vertically by a certain value from the starting point.
    - Width: Set the width of each single image inserted as a pattern.
    - Height: Set the height of each single image inserted as a pattern.
    - Fit: Set the single image inserted as a pattern to the background of the scene.
- The line style
  - Thickness: Set the thickness of line.
  - Color: Set the color of line.
  - Line style: Set the line style. (Straight line, dotted line)
  - Line end style: Set the line end style. (Square, round)
  - Lined style: Set the style of point where lines are connected.  
    (miter : ![miter][miter], round : ![round][round], bevel : ![bevel][bevel])
  - Start shape: Set the start shape of line.
  - Start size: Set the start size of line.
  - End shape: Set the end shape of line.
  - End size: Set the end size of line.


[miter]: {{ site.baseurl }}/assets/components/join-type-miter.png
{: height="30px "}

[round]: {{ site.baseurl }}/assets/components/join-type-round.png
{: height="30px "}

[bevel]: {{ site.baseurl }}/assets/components/join-type-bevel.png
{: height="30px "}
