# Fabacademy : *Week 2* - **January 24/2018**



## Assignement - Project management - [schedule](http://academy.cba.mit.edu/classes/project_management/index.html)

* [I. Work through a git tutorial](#i-work-through-a-git-tutorial)
* [II. Build a personal site in the class archive describing you and your final project](#ii-build-a-personnal-web-site)

## Practice

### I. Work through a git tutorial

#### 1. Github history

> git hub Tagname : [@adricen](https://github.com/adricen)

I discovered git three years ago when I started to learn about web developpement.
At that time, I have been engaged in a quite big association in order to teech web developpement and coach young adulte living in popular area. I started to work on git hub with them by myself, beginning by the online-interface of github, guid them through the creation of somme simple md files to learn about html structure. Then created a programme called [`Ma6TvaCODER`](https://github.com/Ma6Tvacoder-Docs) where github had a central place between schools. Soon, it's been 80 students that were working together on this support, experimenting through content creation.

Let's make a breakdown of how I learned Git three years ago, and some good link soem of you could use.

##### Learning the basics

When you start on git, you see a lt of new concept and some of theù are really hard to understand. The best way to get them is to try thems. The first step is to create your git profil. At that time I choose Github but didn't really know for other platteforme of that type. So start by creating your profil. Here is some personnal advice to have a good profil :

* change the gravatar profil picture.
  * put a good photo of yourself, not too coth ( like me... ) and not too far and well lighten.
  * use the Github Octodex pictures -> [link here](https://octodex.github.com/)
* Create a ssh key on your computer and link it to your account
  * everything you need to know on this is [here](https://help.github.com/articles/connecting-to-github-with-ssh/)
  * type
    ```
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

    ```

When asking for passphrase, you can put your centence or let it blank. In my opinion if your work is not really sensitive and nobody except you have acces to this computer, you can let the passphrase blank because otherwise you will have to tap your sentence each time you want to upload files.

##### Branching !

On a git repository you can make some branch wich could rapidly be really usefull or a big mess if you don't clean your work regulary. How to make a branch ?

`git branch` and `git checkout`

```

git branch <name of your branch>

git checkout <your branch>

or

git checkout -b <name of your branch>

```

The result is the same, in both case you will swith your branch. When it's a fresh branch, you files are the same as the master branch but now, you can change them as far as you want.

##### Merging history from Gitlab to Github

One of a cool feature of git is the history in your dashboard page. When it comes to recrutement, it's your history of coding and how participate to programmer community.

Github is kind of the facebook of coding so, as a developper, you want to be on this plateform and show that you know this tool. So in order to merge your two history here is the procedure :

```
git remote add github https://github.com/user/repo.git

```

the parametre afte add is the name of your new remote and could be whatever you want. As in developpement convention, try to give it an explicite name, you don't know if you're going to add some more in the future, so, keep it clear.

You can list all your remote like that :

```

git remote -v

```

 So now you can push to your new empty remote using. Put -f if it's your first push, then push normaly :

```
git push -f githug master

```

There is a way to push in multiple remote at one time, [see here](https://stackoverflow.com/questions/849308/pull-push-from-multiple-remote-locations/12795747#12795747)



##### Let's see how it work for real !

Before we start, I have to say that I work with [Atom](https://atom.io/) as IDE, [git bash](https://gitforwindows.org/) for windows and [xampp](https://www.apachefriends.org/fr/index.html) in case I need to use server language like Php.

As a xampp user, my root directory will be my htdocs file, where xampp can emulate a server directory.

| ![git00](assets\img\week2\git0.jpg) | ![git01](assets\img\week2\git1.jpg) |
| --- | --- |
| ![git02](assets\img\week2\git2.jpg) | ![git03](assets\img\week2\git3.jpg) |
| ![git02](assets\img\week2\git4.jpg) | ![git03](assets\img\week2\git5.jpg) |
| ![git02](assets\img\week2\git6.jpg) | ![git03](assets\img\week2\git7.jpg) |
| ![git02](assets\img\week2\git8.jpg) | ![git03](assets\img\week2\git9.jpg) |
| ![git02](assets\img\week2\git10.jpg) | ![git03](assets\img\week2\git11.jpg) |
| ![git02](assets\img\week2\git12.jpg) | ![git03](assets\img\week2\git13.jpg) |
| ![git02](assets\img\week2\git14.jpg) | ![git03](assets\img\week2\git15.jpg) |




#### 2. assignement for Git1

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

#### Design Rule


| The first layout contain an introduction of myself and a quick navigation to the content of the documentation. | ![HomePage](assets/img/week2/webHome.jpg) |
| --- | --- |
| The second layout is made to welcome any syze of content base on the same layout. The general navgation is in the header. On an **aside** you will find **every pages edited in this documentation**. **The right part contain documentation** and is generated dynamicaly from `markdown` files contained in the folder `/md_files`. Each page is identified throught `_GET` parameter in the Url after the `?` character. | ![documentation page](assets/img/week2/webDoc.jpg) |


Web is generaly organize around the content and specialy here. There is going to be a lot of content in the futur, so this need to be organised with a simlpe and clear architecture. There is  

```
 __         ______     ______    ______        ______     ______     _____     ______    
/\ \       /\  ___\   /\__  _\  /\  ___\      /\  ___\   /\  __ \   /\  __-.  /\  ___\   
\ \ \____  \ \  __\   \/_/\ \/  \ \___  \     \ \ \____  \ \ \/\ \  \ \ \/\ \ \ \  __\   
 \ \_____\  \ \_____\    \ \_\   \/\_____\     \ \_____\  \ \_____\  \ \____-  \ \_____\
  \/_____/   \/_____/     \/_/    \/_____/      \/_____/   \/_____/   \/____/   \/_____/
```

#### 1. goals !

**Building a website from scratch** is something that can be quickly annoying if you don't **think a little bit about it before** to do anithings. Initiate a good reflexion about architecture, content, design and ergonomy and drope it into a tool like Trello save a lot of time and mistakes.

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

### Xnview by Softtonic :


I would have add this little soft to the already big list in the shcedule of this week.
It have some pretty cool features that allow you to manipulate and make small modification/convertion really quickly.

Link to the soft : [download here](https://www.xnview.com/)

Basicaly I am using some small features wich are presente in this soft. Initialy I was using it when I was working in video games, because this soft allow you to see and edit the mipmap of your image (for .dds file format ).

> you can pass from one pic to another using `Page up` or `Page down`

Let see how it work :

| definition | pics |
| --- | --- |
| This is the control panel. As you can do it in Adobe bridge, you can browse your file and see the preview of your picture. Double clic on your selected pics to edit it. | ![xnview01](assets\img\week3\xnView01.jpg) |
| There you have some interessente features. You can configure your favorite editing soft on some simple shortcut. | ![xnview02](assets\img\week3\xnView02.png) |


**Associate programmes :**

![Xnview03](assets\img\week3\xnView03.png)

Cliquing on associate programme, you can associate your favorit tool like Alt+1
This way, once you have the image you want to work on, just clic on the defined shortcut to openit within your soft.

**resize image :**

| menu | windows |
| --- | --- |
| ![Xnview04](assets\img\week3\xnView04.jpg) | ![Xnview04](assets\img\week3\xnView05.jpg) |

**Cleaning image :**

| def | pic |
| --- | --- |
| **Erase Alpha layer** | ![Xnview07](assets\img\week3\xnView07.jpg) |
| **Erase metadata** Sometimes you can gain some space on your picture size removing metadata such as author, date... | ![Xnview06](assets\img\week3\xnView06.jpg) |

> Those settting possibility offert you a good tool to make quick modification on your pics without entering into a big file editor manager.
