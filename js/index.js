//轮播图
var arr=["1.jpg","2.jpg","3.jpg","4.jpg"];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;

function  initUI() {
    $("#box li:first").css({"backgroundColor":"#94193f"});
}

function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });

    $("#box").mouseleave(function () {
        autoPlay();
    });

    $("#box li").click(function () {
        goImg($("#box li").index(this));
    });

    $("#leftArrow").click(function () {
        let transord =ord-1;
        transord = transord<0?arr.length-1:transord;
        goImg(transord);
    });

    $("#rightArrow").click(function () {
        let transord =ord+1;
        transord = transord>arr.length-1?0:transord;
        goImg(transord);
    });
}

//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#box img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},2000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},2000);
        //2、改变豆豆的颜色；
        $("#box li").eq(ord).css({"backgroundColor":"#94193f"}).siblings().css({"backgroundColor":"#fff"});
    },3000);
}

//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}

//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#box img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},2000);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},2000);
    //2、改变豆豆的颜色；
    $("#box li").eq(ord).css({"backgroundColor":"#94193f"}).siblings().css({"backgroundColor":"#fff"});
}


$(function () {
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
});

//头部
$(".h_a").mouseenter(function(){
	$(this).css({"background-color":"#eeeeee","border-top":"2px solid #005bac","color":"#0a6ebd"});
});
$(".h_a").mouseleave(function(){
	$(this).css({"background-color":"#fff","border-top":"2px solid #fff","color":"#666"});
});

$(".h_aa").mouseenter(function(){
	$(".h_uls").animate({"top":"100%","opacity":"1"},600);
	$(".f_p li:nth-of-type(4) .h_a").css({"background-color":"#eeeeee","border-top":"2px solid #005bac","color":"#0a6ebd"});
	$(this).stop();
});
$(".h_aa").mouseleave(function(){
	$(".h_uls").animate({"top":"140%","opacity":"0"},600);
	$(".f_p li:nth-of-type(4) .h_a").css({"background-color":"#fff","border-top":"2px solid #fff","color":"#666"});
});

$(".h_d3 a").mouseenter(function(){
	$(this).css({"color":"#0a6ebd"});
});
$(".h_d3 a").mouseleave(function(){
	$(this).css({"color":"#999"});
});

//section1
$(".s1_c2_a a").mouseenter(function(){
	$(this).css({"background-color":"rgba(255, 55, 0, 0.85)"});
});
$(".s1_c2_a a").mouseleave(function(){
	$(this).css({"background-color":"rgba(255, 55, 0, 0.65)"});
});

//section2
$(".scc_d3 a").mouseenter(function(){
	$(this).css({"color":"#FF3700","border-color":"#FF3700","background-color":"#fff"});
});
$(".scc_d3 a").mouseleave(function(){
	$(this).css({"color":"#fff","border-color":"#fff","background-color":"rgba(255,255,255,0.0)"});
});

//section3
$(".s3_d2_box").mouseenter(function(){
	$(this).css({"border-color":"#FF3700"});
	$(this).animate({"position":"relative","top":"-10px"},600);
});
$(".s3_d2_box").mouseleave(function(){
	$(this).css({"border-color":"#ccc"});
	$(this).animate({"position":"relative","top":"0px"},600);
});

//section7
setInterval(function(){
	$(".s7_o2_c1").ready(function(){
		$(".s7_o2_c1").animate({"margin-top": "-60px"},800);
	});
	$(".s7_o2_c1").ready(function(){
		$(".s7_o2_c1").animate({"margin-top": "-50px"},800);
	});	
},1000);
setInterval(function(){
	$(".s7_o2_c2").ready(function(){
		$(".s7_o2_c2").animate({"margin-top": "30px"},600);
	});
	$(".s7_o2_c2").ready(function(){
		$(".s7_o2_c2").animate({"margin-top": "20px"},600);
	});	
},1000);
setInterval(function(){
	$(".s7_o2_c3").ready(function(){
		$(".s7_o2_c3").animate({"margin-top": "-60px"},950);
	});
	$(".s7_o2_c3").ready(function(){
		$(".s7_o2_c3").animate({"margin-top": "-50px"},950);
	});	
},1000);
setInterval(function(){
	$(".s7_o2_c4").ready(function(){
		$(".s7_o2_c4").animate({"margin-top": "-60px"},850);
	});
	$(".s7_o2_c4").ready(function(){
		$(".s7_o2_c4").animate({"margin-top": "-50px"},850);
	});	
},1000);
setInterval(function(){
	$(".s7_o2_c5").ready(function(){
		$(".s7_o2_c5").animate({"margin-top": "-60px"},800);
	});
	$(".s7_o2_c5").ready(function(){
		$(".s7_o2_c5").animate({"margin-top": "-50px"},800);
	});	
},1000);

//section9
$(".s9_x2 form input:nth-of-type(6)").hover(
	function(){
		$(this).css({"opacity":"0.8"});
	},
	function(){
		$(this).css({"opacity":"1"});
	}
);
//section10
$(".s10_t").hover(
	function(){
		$(".s10_t1").css({"color":"#1aad19"});
	},
	function(){
		$(".s10_t1").css({"color":"#333"});
	}
);
$(".s10_y1").mouseenter(function(){
	$(this).css({"color":"#1aad19"});
});
$(".s10_y1").mouseleave(function(){
	$(this).css({"color":"#333"});
});

//section11
$(".s11_r a").mouseenter(function(){
	$(this).css({"color":"#fff"});
});
$(".s11_r a").mouseleave(function(){
	$(this).css({"color":"#999"});
});

//section12
$(".s12_r1 a").mouseenter(function(){
	$(this).css({"color":"#ccc"});
});
$(".s12_r1 a").mouseleave(function(){
	$(this).css({"color":"#fff"});
});
$(".s12_t1 a").mouseenter(function(){
	$(this).css({"color":"#ccc"});
});
$(".s12_t1 a").mouseleave(function(){
	$(this).css({"color":"#fff"});
});

//section13
$(".s13_q1 a").mouseenter(function(){
	$(this).css({"color":"#0a6ebd"});
});
$(".s13_q1 a").mouseleave(function(){
	$(this).css({"color":"#aaaaaa"});
});