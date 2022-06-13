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
