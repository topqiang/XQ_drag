# XQ_drag.js
简单实现依赖于jQuery的多层多区域拖拽小插件，只需要一个属性哦。样式完全自定义。^_^

来一起感受它的魅力吧！

<h3>1.技术点</h3>

三个鼠标事件：
onmousedown：鼠标按下指定对象上时触发；

onmouseup：鼠标松开按键时触发；

onmousemove：鼠标在指定对象上移动时触发；

<h3>2.先来看看它的执行效果吧。（请用电脑）<h3>

https://topqiang.github.io/XQ_drag/dragdemo.html

<h3>3.迫不及待想试一试了。</h3>

\<script src="js/jquery.min.js"\>\</script\> 

\<script src="js/XQ_drag.js"\>\</script\> 

在你的页面里引入这两个文件。位置放在页面哪里都可以。

  <code>
  
    <div class="drop" xq_drop="true"></div>  //xq_drop="true" 该属性标注可以存放拖拽对象的区域
    
		<div class="drag" xq_drag="true" id="1">         //xq_drag="true"  该属性用来标注可以拖拽的对象,id属性非常重要，他是当前元素的唯一标识
		
			<img  src="favicon.ico" ondragstart="return false"/>    //  里面可以放图片哦， ondragstart="return false" 一定要加上该属性哦，不然浏览器会在新的窗口打开该图片
			
		</div>
		
		<div class="drag" xq_drag="true" id="2">牛逼到不行</div>       //里面也可以放文字元素哦！
		
  </code>
<h3>4.那么配置参数都有那些呢？</h3>
暂时不用做任何配置哦，你只需要给元素添加一些美化的样式就行啦！


<h3>5.怎么启动呢？</h3>

嘿嘿 这个不用担心，该插件会自动在文档加载完成后启动赋予您配置元素以神器的效果。看看神器吧！

<h3>6.拖拽之后如何获取指定区域的数据呢？</h3>
$("dropelem").getDropData();获取到指定存放区域内可拖拽对象的id集合，返回类型为数组。


再次特请各位大牛指出不足。
跪拜！跪拜！跪拜！
