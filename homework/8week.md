# Homework - 8th week

## 코딩 테스트 문제
### 문제
1. 시험 문제 3개가 있다. 문제는 `questions`, 응답은 `answers`로 정의 되어 있다. `questions`와 `answers`를 이용하여 아래 `정답`과 같이 출력 하시오.
```js
const questions = [{
  question: "1번 문제. 1 + 1은?",
  options: [1, 2, 3, 4],
  answer: null
}, {
  question: "2번 문제. '1' + '1'은?",
  options: [2, '2', 11, '11'],
  answer: null
}, {
  question: "3번 문제. const a = null || abc'; a의 값은?",
  options: [true, false, 'abc', null],
  answer: null
}];

const answers = [2, 4, 3];
```
```js
// 정답
[{
  question: "1번 문제. 1 + 1은?",
  options: [1, 2, 3, 4],
  answer: 2
}, {
  question: "2번 문제. '1' + '1'은?",
  options: [2, '2', 11, '11'],
  answer: 4
}, {
  question: "3번 문제. const a = null || abc'; a의 값은?",
  options: [true, false, 'abc', null],
  answer: 3
}];
```

## 8비트 경우의 수
### 하드코딩
```js
const hardWays = [];
for (let i1 = 0; i1 <= 1; i1++) {
  for (let i2 = 0; i2 <= 1; i2++) {
    for (let i3 = 0; i3 <= 1; i3++) {
      for (let i4 = 0; i4 <= 1; i4++) {
        for (let i5 = 0; i5 <= 1; i5++) {
          for (let i6 = 0; i6 <= 1; i6++) {
            for (let i7 = 0; i7 <= 1; i7++) {
              for (let i8 = 0; i8 <= 1; i8++) {
                hardWays.push([i1, i2, i3, i4, i5, i6, i7, i8]);
              }
            }
          }
        }
      }
    }
  }
}
console.log(hardWays);
```

### 재귀함수
```js
const numberOfCases = function (degree, index = 0, cases = [], ways = []) {
  if (index < degree) {
    numberOfCases(degree, index + 1, [...cases, 0], ways);
    numberOfCases(degree, index + 1, [...cases, 1], ways);
  } else {
    ways.push(cases);
  }
  return ways;
}
const ways = numberOfCases(8);
console.log(ways);

console.log(JSON.stringify(hardWays) === JSON.stringify(ways));
```
<!--
```js
const numberOfCases = function(degree) {
  const ways = [];
  const indexes = [];
  const repeat = function(ways, indexes, degree) {
    for (indexes[degree - 1] = 0; indexes[degree - 1] <= 1; indexes[degree - 1]++) {
      if (degree === 1) {
        ways.push([...indexes].reverse());
      } else {
        repeat(ways, indexes, degree - 1);
      }
    }
    return ways;
  }
  repeat(ways, indexes, degree);
  return ways;
}
const cases = numberOfCases(8);
console.log(cases);

console.log(JSON.stringify(ways) === JSON.stringify(cases));
```
-->

## 순열
```js
const permutation = (cards, fromIndex = cards.length, order = cards, results = []) => {
  if (fromIndex === 1) {
    results.push(order.join(''));
    // results.push(order);
    return;
  };
  const firstIndex = cards.length - fromIndex;
  for (let i = firstIndex; i < cards.length; i++) {
    const nOrder = [...order];
    const nIndex = i % cards.length;
    nOrder[nIndex] = nOrder[firstIndex];
    nOrder[firstIndex] = order[nIndex];
    permutation(cards, fromIndex - 1, nOrder, results);
  }
    return results;
};
const results = permutation('ABC'.split(''));
console.log(results);
console.log(results.sort());
```
* [순열](https://ovdncids.github.io/javascript-curriculum/images/Permutation.gif)
* `ABC` 카드의 순서를 가지고 만들 수 있는 `경우의 수` (ABC, ACB, BAC, BCA, CBA, CAB)

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|:---|:---|:---|:---|:---|:---|:---|:---|
| 1 | 2 | 6 | 24 | 120 | 720 | 5040 | 40320 | 362880 |

* 9자리 수부터 연산 결과가 1초를 넘게 된다.

## 조합 (순서가 중요하지 않은 순열)
### 하드코딩
```js
const combinations = [];
for (let i = 0; i < 4; i++) {
  for (let j = i + 1; j < 4; j++) {
    for (let k = j + 1; k < 4; k++) {
      combinations.push([i, j, k]);
    }
  }
}
console.log(combinations);
```
```js
// 4개(0, 1, 2, 3)의 숫자 중, 3가지를 조합하여 만들 수 있는 경우의 수
[
  [0, 1, 2],
  [0, 1, 3],
  [0, 2, 3],
  [1, 2, 3]
]
```

### 재귀함수
```js
const makeCombinations = function(cases, length, i = 0, combinations = []) {
  // 인덱스가 0이면 0, 이상이면, 앞에 인덱스에서 1 더한다.
  cases[i] = i === 0 ? 0 : cases[i - 1] + 1;
  for (; cases[i] < length; cases[i]++) {
    if (i + 1 === cases.length) {
      combinations.push([...cases]);
      continue;
    }
    makeCombinations(cases, length, i + 1, combinations);
  }
  return combinations;
};
console.log(makeCombinations(Array(3).fill(0), 4));
// 4가지 숫자 중에 3개만 선택 가능한 조합 만들기
// console.log(makeCombinations([0, 0, 0], 4));
```
* [조합](https://aerocode.net/376#%EC%A1%B0%ED%95%A9-combination)

## 알고력, 코딩력
```sh
알고리즘에 대한 지식은 알고력, 코드를 구현하는 능력은 코딩력이라고 표현합니다.
문제를 풀기 위해서는 문제가 요구하는 일정 이상의 알고력과 코딩력이 필요합니다.

예를 들어, 당신의 현재 알고력이 15, 코딩력이 10이라고 가정해보겠습니다.
A라는 문제가 알고력 10, 코딩력 10을 요구한다면 A 문제를 풀 수 있습니다.
B라는 문제가 알고력 10, 코딩력 20을 요구한다면 코딩력이 부족하기 때문에 B 문제를 풀 수 없습니다.

풀 수 없는 문제를 해결하기 위해서는 알고력과 코딩력을 높여야 합니다. 알고력과 코딩력을 높이기 위한 다음과 같은 방법들이 있습니다.
알고력을 높이기 위해 알고리즘 공부를 합니다. 알고력 1을 높이기 위해서 1의 시간이 필요합니다.
코딩력을 높이기 위해 코딩 공부를 합니다. 코딩력 1을 높이기 위해서 1의 시간이 필요합니다.

현재 풀 수 있는 문제 중 하나를 풀어 알고력과 코딩력을 높입니다. 각 문제마다 문제를 풀면 올라가는 알고력과 코딩력이 정해져 있습니다.
문제를 하나 푸는 데는 문제가 요구하는 시간이 필요하며 같은 문제를 여러 번 푸는 것이 가능합니다.
당신은 주어진 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 구하려 합니다.

초기의 알고력과 코딩력을 담은 정수 alp와 cop, 문제의 정보를 담은 2차원 정수 배열 problems가 매개변수로 주어졌을 때,
모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 return 하도록 solution 함수를 작성해주세요.
```

* 예 #1

| alp | cop | problems | result |
|---|:---|:---|:---|
| 10 | 10 | [ [10, 15, 2, 1, 2], [20, 20, 3, 3, 4] ] | 15 |

- 코딩력 5를 늘립니다. 알고력 10, 코딩력 15가 되며 시간이 5만큼 소요됩니다.
- 1번 문제를 5번 풉니다. 알고력 20, 코딩력 20이 되며 시간이 10만큼 소요됩니다.
- 15의 시간을 소요하여 모든 문제를 풀 수 있는 알고력과 코딩력을 가질 수 있습니다.

예 #2

| alp | cop | problems | result |
|---|:---|:---|:---|
| 0 | 0 | [ [0, 0, 2, 1, 2], [4, 5, 3, 1, 2], [4, 11, 4, 0, 2], [10, 4, 0, 4, 2] ] | 13 |

* 1번 문제를 2번 풉니다. 알고력 4, 코딩력 2가 되며 시간이 4만큼 소요됩니다.
* 코딩력 3을 늘립니다. 알고력 4, 코딩력 5가 되며 시간이 3만큼 소요됩니다.
* 2번 문제를 2번 풉니다. 알고력 10, 코딩력 7이 되며 시간이 4만큼 소요됩니다.
* 4번 문제를 1번 풉니다. 알고력 10, 코딩력 11이 되며 시간이 2만큼 소요됩니다.
* 13의 시간을 소요하여 모든 문제를 풀 수 있는 알고력과 코딩력을 가질 수 있습니다.

```js
// 정답
function solution(alp, cop, problems) {
  let useTime = 0;
  // 1시간 알고력, 코딩력 공부도 문제로 추가함.
  problems.unshift([0, 0, 0, 1, 1]);
  problems.unshift([0, 0, 1, 0, 1]);

  const performance = function(nProblem, solveProblems, alp, cop) {
    const 필요한알고력 = nProblem[0] - alp;
    const 필요한코딩력 = nProblem[1] - cop;
    // 가성비 배열 생성
    let performance = [0, 0, 0, 0, 0];
    performance['알고력가성비'] = 0;
    performance['코딩력가성비'] = 0;
    for (let sIndex = 0; sIndex < solveProblems.length; sIndex++) {
      const sProblem = solveProblems[sIndex];
      // 필요한알고력 또는 필요한코딩력이 없으면 가성비는 0이다.
      sProblem['알고력가성비'] = 필요한알고력 <= 0 ? 0 : sProblem[2] / sProblem[4];
      sProblem['코딩력가성비'] = 필요한코딩력 <= 0 ? 0 : sProblem[3] / sProblem[4];
      // 이전 선택 보다 가성비가 좋다면
      if (sProblem['알고력가성비'] + sProblem['코딩력가성비'] > performance['알고력가성비'] + performance['코딩력가성비']) {
        performance = sProblem;
      }
    }
    return [...performance];
  };

  const fastWay = function() {
    // 풀수 있는 문제와 풀수 없는 문제 나누기
    const solveProblems = [], notSolveProblems = [];
    for (let index = 0; index < problems.length; index++) {
      const problem = problems[index];
      if (alp >= problem[0] && cop >= problem[1]) {
        solveProblems.push(problem);
      } else {
        notSolveProblems.push(problem);
      }
    }
    // 모든 문제를 풀었다면 끝내기
    if (notSolveProblems.length === 0) {
      console.error(useTime + '시간 걸렸습니다.');
      return false;
    }

    let performanceProblem = [];
    // 풀수 없는 문제중 가장 시간이 적게 드는 문제 찾기
    for (let nIndex = 0; nIndex < notSolveProblems.length; nIndex++) {
      const nProblem = notSolveProblems[nIndex];
      nProblem['가성비'] = performance(nProblem, solveProblems, alp, cop);
      // 걸릴 시간 확인
      let _alp = alp, _cop = cop, useTime = 0;
      while(_alp < nProblem[0] || _cop < nProblem[1]) {
        const pProblem = performance(nProblem, solveProblems, _alp, _cop);
        useTime += pProblem[4];
        _alp += pProblem[2];
        _cop += pProblem[3];
      }
      nProblem['걸릴 시간'] = useTime;
      if (nProblem['걸릴 시간'] < (performanceProblem['걸릴 시간'] || Infinity)) {
        performanceProblem = nProblem;
      }
    }
    // console.log(notSolveProblems);

    // 문제 풀기
    useTime += performanceProblem['가성비'][4];
    alp += performanceProblem['가성비'][2];
    cop += performanceProblem['가성비'][3];
    console.log('선택된 문제:', performanceProblem, ', 가성비:', performanceProblem['가성비']);
    console.warn(`사용한 시간: ${useTime}, 알고력: ${alp}, 코딩력: ${cop}`);
    return true;
  };

  // 모든 문제를 풀동안 반복하기
  while(fastWay()) {}
  return useTime;
}

solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]]);
solution(0, 0, [[0,0,2,1,2],[4,5,3,1,2],[4,11,4,0,2],[10,4,0,4,2]]);
```
