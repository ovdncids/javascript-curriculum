# Homework - 7th week

## 내장함수 - Query string, document.getElementsByName, 새로 고침 없이 회원 CRUD
### 문제
1. `?queryString1=123&queryString2=abc` 이렇게 쿼리스트링을 URL 주소에 추가하고, 쿼리스트링으로 받은 값을 input 태그 2개에 각각 `123`, `abc` 넣기

2. `원본 input box`에 값을 입력 후 `복사 버튼`을 누르면, `div`태그 안으로 `원본 input box`태그를 복사해서 넣기
    html-homework/homework7-2.html
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quiz2</title>
      <script defer src="./homework7-2.js"></script>
    </head>
    <body>
      <input type="text" name="input-child" placeholder="원본" value="">
      <button onclick="copy();">복사</button>
      <div id="div-parent"></div>
    </body>
    </html>
    ```

    html-homework/homework7-2.js
    ```js
    const copy = function() {
      console.log('copy');
      // 여기에 프로그램을 작성 해주세요.
    }
    ```

3. `form/membersNoRefresh.html`을 복사해서 `form/usersNoRefresh.html` 파일을 만들고,
   `form/membersNoRefresh.js`을 복사해서 `form/usersNoRefresh.js` 파일을 만들고,
   변수명이 members들어간 부분을 users로, member들어간 부분을 user로 변경 후 프로그램이 잘 돌아가는지 확인 하시요.
