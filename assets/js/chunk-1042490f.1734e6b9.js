(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1042490f"],{"13a5":function(n,t,c){n.exports=c.p+"assets/img/defaultUser4.12918331.png"},"7cf2":function(n,t,c){n.exports=c.p+"assets/img/defaultUser1.7c0599c6.png"},"7fcb":function(n,t,c){n.exports=c.p+"assets/img/defaultHead.6116f0dd.png"},a23e:function(n,t,c){"use strict";c("99af"),c("159b");var e="#75da3a",a="#4ac149",i="#f2fce8",o="#06e4e7",l="#00b6c9",s="#e8fafc",d="#3291fb",r="#3075ed",g="#e3effc",v="#ffb100",f="#ff9d00",u="#f9f7e8",h=280,m=25,b=310,p=100,x=150,y=50,w=15,k="",T="",W="",L="",_=function(n){return"".concat(n.creatorName||"XXX")},I=function(n){switch(n.icon){case"task":k=e,T=a,W=i,L="任务";break;case"MeetingInfo":k=o,T=l,W=s,L="会议";break;case"chat":case"Im":case"im":k=d,T=r,W=g,L="即时通讯";break;default:k=v,T=f,W=u,L="工具";break}},P=function(n){return I(n),"\n    <rect style={{\n        width: ".concat(h,",\n        height:").concat(m,",\n        fill: 'l(90) 0:").concat(k," 1:").concat(T,"',\n        stroke: ").concat(T,",\n        radius: [").concat(w,", ").concat(w,', 0, 0],\n      }}\n      draggable="true"\n      >\n        <text style={{\n          marginTop: ').concat(m/2+3,", marginLeft: ").concat(h/2-20,",\n          textAlign: 'center',\n          fontWeight: 'bold',\n          fill: '#fff'}}draggable=\"true\">\n          ").concat(L,"\n        </text>\n      </rect>\n    ")},z=function(n,t,c,e){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"normal";return"<rect style={{\n            width: ".concat(h,",\n            height:").concat(t,',\n            marginTop:10,\n          }}draggable="true">\n            <text style={{marginLeft: 10,fill: \'#777\',next: inline}}draggable="true">').concat(c,"：</text>\n            <text style={{marginLeft: 10,").concat("bold"===a?"fontWeight:bold,":"",',fill:#333}}draggable="true">').concat(e,"</text>\n          </rect>")},N=function(n){return"\n  <rect style={{\n    width: ".concat(h,',\n    height:40,\n    marginTop: 10,\n  }}draggable="true">\n    ').concat(U(c("d37a"),10,"张玲云","负责人"),"\n    ").concat(U(c("d37a"),20,"未开始","当前状态"),"\n    ").concat(U(c("d37a"),30,"普通","优先级"),"\n  </rect>")},U=function(n,t,c,e){return"\n  <image style={{\n    img:".concat(n,",\n    width: 30,\n    height: 30,\n    marginTop: 5,\n    marginLeft: ").concat(t,',\n    next: inline}}draggable="true"></image>\n  <rect style={{\n    width: 50,\n    height: 40,\n    marginLeft:  ').concat(t+5,',\n    next: inline\n  }}draggable="true">\n    <text style={{marginLeft: ').concat(t+5," ,fill: '#333',marginTop: 5,}}draggable=\"true\">").concat(c,"</text>\n    <text style={{marginLeft: ").concat(t+5," ,fill: '#777',marginTop: 3,fontSize:10,}}draggable=\"true\">").concat(e,"</text>\n  </rect>\n")},M=function(n){return"<path style={{\n            fill: ".concat(T,",\n            stroke: ").concat(T,",\n            path:'M 10,").concat(n," h").concat(h-20,"',\n            lineWidth:1,\n            lineDash:[2,2]}}\n          }}></path>")},X=function(n,t,c){var e="";return c.forEach((function(n){e+="<text style={{height:20,marginLeft: 10,marginTop:4,fill: '#2a5fff',}}>"+n+"</text>"})),"\n  <rect style={{\n    width: ".concat(h,",\n    height:60,\n    marginTop:20,\n  }}draggable=\"true\">\n    <text style={{marginLeft: 10,fill: '#333',fontWeight:bold,}}>").concat(t,"：</text>\n    ").concat(e,"\n    </rect >\n  ")},E=function(n,t,c){return"\n  <rect style={{\n    width: ".concat(h,",\n    height:40,\n    marginTop:20,\n  }}draggable=\"true\">\n    <text style={{marginLeft: 10,fill: '#333',fontWeight:bold,}}>").concat(t,"：</text>\n    <text style={{marginLeft: 10,marginTop:3,fill: '#777',}}>").concat(c,"</text>\n  </rect >")},J=function(n,t,c){var e=[],a=0,i=22,o=!0,l="";while(o){var s=c.substr(a,i);a+=i,e.push(s),a>c.length&&(o=!1)}return e.forEach((function(n){l+="<text style={{height:20,marginLeft: 10,marginTop:4,fill: '#777',}}>"+n+"</text>"})),"\n  <rect style={{\n    width: ".concat(h,",\n    height:40,\n    marginTop:20,\n  }}draggable=\"true\">\n    <text style={{marginLeft: 10,fill: '#333',fontWeight:bold,}}>").concat(t,"：</text>\n    ").concat(l,"\n  </rect >")},A=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(b,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,20,"任务名称","章节编写任务","bold"),"\n        ").concat(z(n,20,"创 建 人 ","赵竹林"),"\n        ").concat(z(n,20,"截止时间","2021-10-31 17:00:00"),"\n        ").concat(z(n,20,"创建时间","2021-10-01 09:00:00"),"\n        ").concat(N(n),"\n        ").concat(M(160),"\n        ").concat(X(n,"输入物",["会议申请单.doc","参会人员名单.doc"]),"\n        ").concat(X(n,"产出物",["会议纪要1.doc"]),"\n        ").concat(E(n,"描述","这里显示文字任务描述信息..."),"\n      </rect>\n    </group>")},D=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(p,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,20,"任务名称","章节编写任务","bold"),"\n        ").concat(z(n,20,"创 建 人 ","赵竹林"),"\n        ").concat(z(n,20,"截止时间","2021-10-31 17:00:00"),"\n        ").concat(z(n,20,"创建时间","2021-10-01 09:00:00"),"\n      </rect>\n    </group>")},H=function(n){return I(n),"\n    <group>\n      <rect style={{\n        width: ".concat(x,",\n        height:").concat(y,",\n        fill: 'l(90) 0:").concat(k," 1:").concat(T,"',\n        radius: ").concat(w,',\n        lineWidth:1,\n        }}draggable="true">\n        <rect style={{\n          width:50,\n          height:60,\n          next: inline,\n          radius: ').concat(w,',\n        }}draggable="true">\n          <image style={{\n            img:').concat(c("7fcb"),",\n            width:40,\n            height:40,\n            marginLeft:10,\n            marginTop:5,\n          }}></image>\n        </rect>\n        <rect style={{\n          width:90,\n          height:60,\n          next: inline,\n          radius: ").concat(w,',\n        }}draggable="true">\n          <text style={{marginLeft: 5,fill: \'#fff\',marginTop: 5,fontWeight:bold,}}draggable="true">').concat(_(n),"</text>\n          <text style={{marginLeft: 5,fill: '#fff',marginTop: 10,}}draggable=\"true\">").concat(n.label,"</text>=\n        </rect>\n      </rect>\n    </group>")},S=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(b,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,30,"会议主题","需求讨论会议","bold"),"\n        ").concat(z(n,30,"密   级 ","一般"),"\n        ").concat(z(n,30,"参 会 人","王丽桥、刘子扬、赵竹林"),"\n        ").concat(z(n,30,"参会时间","2021-10-21 09:00:00"),"\n        ").concat(M(155),"\n        ").concat(X(n,"会议文件",["会议申请单.doc","参会人员名单.doc"]),"\n        ").concat(X(n,"会议纪要",["会议纪要1.doc"]),"\n        ").concat(E(n,"会议结论","会议结论文字任务描述信息..."),"\n      </rect>\n    </group>")},j=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(p,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,20,"会议主题","需求讨论会议","bold"),"\n        ").concat(z(n,20,"密   级 ","一般"),"\n        ").concat(z(n,20,"参 会 人","王丽桥、刘子扬、赵竹林"),"\n        ").concat(z(n,20,"参会时间","2021-10-21 09:00:00"),"\n      </rect>\n    </group>")},q=function(n){return I(n),"\n    <group>\n      <rect style={{\n        width: ".concat(x,",\n        height:").concat(y,",\n        fill: 'l(90) 0:").concat(k," 1:").concat(T,"',\n        radius: ").concat(w,',\n        lineWidth:1,\n        }}draggable="true">\n        <rect style={{\n          width:50,\n          height:60,\n          next: inline,\n          radius: ').concat(w,',\n        }}draggable="true">\n          <image style={{\n            img:').concat(c("7cf2"),",\n            width:40,\n            height:40,\n            marginLeft:10,\n            marginTop:5,\n          }}></image>\n        </rect>\n        <rect style={{\n          width:90,\n          height:60,\n          next: inline,\n          radius: ").concat(w,',\n        }}draggable="true">\n          <text style={{marginLeft: 5,fill: \'#fff\',marginTop: 5,fontWeight:bold,}}draggable="true">').concat(_(n),"</text>\n          <text style={{marginLeft: 5,fill: '#fff',marginTop: 10,}}draggable=\"true\">").concat(n.label,"</text>=\n        </rect>\n      </rect>\n    </group>")},B=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(b,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,30,"参 与 人","王丽桥、刘子扬、赵竹林"),"\n        ").concat(z(n,30,"开始时间","2021-10-21 09:00:00"),"\n        ").concat(z(n,30,"结束时间","2021-10-21 10:30:00"),"\n      </rect >\n    </group >\n    ")},C=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(p,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,20,"会议主题","需求讨论会议","bold"),"\n        ").concat(z(n,20,"密   级 ","一般"),"\n        ").concat(z(n,20,"参 会 人","王丽桥、刘子扬、赵竹林"),"\n        ").concat(z(n,20,"参会时间","2021-10-21 09:00:00"),"\n      </rect>\n    </group>")},F=function(n){return I(n),"\n    <group>\n      <rect style={{\n        width: ".concat(x,",\n        height:").concat(y,",\n        fill: 'l(90) 0:").concat(k," 1:").concat(T,"',\n        radius: ").concat(w,',\n        lineWidth:1,\n        }}draggable="true">\n        <rect style={{\n          width:50,\n          height:60,\n          next: inline,\n          radius: ').concat(w,',\n        }}draggable="true">\n          <image style={{\n            img:').concat(c("dce9"),",\n            width:40,\n            height:40,\n            marginLeft:10,\n            marginTop:5,\n          }}></image>\n        </rect>\n        <rect style={{\n          width:90,\n          height:60,\n          next: inline,\n          radius: ").concat(w,',\n        }}draggable="true">\n          <text style={{marginLeft: 5,fill: \'#fff\',marginTop: 5,fontWeight:bold,}}draggable="true">').concat(_(n),"</text>\n          <text style={{marginLeft: 5,fill: '#fff',marginTop: 10,}}draggable=\"true\">").concat(n.label,"</text>=\n        </rect>\n      </rect>\n    </group>")},G=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(b,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,30,"工具名称","word | excel","bold"),"\n        ").concat(z(n,30,"创 建 人","王丽桥"),"\n        ").concat(z(n,30,"创建时间","2021-10-21 10:30:00"),"\n        ").concat(M(125),"\n        ").concat(J(n,"工具介绍","Word2003是目前使用比较广泛的一种文字处理软件，它集文字的编辑、排版、表格处理、图形处理为一体，在Word中我们可以制作一份简单的通知。在则业的时候我们可以撰写自己的简历、可以加入自己的照片，并且我们可以书写论文、计划，同时我们还可以在我们编写的文档中加入声音、图象这样可以构成一个图文并茂的文件。为你提供word2003下载"),"\n      </rect>\n    </group>")},K=function(n){return"\n    <group>\n      ".concat(P(n),"\n      <rect style={{\n      width: ").concat(h,",\n      height:").concat(p,",\n      fill: ").concat(W,",\n      stroke: ").concat(T,",\n      radius: [0, 0, ").concat(w,", ").concat(w,',],\n      lineWidth:1,\n      }}\n      draggable="true">\n        ').concat(z(n,30,"工具名称","word | excel","bold"),"\n        ").concat(z(n,30,"创 建 人","王丽桥"),"\n        ").concat(z(n,30,"创建时间","2021-10-21 10:30:00"),"\n      </rect>\n    </group>")},O=function(n){return I(n),"\n    <group>\n      <rect style={{\n        width: ".concat(x,",\n        height:").concat(y,",\n        fill: 'l(90) 0:").concat(k," 1:").concat(T,"',\n        radius: ").concat(w,',\n        lineWidth:1,\n        }}draggable="true">\n        <rect style={{\n          width:50,\n          height:60,\n          next: inline,\n          radius: ').concat(w,',\n        }}draggable="true">\n          <image style={{\n            img:').concat(c("13a5"),",\n            width:40,\n            height:40,\n            marginLeft:10,\n            marginTop:5,\n          }}></image>\n        </rect>\n        <rect style={{\n          width:90,\n          height:60,\n          next: inline,\n          radius: ").concat(w,',\n        }}draggable="true">\n          <text style={{marginLeft: 5,fill: \'#fff\',marginTop: 5,fontWeight:bold,}}draggable="true">').concat(_(n),"</text>\n          <text style={{marginLeft: 5,fill: '#fff',marginTop: 10,}}draggable=\"true\">").concat(n.label,"</text>=\n        </rect>\n      </rect>\n    </group>")},Q={task_detail:A,meet_detail:S,chat_detail:B,tool_detail:G,task_general:D,meet_general:j,chat_general:C,tool_general:K,task_simple:H,meet_simple:q,chat_simple:F,tool_simple:O};t["a"]=Q},b734:function(n,t,c){"use strict";c("99af"),c("b0c0"),c("a4d3"),c("e01a");var e="暂无";function a(n){var t=n.detailInfo||{},a="",r='<div class="tip-div">\n      <div class="tip-head task-head-bg task-border">任务</div>\n      <div class="tip-content task-content-bg task-border">\n        <div class="common-line lineheight20">\n          <div class="title">任务名称：</div>\n          <div class="desc bold">'.concat(t.name||e,'</div>\n        </div>\n        <div class="common-line lineheight20">\n          <div class="title">创建人：</div>\n          <div class="desc normal">').concat(n.creatorName||e,'</div>\n        </div>\n        <div class="common-line lineheight20">\n          <div class="title">截止时间：</div>\n          <div class="desc normal">').concat(t.endTime||e,'</div>\n        </div>\n        <div class="common-line lineheight20">\n          <div class="title">创建时间：</div>\n          <div class="desc normal">').concat(t.startTime||e,'</div>\n        </div>\n        <div class="status-line">\n          <div class="each-box">\n            <div class="head-img">\n              <img\n                class="status-image"\n                src=').concat(c("7fcb"),'\n              >\n            </div>\n            <div class="status-text">\n              <div class="bold">').concat(t.executor||e,'</div>\n              <div class="normal size10">负责人</div>\n            </div>\n          </div>\n          <div class="each-box">\n            <div class="head-img">\n              <img\n                class="status-image"\n                src=').concat(l(t.status),'\n              >\n            </div>\n            <div class="status-text">\n              <div class="bold">').concat(t.status||e,'</div>\n              <div class="normal size10">当前状态</div>\n            </div>\n          </div>\n          <div class="each-box">\n            <div class="head-img">\n              <img\n                class="status-image"\n                src=').concat(s(t.priority),'\n              >\n            </div>\n            <div class="status-text">\n              <div class="bold">').concat(t.priority||e,'</div>\n              <div class="normal size10">优先级</div>\n            </div>\n          </div>\n        </div>\n        <div class="sep-line task-line"></div>\n        <div class="file-line">\n          <div class="title bold">输入物：</div>\n          <div class="file-box">\n            ').concat(i(t.inPuts||[]),'\n          </div>\n        </div>\n        <div class="file-line">\n          <div class="title bold">输出物：</div>\n          <div class="file-box">\n            ').concat(i(t.outPuts||[]),'\n          </div>\n        </div>\n        <div class="desc-line">\n          <div class="title bold">描述：</div>\n          <div class="content normal max20">').concat(t.description||e,"</div>\n        </div>\n      </div>\n    </div>"),g='<div class="tip-div">\n      <div class="tip-head chat-head-bg chat-border">即时通讯</div>\n      <div class="tip-content chat-content-bg chat-border">\n        <div class="common-line">\n          <div class="title">参与人：</div>\n          <div class="desc bold">'.concat(t.executor||e,'</div>\n        </div>\n        <div class="common-line">\n          <div class="title">开始时间：</div>\n          <div class="desc normal">').concat(t.startTime||e,'</div>\n        </div>\n        <div class="common-line">\n          <div class="title">结束时间：</div>\n          <div class="desc normal">').concat(t.endTime||e,'</div>\n        </div>\n        <div class="sep-line chat-line"></div>\n        <div class="file-line">\n          <div class="title bold">输入物：</div>\n          <div class="file-box">\n            ').concat(i(t.inPuts||[]),'\n          </div>\n        </div>\n        <div class="record-line">\n          <div class="title bold">会话记录：</div>\n          <div class="record-box">\n          ').concat(o(t.messages||[]),"\n            \n          </div>\n        </div>\n      </div>\n    </div>"),v='<div class="tip-div">\n      <div class="tip-head meet-head-bg meet-border">会议</div>\n      <div class="tip-content meet-content-bg meet-border">\n        <div class="common-line">\n          <div class="title">会议主题：</div>\n          <div class="desc bold">'.concat(t.name||e,'</div>\n        </div>\n        <div class="common-line">\n          <div class="title">密级：</div>\n          <div class="desc normal">').concat(d(t.secret),'</div>\n        </div>\n        <div class="common-line">\n          <div class="title">参与人：</div>\n          <div class="desc normal">').concat(t.executor||e,'</div>\n        </div>\n        <div class="common-line">\n          <div class="title">参会时间：</div>\n          <div class="desc normal">').concat(t.startTime||e,'</div>\n        </div>\n        <div class="sep-line meet-line"></div>\n        <div class="file-line">\n          <div class="title bold">会议文件：</div>\n          <div class="file-box">\n            ').concat(i(t.inPuts||[]),'\n          </div>\n        </div>\n        <div class="file-line">\n          <div class="title bold">会议纪要：</div>\n          <div class="file-box">\n            ').concat(i(t.outPuts||[]),"\n          </div>\n        </div>\n      </div>\n    </div>"),f='<div class="tip-div">\n      <div class="tip-head tool-head-bg tool-border">工具</div>\n      <div class="tip-content tool-content-bg tool-border">\n        <div class="common-line">\n          <div class="title">工具名称：</div>\n          <div class="desc bold">word|excel</div>\n        </div>\n        <div class="common-line">\n          <div class="title">创建人：</div>\n          <div class="desc normal">赵竹林</div>\n        </div>\n        <div class="common-line">\n          <div class="title">创建时间：</div>\n          <div class="desc normal">2021-10-01 09:00:00</div>\n        </div>\n        <div class="sep-line tool-line"></div>\n        <div class="desc-line">\n          <div class="title bold">工具介绍：</div>\n          <div class="content normal tool-max">Word2003是目前使用比较广泛的一种文字处理软件，它集文字的编辑、排版、表格处理、图形处理为一体，在Word中我们可以制作一份简单的通知。在则业的时候我们可以撰写自己的简历、可以加入自己的照片，并且我们可以书写论文、计划，同时我们还可以在我们编写的文档中加入声音、图象这样可以构成一个图文并茂的文件。为你提供word2003下载</div>\n        </div>\n      </div>\n    </div>';switch(n.icon){case"task":a=r;break;case"MeetingInfo":a=v;break;case"Im":case"im":a=g;break;default:a=f;break}return a}function i(n){var t="";if(n.length)for(var c=0;c<n.length;c++)t+='<span class="single-file link">'+n[c].fileName||!1,c<n.length-1&&(t+="<br/>");else t="暂无数据";return t}function o(n){var t="";if(n.length)for(var c=0;c<n.length;c++)t+='<div class="single-record">\n                    <span class="bold">'.concat(n[c].sourceName||e,'</span>\n                    <span class="ml5">').concat(n[c].createTime||e,'：</span>\n                    <span class="normal ml5">').concat(n[c].msg||e,"</span>\n                  </div >"),c<n.length-1&&(t+="<br/>");else t="暂无数据";return t}function l(n){var t=null;switch(n){case"未开始":t=c("9012");break;case"进行中":t=c("90bc");break;case"已完成":t=c("b250");break;case"已取消":t=c("003c");break;case"已停止":case"已暂停":t=c("59c4");break;case"已拒绝":case"已回收":t=c("71b6");break;default:t=c("9012");break}return t}function s(n){var t=null;switch(n){case"普通":t=c("71a0");break;case"紧急":t=c("e211");break;case"非常紧急":t=c("8098");break;default:t=c("71a0");break}return t}function d(n){var t="";switch(n){case"10":t="公开";break;case"20":t="内部";break;case"30":t="秘密";break;case"40":t="机密";break;default:t="未知";break}return t}t["a"]=a},d37a:function(n,t,c){n.exports=c.p+"assets/img/defaultUser5.6e70b67c.png"},dce9:function(n,t,c){n.exports=c.p+"assets/img/defaultUser3.5a2fe1a5.png"}}]);