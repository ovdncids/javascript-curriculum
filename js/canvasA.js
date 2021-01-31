const canvas = {
  promises: [],
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
    return canvas.draw(repeat, '사각형');
  },
  won: function(repeat) {
    return canvas.draw(repeat, '동그라미');
  },
  draw: function(repeat, shape) {
    canvas.info.repeat = repeat;
    canvas.info.result = '';
    canvas.info.timeStart = +new Date();
    canvas.info.shape = shape;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
    const c = document.getElementById('canvas');
    const ctx = c.getContext('2d');
    if (shape === '사각형') {
      ctx.clearRect(0, 0, 370, 60);
    } else {
      ctx.clearRect(0, 70, 370, 130);
    }
    try {
      if (!repeat || repeat < 1 || repeat > 7) throw {message: '인수를 1에서 7까지 사용 가능 합니다.'};
      const promises = [];
      canvas.promises = [];
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
        canvas.info.result = '완료';
        canvas.info.timeEnd = +new Date();
        canvas.info.timeProcessed = (canvas.info.timeEnd - canvas.info.timeStart) / 1000 + '초';
        canvas.cbSuccess(canvas.info);
      });
    } catch(e) {
      canvas.info.result = e.message;
    }
    return canvas;
  },
  then: function(cbSuccess) {
    canvas.cbSuccess = cbSuccess
    return canvas;
  },
  catch: function(cbError) {
    if (canvas.info.result !== '') {
      canvas.info.timeEnd = +new Date();
      canvas.info.timeProcessed = (canvas.info.timeEnd - canvas.info.timeStart) / 1000 + '초';
      cbError(canvas.info);
    }
    return canvas;
  }
};
