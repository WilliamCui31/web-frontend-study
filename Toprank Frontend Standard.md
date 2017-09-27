# <center>拓润Web前端团队开发规范</center>

## 目录
1. [规范目的](#规范目的)
2. [通用规范](#通用规范)
3. [HTML 规范](#html-规范)
4. [JavaScript 规范](#javascript-规范)
5. [React 编码规范](#react-编码规范)

## 规范目的 
* 好的代码规范能够提高代码的可读性便于协作沟通，好的模式能够上层设计上避免不必要的 bug 出现。
* 为了规范和约束团队成员的开发编码，提升团队协作能力，提高开发效率，使开发流程更加规范化。
* 同时有利于前端项目的维护性和扩展性。


## 通用规范
* 前端编辑器统一使用 **Visual Studio Code** (以下简称 **VSCode**) 
* **TAB** 键用两个空格代替（**WINDOWS** 下 **TAB** 键占四个空格，**LINUX** 下 **TAB** 键占八个空格）。
* **CSS** 样式属性声明结束 或者 **JAVASCRIPT** 语句结束后加 “ ; ”
* 文件内容编码均统一为 **UTF-8**。
* 前端技术体系采用 **React** 技术栈
* 所有命名采用 **英文全称** 或者 **英文缩写**（前提是要能让人看得懂什么意思），不能使用拼音或者没有意义命名。

**[⬆ 返回目录](#目录)**



### 1. 文件/资源规范：
* 减号 *“-”* 是用来分隔文件名的不二之选，同时它也是常见的 URL 分隔符（i.e. //example.com/blog/my-blog-entry or  //s.example.com/images/big-black-background.jpg）
所以理所当然的，减号应该也是用来分隔资源名称的好选择。
* 文件命名总是以字母开头而不是数字。
* 资源的字母名称必须全为小写

##### 不推荐
```html
MyScript.js
myCamelCaseName.css
i_love_underscores.html
1001-scripts.js
my-file-min.css
```

##### 推荐
```html
my-script.js
my-camel-case-name.css
i-love-underscores.html
thousand-and-one-scripts.js
my-file.min.css
```
**[⬆ 返回目录](#目录)**

### 2. 文本缩进
> 一次缩进两个空格。

html 代码
```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
  <li>
    <a href="#">Test</a>
  </li>
</ul>
```

css 代码
```css
@media screen and (min-width: 1100px) {
  body {
    font-size: 100%;
  }
}
```

js 代码
```javascript
(function(){
  var x = 10;
 
  function y(a, b) {
    return {
      result: (a + b) * x
    }
  }
}());
```
**[⬆ 返回目录](#目录)**

### 3. 注释
* 注释是你自己与团队其他成员了解代码写法和目的的唯一途径。特别是在写一些看似琐碎的无关紧要的代码时，由于记忆点不深刻，注释就变得尤为重要了。
* 当你写注释时应该尽量详细,  为什么要这么写，背后的考量是什么。当然也可以加入所思考问题或是解决方案的链接地址
* 文件注释需要标明作者、文件版本、创建/修改时间、函数描述、功能等信息。

可添加如下信息。
```java
/**
* @file 文件名
* @addon 把一个函数标记为另一个函数的扩张，另一个函数的定义不在源文件中
* @argument 用大括号中的自变量类型描述一个自变量
* @author 函数/类作者的姓名
* @create 创建时间
* @update 修改时间
* @base 如果类是继承得来，定义提供的类名称
* @class 用来给一个类提供描述，不能用于构造器的文档中
* @constructor 描述一个类的构造器
* @deprecated 表示函数/类已被忽略
* @exception 描述函数/类产生的一个错误
* @exec @extends 表示派生出当前类的另一个类
* @fileoverview 表示文档块将用于描述当前文件，这个标签应该放在其它任何标签之前
* @final 指出函数/类
* @ignore 让jsdoc忽视随后的代码
* @link 类似于@link标签，用于连接许多其它页面
* @member 定义随后的函数为提供的类名称的一个成员
* @param 用大括号中的参数类型描述一个参数
* @private 表示函数/类为私有，不应包含在生成的文档中
* @requires 表示需要另一个函数/类
* @return 描述一个函数的返回值
* @see 连接到另一个函数/类
* @throws 描述函数/类可能产生的错误
* @type 指定函数/成员的返回类型
* @version 函数/类的版本号
**/
```

#### 组件和模块注释
```java
/**
* @author William Cui
* @description 使用Promise封装接口请求方法
* @param url {string} 请求地址 【必填】
* @param method {string} 请求方式 【必填】
* @param headers {object} 请求头对象 【选填】
* @param data {object} 请求参数对象 【选填】
* @return Promise 对象
* @create 2017-08-25
**/
```
还有一下可以添加的信息。

#### 代码区块注释

```js
/***************** 桌台显示列表相关 action ********************/
....代码
....代码
/***************** 桌台显示列表相关 action ********************/
```

#### 函数或者表达式注释
```js
/*
* 多行注释
* 多行注释
* 多行注释
*/
@action getAreaList = ({bookingID}) => {
    let _this=this;
    getJSON({
      url: '/reception/table/home.action',
      success: function(json){
        if(json.code === 0) {
          _this.areaList = json.data;
          if(bookingID){
            //如果有bookingID，那么就是预订开台
            _this.bookingOpenTableView({bookingID});
            
            //重置操作服务员
            _this.resetOperateWaiter(); 
          }else {
            //默认显示全部状态桌台
            _this.getTableListByStatus({}); 
          }
        }else {
          //获取数据失败反馈
          _this.areaList = [];
          _this.currentAreaID = '';
          _this.statusList = {};
          _this.currentStatus = '';
          _this.showFeedback({status: 'warn', msg: json.message});
        }
      }
    });
}
```
**[⬆ 返回目录](#目录)**

### 4. 代码检查
* javascript 是一种比较自由宽松的编程语言，遵循编码规范和格式化风格就显得极为重要。
* 可以在 **VSCode** 安装 **ESLint** 扩展


## HTML 规范

### 1. 文档类型
* 使用 HTML5 的文档类型申明： <!DOCTYPE html>
* 使用 text/html 格式的 HTML，避免使用 XHTML。

**[⬆ 返回目录](#目录)**

### 2. 脚本加载

所有浏览器中，推荐

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <!-- body goes here -->
 
    <script src="main.js" async></script>
  </body>
</html>
```

只在现代浏览器(IE10+)中，推荐
```
<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <script src="main.js" async></script>
  </head>
  <body>
    <!-- body goes here -->
  </body>
</html>
```
**[⬆ 返回目录](#目录)**

### 3. 语义化

> 根据元素（有时被错误地称作“标签”）其被创造出来时的初始意义来使用它。打个比方，用 heading 元素来定义头部标题，p 元素来定义文字段落，用 a 元素来定义链接锚点，等等。

> 有根据有目的地使用 HTML 元素，对于可访问性、代码重用、代码效率来说意义重大。

以下示例列出了一些的语义化 HTML 主要情况：

#### 不推荐
```html
<b>My page title</b>
<div class="top-navigation">
  <div class="nav-item"><a href="#home">Home</a></div>
  <div class="nav-item"><a href="#news">News</a></div>
  <div class="nav-item"><a href="#about">About</a></div>
</div>
 
<div class="news-page">
  <div class="page-section news">
    <div class="title">All news articles</div>
    <div class="news-article">
      <h2>Bad article</h2>
      <div class="intro">Introduction sub-title</div>
      <div class="content">This is a very bad example for HTML semantics</div>
      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
      <div class="article-foot-notes">
        This article was created by David <div class="time">2014-01-01 00:00</div>
      </div>
    </div>
 
    <div class="section-footer">
      Related sections: Events, Public holidays
    </div>
  </div>
</div>
 
<div class="page-footer">
  Copyright 2014
</div>
```

#### 推荐
```html
<!-- The page header should go into a header element -->
<header>
  <!-- As this title belongs to the page structure it's a heading and h1 should be used -->
  <h1>My page title</h1>
</header>
 
<!-- All navigation should go into a nav element -->
<nav class="top-navigation">
  <!-- A listing of elements should always go to UL (OL for ordered listings) -->
  <ul>
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#news">News</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
  </ul>
</nav>
 
<!-- The main part of the page should go into a main element (also use role="main" for accessibility) -->
<main class="news-page" role="main">
  <!-- A section of a page should go into a section element. Divide a page into sections with semantic elements. -->
  <section class="page-section news">
    <!-- A section header should go into a section element -->
    <header>
      <!-- As a page section belongs to the page structure heading elements should be used (in this case h2) -->
      <h2 class="title">All news articles</h2>
    </header>
 
    <!-- If a section / module can be seen as an article (news article, blog entry, products teaser, any other
     re-usable module / section that can occur multiple times on a page) a article element should be used -->
    <article class="news-article">
      <!-- An article can contain a header that contains the summary / introduction information of the article -->
      <header>
        <!-- As a article title does not belong to the overall page structure there should not be any heading tag! -->
        <div class="article-title">Good article</div>
        <!-- Small can optionally be used to reduce importance -->
        <small class="intro">Introduction sub-title</small>
      </header>
 
      <!-- For the main content in a section or article there is no semantic element -->
      <div class="content">
        <p>This is a good example for HTML semantics</p>
      </div>
      <!-- For content that is represented as side note or less important information in a given context use aside -->
      <aside class="article-side-notes">
        <p>I think I'm more on the side and should not receive the main credits</p>
      </aside>
      <!-- Articles can also contain footers. If you have footnotes for an article place them into a footer element -->
      <footer class="article-foot-notes">
        <!-- The time element can be used to annotate a timestamp. Use the datetime attribute to specify ISO time
         while the actual text in the time element can also be more human readable / relative -->
        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
      </footer>
    </article>
 
    <!-- In a section, footnotes or similar information can also go into a footer element -->
    <footer class="section-footer">
      <p>Related sections: Events, Public holidays</p>
    </footer>
  </section>
</main>
 
<!-- Your page footer should go into a global footer element -->
<footer class="page-footer">
  Copyright 2014
</footer>
```
**[⬆ 返回目录](#目录)**

### 4. 多媒体回溯
> 对页面上的媒体而言，像图片、视频、canvas 动画等，要确保其有可替代的接入接口。图片文件我们可采用有意义的备选文本（alt），视频和音频文件我们可以为其加上说明文字或字幕。

> 提供可替代内容对可用性来说十分重要。要是没有 @alt 的话, 一位盲人用户如何能知晓一张图片是什么。
（图片的 alt 属性是可不填写内容的，纯装饰性的图片就可用这么做：alt=""）。

不推荐
```
<img src="luke-skywalker.jpg">
```

推荐
```
<img src="luke-skywalker.jpg" alt="Luke skywalker riding an alien horse">
```

> 尽量用 alt 标签去描述图片，你需要对于那些只能通过语音或者看不见图片的用户表达图片到底是什么。

不推荐
```
<img src="huge-spaceship-approaching-earth.jpg" alt="Header image">
```

推荐
```
<img src="huge-spaceship-approaching-earth.jpg" alt="A huge spaceship that is approaching the earth">
```
**[⬆ 返回目录](#目录)**

### 5. HTML 内容至上
> 不要让非内容信息污染了你的 HTML。现在貌似有一种倾向：通过 HTML 来解决设计问题，这是显然是不对的。HTML 就应该只关注内容。

HTML 标签的目的，就是为了不断地展示内容信息。

* 不要引入一些特定的 HTML 结构来解决一些视觉设计问题
* 不要将 img 元素当做专门用来做视觉设计的元素

以下例子展示了误将 HTML 用来解决设计问题的这两种情况：

#### 不推荐
```html
<span class="text-box">
  <span class="square"></span>
  See the square next to me?
</span>
```
```css
.text-box > .square {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
```

#### 推荐
```html
<!-- That's clean markup! -->
<span class="text-box">
  See the square next to me?
</span>
```
```css
/* We use a :before pseudo element to solve the design problem of placing a colored square in front of the text content */
.text-box:before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: red;
}
```

图片和 SVG 图形能被引入到 HTML 中的唯一理由是它们呈现出了与内容相关的一些信息。

#### 不推荐
```html
<!-- Content images should never be used for design elements!  -->
<span class="text-box">
  <img src="square.svg" alt="Square" />
  See the square next to me?
</span>
```

#### 推荐
```html
<!-- That's clean markup! -->
<span class="text-box">
  See the square next to me?
</span>
```
```css
/* We use a :before pseudo element with a background image to solve the problem */
.text-box:before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(square.svg) no-repeat;
  background-size: 100%;
}
```
总结： 多使用 **before、after** 等伪类或伪元素处理视觉设计

**[⬆ 返回目录](#目录)**

### 6. Type 属性
> 省略样式表与脚本上的 type 属性。鉴于 HTML5 中以上两者默认的 type 值就是 text/css 和 text/javascript，所以 type 属性一般是可以忽略掉的。甚至在老旧版本的浏览器中这么做也是安全可靠的。


### 7. Tab Index 在可用性上的运用
> 检查文档中的 tab 切换顺序并传值给元素上的 tabindex，这可以依据元素的重要性来重新排列其 tab 切换顺序。你可以设置 tabindex="-1" 在任何元素上来禁用其 tab 切换。

当你在一个默认不可聚焦的元素上增加了功能，你应该总是为其加上 tabindex 属性使其变为可聚焦状态，而且这也会激活其 CSS 的伪类 :focus。选择合适的 tabindex 值，或是直接使用  tabindex="0" 将元素们组织成同一 tab 顺序水平，并强制干预其自然阅读顺序。

**[⬆ 返回目录](#目录)**

### 8. ID 和锚点
> 通常一个比较好的做法是将页面内所有的头部标题元素都加上 ID. 这样做，页面 URL 的 hash 中带上对应的 ID 名称，即形成描点，方便跳转至对应元素所处位置。

打个比方，当你在浏览器中输入 URL http://your-site.com/about#best-practices，浏览器将定位至以下 H3 上。

```html
<h3 id="best-practices">Best practices</h3>
```

### 9. 格式化规则
> 在每一个块状元素，列表元素和表格元素后，加上一新空白行，并对其子孙元素进行缩进。内联元素写在一行内，块状元素还有列表和表格要另起一行。

example:
```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
 
<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>
 
<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$ 5.00</td>
      <td>$ 4.50</td>
    </tr>
  </tbody>
</table>
```
**[⬆ 返回目录](#目录)**

### 10. HTML 属性值引号
>使用双引号(“”) 而不是单引号(”) 。

#### 不推荐
```html
<div class='news-article'></div>
```

#### 推荐
```html
<div class="news-article"></div>
```
**[⬆ 返回目录](#目录)**

## CSS规范

### 1. CSS书写顺序
1. 位置 (position, top, right, z-index, display, float，visibility, table-layout等)
2. 盒模型 (width, height, padding, margin, border, overflow, clear等)
3. 文本 (font, line-height, letter-spacing, color, text-align, text-indent等)
4. 背景 (background, border, outline, opacity等)
5. 其他 (animation, transition, cursor等)

### 2. ID 和 class 命名
ID和class(类)名总是使用可以反应元素 **目的** 和 **用途** 的名称，或其他通用名称。代替表象和晦涩难懂的名称。

应该首选具体和反映元素目的的名称，因为这些是最可以理解的，而且发生变化的可能性最小。

通用名称只是多个元素的备用名，他们兄弟元素之间是一样的，没有特别意义。
区分他们，使他们具有特殊意义，通常需要为“帮手”。

尽管class(类)名和ID 的语义化对于计算机解析来说没有什么实际的意义，
语义化的名称 通常是正确的选择，因为它们所代表的信息含义，不包含表现的限制。

#### 不推荐
```css
.fw-800 {
  font-weight: 800;
}
 
.red {
  color: red;
}
```

#### 推荐
```css
.heavy {
  font-weight: 800;
}
 
.important {
  color: red;
}
```

**[⬆ 返回目录](#目录)**

### 3. 不要随意使用Id定义样式
id在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外id的优先级优先与class，所以id应该按需使用，而不能滥用。

#### 不推荐
```css
#content .title {
  font-size: 2em;
}
```

#### 推荐
```css
.content .title {
  font-size: 2em;
}
```

> 另一个反对使用ID的观点是含有ID选择器权重很高。
一个只包含一个ID选择器权重高于包含1000个class(类)名的选择器，这使得它很奇怪。

```css
// 这个选择器权重高于下面的选择器
#content .title {
  color: red;
}
 
// than this selector!
html body div.content.news-content .title.content-title.important {
  color: blue;
}
```
**[⬆ 返回目录](#目录)**

### 4. CSS选择器中避免标签名
> 从分离的角度考虑,在表现层中不应该分配html标记/语义。
它可能是一个有序列表需要被改成一个无序列表，或者一个div将被转换成article。
如果你只使用具有实际意义的class(类)名，
并且不使用元素选择器，那么你只需要改变你的html标记，而不用改动你的CSS。

#### 不推荐
```css
div.content > header.content-header > h2.title {
  font-size: 2em;
}
```

#### 推荐
```css
.content > .content-header > .title {
  font-size: 2em;
}
```
**[⬆ 返回目录](#目录)**

### 5. 使用属性缩写
CSS提供了各种缩写属性（如 font 字体）应该尽可能使用，即使在只设置一个值的情况下。

使用缩写属性对于代码效率和可读性是很有用的。

#### 不推荐
```css
.box {
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
}
```

#### 推荐
```css
.box {
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;
}
```
**[⬆ 返回目录](#目录)**

### 6. 省略 *0* 后面的 *“单位”* 和 *小数点* 前面的 *“0”*
* 省略“0”值后面的单位
* 省略小数点前面的0

#### 不推荐
```css
.box {
    padding-bottom: 0px;
    margin: 0em;
    font-size: 0.8em;
    opacity: 0.9;
}
```

#### 推荐
```css
.box {
    padding-bottom: 0;
    margin: 0;
    font-size: .8em;
    opacity: .9;
}
```
**[⬆ 返回目录](#目录)**

### 7. 颜色值：小写十六进制表示法
* 在可能的情况下，使用3个字符的十六进制表示法。
* 始终使用小写的十六进制数字。

#### 不推荐
```css
.box {
    color: #FF33AA;
}
```

#### 推荐
```css
.box {
    color: #f3a;
}
```
**[⬆ 返回目录](#目录)**

### 8. ID 和 Class（类） 名的分隔符
使用连字符（中划线）分隔ID和Class名中的单词。

为什么呢？ 

* 输入的时候少按一个shift键；
* 浏览器兼容问题 （比如使用_tips的选择器命名，在IE6是无效的）
* 能良好区分JavaScript变量命名（JS变量命名是用“_”）

#### 不推荐
```css
#testid {}
.test_class {}
```

#### 推荐
```css
#test-id {}
.test-class {}
```
**[⬆ 返回目录](#目录)**

### 9. 声明规范
* 属性名的冒号后使用一个空格。
* 每个声明应该用分号结束，每个声明换行。
* 选择器和选择器之间，选择器和声明之间换行。
* 规则之间始终有一个空行（双换行符）分隔。

**[⬆ 返回目录](#目录)**

### 附: CSS命名参考

1. #### 常用的CSS命名

* 头：header
* 内容：content/container
* 尾：footer
* 导航：nav
* 侧栏：sidebar
* 栏目：column
* 页面外围控制整体佈局宽度：wrapper
* 左右中：left right center
* 登录条：loginbar
* 标志：logo
* 广告：banner
* 页面主体：main
* 热点：hot
* 新闻：news
* 下载：download
* 子导航：subnav
* 菜单：menu
* 子菜单：submenu
* 搜索：search
* 友情链接：friendlink
* 页脚：footer
* 版权：copyright
* 滚动：scroll
* 内容：content
* 标签：tags
* 文章列表：list
* 提示信息：msg
* 小技巧：tips
* 栏目标题：title
* 加入：joinus
* 指南：guide
* 服务：service
* 注册：regsiter
* 状态：status
* 投票：vote
* 合作伙伴：partner

**[⬆ 返回目录](#目录)**

2. #### 注释的写法:
```css
/* Header */
内容区
/* End Header */
```

3. #### Id的命名:

(1)页面结构

* 容器: container
* 页头：header
* 内容：content/container
* 页面主体：main
* 页尾：footer
* 导航：nav
* 侧栏：sidebar
* 栏目：column
* 页面外围控制整体佈局宽度：wrapper
* 左右中：left right center

(2)导航

* 导航：nav
* 主导航：mainnav
* 子导航：subnav
* 顶导航：topnav
* 边导航：sidebar
* 左导航：leftsidebar
* 右导航：rightsidebar
* 菜单：menu
* 子菜单：submenu
* 标题: title
* 摘要: summary

(3)功能

* 标志：logo
* 广告：banner
* 登陆：login
* 登录条：loginbar
* 注册：register
* 搜索：search
* 功能区：shop
* 标题：title
* 加入：joinus
* 状态：status
* 按钮：btn
* 滚动：scroll
* 标籤页：tab
* 文章列表：list
* 提示信息：msg
* 当前的: current
* 小技巧：tips
* 图标: icon
* 注释：note
* 指南：guild
* 服务：service
* 热点：hot
* 新闻：news
* 下载：download
* 投票：vote
* 合作伙伴：partner
* 友情链接：link
* 版权：copyright

**[⬆ 返回目录](#目录)**

4. #### 注意事项::

* 一律小写;
* 尽量用英文;
* 不加中槓和下划线;
* 尽量不缩写，除非一看就明白的单词。

 

5. #### CSS样式表文件命名

* 主要的 master.css
* 模块 module.css
* 基本共用 base.css
* 布局、版面 layout.css
* 主题 themes.css
* 专栏 columns.css
* 文字 font.css
* 表单 forms.css
* 补丁 mend.css
* 打印 print.css

**[⬆ 返回目录](#目录)**


## JavaScript 规范

### 1. 全面拥抱ES6+

> 现在主流的浏览器都是支持到ES5, "ES6+" 就是ES5以后的版本，包括ES6, ES7甚至ES8(ES8已经于17年6月底发布). 为什么说现在就用，虽然主流的浏览器只支持到ES5, 但是现在我们有Babel，可以把一些ES6和ES7的代码转换为ES5的代码。这就意味着我们现在就可以使用这些新特性，然后使用转码器让代码可以运行在主流的浏览器上。

* 建议不再使用var，而使用let 和const 。优先使用const。
* 静态字符串一律使用单引号, 动态字符使用反引号。
* 优先使用解构赋值。
* 对象的属性和方法尽量采用简洁表达法

**[⬆ 返回目录](#目录)**

### 2. 使用 === 操作符

总是使用 === 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。

如果你使用 === 操作符，那比较的双方必须是同一类型为前提的条件下才会有效。

**[⬆ 返回目录](#目录)**


### 3. 使用真假判断
当我们在一个 if 条件语句中使用变量或表达式时，会做真假判断。if(a == true) 是不同于 if(a) 的。后者的判断比较特殊，我们称其为真假判断。这种判断会通过特殊的操作将其转换为 true 或 false，下列表达式统统返回 false：false, 0, undefined, null, NaN, ''（空字符串）.

这种真假判断在我们只求结果而不关心过程的情况下，非常的有帮助。

```js
(function(log){
  'use strict';
 
  function logTruthyFalsy(expr) {
    if(expr) {
      log('truthy');
    } else {
      log('falsy');
    }
  }
 
  logTruthyFalsy(true); // truthy
  logTruthyFalsy(1); // truthy
  logTruthyFalsy({}); // truthy
  logTruthyFalsy([]); // truthy
  logTruthyFalsy('0'); // truthy
 
  logTruthyFalsy(false); // falsy
  logTruthyFalsy(0); // falsy
  logTruthyFalsy(undefined); // falsy
  logTruthyFalsy(null); // falsy
  logTruthyFalsy(NaN); // falsy
  logTruthyFalsy(''); // falsy
 
}(window.console.log));
```
**[⬆ 返回目录](#目录)**

### 4. 变量赋值时使用逻辑操作
逻辑操作符 || 和 && 也可被用来返回布尔值。如果操作对象为非布尔对象，那每个表达式将会被自左向右地做真假判断。基于此操作，最终总有一个表达式被返回回来。这在变量赋值时，是可以用来简化你的代码的。

#### 不推荐
```js
let a;
if (x) {
  a = x;
} else {
  if (y) {
    a = y;
  } else {
    a = 1;
  }
}
```

#### 推荐
```js
let a = x || y || 1;
```

这一小技巧经常用来给方法设定默认的参数。

```js
function multiply(a, b) {
    a = a || 1;
    b = b || 1;
    
    log('Result ' + a * b);
}

multiply(); // Result 1
multiply(10); // Result 10
multiply(3, NaN); // Result 3
multiply(9, 5); // Result 45
```
**[⬆ 返回目录](#目录)**

### 5. 分号结束

* JavaScript 中语句要以分号结束，否则它将会继续执行下去，不管换不换行。
* 分号需要用在表达式的结尾，而并非函数声明的结尾。

区分它们最好的例子是：
```js
var foo = function() {
  return true;
};  // semicolon here.
 
function foo() {
  return true;
}  // no semicolon here.
```

**[⬆ 返回目录](#目录)**

### 6. 不要在语句块内声明函数

* 在 ECMAScript 5 的严格模式下，这是不合法的。
* 函数声明应该在定义域的顶层。但在语句块内可将函数申明转化为 **函数表达式** 赋值给变量。

#### 不推荐
```js
if (x) {
  function foo() {}
}
```

#### 推荐
```js
if (x) {
  var foo = function() {};
}
```

**[⬆ 返回目录](#目录)**

### 7. 闭包的使用

* 闭包的创建也许是 JS 最有用也是最易被忽略的能力了。
* 循环语句中加入函数是非常容易形成闭包而带来隐患的。

### 8. eval 函数（魔鬼）

eval() 不但混淆语境还很危险，总会有比这更好、更清晰、更安全的另一种方案来写你的代码，因此尽量不要使用 evil 函数。

**[⬆ 返回目录](#目录)**

### 9. 首选函数式风格

函数式编程让你可以简化代码并缩减维护成本，因为它容易复用，又适当地解耦和更少的依赖。

接下来的例子中，在一组数字求和的同一问题上，比较了两种解决方案。第一个例子是经典的程序处理，而第二个例子则是采用了函数式编程和 ECMA Script 5.1 的数组方法。

#### 不推荐
```js
(function(log){
  'use strict';
 
  var arr = [10, 3, 7, 9, 100, 20],
      sum = 0,
      i;
 
 
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
 
  log('The sum of array ' + arr + ' is: ' + sum)
 
}(window.console.log));
```

#### 推荐
```js
(function(log){
  'use strict';
 
  var arr = [10, 3, 7, 9, 100, 20];
 
  var sum = arr.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }, 0);
 
  log('The sum of array ' + arr + ' is: ' + sum);
 
}(window.console.log));
```
**[⬆ 返回目录](#目录)**

### 10. 数组和对象字面量

用数组和对象字面量来代替数组和对象构造器。数组构造器很容易让人在它的参数上犯错。

#### 不推荐
```js
var a1 = new Array(x1, x2, x3);
var a2 = new Array(x1);

var o = new Object();
o.a = 0;
o.b = 1;
o.c = 2;
o['strange key'] = 3;
```

#### 推荐
```js
var a1 = [x1, x2, x3];
var a2 = [x1];

var o = {
  a: 0,
  b: 1,
  c: 2,
  'strange key': 3
};
```
**[⬆ 返回目录](#目录)**

### 11. 三元条件判断（if 的快捷方法）

#### 不推荐
```js
if(x === 10) {
  return 'valid';
} else {
  return 'invalid';
}
```

#### 推荐
```js
return x === 10 ? 'valid' : 'invalid';
```
**[⬆ 返回目录](#目录)**

### 12. javaScript书写规范

#### 1. 命名规范
* 常量名: 全部 **大写** 并单词间用 **下划线** 分隔 如：CSS_BTN_CLOSE、TXT_LOADING。
* 变量名: **小驼峰式** 如： current、defaultConfig。
* 函数名：**小驼峰式** 如：current()、defaultConfig()。
* 类名: **大驼峰式** 如：App, MyComponent。
* 对象的属性或方法名： **小驼峰式**

**[⬆ 返回目录](#目录)**

#### 2. 代码格式 
* "()"前后需要跟空格, 如：

```js
if (true) {
    
}

for (let i = 0; i < 10; i++）{
    
} 
```
* "="前后需要跟空格, 如：

```js
let a = 1;
```
* ","后面需要跟空格, 如：

```js
let arr =  [1, 2, 3];
let {a, b, c} = obj;
```

* 对象每个键值对占一行，“：”后面要空格， 如：
```js
const person = {
    name: '黄晓明',
    gender: '男',
    age: '30'
}
```

* 串连写法要换行， 如：
```js
asyncFunc()
  .then(f1)
  .catch(r1)
  .then(f2)
  .done();
  
//或

fetch(url, { 
   ...
   ...
}).then((response) => { 
    return response.json();
}).then(json => {
    resolve(json);
}).catch(e => {
    console.log('fetchjson: ', e);
});
```
**[⬆ 返回目录](#目录)**

## React 编码规范

### 1. 基本规范

1. 统一全部采用 ES6；
2. 使用JSX语法， 不要使用 React.createElement 创建 ReactElement；
3. 一个文件夹一个模块，里面包括：
    1. index.js 作为入口文件；
    2. 相应的样式文件；
    3. 子组件文件夹；
    4. 状态文件 如： Store, reducer, action等等；
4. 每个文件只写一个模块（但是多个无状态模块可以放在单个文件中）;

**[⬆ 返回目录](#目录)**

### 2. 命名规范

1. 扩展名：使用 .js 作为 React 组件的扩展名；
2. 组件名称：使用大驼峰，如 MyComponent.js
4. 引用命名：组件实例使用小驼峰命名法；
5. 模块命名: 模块使用当前文件名一样的名称. 比如 ReservationCard.jsx 应该包含名为 ReservationCard的模块. 但是，如果整个文件夹是一个模块，使用 index.js作为入口文件，然后直接使用 index.js 或者文件夹名作为模块的名称:
6. 属性命名: 
    1. 使用 **小驼峰命名法**；
    2. 避免使用DOM相关的属性来用作其他的用途；
    3. 自定义属性，需要添加 `data-` 前缀，React 不会渲染非标准属性；
    4. 属性 `aria-` 可以正常使用；
7. 事件处理函数: handleSomething
8. 自定义事件属性名称: onSomething={this.handleSomething}
9. key: 不能使用数组 index ，构造或使用唯一的 id
10. 组件方法名称：避免使用下划线开头的命名
    
**[⬆ 返回目录](#目录)**

### 3. 代码对齐
遵循以下的JSX语法缩进/格式.
```jsx
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good, 有多行属性的话, 新建一行关闭标签
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// 若能在一行中显示, 直接写成一行
<Foo bar="bar" />

// 子元素按照常规方式缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```
**[⬆ 返回目录](#目录)**

### 4. 单引号还是双引号

对于JSX属性值总是使用双引号("), 其他均使用单引号(').
```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```
**[⬆ 返回目录](#目录)**

### 5. 空格
* 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行.
``` jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```
* 不要在JSX {} 引用括号里两边加空格.
```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```
**[⬆ 返回目录](#目录)**

### 6. Props 属性
* JSX属性名使用小驼峰式风格
```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

* 如果属性值为 true, 可以直接省略.
```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

* <img> 标签总是添加 alt 属性. 如果图片以presentation(感觉是以类似PPT方式显示?)方式显示，alt 可为空, 或者<img> 要包含role="presentation". 
```jsx
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```
* 避免使用数组的index来作为属性key的值，推荐使用唯一ID. 
```jsx
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

**[⬆ 返回目录](#目录)**

### 7. Refs
总是在Refs里使用回调函数. 
```jsx
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

**[⬆ 返回目录](#目录)**

### 8. 括号
将多行的JSX标签写在 ()里
```jsx
// bad
render() {
  return <MyComponent className="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, 单行可以不需要
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

**[⬆ 返回目录](#目录)**

### 9. 标签
* 对于没有子元素的标签来说总是自己关闭标签. 
```jsx
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

* 如果模块有多行的属性， 关闭标签时新建一行. 
```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

**[⬆ 返回目录](#目录)**

### 10. 函数
尽量使用箭头函数

* 使用箭头函数来获取本地变量.
```jsx
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
```
* 当在 render() 里使用事件处理方法时，应该使用 **箭头函数定义** 事件处理方法 或者 提前 **在构造函数里把this 绑定上去**.
>  为什么? 在每次 render 过程中， 再调用 bind 都会新建一个新的函数，浪费资源.
```jsx
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}

// best
class extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickDiv = () => {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

* 在React模块中，不要给所谓的私有函数添加 _ 前缀，本质上它并不是私有的.
> 为什么？_ 下划线前缀在某些语言中通常被用来表示私有变量或者函数。但是不像其他的一些语言，在JS中没有原生支持所谓的私有变量，所有的变量函数都是共有的。尽管你的意图是使它私有化，在之前加上下划线并不会使这些变量私有化，并且所有的属性（包括有下划线前缀及没有前缀的）都应该被视为是共有的。

**[⬆ 返回目录](#目录)**

### 11. 如何定义 propTypes, defaultProps, contextTypes, 等等其他属性...
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```
**[⬆ 返回目录](#目录)**

### 12. 行内迭代
运算逻辑简单的直接使用行内迭代。
```jsx
return (
  <div>
    {this.props.data.map(function(data, i) {
      return <Component data={data} key={i} />
    })}
    </div>
);
```

### 13. 注释
组件之间的注释需要用 `{}` 包裹。
```jsx
var content = (
  <Nav>
    {/* child comment, put {} around */}
    <Person
      /* multi
         line
         comment */
      name={window.isLoggedIn ? window.name : ''} // end of line comment
    />
  </Nav>
);
```
**[⬆ 返回目录](#目录)**

### 14. JSX输出
* 简单的输出直接三元运算符
```jsx
{this.state.show && 'This is Shown'}

{this.state.on ? 'On' : 'Off'}

{
  dineStore.tableList.length > 0 
  ? <div id="tableContainer">
    {dineStore.tableList.map((table, index) => {
      return <Table dineStore={dineStore} table={table} key={index} />
    })} 
  </div>
  : <div className="empty-holder">暂无相关桌台</div>
}
```
* 复杂的输出可以使用自执行函数
```jsx
{(() => {
  ...
  ...
  ...
  return ...
})()}

{(function() {
  ...
  ...
  ...
  return ...
}())}
```
* 不要定义JSX变量
```jsx
render() {

    let boxHtml;
    if(true){
    	boxHtml = <div>true</div>;
    }else{
    	boxHtml = <div>false</div>;
    }
    
    return (
        <div>
            ...
            ...
            {boxHtml}
            ...
            ...
        </div>
    )
}
```

**[⬆ 返回目录](#目录)**

### 15. 组件结构
* stateless(Function) 优先于 ES6 Class 优先于 React.createClass
* 方法（属性）之间空一行
* render() 方法始终放在最后
* 生命周期函数用函数声明，自定义方法用箭头函数的函数表达式
* 自定义方法 放在React生命周期之后， render()之前。 
* 按照生命周期组顺序组织

    * static 方法

    * constructor
    
    * getChildContext
    
    * componentWillMount
    
    * componentDidMount
    
    * componentWillReceiveProps
    
    * shouldComponentUpdate
    
    * componentWillUpdate
    
    * componentDidUpdate
    
    * componentWillUnmount
    
    * clickHandlers + eventHandlers 如 onClickSubmit() 或 onChangeDescription()
    
    * getter methods for render 如 getSelectReason() 或 getFooterContent()
    
    * render methods 如 renderNavigation() 或 renderProfilePicture()
    
    * render

**[⬆ 返回目录](#目录)**

参考资料： 
* http://www.css88.com/archives/5361
* http://www.shejidaren.com/css-written-specifications.html
* https://github.com/JasonBoy/javascript/tree/master/react






