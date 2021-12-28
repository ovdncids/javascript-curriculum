# Homework - 8th week

## 코딩 테스트 문제
### 문제
1. 시험 문제 3개가 있다. 문제는 `questions`, 응답은 `answers`로 정의 되어 있다. `questions`와 `answers`를 이용하여 아래 정답과 같이 출력 하시오.
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
