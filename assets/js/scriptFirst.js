// import Vue from 'vue';
// import Accueil from './accueil.vue';

var layout_page = new Vue({
  el: '#layout',
  data: {
    api:{
      userName: '',
      userPics_url: '',
      bio: '',
      gitHub_tagName:'',
      gitHub_tagUrl:'',
    },
    seen:{
      acceuil: {
        global: true,
        front: true,
        nav: false,
        background_01: true
      },
      dashboard: {
        global: false,
        front: true,
        background_01: true
      },
      docu : {
        global: false,
      },
    },
    layout: {
      general: "divided",
      accueil: 'banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right animated',
      bg_accueil: 'background_img background_01',
      dashboard: {
        global: 'content',
        navigation: 'navigation',
        board: 'dashboard',
        img: 'image background_01',
      },
      // ---
      panneau_01: "banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right animated zoomIn fadeIn",
      // ---
      fade_in : ' zoomIn fadeIn',
      fade_out : ' zoomOut fadeOut',
      slide_in : ' slideInUp fadeIn',
      slide_out : ' slideOutUp fadeOut',

    },
  },
  external: {
    readme: '../doc/readme.md'
  },
  computed: {
    bg_global : function () {
      if( this.seen.dashboard.global ){
        return

      } else {
        return this.layout.bg_accueil;
      }
    },
    dashB : function () {
        if( this.seen.dashboard.global ){
          return this.layout.dashboard.board;
        } else {
          return this.layout.dashboard.img;
        }
    },
    navBar : {
      get: function () {
        if( this.seen.dashboard.global ){
          return this.layout.dashboard.global + ' ' + this.layout.dashboard.navigation;

        } else {
          return this.layout.dashboard.global;
        }
      },
      // ---
      set: function (newValue) {
        return this.layout[ newValue ];
      }
    },
    layout_div: {
      // ---
      get: function () {
        return this.layout.general;
      },
      // ---
      set: function (newValue) {
        return this.layout[ newValue ];
      }
    },
    layout_subdiv: {
      // ---
      get: function () {
        return this.layout.panneau_01;
      },
      // ---
      set: function ( newValue ) {
        var exportClass = "";
        if( Array.isArray( newValue ) ){
          for (var i = 0; i < newValue.length; i++) {
            exportClass +=  this.layout[ newValue[i] ];
          }
        } else {
          exportClass = this.layout[ newValue ]
        }
        this.layout.panneau_01 = exportClass;

      }
    },
    markdownTxt : function (){
      console.log(this)
    }
  },
  methods: {
    display_global: function () {
      var scop = this;
        this.layout_subdiv = 'accueil';
        scop.seen.acceuil.front = true;
        scop.seen.acceuil.nav = false;
        scop.seen.dashboard.global = false;

    },
    display_menu: function () {
      this.layout_subdiv = 'accueil';
      if( this.seen.acceuil.front == true) {
        this.seen.acceuil.front = false;
        this.seen.acceuil.nav = true;
        this.seen.dashboard.global = true;
      } else {
        this.seen.acceuil.front = true;
        this.seen.acceuil.nav = false;
        this.seen.dashboard.global = false;
      }
    },
    display_docu_menu: function () {
      // this.layout_subdiv = 'accueil'
      if( this.seen.docu.global !== true) {
        console.log('un truc ');
        this.seen.docu.global =true;
      } else {
        this.seen.docu.global = false;
      }
    },

  },
})
$(function(){
  // profil : https://api.github.com/users/adricen
  // repos : https://api.github.com/users/adricen/repos
  // test : https://api.github.com/repos/adricen/PortfolioGitHub/git/blobs"
  // repos : https://api.github.com/repos/{owner}/{repo}
  // get issue : https://api.github.com/repos/adricen/PortfolioGitHub/issues/1
  $.ajax( {
    	url : "https://api.github.com/users/adricen",
    	dataType : "jsonp",
    	success : function ( returndata ) {

        // console.log( returndata.data[15] )
        // console.log( returndata )
        layout_page.api.userPics_url = returndata.data.avatar_url
        layout_page.api.userName = returndata.data.name
        layout_page.api.bio = returndata.data.bio
        layout_page.api.gitHub_tagName = returndata.data.login
        layout_page.api.gitHub_tagUrl = returndata.data.html_url
        // console.log( returndata.data )
        console.log(' Github/api : Ok')

      }, // close success handler
      error: function() {
        console.error( 'pas de connexion API GitHub' );
      },
  });
  // get markdown content
  // var body_location = 'markdown/README.markdown';
  //
  // function getText(myUrl){
  //     var result = null;
  //     $.ajax( { url: myUrl,
  //               type: 'get',
  //               dataType: 'html',
  //               async: false,
  //               success: function(data) { result = data; }
  //             }
  //     );
  //     FileReady = true;
  //     return result;
  // }
  // var markdown_source = getText(body_location);
  // // convert markdown to html
  // var output = markdown.toHTML( markdown_source );
  // document.write(output);
  // $.ajax( {
  //     // url : "https://api.github.com/users/adricen",
  //   	// url : "../docs/readme.md",
  //   	url : "../assets/docs/readme.md",
  //     type: 'get',
  //     // getResponseHeader: function(e){
  //     //   console.log(e)
  //     // },
  //     // progress: function(){
  //     //   var i = 0
  //     //   console.log(i)
  //     //   i++
  //     // },
  //   	success : function ( returndata ) {
  //       // console.log( returndata.data[15] )
  //       console.log( returndata )
  //       // console.log( returndata.data )
  //       console.log(' md : Ok')
  //     }, // close success handler
  //     error: function(e) {
  //       console.log( e.catch() )
  //       console.error( 'pas de connexion au fichier reamde.md' );
  //     },
  //     dataType : "html",
  // }).done(function(){
  //   console.log('fin du deuxieme ajax')
  // })

  $.get( "../docs/readme.md", function( data ) {
    console.log(html( data ));
    alert( "Load was performed." );
  },'html' );


  // ASCII project
  console.link = function (link, content ){
    var lien = $("<a href='https://github.com/adricen'>@adricen</a>")
    console.log( lien[0] )
    return  lien
  }
  
  function draw( asciArt ) {
    console.table(asciArt)
    // console.link();
    // for (var i = 0; i < asciArt.length; i++) {
    //   console.info( '%c'+asciArt[i], "color: grey; font-size:15px; font-family: monospace; line-height:0.1em;" )
    // }
  }
  var poissons = ['------------------------------------------------------------------------------',
              'o                  o             o                  o',
              '  o ___/|__          o            o   o              o',
              'o _/       \\  /| o              o     ___/|__      o',
              ' /  @ \\\\    \\/ |    o            o  _/       \\  /|   o  ___/|__',
              ' \\_   //    /\\ |  o  ___/|__       /  @ \\\\    \\/ | o  _/       \\  /|',
              '   \\_______/  \\| o _/       \\  /|  \\_   //    /\\ |  o/  @ \\\\    \\/ |',
              '                  /  @ \\\\    \\/ |    \\_______/  \\|   \\_   //    /\\ |',
              '                  \\_   //    /\\ |                      \\_______/  \\|',
              '                    \\_______/  \\| ',
              '    @adricen',
              '------------------------------------------------------------------------------']
  // draw(poissons)

  // console.log("%cBlue! %cGreen", "color: blue; font-size:15px;", "color: green; font-size:12px;");

  var triangle =[
  '  _______________________________',
  ' /\\                              \\',
  '/++\\    __________________________\\',
  '\\+++\\   \\ ************************/',
  ' \\+++\\   \\___________________ ***/',
  '  \\+++\\   \\             /+++/***/',
  '   \\+++\\   \\           /+++/***/',
  '    \\+++\\   \\         /+++/***/',
  '     \\+++\\   \\       /+++/***/',
  '      \\+++\\   \\     /+++/***/',
  '       \\+++\\   \\   /+++/***/',
  '        \\+++\\   \\ /+++/***/',
  '         \\+++\\   /+++/***/',
  '          \\+++\\ /+++/***/',
  '           \\+++++++/***/',
  '            \\+++++/***/',
  '             \\+++/***/',
  '              \\+/___/' ]

// draw(triangle)

var thumbsUp = [
  " ___ ",
  "/ __>",
  "\\__ \\",
  "<___/",
  ' _ _ ',
  '| | |       / (|',
  '`___|      (   :',
  ' ___      __\\   \\  _____',
  '| . \\   (____)  `|',
  '|  _/  (____)|   |',
  '|_|     (____).__|',
  ' ___     (___)__.|_____',
  '/ ._> ',
  "\\___.",
  " _ _ ",
  "| '_>",
  "|_|  ",
]
var thumbsUpObj = {
  ' ___ ' : "",
  "/ __>" : "",
  "\\__ \\" : "",
  "<___/"  : "",
  ' _ _ '  : '',
  '| | |'  : '     /(|',
  '`___|'  : '    (  :',
  ' ___   ': "   __\\  \\  _____",
  '| . \\' : ' (____)  `|',
  '|  _/ ' : '(____)|   |',
  '|_|   ' : ' (____).__|',
  ' ___  ' : '  (___)__.|_____',
  '/ ._> ' : '',
  "\\___." : "",
  " _ _  " : "",
  "| '_>"  : "",
  "|_|  "  : "",

}
draw( thumbsUpObj )
  // var body_location = '../docs/readme.md';
  // function getText(myUrl){
  //   var result = null;
  //   $.ajax( { url: myUrl,
  //     type: 'get',
  //     dataType: 'html',
  //     async: false,
  //     success: function(data) { result = data; }
  //   });
  //   FileReady = true;
  //   return result;
  // }
  // var markdown_source = getText(body_location);
  // // convert markdown to html
  // // var output = markdown.toHTML( markdown_source );
  // console.log(markdown_source);
})
