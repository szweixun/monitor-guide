---
index: 3.07
---
### {{page.title}}
Specify a rule for the value of the data.  
1. **Value**: Assign the value of the data as it is. (The most basic options)
1. **MAP**: Convert to a specific value according to the value of the data. (In the example below, if the data value is 0, FillStyle is changed to green, 1 is yellow, and 2 is red.)  
![variable-rule-01][variable-rule-01]
1. **Range**: Set the value to be converted according to the range of the data value. (In the example below, FillStyle is changed to green when data value is less than 0 ~ 10, yellow when it is less than 10 ~ 20, and red when it is less than 20 ~ 30.)  
![variable-rule-02][variable-rule-02]
1. **Eval**: The function to manipulate data values ​​and component properties with JavaScript coding.  
  argument is as follows.
  - value: The data accessed through accessors.
  - this: The component received the data.  
  ![variable-rule-03][variable-rule-03]
  ```javascript
    // e.g. Change the value of the component by 'data value * 100'
    /* 
        receiveData = {
            "goodRate": 0.973,
            "badRate": 0.027,
            "goodCount": 19000,
            ...
        }

        accessor = goodRate

        value = 0.973
     */
    return value * 100 // value of the component: 97.3
  ```


[variable-rule-01]: {{ site.baseurl }}/assets/tutorials/variable-rule-01.png
{: height="200px" style="margin-bottom:30px; margin-top:5px; border: 8px; border-style: solid; border-color: #555"}
[variable-rule-02]: {{ site.baseurl }}/assets/tutorials/variable-rule-02.png
{: height="200px" style="margin-bottom:30px; margin-top:5px; border: 8px; border-style: solid; border-color: #555"}
[variable-rule-03]: {{ site.baseurl }}/assets/tutorials/variable-rule-03.png
{: height="200px" style="margin-bottom:30px; margin-top:5px; border: 8px; border-style: solid; border-color: #555"}
