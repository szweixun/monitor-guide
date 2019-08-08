---
index: 3.05
---
### {{page.title}}
Set the target to propagate the data value.  
There are three methods below.

1. Set up relative targets  
  - **(self)**: Target itself.
  - **(key)**: Target the components that match the key of data.  
    Used if the type of data is an Object.  
    ```javascript
    // e.g. 
        {
            "id1": 1,
            "id2": 2,
            "id3": 3
        } // Specify the target as (key)
        
        1 // Data of the component whose ID is id1
        2 // Data of the component whose ID is id2
        3 // Data of the component whose ID is id3
    ```

1. Set up via ID  
  - **#id**: Target the matching component by entering component ID.
  - **.class**: Target the matching components by entering component class.

1. Set up the target via the key value of the data  
  - **[dataKey]**: Target the component whose ID matches the value of dataKey corresponding to the input value.  
    Used if the type of data is Object-Array.
    ```javascript
    // e.g. 
        [{
            "id": "component-1",
            "value": "1"
        }, {
            "id": "component-2",
            "value": "2"
        }, {
            "id": "component-3",
            "value": "3"
        }] // Specify the target as [id]

        {
            "id": "component-1",
            "value": "1"
        } // Data of the component whose ID is component-1
        {
            "id": "component-2",
            "value": "2"
        } // Data of the component whose ID is component-2
        {
            "id": "component-3",
            "value": "3"
        } // Data of the component whose ID is component-3
    ```