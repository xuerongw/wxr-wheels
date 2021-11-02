export default {
    //填充类
    fillstyleSimple() {
        //简单的填充颜色
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFB6C1";
        ctx.fillRect(20, 20, 150, 100);
    },
    fillStyleGradient() {
        //渐变填充
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        //   var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);//上到下
        var my_gradient = ctx.createLinearGradient(0, 0, 150, 0); //左到右
        //  createLinearGradient(0, 0, 0, 170); (起点x0,y0,终点x1,y1)
        my_gradient.addColorStop(0, "#FFB6C1");
        my_gradient.addColorStop(1, "white");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(20, 20, 150, 100);
    },
    fillImage() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        let img = document.getElementById("img");
        let pat = ctx.createPattern(img, "repeat");
        ctx.rect(0, 0, 1000, 900);
        ctx.fillStyle = pat;
        ctx.fill();//填充当前绘图（路径）
    },
    //笔触 最简易款
    strokeStyle() {
        var c = this.$refs.canvas;
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#0000ff";
        ctx.strokeRect(20, 20, 350, 100);
    },
    //渐变
    strokeGradient() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 170);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // 用渐变进行填充
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 5;
        ctx.strokeRect(20, 20, 150, 100);
    },
    //渐变镂空字体
    strokeFradientText() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 170);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.strokeStyle = gradient;
        ctx.font = "30px Verdana";
        ctx.strokeText("5555", 10, 50);
    },
    //阴影
    canvasShadow() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        //阴影的模糊级别
        ctx.shadowBlur = 10;
        //阴影的水平距离（与物体本身）
        ctx.shadowOffsetX = 10
        //阴影的垂直距离
        ctx.shadowOffsetY = 10
        //阴影的颜色（范围大小）
        ctx.shadowColor = "gray";
        ctx.fillStyle = "pink";
        ctx.fillRect(30, 30, 100, 80);
    },
    //一些方法
    canvasFunc() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        //创建线性渐变
        let gradient = ctx.createLinearGradient();
        gradient.addColorStop("0", "blue");//添加颜色（定位,颜色）
        //在指定方向上重复指定元素(填充图像)
        ctx.createPattern();
        //创建放射状/环形的渐变（用在画布内容上）
        ctx.createRadialGradient();//同样用addColorStop添加颜色
        ctx.rect(0, 0, 1000, 900)//创建矩形
        ctx.fillRect(0, 0, 50, 100)//创建被填充的矩形
        ctx.strokeRect(0, 0, 1000, 900)//绘制矩形用strokeStyle改变笔触即边框颜色
        ctx.clearRect(10, 10, 20, 30)
    },
    //线条样式
    lineStyle() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.lineCap = "round"//butt(每个末端添加平直边缘),square（添加方形边缘）
        ctx.lineJoin = "round"//bevel(两条线条交汇时创建斜角)，miter（尖角）
        ctx.lineWidth = "60"//线条宽度
        ctx.miterLimit = "60"//最大接线长度
    },
    //路径
    wayFunc() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.beginPath()//起始一条
        ctx.moveTo(20, 20)//把路径移到指定地点
        ctx.lineTo(20, 100)//添加一个新点，然后在画布中创建该店到最后指定点的线条
        ctx.strokeStyle = "blue"
        ctx.stroke()//绘制定义的路径
        ctx.closePath()//创建当前点回到起始点的路径 然后用这个之后在绘制一个矩形
        ctx.clip()   //like overflow:hidden 用法就是先创建一个矩形在clip方法后再绘制一个矩形
        //两种不同的曲线
        ctx.quadraticCurveTo(20, 100, 200, 20);   //控制点和结束点 还需要一个开始点 通过beginPath()和moveTo()方法创建
        ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);//控制点1,2和结束点 开始点同上
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);//创建圆弧
        ctx.arcTo(150, 20, 150, 70, 50);//创建两条线之间的圆弧
        ctx.isPointInPath(20, 30)//20,30这个点如果在ctx中就返回true

    },
    //转换
    change() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.scale(2, 2)//放大两倍 ，放大后记得重新绘制
        ctx.rotate(20 * Math.PI / 180)//旋转
        ctx.translate(70, 70);//移动到这个位置，要重新绘制一个大概相当于定位
        ctx.transform("a,b,c,d,e,f")//a 水平缩放绘图 b 水平倾斜绘图  c 垂直倾斜绘图 d	垂直缩放绘图 e	水平移动绘图 f	垂直移动绘图
        ctx.setTransform(1, 0.5, -0.5, 1, 30, 10);//重置前一个变换矩阵然后构建新的矩阵
    },
    text(){
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.font="字号 字体样式"
        ctx.textAlign="start"//start end center	 left	right
        ctx.textBaseline="middle"//基线 alphabetic	默认 top      hanging文本基线是悬挂基线（五线谱）。 middle（五线谱）  ideographic文本基线是表意基线（五线谱）bottom
        ctx.fillText('文字',"x","y","maxWidth")//fillStyle gradient createLinearGradient
        
    }
}
