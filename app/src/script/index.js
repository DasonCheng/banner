window.SwiperBanner = class SwiperBanner {
  constructor(el, option) {
    this.container = document.querySelector(el)
    this.wrapper = document.querySelector(el).querySelectorAll('.banner-wrapper .banner-slide')
    this.pagination = null
    this.timer_auto = null
    this.option = Object.assign({
      current: 0,
      ctrl_btn: true,
      auto_play: true, //是否启动自动播放
      times: 3000, //自动轮播的时间间隔
    }, option);
  }
  addDirection() {
    if (this.option.ctrl_btn) {
      let banner_direction = document.createElement('div')
      banner_direction.className = 'banner-direction'
      banner_direction.innerHTML = `
    <span class='prev'>
      <i class="iconfont icon-angle-left"></i>
    </span>
    <span class='next'>
      <i class="iconfont icon-angle-right"></i>
    </span>
    `
      this.container.appendChild(banner_direction)
      this.container.querySelector('.banner-direction .prev').addEventListener("click", () => {
        this.updateIndex(true, -1);
      })
      this.container.querySelector('.banner-direction .next').addEventListener("click", () => {
        this.updateIndex(true, 1);
      })
    }
  }
  addPagination() {
    let banner_pagination = document.createElement('ul')
    banner_pagination.className = 'banner-pagination'
    for (let i = 0; i < this.container.querySelectorAll('.banner-slide').length; i++) {
      let pagination = document.createElement('li')
      pagination.index = i
      banner_pagination.appendChild(pagination)
    }
    this.pagination = banner_pagination.querySelectorAll('li')
    this.container.appendChild(banner_pagination)
    this.container.querySelector('.banner-pagination').addEventListener("click", (ev = ev || window.event) => {
      let target = ev.target || ev.srcElement
      if (target.nodeName.toLowerCase() == 'li') {
        this.updateIndex(false, target.index)
      }
    })
  }
  autoPlay() {
    if (this.option.auto_play) {
      clearInterval(this.timer_auto)
      this.timer_auto = setInterval(() => {
        this.updateIndex(true, 1)
      }, this.option.times)
    }
  }
  updateIndex(type, index) {
    switch (type) {
      case true:
        if (index === 1)
          this.option.current = this.option.current < this.wrapper.length - 1 ? this.option.current + 1 : 0
        else
          this.option.current = this.option.current > 0 ? this.option.current - 1 : this.wrapper.length - 1
        break
      case false:
        this.option.current = index
        break
    }
    this.showSlider()
  }
  showSlider() {
    this.container.querySelectorAll('.banner-slide').forEach((e, i) => {
      if (this.option.current == i) {
        e.className = 'banner-slide slide-active'
        this.pagination[i].className = 'active'
      } else {
        e.className = 'banner-slide'
        this.pagination[i].className = ''
      }
    });
  }
  mouse() {
    this.container.addEventListener("mouseover", () => {
      clearInterval(this.timer_auto)
    })
    this.container.addEventListener("mouseout", () => {
      this.autoPlay()
    })
  }
  init() {
    this.addDirection()
    this.addPagination()
    this.showSlider()
    this.autoPlay()
    this.mouse()
  }
}
