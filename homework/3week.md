# Homework - 3th week

## function
### 동영상 (수코딩)
* https://www.youtube.com/watch?v=NcHBFk1Yn-8
* https://www.youtube.com/watch?v=WPoORBtCQa8
* https://www.youtube.com/watch?v=B5JWd9v5G78

### 문제 (모든 문제는 function을 사용 하세요)
1. 프리랜서 개발자A가 월 500만원을 받고 있다. 3.3% 원천징수를 때고, 월 의료보험 10만원을 낸다.

   프리랜서 개발자B가 월 600만원을 받고 있다. 3.3% 원천징수를 때고, 월 의료보험 15만원을 낸다.

   개발자A와 개발자B가 각각 1년동안 한푼도 쓰지않고 모을 수 있는 금액은?

2. 배열의 `마지막 요소(lastIndex)`에 1 더해주는 함수를 만들고, 아래 상수를 인수로 하나씩 넣고, 해당 인수마다 2번씩 호출 하시오. (총 6번 함수가 호출 됨)

   프로그램 만들기 전에, 함수 호출 완료 후 변경될 `a, b, c` 상수의 값들을 예상해보고, 프로그램 완료 후에 값과 비교해 보기
    ```js
    const a = [1, 2, 3];
    const b = ['a', 'b', 'c', 'd'];
    const c = 'abcde';
    ```

3. for문 부분을 함수로 만들고, 만든 함수를 3번 호출 하여 아래 출력과 동일하게 만드시오.
    ```js
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const array11 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const array21 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    let total1 = 0;
    for (let index = 0; index < array1.length; index++) {
      total1 += array1[index];
    }
    console.log(array1[0] + '부터 ' + array1[array1.length - 1] + '까지의 합은 ' + total1 + '이고, 평균은 ' + (total1 / array1.length) + '이다.');

    total1 = 0;
    for (let index = 0; index < array11.length; index++) {
      total1 += array11[index];
    }
    console.log(array11[0] + '부터 ' + array11[array11.length - 1] + '까지의 합은 ' + total1 + '이고, 평균은 ' + (total1 / array11.length) + '이다.');

    total1 = 0;
    for (let index = 0; index < array21.length; index++) {
      total1 += array21[index];
    }
    console.log(array21[0] + '부터 ' + array21[array21.length - 1] + '까지의 합은 ' + total1 + '이고, 평균은 ' + (total1 / array21.length) + '이다.');
    ```
    출력
    ```
    1부터 10까지의 합은 55이고, 평균은 5.5이다.
    11부터 20까지의 합은 155이고, 평균은 15.5이다.
    21부터 30까지의 합은 255이고, 평균은 25.5이다.
    ```

4. 함수 2개가 있다. 함수 하나는 서버와 연결 하는 함수이고, 하나는 서버 연결 후에 호출 되는 함수이다. `?` 부분을 수정해서 다음을 출력 하시오.
    ```js
    const afterFunc = function() {
      console.log('콜백 함수 호출');
    };
    const connectFunc = function(callback) {
      console.log('서버 연결');
      ?
      console.log('연결 종료');
    };
    connectFunc(afterFunc);
    ```
    출력
    ```
    서버 연결
    콜백 함수 호출
    연결 종료
    ```

5. `membersFunction2.html`을 복사해서 `usersFunction.html` 파일을 만들고,
   변수명이 members들어간 부분을 users로, member들어간 부분을 user로 변경 후 `Console 창`에서 프로그램이 잘 돌아가는지 확인 하시요.
    ```js
    // Create
    usersCreate('홍길동');

    // Read
    usersRead();

    // Update
    usersUpdate(0, '김유신');

    // Delete
    usersDelete(0);
    ```
