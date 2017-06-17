# swiper-banner

#### [npm](https://www.npmjs.com/package/swiper-banner) 
*install*
```
npm install swiper-banner
```

*import*
```javascript
import 'swiper-banner/dist/swiper-banner.css'
import 'swiper-banner/dist/swiper-banner.js'
```

#### [unpkg](https://unpkg.com/swiper-banner/dist)

*style*
```
https://unpkg.com/swiper-banner/dist/swiper-banner.css
```

*script*
```
https://unpkg.com/swiper-banner/dist/swiper-banner.js
```


*HTML*
```html
  <div class="banner-container">
    <div class="banner-wrapper">
      <div class="banner-slide" style='background-image: url("{{img_link}}")'>
        ···
      </div>
      <div class="banner-slide" style='background-image: url("{{img_link}}")'>
        ···
      </div>
      <div class="banner-slide" style='background-image: url("{{img_link}}")'>
        ···
      </div>
      <div class="banner-slide" style='background-image: url("{{img_link}}")'>
        ···
      </div>
      <div class="banner-slide" style='background-image: url("{{img_link}}")'>
        ···
      </div>
      ·
      ·
      ·
    </div>
  </div>
```


#### init
```javascript
new SwiperBanner('.banner-container', {
      ctrl_btn: false, //是否显示控制按钮
      auto_play: true, //是否启动自动播放
      times: 3000 //自动轮播的时间间隔
    }).init();
```

#### dome
[swiper-banner](https://codepen.io/dasoncheng/pen/rwjmmb?editors=1010)
