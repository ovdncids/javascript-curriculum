const canvasA = {
  info: {
    result: '',
    repeat: 0,
    shape: '',
    timeStart: '',
    timeEnd: '',
    timeProcessed: ''
  },
  cbSuccess: null,
  nemo: function(repeat) {
    return canvasA.draw(repeat, '사각형');
  },
  won: function(repeat) {
    return canvasA.draw(repeat, '동그라미');
  },
  draw: function(repeat, shape) {
    canvasA.info.repeat = repeat;
    canvasA.info.result = '';
    canvasA.info.timeStart = +new Date();
    canvasA.info.shape = shape;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    if (shape === '사각형') {
      ctx.clearRect(0, 0, 370, 60);
    } else {
      ctx.clearRect(0, 70, 370, 130);
    }
    try {
      if (!repeat || repeat < 1 || repeat > 7) throw {message: '인수는 1에서 7까지 사용 가능 합니다.'};
      const promises = [];
      for (let i = 0; i < repeat; i++) {
        promises[i] = new Promise(function (resolve, reject) {
          window.setTimeout(function() {
            ctx.fillStyle = colors[i];
            if (shape === '사각형') {
              ctx.fillRect(10 + (i * 50), 10, 50, 50);
            } else {
              ctx.beginPath();
              ctx.arc((i * 50) + 35, 95, 25, 0, 2 * Math.PI);
              ctx.fill();
            }
            resolve();
          }, i * 600);
        });
      }
      Promise.all(promises).then(function () {
        canvasA.info.result = '완료';
        canvasA.info.timeEnd = +new Date();
        canvasA.info.timeProcessed = (canvasA.info.timeEnd - canvasA.info.timeStart) / 1000 + '초';
        if (canvasA.cbSuccess) canvasA.cbSuccess(canvasA.info);
      });
    } catch(e) {
      canvasA.info.result = e.message;
    }
    return canvasA;
  },
  then: function(cbSuccess) {
    canvasA.cbSuccess = cbSuccess
    return canvasA;
  },
  catch: function(cbError) {
    if (canvasA.info.result !== '') {
      canvasA.info.timeEnd = +new Date();
      canvasA.info.timeProcessed = (canvasA.info.timeEnd - canvasA.info.timeStart) / 1000 + '초';
      if (cbError) cbError(canvasA.info);
    }
    return canvasA;
  }
};
