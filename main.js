let x = document.getElementById("dx");
x.onclick = function(){
  wc.alert('你好');
};
   	  wc.alertDialog({
   	    title: '提示',
   	    content: '欢迎体验WebCat自研wc.js框架，感谢您的使用！',
   	    ok: '确定',
   	    okFun: function() {
   	      wc.alert('点击了确定');
   	    }
   	  });
