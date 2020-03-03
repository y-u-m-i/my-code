//****初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//****生成键盘
generateKeyboard(keys, hash)


//****监听键盘事件
listenToKeybord(hash)


//****自定义函数
function init() {
  var keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 3
  }
  var hash = {
    'q': 'www.qq.com',
    'w': 'weibo.com',
    'e': undefined,
    't': 'taobao.com',
    'y': 'youku.com',
    'u': 'iqiyi.com',
  }
  //****取出localStorage中的preserve对应的hash
  var hashInLocalStorage = getfromlocalStorage('preserve')
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }
  return {
    "keys": keys,
    "hash": hash
  }
}

function getfromlocalStorage(name) {
  return JSON.parse(localStorage.getItem('name') || 'null')
}

function generateKeyboard(keys, hash) {
  for (var index = 0; index < keys['length']; index++) {
    var div1 = tag('div', { className: 'row' })
    keyboard.appendChild(div1)

    var row = keys[index] //第一、二、三个数组

    for (var index2 = 0; index2 < row['length']; index2++) {
      var kbd1 = tag('kbd', { className: 'key' })
      var span1 = createSpan(row[index2])
      var img1 = createimage(hash[row[index2]])
      var button1 = createbutton()

      kbd1.appendChild(span1)
      kbd1.appendChild(img1)
      kbd1.appendChild(button1)
      div1.appendChild(kbd1)
    }
  }
}

function tag(tagName, attributes) {
  var element = document.createElement(tagName)
  for (var key in attributes) {
    element[key] = attributes[key]
  }
  return element
}

function createSpan(textContent) {
  var span1 = tag('span', { className: 'text' })
  span1.textContent = textContent
  return span1
}

function createimage(domain) {
  var img1 = tag('img')
  if (domain) {
    img1.src = 'http://' + domain + '/favicon.ico'
  }
  else {
    img1.src = './images/1.jpg'
  }
  img1.onerror = function (image) {
    image.target.src = './images/1.jpg'
  }
  return img1
}

function createbutton() {
  var button1 = tag('button')
  button1.textContent = '编辑'
  button1.onclick = function (button) {//更改编辑键盘对应网页地址
    var button2 = button['target']
    var img2 = button2.previousSibling
    var key = button2['id']
    var x = prompt('Give me a new website')//用户填写新网址
    hash[key] = x   //将新网址储存在hash中
    img2.src = 'http://' + x + '/favicon.ico'
    img2.onerror = function (image) {
      image.target.src = './images/1.jpg'
    }
    localStorage.setItem('preserve', JSON.stringify(hash))//将更改的hash储存在浏览器中
  }
  return button1
}

function listenToKeybord(hash) {
  document.onkeypress = function (keyboard) {
    var key = keyboard['key']
    var website = hash[key]
    window.open('http://' + website, '_blank')
  }
}