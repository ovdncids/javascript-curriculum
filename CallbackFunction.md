# 콜백 함수

## 정의
* 인수값(Argument): 인수(因數) 또는 어규먼트라 부르고, 함수를 호출 할때 넘기는 값들이다.
* 인자값(Parameter): 인자(因子) 또는 파라미터 또는 매개변수라 부르고, 함수가 호출 되고 넘겨 받은 값들을 해당 이름으로 사용한다.
```js
const a = function(parameter) {
  // 인자: parameter
}

// 인수: 'argument'
a('argument');
```
* 콜백 함수: a함수가 끝나고, 호출될 b함수. *필수 조건: a함수는 꼭 콜백함수인 b를 인자로 받아야 한다.
```js
const a = function(b) {
  // a함수가 끝나고, 호출될 콜백 함수 실행
  b();
};
const b = function() {
  console.log('콜백 함수 실행');
};

// a함수 실행
a(b);
```

## 상황
* 협업 중인 A와 B개발자가 있다.
* A는 `<cavas>` 태그를 이용하여 도형(사각형, 원)을 만들고, B는 여러 페이지에 A가 만든 도형을 보여주는 일을 맡았다
* A는 작업을 마치고 자신이 만든 도형을 부를 수있는 함수를 B에게 알려주는데 ...

## B개발자 코드
### canvasB.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Canvas</title>
    <script defer src="https://ovdncids-red-firebase.web.app/js/canvasA.js"></script>
    <script defer src="./js/canvasB.js"></script>
  </head>
  <body>
    <div>
      <canvas id="canvas" width="370" height="130" style="border: 2px gray solid;"></canvas>
    </div>
    <div id="result"></div>
    <div>
      <button id="button-call-canvas-nemo" onclick="callCanvasNemo()">사각형 부르기</button>
      <button id="button-call-canvas-won" onclick="callCanvasWon()">원 부르기</button>
    </div>
  </body>
</html>
```

### canvasB.js
```js
const callCanvasNemo = function() {
};

const callCanvasWon = function() {
};
```

## A개발자가 B개발자에게 알려준 함수 사용 방법
```js
// 사각형 그리기 (인수는 1에서 7까지 사용 가능 합니다.)
canvas.nemo(7);

// 원 그리기
canvas.won(7);
```

## 기획자의 바램1
* 도형이 다 그려지고 결과 문구를 `<canvas>`와 버튼 사이에 보여주길 원한다.
```js
도형이 그려졌습니다.
```
* 에러가 발생하면 에러 문구가 보여지기 바란다.
```js
에러가 발생하였습니다.
```

## B개발자가 A개발자에게 도형이 다 그려지고 콜백 함수를 호출해 달라고 이야기함(에러 포함)
* A개발자에게 답변 받음
```js
// 사각형 그린 후 콜백 함수 호출 하기
const cbSuccess = function() {
}
canvas.nemo(7).then(cbSuccess);

// 사각형 그리는 도중 에러가 발생한 경우
const cbError = function() {
}
canvas.nemo(7).catch(cbError);
```

## 기획자의 바램2
* 기획자가 도형이 그려지는 동안에 다시 버튼을 누르는게 맘에 안든다고 합니다. 버튼을 disabled 처리하고, 도형이 완료 되면 disabled 해제 되기 원합니다.
```js
document.getElementById('button-call-canvas-nemo').disabled = true;
```

## 기획자의 바램3
* 기획자가 변덕을 부려 결과 문구가 좀더 디테일 하길 원합니다.
```js
사각형 4개가 3초 동안 그려졌습니다.
```

## B개발자가 A개발자에게 기획자가 원하는 문구의 정보를 보내달라 요청
* A개발자가 콜백 함수 호출 할때 첫번째 인수에 도형의 정보를 넘겨 준다고 답변 받음
```js
// 사각형 그린 후 콜백 함수 호출 하기
const cbSuccess = function(canvasInfo) {
}
canvas.nemo(7).then(cbSuccess);

// 사각형 그리는 도중 에러가 발생한 경우
const cbError = function(canvasInfo) {
}
canvas.nemo(7).catch(cbError);
```

## A개발자 코드
* [canvasA.js](./js/canvasA.js)
