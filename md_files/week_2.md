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

##### b. Install and Use the Linux Bash Shell on Windows 10 --> [source here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

![outside_pics_01](https://www.howtogeek.com/wp-content/uploads/2016/04/ximg_570997a37ca4e.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.sRQi9uZ3CQ.png)
---
| <center><i class="fa fa-500px"></i></center> | <center><i class="fa fa-book"></i></center> |
| --- | --- |
| **1. Activate Windows developper mode** | ![outside_pics_02](https://www.howtogeek.com/wp-content/uploads/2016/04/ximg_570999e304309.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.5V9iFGJlWR.png) |
| **2. Open Control Panel > Programs and activate `windows Subsystem for linux(Beta)`** |![ubuntu00](assets\img\week2\ubuntuBash00.jpg) |
| **3. Open Bash** | ![outside_pics_02](https://www.howtogeek.com/wp-content/uploads/2016/04/ximg_57099904643e7.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.0LbC1f1nur.png) |
| **4. Update to Ubuntu Bash** | ![ubuntu02](https://www.howtogeek.com/wp-content/uploads/2016/04/ximg_570998bb8323b.png.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.l29bWUELIg.png) |
| **5. Run Install** | `lxrun /install /y` |
| **6. Open Ubuntu Bash and tap `sudo apt-get upgrade`** | ![ubuntu03](assets\img\week2\ubuntuBash02.jpg) |

<center></center>

### II. Build a personnal web site

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


#### 2. Start coding
