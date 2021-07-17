# Homework - 5th week

## 오브젝트
### 동영상 (수코딩)
* https://www.youtube.com/watch?v=4ZvMxejkNZk

### 문제
1. sessionStorage를 이용하여 새로고침 마다 화면에 1씩 증가하게 만드시요. (처음 접근 하였을때 1이 출력 되고, 새로하면 1씩 증가 됨)

3. 

2. document.write 또는 document.writeln을 사용하여 화면에 아래와 같이 출력 하시오.
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
