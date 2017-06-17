# swiper-banner

###pnm
```
npm install swiper-banner
```

###unpkg

> https://unpkg.com/swiper-banner



*HTML*
```html
  <div class="banner-container">
    <div class="banner-wrapper">
      <div class="banner-slide" style='background-image: url("https://images.unsplash.com/photo-1489782419474-4d4221dc5b10?dpr=2&auto=compress,format&fit=crop&w=360&h=240&q=80&cs=tinysrgb&crop=&bg=")'>
      </div>
      <div class="banner-slide" style='background-image: url("https://images.unsplash.com/photo-1487621167305-5d248087c724?dpr=2&auto=compress,format&fit=crop&w=360&h=203&q=80&cs=tinysrgb&crop=&bg=")'>
      </div>
      <div class="banner-slide" style='background-image: url("https://images.unsplash.com/photo-1494565108644-2af890493b92?dpr=2&auto=compress,format&fit=crop&w=360&h=240&q=80&cs=tinysrgb&crop=&bg=")'>
      </div>
      <div class="banner-slide" style='background-image: url("https://images.unsplash.com/photo-1494552116038-f27911101ffa?dpr=2&auto=compress,format&fit=crop&w=360&h=240&q=80&cs=tinysrgb&crop=&bg=")'>
      </div>
      <div class="banner-slide" style='background-image: url("https://images.unsplash.com/photo-1493666835815-de6b83927e24?dpr=2&auto=compress,format&fit=crop&w=360&h=238&q=80&cs=tinysrgb&crop=&bg=")'>
      </div>
    </div>
  </div>
```



```javascript
new SwiperBanner('.banner-container', {
      ctrl_btn: false, //是否显示控制按钮
      auto_play: true, //是否启动自动播放
      times: 3000 //自动轮播的时间间隔
    }).init();
```
