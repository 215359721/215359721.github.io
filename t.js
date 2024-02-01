window.onload = function () {
  console.log('onloadOK')
  if (typeof QWebChannel !== "undefined") {
    console.log('difdif', new QWebChannel())
    new QWebChannel(qt.webChannelTransport, function (channel) {

      window.bridge = channel.objects.bridge;

      // 启用按钮，确保此时 window.bridge 已经可用
      document.getElementById("openAppBtn").disabled = false;
    });
  } else {
    console.log("QWebChannel 未定义，请检查 qwebchannel.js 是否已正确加载");
  }
  function openApp () {
    if (window.bridge) {
      window.bridge.open_and_embed('应用程序1');
    } else {
      console.log("bridge 对象未定义");
    }
  }

  document.getElementById("openAppBtn").onclick = openApp;
};

