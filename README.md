# bootstrap_layout — 学习bootstrap的布局机制的项目
学习bootstrap布局机制，对移动端页面布局有很大帮助，他山之石可以攻玉。它包含静态px布局，百分比布局，响应式布局三个主流布局方式。这三者在bootstrap中不是
相互孤立，而是相互配合，实现适应各种不同分辨率设备下一套解决方案的目的。

这是一个在学习测试bootstrap布局机制的基础上仿写的项目，所以包含了bootstrap三类布局机制的测试代码，和仿写的布局css文件，以及个人对网页布局的理解。如果你也有想深入了解bootstrap
的布局机制，可以作为参考。

## bootstrap的布局
bootstrap的布局知识可参考 [http://v2.bootcss.com/scaffolding.html#gridSystem](http://v2.bootcss.com/scaffolding.html#gridSystem)

### bootstrap布局的模型和构思
bootstrap使用了栅格化系统来布局，栅格化系统是网页以行列来切分，形成一个网格状的分布，内容在网格中定位；

这样就可以通过统一控制栅格化系统的宽，来镜像地缩小或者放大整个页面，达到自适应的初级效果。想象一下一张平展开的渔网，拉伸则每个网格就变大；收缩则每个网格就缩小；

当栅格化系统布局的网页，在从宽屏显示过渡到窄屏时，每个网格的宽度变小，当宽度 < 网格中的内容的宽度时，需要内容自动缩小宽度，并向纵向延伸，来达到网格依然能容纳下内容的目的，因此千万不要设置网格的高度，和内容的宽度。

### boostrap栅格化网格宽与网格间margin计算
boostarp一行内网格之间存在一定的margin间距，以及可以设置网格之间的偏移；

宽、margin间距以及网格偏移的计算，可参考：
[Bootstrap布局模型](http://www.jianshu.com/p/6298567cfaf1)

### bootstrap静态px布局
bootstrap的静态px布局，就是栅格化系统每个网格的宽度都是以px单位来设置的;

px单位设置的宽度，在从宽屏显示过渡到窄屏时，自然是无法自适应缩小的，bootstrap使用媒体查询`@media`来查询不同的设备分辨率，在不同设备下设置不同的px宽度来放大或缩小网格，在不改变整体布局的情况下镜像放大缩小网页；

### bootstrap百分比布局
bootstrap百分比布局，使用百分比设置网格的宽度。百分比自然是可以自适应缩小放大网格大小的,同样在不改变整体布局的情况下镜像放大缩小网页；

### bootstrap响应式布局
当镜头px布局或百分比布局在镜像缩小网页到影响阅读的情况下，比如文字过小，图文不清晰等；这个时候就需要改变网页的布局来适应这种情况，响应式布局就为这类开发需求服务；

bootstrap主要提供了两类响应式布局的工具：

1.在屏幕宽度缩小到一定数值时，把栅格化系统的一行多列，直接转换成一行一列，以达到放大清晰内容的目的；

2.在pc,tablet,phone不同设备上，存在有需要显示和隐藏的开发需求。bootstrap提供了`.visible-phone`(在手机上显示)、`.hidden-phone`(在手机上隐藏)、`.visible-tablet`、`.hidden-tablet`、`.visible-desktop`、`.hidden-desktop`。

## 项目目录结构

```
css/                    -->css样式文件目录
   layout.css             -->仿bootstrap布局css
   normalize.css          -->优化浏览器默认样式css
   responsive.css         -->仿bootstrap设备自适应css
test/                   -->测试目录，测试viewport标签使用效果的
   img/
   viewport_a.css       
   viewport_a.html
   viewport_a.js
   viewport_b.html
explore-percent.html    -->百分比设置元素宽度效果测试
layout.html             -->测试仿bootstrap px布局的
layout-fluid.html       -->测试仿bootstrap 百分比布局的
```
