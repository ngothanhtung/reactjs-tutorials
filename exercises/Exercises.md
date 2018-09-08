### Components:
0. Input: Required, invalid:border => red, icon
1. Input: Email, invalid:border => red, icon
2. Input: Number, invalid:border => red, icon
3. Quiz: 
   - QuestionItem, 4 chọn 1, đúng / sai.
   - List (many question)

### Form:
1. Login form (Email TextInput component, Password TextInput component, Login Button with Icon)

### Async
1. POSTMAN tools
2. Login form with async (https://slacklivechat.com/users/login)
   - POST
   - JSON
   - Data: {username, password}
   - Response (json): admin / 123456789 => 'Login OK' / 'Login failed'

3. Get json from remote host (https://github.com/typicode/jsonplaceholder#how-to)

4. Translation tools (https://slacklivechat.com/translate/translate)
  - POST
  - JSON
  - Data : {"text": "mouse"}
  - Response (text): translated text

### Async Quiz:
1. Data: https://slacklivechat.com/question


## Quiz Application (08.09.2018)
### Front-end
1. Register (Email, FullName, Password, Phone)
2. Login (Email, Password)
3. Test: Timmer: 10 minutes, Type: One Choice Questions. After user answered 1 question, then post result to back-end.
4. Result (100%)
### Back-end
1. Register (POST)
2. Login (POST)
3. Test (GET + POST)
4. Result (GET)

### Requirements:
1. Front-end: Reactjs (React-Redux pattern + React-Router), UI: Bootstrap: Reactstrap npm
2. Back-end: Expressjs
3. Database: Mongodb