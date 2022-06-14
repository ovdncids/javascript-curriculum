# Programmers Level 2

## 문자열 압축
[https://programmers.co.kr/learn/courses/30/lessons/60057](https://programmers.co.kr/learn/courses/30/lessons/60057)

## 오픈채팅방
[https://programmers.co.kr/learn/courses/30/lessons/42888](https://programmers.co.kr/learn/courses/30/lessons/42888)

## 124 나라의 숫자 (3일 동안 생각함)
[https://programmers.co.kr/learn/courses/30/lessons/12899](https://programmers.co.kr/learn/courses/30/lessons/12899)
<!--
```js
function solution(s) {
    let i = 1;
    let powLasts = 0;
    const pows = [];
    while (true) {
        powLasts += pows[pows.length - 1] || 0;
        pows.push(Math.pow(3, i++));
        if (s <= powLasts + pows[pows.length - 1]) {
            i--;
            break;
        }
    }
    let ternary = s - powLasts;
    let ternaryString = '';
    while (i > 1) {
        const beforePow = pows[i - 2];
        const calc = Math.ceil(ternary / beforePow);
        ternaryString += calc;
        ternary -= (beforePow * (calc - 1));
        i--;
    }
    ternaryString += (s % 3 || 3);
    return ternaryString.replace(/3/g, '4');
}
```
-->

## 기능개발
[https://programmers.co.kr/learn/courses/30/lessons/42586](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 타겟 넘버
[https://programmers.co.kr/learn/courses/30/lessons/43165](https://programmers.co.kr/learn/courses/30/lessons/43165)
* [경우의 수 만들기](https://github.com/ovdncids/javascript-curriculum/blob/master/homework/8week.md#8%EB%B9%84%ED%8A%B8-%EA%B2%BD%EC%9A%B0%EC%9D%98-%EC%88%98)
<!--
```js
function solution(numbers) {
    let answer = 0;
    const getAnswer = function (x, array) {
        // console.log(x, array);
        if (x < numbers.length) {
            getAnswer(x + 1, ((array[x] = true) || true) && array);
            getAnswer(x + 1, ((array[x] = false) || true) && array);
        } else {
            console.log(array);
        }
    }
    getAnswer(0, []);
    return answer;
}
solution([1, 1, 1, 1, 1]);
```
-->

## 짝지어 제거하기
[https://programmers.co.kr/learn/courses/30/lessons/12973](https://programmers.co.kr/learn/courses/30/lessons/12973)
