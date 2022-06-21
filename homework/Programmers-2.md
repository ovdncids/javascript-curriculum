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

## 행렬 테두리 회전하기
[https://programmers.co.kr/learn/courses/30/lessons/77485](https://programmers.co.kr/learn/courses/30/lessons/77485)
```sh
Left 부분 ⬇ (위에서 아래로, 마지막은 계산하지 않는다)
Bottom 부분 ➡ (왼쪽에서 오른쪽으로, 마지막은 계산하지 않는다)
Right 부분 ⬆ (아래에서 위로, 마지막은 계산하지 않는다)
Top 부분 ⬅ (오른쪽에서 왼쪽으로, 마지막은 계산하지 않는다)
처음칸이 이동할 위치에 처음값을 넣는다.
```
<!--
```js
function solution(rows, columns, queries) {
    const answer = [], result = [];
    let num = 1;
    for (let y = 0; y < rows; y++) {
        answer.push([]);
        for (let x = 0; x < columns; x++) {
            answer[y].push(num++);
        }
    }
    for (let index = 0; index < queries.length; index++) {
        const query = queries[index];
        const offset = {
            top: [],
            right: [],
            bottom: [],
            left: []
        };
        for (let y = query[0] - 1; y < query[2]; y++) {
            for (let x = query[1] - 1; x < query[3]; x++) {
                if (y === query[0] - 1) {
                    // 첫줄인 경우
                    offset.top.push({
                        x: x,
                        y: y,
                        value: answer[y][x]
                    });
                } else if (y === query[2] - 1) {
                    // 마지막 줄인 경우
                    offset.bottom.unshift({
                        x: x,
                        y: y,
                        value: answer[y][x]
                    });
                } else {
                    if (x === query[1] - 1) {
                        // 왼쪽인 경우
                        offset.left.unshift({
                            x: x,
                            y: y,
                            value: answer[y][x]
                        });
                    } else if (x === query[3] - 1) {
                        // 오른쪽인 경우
                        offset.right.push({
                            x: x,
                            y: y,
                            value: answer[y][x]
                        });
                    }
                }
            }
        }
        const offsets = [].concat(offset.top, offset.right, offset.bottom, offset.left);
        let min = offsets[0].value;
        // 회전 시키기
        for (let i = 0; i < offsets.length; i++) {
            const from = offsets[i];
            const to = offsets[(i + 1) % (offsets.length)];
            answer[to.y][to.x] = from.value;
            if (from.value < min) min = from.value;
        }
        result.push(min);
    }
    return result;
}
```
-->

## 메뉴 리뉴얼
[https://programmers.co.kr/learn/courses/30/lessons/72411](https://programmers.co.kr/learn/courses/30/lessons/72411)
```sh
요리 개수중에 가장 많이 주문된 코스만 담기
```

## 괄호 변환
[https://programmers.co.kr/learn/courses/30/lessons/60058](https://programmers.co.kr/learn/courses/30/lessons/60058)
```sh
올바른 괄호 문자열을 계산할때 주의 해야함
```
