---
index: 3.09
---
### {{page.title}}

- Array Type  
  Return the execution result of SQL as a list.

  **Input field :**  
  - data key : The name to hold the SQL execution result.

  For example, when SQL, Record Set and data key are as below
    ```sql
  SELECT ID, AGE, DEPARTMENT, WORK_YEAR FROM EMPLOYEE
    ```  

    |---------+-----+-------------+-----------|
    | ID      | AGE | DEPARTMENT  | WORK_YEAR |
    |---------|----:|-------------|----------:|
    | e00001  | 30  | SALES       | 1         |
    | e00002  | 37  | DEVELOPMENT | 5         |
    | e00003  | 45  | HR          | 12        |
    |---------+-----+-------------+-----------|

  data key: data  

  The result is as follows.
    ```json
  {
    "data": [{
      "ID": "e00001",
      "AGE": 30,
      "DEPARTMENT": "SALES",
      "WORK_YEAR": 1
    }, {
      "ID": "e00002",
      "AGE": 37,
      "DEPARTMENT": "DEVELOPMENT",
      "WORK_YEAR": 5
    }, {
      "ID": "e00003",
      "AGE": 45,
      "DEPARTMENT": "HR",
      "WORK_YEAR": 12
    }]
  }
    ```
- Key-Value Type
  Return the execution result of SQL as JSON Object of key-value type.

  **Input field :**  
  - key field : The field name to hold the SQL execution result. (The record value of the field becomes the key.)  
  - value field : The field name to be used as the value among the SQL execution result. (The record value of the field becomes the value.)

  For example, when SQL, Record Set, key field and value field are as below

    ```sql
  SELECT ID, AGE, DEPARTMENT, WORK_YEAR FROM EMPLOYEE
    ```

    |---------+-----+-------------+-----------|
    | ID      | AGE | DEPARTMENT  | WORK_YEAR |
    |---------|----:|-------------|----------:|
    | e00001  | 30  | SALES       | 1         |
    | e00002  | 37  | DEVELOPMENT | 5         |
    | e00003  | 45  | HR          | 12        |
    |---------+-----+-------------+-----------|

  key field: ID, value field: DEPARTMENT

  The result is as follows.  
    ```json
  {
    "e00001": "SALES",
    "e00002": "DEVELOPMENT",
    "e00003": "HR"
  }
    ```  

- Key-Object Type  
  Return the execution result of SQL as JSON Object of Key-Object type.

  **Input field :**  
  - key field : The field name to hold the SQL execution result. (The record value of the field becomes the key.)


  For example, when SQL, Record Set, key field are as below

    ```sql
  SELECT ID, AGE, DEPARTMENT, WORK_YEAR FROM EMPLOYEE
    ```

    |---------+-----+-------------+-----------|
    | ID      | AGE | DEPARTMENT  | WORK_YEAR |
    |---------|----:|-------------|----------:|
    | e00001  | 30  | SALES       | 1         |
    | e00002  | 37  | DEVELOPMENT | 5         |
    | e00003  | 45  | HR          | 12        |
    |---------+-----+-------------+-----------|


  key field: ID  

  The result is as follows.
    ```json
  {
    "e00001": {
      "AGE": 30,
      "DEPARTMENT": "SALES",
      "WORK_YEAR": 1
    },
    "e00002": {
      "AGE": 37,
      "DEPARTMENT": "DEVELOPMENT",
      "WORK_YEAR": 5
    },
    "e00003": {
      "AGE": 45,
      "DEPARTMENT": "HR",
      "WORK_YEAR": 12
    }
  }
    ```

- Single Row Type  
  Return the execution result of SQL as JSON Object.
  The result must have only one row.

  **Input field :**  
  - Data Key(optional) : The name to hold the SQL execution result.

  For example, when SQL and Record Set are as below
    ```sql
  SELECT ID, AGE, DEPARTMENT, WORK_YEAR FROM EMPLOYEE LIMIT 1
    ```

    |---------+-----+-------------+-----------|
    | ID      | AGE | DEPARTMENT  | WORK_YEAR |
    |---------|----:|-------------|----------:|
    | e00001  | 30  | SALES       | 1         |
    |---------+-----+-------------+-----------|


    The result of the data key is as follows.
    1. If the data key is data  
    ```json
  {
    "data": {
      "ID": "e00001",
      "AGE": 30,
      "DEPARTMENT": "SALES",
      "WORK_YEAR": 1
    }
  }
    ```   
    1. If the data key is blank  
    ```json
  {
    "ID": "e00001",
    "AGE": 30,
    "DEPARTMENT": "SALES",
    "WORK_YEAR": 1
  }
    ```
