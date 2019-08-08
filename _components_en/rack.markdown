---
index: 10.01
---
### {{page.title}}
![Component-Rack][rack-01]

The component which is used to display warehouse rack. It can apply the height and layer, and can give a unique ID number in each rack and layer.

- Category : WareHouse
- Property :
1. Depth(Number) - The height of one layer when converted to 3D modeling.
1. Shelves(Number) - The number of layer when converted to 3D modeling.
1. Location Pattern(String) - The pattern which is defined when give a unique ID number in the location and layer of rack. Define the pattern of Z(Zone), S(Selection), U(Unit), Sh(Shelf) in {}.
1. Zone(String) - The value of Zone which will be applied to the pattern.
1. Selection(String) - The selection value which will be applied to the pattern.
1. Unit(String) - The Unit value which will be applied to the pattern.
1. Shelf Pattern(String) - The value of Shelf Pattern which will be applied to the pattern.  
   \# - Dynamically apply the number of layer.  
   0 - Fix the number of digits of layers according to the number of 0. (ex. 0 = 0~9 / 00 = 00~99)



[rack-01]: {{site.baseurl}}/assets/components/rack-01.png
{: height="200px"}
