bee-swiper
===


## 引入
- 包导入

```bash
npm install bee-swiper
# or
cnpm install bee-swiper
# or
yarn add bee-swiper
```

```javascript
import 'bee-swiper/bee-swiper.css'
import 'bee-swiper/bee-swiper.js'
```

- 标签引入

```html
<link rel="stylesheet" herf="https://unpkg.com/bee-swiper/dist/bee-swiper.css" />
<script src="https://unpkg.com/bee-swiper/dist/bee-swiper.js"></script>
```

## 使用

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
```javascript
BeeSwiper('.banner-container', {
  ctrl_btn: false, //是否显示控制按钮
  auto_play: true, //是否启动自动播放
  times: 3000 //自动轮播的时间间隔
})
```
## 参数
| 属性        | 类型     | 默认值  | 解释        |
| :-------- | :----- | :--- | :-------- |
| ctrl_btn  | bool   | true | 是否显示控制按钮  |
| auto_play | bool   | true | 是否启动自动播放  |
| times     | number | 3000 | 自动轮播的时间间隔 |

## 案例
[example](https://codepen.io/dasoncheng/pen/rwjmmb)

## 更多
需要添加功能或者存在 `bug` 请提交 [`issues`](https://github.com/myour-cc/bee-swiper/issues)，在空余时间会尽快处理。

