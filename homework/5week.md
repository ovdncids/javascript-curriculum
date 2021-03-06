# Homework - 5th week

## 내장함수 - sessionStorage, document.write, html 태그
### 동영상 (수코딩)
* https://www.youtube.com/watch?v=4ZvMxejkNZk

### 문제
1. sessionStorage를 이용하여 새로고침 할때 마다 화면에 1씩 증가하게 만드시요. (처음 접근 하였을때 화면에 1이 출력 되고, 새로고침 하면 1씩 증가 됨)

2. localStorage를 이용하여 새로고침 할때 마다 화면에 `홀수`와 `짝수`를 번가라가며 출력 하시오. (Javascript 기초수업의 `홀수와 짝수 표현하기` 부분 참조)

3. document.write 또는 document.writeln을 사용하여 화면에 아래와 같이 출력 하시오.
    ```
    # MainQuery
    select members.name from (
     /* SubQuery */
     select '홍길동' as name, 39 as age
    ) members;
    ```

4. `storage.html`을 복사해서 `storageUsers.html` 파일을 만들고,
   변수명이 members들어간 부분을 users로, member들어간 부분을 user로 변경 후 `Console 창`에서 프로그램이 잘 돌아가는지 확인 하시요.
    ```js
    // Create
    usersCreate({
      name: '홍길동',
      age: 20
    });

    // Read
    usersRead();

    // Update
    usersUpdate(0, {
      name: '김유신',
      age: 30
    });

    // Delete
    userssDelete(0);
    ```

5. html-homework 폴더 안에 아래와 같이 4개의 파일을 생성한다. 아래와 같이 출력 하시요. (async 또는 defer를 사용하시오)

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
