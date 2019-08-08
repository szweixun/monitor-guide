---
index: 3.04
---
### {{page.title}}
Accessors are required to access internal properties if the data is an Object or an Array. If nothing is entered, the value of the first line of Field1 is used by default.

- access to Array: `[0]`
```javascript
  // e.g. 
  [1, 2, 3, 4, 5, ...] // Assign accessor to [1]

  2 // Access result
```

- access to Object: `[value]` or `.value`  
```javascript
  // e.g.
  {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "key4": "value4",
    ...
  } // Assign accessor to [key2]

  "value2" // Access result
```
