const callCanvasNemo = function() {
  document.getElementById('button-call-canvas-nemo').disabled = true;
  const cbSuccess = function(canvasInfo) {
    const message = canvasInfo.shape + ' ' + canvasInfo.repeat + '개가 ' + canvasInfo.timeProcessed + ' 동안 그려졌습니다.';
    document.getElementById('result').innerHTML = message;
    document.getElementById('button-call-canvas-nemo').disabled = false;
  }
  const cbError = function(canvasInfo) {
    document.getElementById('result').innerHTML = canvasInfo.result;
    document.getElementById('button-call-canvas-nemo').disabled = false;
  }
  canvasA.nemo(7).then(cbSuccess).catch(cbError);
};

const callCanvasWon = function() {
  document.getElementById('button-call-canvas-won').disabled = true;
  const cbSuccess = function(canvasInfo) {
    const message = canvasInfo.shape + ' ' + canvasInfo.repeat + '개가 ' + canvasInfo.timeProcessed + ' 동안 그려졌습니다.';
    document.getElementById('result').innerHTML = message;
    document.getElementById('button-call-canvas-won').disabled = false;
  }
  const cbError = function(canvasInfo) {
    document.getElementById('result').innerHTML = canvasInfo.result;
    document.getElementById('button-call-canvas-won').disabled = false;
  }
  canvasA.won(7).then(cbSuccess).catch(cbError);
};
