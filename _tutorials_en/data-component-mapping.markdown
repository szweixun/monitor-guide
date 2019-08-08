---
index: 3.02
---
### {{page.title}}
Describe how data and components are mapped..

1. Click the Data tab, which is the 5th tab of the Property window..
1. Assign ID to the Component. Data coming from the server maps its key (data name) to the ID of the same component. (_That is, component ID and data key should be the same._)  
![variable-insert-01][variable-insert-01]  
1. Enter ID of the target. The target can be itself and it can share the same data with other components.
1. [Enter the property to be changed.](#data-mapping-property) Property determines which properties of the component should be changed when the data is received.
1. Enter the default value in the table. The default value is the initial value of the data before data of the actual data is received. If the data is not in array format, the default value will recognize only the data of the first line of Field1, as shown in the image below.  
![variable-insert-02][variable-insert-02]
1. The value of the data is entered as 'data' property of the component. To use this value in other properties of the component, you can enter #{data} in Property input window.  
_**( Enter #{property\_name} to replace the value of the corresponding property. )**_
![variable-insert-03][variable-insert-03]


[variable-insert-01]: {{site.baseurl}}/assets/tutorials/variable-insert-01.png
{: style="height:350px; vertical-align:middle;" style="margin-bottom: 15px"}

[variable-insert-02]: {{site.baseurl}}/assets/tutorials/variable-insert-02.png
{: style="height:200px; vertical-align:middle;" style="margin-bottom: 15px"}

[variable-insert-03]: {{site.baseurl}}/assets/tutorials/variable-insert-03.png
{: style="height:200px; vertical-align:middle;" style="margin-bottom: 15px"}
