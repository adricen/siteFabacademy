# Fabacademy : *Week 2* - **January 24/2018**



## Assignement - Project management

* [I. Work through a git tutorial](#i-work-through-a-git-tutorial)
* [II. Build a personal site in the class archive describing you and your final project](#ii-build-a-personnal-web-site)

## Practice

### I. Work through a git tutorial

#### 1. Github history

> git hub Tagname : [@adricen](https://github.com/adricen)

I discovered git three years ago when I started to learn about web developpement.
At that time, I have been engaged in a quite big association in order to teech web developpement and coach young adulte living in popular area. I started to work on git hub with them, beginning by the online-interface of github, guid them through the creation of somme simple md files to learn about html structure. Then created a programme called [`Ma6TvaCODER`](https://github.com/Ma6Tvacoder-Docs) where github had a central place between schools. Soon, it's been 60 students that were working together on this support, experimenting through content creation.

#### 2. assignement for Git

Everything you need to no to start with git is well explain here by [@fiore](https://gitlab.fabcloud.org/fibasile) :  

* [**I.Version Control**](https://gitlab.fabcloud.org/fibasile)
* [**II.Gitlab**](http://fab.academany.org/2018/recitations/gitlab.html#1)

I wanted to go further with git to enhance my worflow, specialy for the fabacademy to responde to my personnal constraint. The biggest one is the time I loose in public transport, I have 1h30 to go from my place, Paris north, to the fablab Digiscope wich make 3 hours of public transport in a day... That's quite a lot of time and with the tool I owned, **I must be able to work on my phone** and **git should help me for this**.

> for now I just use [**Labcoat**](https://play.google.com/store/apps/details?id=com.commit451.gitlab&hl=en) Application on my android and the git labsite to connect my acompte and edit my md files and it work fine.

##### a. Installing `termux` and `git` on an Android phone

1. On the android store, download and install `Termux`.
2. Once it's done, you should have this screen
3. `Termux` seams to work exactly as bash on linux does. It have his package manager and stuff... To install git, tap `pkg install git`.


| Termux | Install Git |
| --- | --- |
| ![first screen termux](assets/img/termux/debut.png) | ![gitinstall](assets/img/termux/install-git.png) |

> for now, it's where I am at. I still have trouble identifyng where am I in the phone and can't manage to find the good place. Next step is to identifying the image folder and being able to synch it with gihub. Or clone my website on my phone just to have access to my md files and being able to modify theme and synchronized it. For now I can modify files on my phone  


### II. Build a personnal web site
```
 __         ______     ______   ______        ______     ______     _____     ______    
/\ \       /\  ___\   /\__  _\ /\  ___\      /\  ___\   /\  __ \   /\  __-.  /\  ___\   
\ \ \____  \ \  __\   \/_/\ \/ \ \___  \     \ \ \____  \ \ \/\ \  \ \ \/\ \ \ \  __\   
 \ \_____\  \ \_____\    \ \_\  \/\_____\     \ \_____\  \ \_____\  \ \____-  \ \_____\
  \/_____/   \/_____/     \/_/   \/_____/      \/_____/   \/_____/   \/____/   \/_____/
```

#### 1. goals !

Building a website from scratch is something that can be quickly annoying if you don't think a little bit about it before to do anithings. Initiate a good reflexion about architecture, content, design and ergonomy and drope it into a tool like Trello save a lot of time and mistac.

First things first, the purpose of my website : offert me a good support to write and display the content I will produce in the futur and a proper way to presente it.

I do have some personnal contraint that needed some particular features in order to take care of my documentation. The biggest one as I said, was the 3h of public transport a day... wich is quite a lot, even for Paris.

To answer to this main probleme, I choose to write my content in 'markdown', a pre-processor html that allow me to produce content w

#### 2. Architecture

##### a. `Vue.js`
---
Using [`Vue.js`](https://vuejs.org/) allow me to interact directly with content by a bind system. Dynamique content are structured like this :

Found this in project path [script.js](assets\js\script.js)

```javascript
var layout_page = new Vue({
  el: '#app',
  data: {
    seen: {
      theme_1: true,
      theme_2: true,
      modal : false,
    },
    template: {
      nav : '<header class="nav-theme-1"><nav class="container "><ul class="row"><li class="col"><a href="index.html">About Me</a></li><li class="col"><a href="assignement.html?page=documentation">Weekly Assignement</a></li><li class="col"><a href="assignement.html?page=week_11">Group Project</a></li><li class="col"><a href="assignement.html?page=finalProject">Final Project</a></li></ul></nav></header>',
      imgSrc_modal : '',
    },
    markdown: {
      finalProject: {
        title: "Final project Developpement",
        index : "finalProject.md",
        content: ''
      },
      // ...
    },
    // ...
  }
})

```

> I can deal with my different theme by changing the `layout_page.seen.theme_*` **to activate or desactivate differents layouts**.

##### b. Layout
---
The layout is divised int three parts, `<header>`, `<aside>` and `<section>`, it change beetween `about me` page and `documentaion` page. For the index it's divided like this :
In `windex.html` :
- <u>**header > nav :**</u>
```html
<div v-html="template.nav"></div>
```
- <u>**aside :**</u>
```html
  <aside v-bind:class="'layout-general ' +  layout_size">
    <div class="main">
      <h1 class=""><span>Adrien Centonze</span></h1>
      <h3><span>3D artist / Front end developpeur</span></h3>
      <ul class="social">
        <li><a href="http://centonze-3d.blogspot.fr/" target="_blank" rel="noopener"><i class="fa fa-paint-brush" aria-hidden="true"></i></a></li><!---
        --><li><a href="https://codepen.io/Adricen/" target="_blank" rel="noopener"><i class="fa fa-codepen" aria-hidden="true"></i></a></li><!---
      --><li><a href="https://gitlab.fabcloud.org/academany/fabacademy/2018/labs/fablabdigiscope/students/adrien-centonze" target="_blank" rel="noopener"><i class="fa fa-gitlab" aria-hidden="true"></i></a></li><!---
        --><li><a href="https://github.com/adricen" target="_blank" rel="noopener"><i class="fa fa-github" aria-hidden="true"></i></a></li><!---
        --><li><a href="https://facebook.com/adricen111" target="_blank" rel="noopener"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><!---
        --><li><a href="https://twitter.com/whad111" target="_blank" rel="noopener"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><!--
      --><li><a href="https://www.linkedin.com/in/adrien-centonze/" target="_blank" rel="noopener"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </aside>
```

- <u>**content :**</u>

  ```html
    <section class="col layout-general home"></section>

  ```
> the section is empty in the home for the moment. I will fill it up later.

##### b. Markdown

In order to focus on the content of my material I used the Markdown form to organize freely my documentation. It's gona be a lot of documents so I need to be effective and precise. Using `Vue.js` and `$.Ajax`, I can get my files and load thems inside variables :

```javascript

// Counting my pages numbers => Object.length
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var size = Object.size(layout_page.markdown);
var control_stop = 0;

// loading of every markdown pages from md_files referenced in this.markdown
$.each( layout_page.markdown, function(name, value) {
  $.get( 'md_files/' + value.index, function( markdownContent ) {
    layout_page.markdown[name].content = marked( markdownContent )
  },'html').fail(function(){
    console.log('Mauvais chargement des docs')
  }).done(function( ) {
    // Once Img is done, Modal Img is create, before that, img dosn't existe Creation
    if( control_stop < size ){
      var images = $('.markdown-body').find('img')
      images.each(function(){
        $(this).on('click', function(){
          layout_page.template.imgSrc_modal = this.src;
          layout_page.seen.modal = true;
        })
      })
      control_stop++
    }
  })
});

```

#### 2. Start coding

Vue.js is a MVVM ( Model View View Model ), it facilitate the DOM protocole and allow you to bind some parts of your `vue` object. Once you defined an entry in your vue object, you can apply all kind of changement. If you wich to try how it work, you can learn it really quickly and they have an exellent [getting started guide online](https://vuejs.org/v2/guide/).

##### a. Vue object how does it work

You start by declaring your variable that will contain all your object for you page or application.

```javascript
var layout = new Vue({
  // This is the element your are gona work on
  el: '☻app'
  data: {
    // You put here your simple var data. They can be change by further methods
    seen: {
      // Use this class to deal with visibility. You can manage your stuff so it make a transition animation
      obj_01: true,
      obj_02: false,
    },
    markdown: {
      week_01: {
        file_name:'week_01.md',
        // The futur content charge with ajax
        content: '',
      }
      // ...
    }
  },
  // Use computed for element that gona depend on certain condition or action.
  computed: {
    layout_01: function(){
      if( this.seen.obj_01 == true ){
        $('.mark').css("background-color", 'red');
      } else {
        $('.mark').css("background-color", 'white');
      }
    }
  },
  // Use for action methods like buttons
  // For exemple my modal image
  methods: {
    close_modal: function(){
      this.seen.modal = false;
    },
  },
})
```
##### b. And what in html ?

In html you have to bind your objects to whatever you want.
* For some content in html :
```html
<div v-html="get_document" class="col-10 content markdown-body"></div>
```
* For class :
```html
<section v-bind:class="layout_general"></section>
```
* Or visibility :
see if `seen.modal` is `true`
```html
<div class="modal_doc" v-if="seen.modal">
```

##### c. Markdown !

My markdown is bind to the object in a second time. In the content of vue.js, I can't use Ajax as I want it. There is another library that allow it, but at that time I was already on understanding `Vue`, so I didn't gave a shot. See `axios` lib, well explain [here](https://vuejsdevelopers.com/2017/08/28/vue-js-ajax-recipes/).

> To begin with :

* My prepared object :
``` javascript
markdown: {
  finalProject: {
    title: "Final project Developpement",
    index : "finalProject.md",
    content: ""
  },
  documentation: {
    title: "Home - Readme",
    index : "readme.md",
    content: ""
  },
  week_0: {
    title: "Pre-Fabacademy",
    index : "week_0.md",
    content: ""
  },
  week_1: {
    title: "Git and web",
    index : "week_1.md",
    content: ""
  },
  // ..
```

* My ajax method :
``` javascript
// I use this method I found to count my object like an array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var size = Object.size(layout_page.markdown);
var control_stop = 0;
// loading of every markdown pages from md_files referenced in this.markdown
$.each( layout_page.markdown, function(name, value) {
  $.get( 'md_files/' + value.index, function( markdownContent ) {
    layout_page.markdown[name].content = marked( markdownContent )
  },'html').fail(function(){
    console.log('Mauvais chargement des docs')
    // once it's done I create the modal, binded on the click of img
  }).done(function( ) {
    // Modal Img Creation
    if( control_stop < size ){
      var images = $('.markdown-body').find('img')
      images.each(function(){
        $(this).on('click', function(){
          layout_page.template.imgSrc_modal = this.src;
          layout_page.seen.modal = true;
        })
      })
      // Counting how many objects I have so I can stop the prosses of binding all images
      control_stop++
    }
  })
});
```

```
______________ ___  ____ ___  _____ __________  _________  ____ _____________._.
\__    ___/   |   \|    |   \/     \\______   \/   _____/ |    |   \______   \ |
  |    | /    ~    \    |   /  \ /  \|    |  _/\_____  \  |    |   /|     ___/ |
  |    | \    Y    /    |  /    Y    \    |   \/        \ |    |  / |    |    \|
  |____|  \___|_  /|______/\____|__  /______  /_______  / |______/  |____|    __
                          \/                 \/       \/        \/                      \/

```

In the case where you use those three, the html may be not rendered in the page. You can then manipulate entire part of your layout and play with them, change it's content, do whatever you need. Once you have the tricks, it goes like you want really quickly. Make some test, do the [getting started guide online](https://vuejs.org/v2/guide/) to start with and go with it!
