window.onload = function () {
  console.log('onloadOK-0318 12:31')
  document.getElementById("openAppBtn").onclick = openApp;
  document.getElementById("callFunction").onclick = callFunc;

  if (typeof QWebChannel !== "undefined") {
    new QWebChannel(qt.webChannelTransport, function (channel) {
      window.bridge = channel.objects.bridge;
      // 启用按钮，确保此时 window.bridge 已经可用
      // document.getElementById("openAppBtn").disabled = false;
      // document.getElementById("callFunction").disabled = false;
      if (window.bridge) {
        window.bridge.dataChanged.connect(() => {
          console.log('python成功调用了js方法')
          alert('python成功调用了js方法')
        })
      } else {
        console.log("bridge 对象未定义");
      }
    });
  } else {
    console.log("QWebChannel 未定义，请检查 qwebchannel.js 是否已正确加载");
  }

  function openApp () {
    console.log('===openApp===')
    if (window.bridge) {
      window.bridge.open_and_embed('应用程序1');
    } else {
      console.log("bridge 对象未定义");
    }
  }

  function callFunc () {
    console.log('===callFunc===')
    if (window.bridge) {
      window.bridge.dataChanged.connect(() => {
        console.log('python成功调用了js方法')
        alert('python成功调用了js方法')
      })
    } else {
      console.log("bridge 对象未定义");
    }
  }


};

