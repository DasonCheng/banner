$(function(){
    var current=$('.sliderBanner ol li.active').index(),
        prevIndex,
        activeIndex,
        nextIndex,
        step,
        timerA,
        timerB;
    autoMove();
    $('.sliderBanner').mouseover(function(){
        clearInterval(timerB);
    }).mouseout(function(){
        autoMove();
    })
    $('.sliderBanner ol li').click(function(){
        var bIndex=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        doFun(bIndex);
    })

    function autoMove(){
        var autoIndex;
        clearInterval(timerB);
        timerB=setInterval(function(){
            autoIndex=current+1;
            autoIndex=(autoIndex>$('.sliderBanner ol li').length-1)?0:autoIndex;
            $('.sliderBanner ol li').eq(autoIndex).addClass('active').siblings().removeClass('active');
            doFun(autoIndex);
        },3000)
    }

    function doFun(index){
        viewSlider(index,$('.sliderBanner ol li').length-1);
        clearTimeout(timerA);
        timerA=setTimeout(function(){
            renderSlider(index,$('.sliderBanner ol li').length-1);
        },1000);
    }
    function viewSlider(indexValue,maxIndex){
        if(indexValue-current>1){
            prevIndex=indexValue-1;
            activeIndex=current;
            nextIndex=indexValue;
        }else if(indexValue-current==-maxIndex){
            prevIndex=current-1;
            activeIndex=current;
            nextIndex=0;
        }else if(indexValue-current<-1){
            prevIndex=indexValue;
            activeIndex=current;
            nextIndex=indexValue+1;
        }else if(indexValue>current){
            prevIndex=(current<=0)?maxIndex:0;
            activeIndex=current;
            nextIndex=indexValue;
        }else if(indexValue<current){
            prevIndex=indexValue;
            activeIndex=current;
            nextIndex=(current>=maxIndex)?0:maxIndex;
        }else{
            moveSlider(indexValue,current);
            return;
        }
        updataClass(prevIndex,activeIndex,nextIndex);
        moveSlider(indexValue,current);
    }

    function renderSlider(indexRender,maxIndex){
        if(indexRender<=0){
            prevIndex=maxIndex;
            activeIndex=indexRender;
            nextIndex=indexRender+1;
        }else if(indexRender>=maxIndex){
            prevIndex=indexRender-1;
            activeIndex=indexRender;
            nextIndex=0;
        }else {
            prevIndex=indexRender-1;
            activeIndex=indexRender;
            nextIndex=indexRender+1;
        }
        updataClass(prevIndex,activeIndex,nextIndex);
        current=indexRender;
    }
    function updataClass(prevUp,activeUp,nextUp){
        $('.sliderBanner ul').css({'transition':'transform 0s ease-in-out','transform':'translate3D(0,0,0)'});
        $('.sliderBanner ul li').eq(prevUp).addClass('prev').siblings().removeClass('prev');
        $('.sliderBanner ul li').eq(activeUp).addClass('active').siblings().removeClass('active');
        $('.sliderBanner ul li').eq(nextUp).addClass('next').siblings().removeClass('next');
    }

    function moveSlider(indexMove,currentMove){
        step=indexMove>currentMove?'-100%':'100%';
        step=(indexMove==0&&current==$('.sliderBanner ol li').length-1)?'-100%':step;
        $('.sliderBanner ul').css({'transition':'transform .6s ease-in-out','transform':'translate3D('+step+',0,0)'});
    }
})