/**
 * Created with JetBrains WebStorm.
 * User: acer
 * Date: 15-4-4
 * Time: 下午10:09
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    /**
     * 导航栏特效
     */
    $("ul.nav li").each(function () {
        $(this).mouseover(function () {
            var width = $(this).innerWidth();
            var height = "72px";
            var bgSize = width + "px" + " " + height;
            $(this).css({"background-image": "url('./img/bn-1.png')", "background-size": bgSize});
        });
        $(this).mouseout(function () {
            $(this).css("background-image", "");
        });
    });

    /**
     * des-1 div 下标签页特效
     */
    $("div.des-1 ul li").each(function () {
        $(this).mouseover(function () {
            var color = $(this).find("dt").css("color");
            $(this).css("box-shadow", color + " " + "2px 2px 2px 2px");
        });
        $(this).mouseout(function () {
            $(this).css("box-shadow", "");
        });
    });

    /**
     * des-2 div下云平台系统介绍特效
     */
    $(".person img").each(function (index) {
        $(this).mouseover(function () {
            var width = $(this).width();
            var height = $(this).height();
            $(this).css({"width": width + 15, "height": height + 15});
            $("div.person").append("<div class='container'><div class='content'></div><s></s></div>");
            var left = $(this).css("left");
            var bottom = $(this).css("bottom");
            var content = undefined;
            switch (index) {
                case 0:
                    content = "不用排队";
                    break;
                case 1:
                    content = "电子支付，方便";
                    break;
                case 2:
                    content = "提前预订";
                    break;
                case 3:
                    content = "自助点餐";
                    break;
                case 4:
                    content = "服务闭环";
                    break;
                case 5:
                    content = "引领潮流";
                    break;
                default :
                    content = "";
            }
            var conEle = $("div.content");
            conEle.html(content);
            var innerWidth = conEle.innerWidth();
            $("div.container s").css("left", (innerWidth - 15) / 2);
            bottom = Number(bottom.substring(0, bottom.length - 2)) + 100;
            $("div.container").css({"left": left, "bottom": bottom.toString() + "px"});
        });
        $(this).mouseout(function () {
            var width = $(this).width();
            var height = $(this).height();
            $(this).css({"width": width - 15, "height": height - 15});
            $("div.container").remove();
        });
    })
});