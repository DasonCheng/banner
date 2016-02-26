$(function(){
    var current=$('.sliderBanner ol li.active').index(),
        prevIndex,
        activeIndex,
        nextIndex,
        step,
        timerA,
        timerB,
        isMove=false;
    autoMove();
    $('.sliderBanner').mouseover(function(){
        clearInterval(timerB);
    }).mouseout(function(){
        autoMove();
    });
    $('.sliderBanner ol li').click(function(){
        if(isMove) return;
        var bIndex=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        doFun(bIndex,true);
    });

    function autoMove(){
        var autoIndex;
        clearInterval(timerB);
        timerB=setInterval(function(){
            autoIndex=current+1;
            autoIndex=(autoIndex>$('.sliderBanner ol li').length-1)?0:autoIndex;
            $('.sliderBanner ol li').eq(autoIndex).addClass('active').siblings().removeClass('active');
            doFun(autoIndex,false);
        },3000)
    }

    function doFun(index,isBool){
        viewSlider(isBool,index,$('.sliderBanner ol li').length-1);
        clearTimeout(timerA);
        timerA=setTimeout(function(){
            renderSlider(index,$('.sliderBanner ol li').length-1);
        },600);
    }
    function viewSlider(isbool,indexValue,maxIndex){
        if(indexValue-current>1){
            if(indexValue-current==maxIndex&&!isbool){
                prevIndex=maxIndex;
                activeIndex=current;
                nextIndex=current+1;
            }else {
                prevIndex=indexValue-1;
                activeIndex=current;
                nextIndex=indexValue;
            }
        }else if(indexValue-current<-1){
            if(indexValue-current==-maxIndex&&!isbool){
                prevIndex=current-1;
                activeIndex=current;
                nextIndex=0;
            }else {
                prevIndex=indexValue;
                activeIndex=current;
                nextIndex=indexValue+1;
            }
        }else if(indexValue>current){
            prevIndex=(current<=0)?maxIndex:0;
            activeIndex=current;
            nextIndex=indexValue;
        }else if(indexValue<current){
            prevIndex=indexValue;
            activeIndex=current;
            nextIndex=(current>=maxIndex)?0:maxIndex;
        }else{
            return;
        }
        updataClass(prevIndex,activeIndex,nextIndex);
        moveSlider(isbool,indexValue,current);
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

    function moveSlider(isbool,indexMove,currentMove){
        isMove=true;
        step=indexMove>currentMove?'-100%':'100%';
        if(!isbool){
            step=(indexMove==0&&current==$('.sliderBanner ol li').length-1)?'-100%':step;
            step=(indexMove==$('.sliderBanner ol li').length-1&&current==0)?'100%':step;
        }
        $('.sliderBanner ul').css({'transition':'transform .6s ease-in-out','transform':'translate3D('+step+',0,0)'});
        setTimeout(function(){
            isMove=false;
        },700);
    }


    var starX,
        starY,
        endX,
        endY,
        listening;




    $('.sliderBanner').mousedown(function(e) {
        e.preventDefault();
        if(isMove) return;
        starX = endX = e.originalEvent.x || e.originalEvent.layerX || 0;
        starY = endY = e.originalEvent.y || e.originalEvent.layerY || 0;
        listening=true;
    });
    $('.sliderBanner').mouseup(function(e){
        if(listening){
            touchMove();
            listening=false;
        }
    });
    $('.sliderBanner').mouseleave(function(e){
        if(listening){
            touchMove();
            listening=false;
        }
    });
    $('.sliderBanner').mousemove(function(e) {
        if(listening){
            endX = e.originalEvent.x || e.originalEvent.layerX || 0;
            endY = e.originalEvent.y || e.originalEvent.layerY || 0;
            $('.sliderBanner ul').css({'transition':'transform 0s ease-in-out','transform':'translate3D('+(endX-starX)+'px,0,0)'});
        }
    });
    function touchMove(){
        var touchIndex;
        if((endX-starX)>20){
            autoIndex=current-1;
            autoIndex=(autoIndex<0)?$('.sliderBanner ol li').length-1:autoIndex;
            $('.sliderBanner ol li').eq(autoIndex).addClass('active').siblings().removeClass('active');
            doFun(autoIndex,false);
        }else if((endX-starX)<-20){
            touchIndex=current+1;
            touchIndex=(touchIndex>$('.sliderBanner ol li').length-1)?0:touchIndex;
            $('.sliderBanner ol li').eq(touchIndex).addClass('active').siblings().removeClass('active');
            doFun(touchIndex,false);
        }
        else {
            $('.sliderBanner ul').css({'transition':'transform .6s ease-in-out','transform':'translate3D(0,0,0)'});
        }
    }
    var Banner=document.getElementById('sliderBanner');
    Banner.addEventListener("touchstart", function(event){
        if(isMove) return;
        starX=endX=event.touches[0].clientX;
        starY=endY=event.touches[0].clientY;
        listening=true;
    }, false);
    Banner.addEventListener("touchmove", function(event){
        if(listening){
            event.preventDefault();
            endX=event.changedTouches[0].clientX;
            endY=event.changedTouches[0].clientY;
            $('.sliderBanner ul').css({'transition':'transform 0s ease-in-out','transform':'translate3D('+(endX-starX)+'px,0,0)'});
        }
    }, false);
    Banner.addEventListener("touchend", function(event){
        if(listening){
            if(starX!=endX){
                touchMove();
                listening=false;
            }
        }
    }, false);

});