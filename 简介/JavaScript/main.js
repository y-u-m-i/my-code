//  ****开头动画
setTimeout(function () {
  sitewelcome.classList.remove('active')
}, 1000)

// ****导航栏伸缩动画
window.onscroll = function () {
  if (window.scrollY > 0) {
    topNavbar.classList.add('sticky')
  }
  else {
    topNavbar.classList.remove('sticky')
  }


  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for (let i = 0; i < specialTags.length; i++) {
    if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
      minIndex = i
    }
  }
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#' + id + '"]')
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for (let i = 0; i < brothersAndMe.length; i++) {
    brothersAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
  if (Math.abs(specialTags[0].offsetTop - window.scrollY === specialTags[0].offsetTop)) {
    brothersAndMe[0].classList.remove('highlight')
  }
}

let liTag = document.getElementsByClassName('menuTigger')
liTag[0].onmouseenter = function (x) {
  x.currentTarget.classList.add('active')
}
liTag[0].onmouseleave = function (x) {
  x.currentTarget.classList.remove('active')
}
let aTags = document.querySelectorAll('nav.menu ul li a')

// ****滑动动画
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);
// ****定位滑动
for (let i = 0; i < aTags.length - 1; i++) {
  aTags[i].onclick = function (x) {
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop
    // ****滑动方式、速度
    let currentTop = window.scrollY   //当前高度
    let targetTop = top - 70    //目标高度
    let s = targetTop - currentTop
    var coords = { y: currentTop }
    var t = Math.abs((s / 100) * 300)
    if (t > 500) { t = 500 }
    var tween = new TWEEN.Tween(coords)
      .to({ y: targetTop }, t)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y)
      })
      .start();
  }
}