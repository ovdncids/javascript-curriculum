# Homework - 6th week

## 내장함수 - html 태그, form 태그, pre 태그, document.getElementById
### 문제
1. html-homework 폴더 안에 아래와 같이 4개의 파일을 생성한다. 아래와 같이 출력 하시요. (async 또는 defer를 사용하시오)

    index.html
    ````html
    <script src="./index1.js"></script>
    <script src="./index2.js"></script>
    <script src="./index3.js"></script>
    ````
    index1.js
    ```js
    console.log('index1.js');
    ```
    index2.js
    ```js
    console.log('index2.js');
    ```
    index3.js
    ```js
    console.log('index3.js');
    ```
    출력
    ```
    index2.js
    index1.js
    index3.js
    ```

2. `원본 input box`에 값을 입력 후 `복사 버튼`을 누르면, `복사본1 input box`와 `복사본2 input box`에 `원본 input box`의 값을 넣기
    html-homework/homework6-2.html
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Quiz1</title>
      <script defer src="./homework6-2.js"></script>
    </head>
    <body>
      <form onsubmit="return false;">
        <input type="text" id="input-original" placeholder="원본" value="">
        <button onclick="copy();">복사</button>
        <input type="text" id="input-copy1" placeholder="복사본1" value="">
        <input type="text" id="input-copy2" placeholder="복사본2" value="">
      </form>
    </body>
    </html>
    ```

    html-homework/homework6-2.js
    ```js
    const copy = function() {
      console.log('copy');
      // 여기에 프로그램을 작성 해주세요.
    }
    ```

3. `form/membersForm.html`을 복사해서 `form/usersForm.html` 파일을 만들고,
   변수명이 members들어간 부분을 users로, member들어간 부분을 user로 변경 후 프로그램이 잘 돌아가는지 확인 하시요.
