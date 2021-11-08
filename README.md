# HeyIta
Ita is the name of the foreign worker who lives in my house. It is used to remind her on time when she has to complete any tasks.

This application is based on google app scripts platform.

Google Sheet document content like this:
![image](https://user-images.githubusercontent.com/6059266/140681771-b8de6adc-06ef-4081-9cce-7895c6362bd4.png)

Before executing the application script, you must modify these parameters in the global.gs file.

```
//google sheet
var _google_sheet_url = "YOUR GOOGLE SHEET URL";
var _google_sheet_name = "YOUR GOOGLE SHEET NAME";

//line token
var _line_token = "YOUR LINE NOTIFY TOKEN";
```

coderbridge: [HeyIta](https://ericapppool.coderbridge.io/2021/11/05/hey-ita/)

2021/11/8 add new feature:
Automatic translation via google translate api
