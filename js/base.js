$(function(){
    $('.sliderBanner ol li').click(function(){
        var bIndex=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
    })

    function renderSlider(indexValue,maxIndex){
        if(indexValue<=0){

        }else if(indexValue>=maxIndex){

        }else {

        }
        updataClass(prevIndex,activeIndex,nextIndex);
    }
    function updataClass(prevIndex,activeIndex,nextIndex){
        $('.sliderBanner ul li').eq(prevIndex).addClass('prev').siblings().removeClass('prev');
        $('.sliderBanner ul li').eq(activeIndex).addClass('active').siblings().removeClass('active');
        $('.sliderBanner ul li').eq(nextIndex).addClass('next').siblings().removeClass('next');
    }
})