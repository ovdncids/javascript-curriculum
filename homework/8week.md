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
const ways = [];
for (let i1 = 0; i1 <= 1; i1++) {
  for (let i2 = 0; i2 <= 1; i2++) {
    for (let i3 = 0; i3 <= 1; i3++) {
      for (let i4 = 0; i4 <= 1; i4++) {
        for (let i5 = 0; i5 <= 1; i5++) {
          for (let i6 = 0; i6 <= 1; i6++) {
            for (let i7 = 0; i7 <= 1; i7++) {
              for (let i8 = 0; i8 <= 1; i8++) {
                ways.push([i1, i2, i3, i4, i5, i6, i7, i8]);
              }
            }
          }
        }
      }
    }
  }
}
console.log(ways);
```

### 재귀함수
```js
const numberOfCases = function(ways, indexes, degree) {
  for (indexes[degree - 1] = 0; indexes[degree - 1] <= 1; indexes[degree - 1]++) {
    if (degree === 1) {
      ways.push([...indexes].reverse());
    } else {
      numberOfCases(ways, indexes, degree - 1);
    }
  }
  return ways;
}
const cases = numberOfCases([], [], 8);
console.log(cases);

console.log(JSON.stringify(ways) === JSON.stringify(cases));
```
