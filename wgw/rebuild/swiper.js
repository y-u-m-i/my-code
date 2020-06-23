window.mySwiper = new Swiper('#case1', {
  autoplay: true, //可选选项，自动滑动
  initialSlide: 1, //默认显示第二张图片索引从0开始
  speed: 2000, //设置过度时间
  /* grabCursor: true,//鼠标样式根据浏览器不同而定 */
  autoplay: {
    delay: 3000
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },

  autoplay: {
    disableOnInteraction: false,
  }
})

console.log(111111111111111111, document.querySelector("#test"))
document.querySelector("#test").onclick = () => {
  console.log('click')
}
var event = new Event('click');
document.querySelector("#test").dispatchEvent(event);
