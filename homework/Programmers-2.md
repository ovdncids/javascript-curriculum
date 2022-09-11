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
* [경우의 수 만들기 (재귀 함수)](https://github.com/ovdncids/javascript-curriculum/blob/master/homework/8week.md#%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98)
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

## 괄호 회전하기
[https://school.programmers.co.kr/learn/courses/30/lessons/76502](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

## [1차] 뉴스 클러스터링
[https://programmers.co.kr/learn/courses/30/lessons/17677](https://programmers.co.kr/learn/courses/30/lessons/17677)

## 거리두기 확인하기
[https://programmers.co.kr/learn/courses/30/lessons/81302#fnref1](https://programmers.co.kr/learn/courses/30/lessons/81302#fnref1)

## 수식 최대화 (추천 & 감동)
[https://programmers.co.kr/learn/courses/30/lessons/67257](https://programmers.co.kr/learn/courses/30/lessons/67257)
```js
const numbers = [3, 1, 2];
Math.max(...numbers);
```
<!--
```js
function calc(numbers, signs, signsOrder) {
    for (let i = 0; i < signsOrder.length; i++) {
        const sign = signsOrder[i];
        for (let j = 0; j < signs.length; j++) {
            if (signs[j] === sign) {
                if (sign === '+') {
                    numbers[j] += numbers[j + 1];
                } else if (sign === '-') {
                    numbers[j] -= numbers[j + 1];
                } else {
                    numbers[j] *= numbers[j + 1];
                }
                numbers.splice(j + 1, 1);
                signs.splice(j--, 1);
            }
        }
    }
    return Math.abs(numbers[0]);
}

function solution(expression) {
    // 숫자와 기호 분리
    const numbers = [];
    const signs = [];
    for (let i = 1; i < expression.length; i++) {
        const str = expression[i];
        if (str === '+' || str === '-' || str === '*') {
            numbers.push(Number(expression.substring(0, i)));
            expression = expression.substring(i + 1);
            i = 0;
            signs.push(str);
        }
    }
    numbers.push(Number(expression));

    // 기호 개수 확인
    const signsCount = [...(new Set(signs))].sort();
    const sums = [];
    if (signsCount.length === 1) {
        sums.push(calc([...numbers], [...signs], [signsCount[0]]));
    } else if (signsCount.length === 2) {
        sums.push(calc([...numbers], [...signs], [signsCount[0], signsCount[1]]));
        sums.push(calc([...numbers], [...signs], [signsCount[1], signsCount[0]]));
    } else {
        sums.push(calc([...numbers], [...signs], [signsCount[0], signsCount[1], signsCount[2]]));
        sums.push(calc([...numbers], [...signs], [signsCount[0], signsCount[2], signsCount[1]]));
        sums.push(calc([...numbers], [...signs], [signsCount[1], signsCount[0], signsCount[2]]));
        sums.push(calc([...numbers], [...signs], [signsCount[1], signsCount[2], signsCount[0]]));
        sums.push(calc([...numbers], [...signs], [signsCount[2], signsCount[0], signsCount[1]]));
        sums.push(calc([...numbers], [...signs], [signsCount[2], signsCount[1], signsCount[0]]));
    }

    // 결과
    // console.log(numbers, signs, signsCount, sums);
    return Math.max(...sums);
}
```
-->
<!--
```js
function solution(expression) {
    const splitted = expression.split(/([\*\+-])/g);

    const solve = (precedence, left = 0, right = splitted.length) => {
        if (left + 1 === right) {
            return eval(splitted[left]);
        }
        for (const operator of precedence) {
            for (let i = right - 2; i > left; i -= 2) {
                if (splitted[i] === operator) {
                    return eval(`${solve(precedence, left, i)}${operator}${solve(precedence, i + 1, right)}`);
                }
            }
        }
        return Number.POSITIVE_INIFINITY;
    };

    return Math.max(
        ...[
            ['*', '+', '-'],
            ['*', '-', '+'],
            ['+', '*', '-'],
            ['+', '-', '*'],
            ['-', '*', '+'],
            ['-', '+', '*']
        ]
        .map((precedence) => solve(precedence))
        .map(Math.abs)
    );
}
```
-->

## 튜플
[https://programmers.co.kr/learn/courses/30/lessons/64065](https://programmers.co.kr/learn/courses/30/lessons/64065)

## 빛의 경로 사이클 (어려움)
[https://programmers.co.kr/learn/courses/30/lessons/86052](https://programmers.co.kr/learn/courses/30/lessons/86052)

## 프린터 (쉬움)
[https://programmers.co.kr/learn/courses/30/lessons/42587](https://programmers.co.kr/learn/courses/30/lessons/42587)

## 가장 큰 수 (재미)
[https://programmers.co.kr/learn/courses/30/lessons/42746](https://programmers.co.kr/learn/courses/30/lessons/42746)

## 소수 찾기
[https://programmers.co.kr/learn/courses/30/lessons/42839](https://programmers.co.kr/learn/courses/30/lessons/42839)
* [순열](https://github.com/ovdncids/javascript-curriculum/blob/master/homework/8week.md#%EC%88%9C%EC%97%B4)

## 조이스틱
[https://school.programmers.co.kr/learn/courses/30/lessons/42860](https://school.programmers.co.kr/learn/courses/30/lessons/42860)

## 게임 맵 최단거리 (추천 & 감동)
[https://school.programmers.co.kr/learn/courses/30/lessons/1844](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

## 예상 대진표 (쉬움)
[https://school.programmers.co.kr/learn/courses/30/lessons/12985](https://school.programmers.co.kr/learn/courses/30/lessons/12985)

## 순위 검색
[https://school.programmers.co.kr/learn/courses/30/lessons/72412](https://school.programmers.co.kr/learn/courses/30/lessons/72412)
```js
// 찾고자 하는 수, 이상의 수가 처음으로 나오는 위치를 찾는다
const lowerBound = (array, key, start = 0, end = array.length - 1, INF = 987654321) => {
  let result = INF;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] < key) {
      start = mid + 1;
      continue;
    }
    result = Math.min(result, mid);
    end = mid - 1;
  }
  return result === INF ? -1 : result;
};
console.log(lowerBound([12, 13, 13, 13, 14, 14, 15], 14));
```
```diff
// upperBound
// 찾고자 하는 수, 초과의 수가 처음으로 나오는 위치를 찾는다
- if (array[mid] < key) {
+ if (array[mid] <= key) {
```

## 후보키 (어려움)
[https://school.programmers.co.kr/learn/courses/30/lessons/42890](https://school.programmers.co.kr/learn/courses/30/lessons/42890)
* [조합](https://github.com/ovdncids/javascript-curriculum/blob/master/homework/8week.md#%EC%A1%B0%ED%95%A9-%EC%88%9C%EC%84%9C%EA%B0%80-%EC%A4%91%EC%9A%94%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EC%88%9C%EC%97%B4)
* [교집합](https://88240.tistory.com/519)

## 배달 (추천)
[https://school.programmers.co.kr/learn/courses/30/lessons/12978](https://school.programmers.co.kr/learn/courses/30/lessons/12978)
* [다익스트라](https://m.blog.naver.com/ndb796/221234424646)
<!--
```js
function solution(N, road, K) {
  // 길 만들기
  const ways = [];
  const nodes = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j === 0) ways[i] = [];
      ways[i][j] = i === j ? 0 : Infinity;
    }
    nodes[i] = { time: Infinity, visited: false };
    }
  nodes[0] = { time: 0, visited: true };

  // 길 그리기
  road.map(r => {
    ways[r[0] - 1][r[1] - 1] = r[2] < ways[r[0] - 1][r[1] - 1] ? r[2] : ways[r[0] - 1][r[1] - 1];
    ways[r[1] - 1][r[0] - 1] = r[2] < ways[r[1] - 1][r[0] - 1] ? r[2] : ways[r[1] - 1][r[0] - 1];
  });

  // nodes 방문 경로중 가장 작은 값 넣기
  for (let i = 1; i < nodes.length; i++) {
    nodes[i].time = ways[0][i];
  }

  // 가장 작은 값 찾기
  while (true) {
    let min = { time: Infinity, i: 0 };
    for (let i = 1; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node.visited && node.time < min.time) {
        min = { time: node.time, i: i };
      }
    }
    if (min.i === 0) break;
    nodes[min.i].visited = true;
    const way = ways[min.i];
    for (let i = 1; i < way.length; i++) {
      const w = way[i];
      if (w === Infinity || w === 0) continue;
      const time = min.time + w;
      if (time < nodes[i].time) {
        nodes[i].time = time;
      }
    }
  }

  // K 시간 이하 찾기
  let count = 1;
  for (let i = 1; i < nodes.length; i++) {
    if (nodes[i].time <= K) count++;
  }

  console.log(nodes);
  console.log(ways);
  console.log(road);
  return count;
}
```
-->

## 2 x n 타일링 (감동)
[https://school.programmers.co.kr/learn/courses/30/lessons/12900](https://school.programmers.co.kr/learn/courses/30/lessons/12900)
* [힌트](https://ko.wikipedia.org/wiki/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98_%EC%88%98)

## 멀리 뛰기 (2 x n 타일링과 비슷)
[https://school.programmers.co.kr/learn/courses/30/lessons/12914](https://school.programmers.co.kr/learn/courses/30/lessons/12914?language=javascript)

## 위장
[https://school.programmers.co.kr/learn/courses/30/lessons/42578](https://school.programmers.co.kr/learn/courses/30/lessons/42578)

## 다리를 지나는 트럭 (쉬움)
[https://school.programmers.co.kr/learn/courses/30/lessons/42583](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

## H-Index
[https://school.programmers.co.kr/learn/courses/30/lessons/42747#fn1](https://school.programmers.co.kr/learn/courses/30/lessons/42747#fn1)

## 카펫 (수학)
[https://school.programmers.co.kr/learn/courses/30/lessons/42842](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

## 큰 수 만들기 (어려움, 감동)
[https://school.programmers.co.kr/learn/courses/30/lessons/42883](https://school.programmers.co.kr/learn/courses/30/lessons/42883)

* <details><summary>힌트</summary>

  ```sh
  조합 말고(시간 초과 발생), 스텍(배열)을 사용 해야함
  ```
</details>

## 피로도
[https://school.programmers.co.kr/learn/courses/30/lessons/87946](https://school.programmers.co.kr/learn/courses/30/lessons/87946)

## [1차] 프렌즈4블록 (추천 & 재미)
[https://school.programmers.co.kr/learn/courses/30/lessons/17679](https://school.programmers.co.kr/learn/courses/30/lessons/17679)
* 테트리스 개발시 도움

## 2개 이하로 다른 비트 (재미)
[https://school.programmers.co.kr/learn/courses/30/lessons/77885](https://school.programmers.co.kr/learn/courses/30/lessons/77885)

## 삼각 달팽이 (재미)
[https://school.programmers.co.kr/learn/courses/30/lessons/68645](https://school.programmers.co.kr/learn/courses/30/lessons/68645)

## 영어 끝말잇기 (쉬움)
[https://school.programmers.co.kr/learn/courses/30/lessons/12981](https://school.programmers.co.kr/learn/courses/30/lessons/12981)

## 구명보트
[https://school.programmers.co.kr/learn/courses/30/lessons/42885](https://school.programmers.co.kr/learn/courses/30/lessons/42885)

## 교점에 별 만들기 (재미)
[https://school.programmers.co.kr/learn/courses/30/lessons/87377](https://school.programmers.co.kr/learn/courses/30/lessons/87377)

## 전력망을 둘로 나누기
[https://school.programmers.co.kr/learn/courses/30/lessons/86971](https://school.programmers.co.kr/learn/courses/30/lessons/86971)

## 모음사전
[https://school.programmers.co.kr/learn/courses/30/lessons/84512](https://school.programmers.co.kr/learn/courses/30/lessons/84512)

## [1차] 캐시
[https://school.programmers.co.kr/learn/courses/30/lessons/17680](https://school.programmers.co.kr/learn/courses/30/lessons/17680)
* [LRU Cache 알고리즘](https://blo9.xyz/2020/08/10/Coding/Algorithm/JavaScript1/lru_cache/)

## 이진 변환 반복하기 (쉬움)
[https://school.programmers.co.kr/learn/courses/30/lessons/70129](https://school.programmers.co.kr/learn/courses/30/lessons/70129)

## 점프와 순간 이동
[https://school.programmers.co.kr/learn/courses/30/lessons/12980](https://school.programmers.co.kr/learn/courses/30/lessons/12980)

## 3 x n 타일링 (어려움)
[https://school.programmers.co.kr/learn/courses/30/lessons/12902](https://school.programmers.co.kr/learn/courses/30/lessons/12902)

## n^2 배열 자르기
[https://school.programmers.co.kr/learn/courses/30/lessons/87390](https://school.programmers.co.kr/learn/courses/30/lessons/87390)

## 쿼드압축 후 개수 세기
[https://school.programmers.co.kr/learn/courses/30/lessons/68936](https://school.programmers.co.kr/learn/courses/30/lessons/68936)

## 스킬트리
[https://school.programmers.co.kr/learn/courses/30/lessons/49993](https://school.programmers.co.kr/learn/courses/30/lessons/49993)

## 방문 길이
[https://school.programmers.co.kr/learn/courses/30/lessons/49994](https://school.programmers.co.kr/learn/courses/30/lessons/49994)

## [3차] 방금그곡 (추천 & 재미)
[https://school.programmers.co.kr/learn/courses/30/lessons/17683](https://school.programmers.co.kr/learn/courses/30/lessons/17683)

## 가장 큰 정사각형 찾기 (수학)
[https://school.programmers.co.kr/learn/courses/30/lessons/12905](https://school.programmers.co.kr/learn/courses/30/lessons/12905)
```js
// 거듭제곱
10 ** 2; // 같음 Math.pow(10, 2);
```

## [3차] 압축
[https://school.programmers.co.kr/learn/courses/30/lessons/17684](https://school.programmers.co.kr/learn/courses/30/lessons/17684)

## [3차] 파일명 정렬 (정렬)
[https://school.programmers.co.kr/learn/courses/30/lessons/17686](https://school.programmers.co.kr/learn/courses/30/lessons/17686)
```js
const a = 'abc10def20'.match(/[0-9]+/);
console.log(a[0]);
```

## 올바른 괄호
[https://school.programmers.co.kr/learn/courses/30/lessons/12909](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

## [3차] n진수 게임
[https://school.programmers.co.kr/learn/courses/30/lessons/17687](https://school.programmers.co.kr/learn/courses/30/lessons/17687)

## 다음 큰 숫자
[https://school.programmers.co.kr/learn/courses/30/lessons/12911](https://school.programmers.co.kr/learn/courses/30/lessons/12911)

## 땅따먹기 (수학)
[https://school.programmers.co.kr/learn/courses/30/lessons/12913](https://school.programmers.co.kr/learn/courses/30/lessons/12913)
```sh
DP (Dynamic Programming)
```

## k진수에서 소수 개수 구하기 (소수)
[https://school.programmers.co.kr/learn/courses/30/lessons/92335](https://school.programmers.co.kr/learn/courses/30/lessons/92335)

## 숫자의 표현
[https://school.programmers.co.kr/learn/courses/30/lessons/12924](https://school.programmers.co.kr/learn/courses/30/lessons/12924)

## 최댓값과 최솟값
[https://school.programmers.co.kr/learn/courses/30/lessons/12939](https://school.programmers.co.kr/learn/courses/30/lessons/12939)

## JadenCase 문자열 만들기
[https://school.programmers.co.kr/learn/courses/30/lessons/12951](https://school.programmers.co.kr/learn/courses/30/lessons/12951)
