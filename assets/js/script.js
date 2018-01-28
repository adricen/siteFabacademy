

var my_url = window.location.href.split('/')
var nb = my_url.length - 1
my_url = my_url[nb].split('.')[0]
// location = location[location.lenght-1].split('.')[0]
// console.log(my_url)
// console.log( window.location.href.split("/") );


var layout_page = new Vue({
  el: '#app',
  data: {
    seen: {
      theme_1: true,
      theme_2: true,
    },
    template: {
      nav : '<header class="nav-theme-1"><nav class="container "><ul class="row"><li class="col"><a href="index.html">Home</a></li><li class="col"><a href="documentation.html">Documentation</a></li><li class="col"><a href="/about">About</a></li></ul></nav></header>',
    },
    markdown: {
      documentation: {
        title: "Home - Readme",
        index : "readme.md",
        content: ''
      },
      week_0: {
        title: "Before fabacademy",
        index : "week_0.md",
        content: ''
      },
      week_1: {
        title : 'Principles and practices',
        index: "week_1.md",
        content: ""
      },
      week_2: {
        title : 'Project management',
        index: "week_2.md",
        content: ""
      },
      week_3: {
        title : 'Computer aided design',
        index: "week_3.md",
        content: ""
      },
      week_4: {
        title : 'Computer controled cutting',
        index: "week_4.md",
        content: ""
      },
      week_5: {
        title : 'Electronic production',
        index: "week_5.md",
        content: ""
      },
      week_6: {
        title : 'Scanning and printing',
        index: "week_6.md",
        content: ""
      },
      week_7: {
        title : 'week lectronic design',
        index: "week_7.md",
        content: ""
      },
      week_8: {
        title : 'week omputer-controlled machining',
        index: "week_8.md",
        content: ""
      },
      week_9: {
        title : 'week mbedded programming',
        index: "week_9.md",
        content: ""
      },
      week_10: {
        title : 'Mechanical design',
        index: "week_10.md",
        content: ""
      },
      week_11: {
        title : 'Output devices',
        index: "week_11.md",
        content: ""
      },
      week_12: {
        title : 'Molding and casting',
        index: "week_12.md",
        content: ""
      },
      week_13: {
        title : 'Input devices',
        index: "week_13.md",
        content: ""
      },
      week_14: {
        title : 'Wildcard week',
        index: "week_14.md",
        content: ""
      },
      week_15: {
        title : 'Networking and communications',
        index: "week_15.md",
        content: ""
      },
      week_16: {
        title : 'Interface and application programming',
        index: "week_16.md",
        content: ""
      },
      week_17: {
        title : 'Applications and implications',
        index: "week_17.md",
        content: ""
      },
      week_18: {
        title : 'Invention, intellectual property, and income',
        index: "week_18.md",
        content: ""
      },
      week_19: {
        title : 'Project development',
        index: "week_19.md",
        content: ""
      },
    }
  },
  computed: {
    // md_text: function(){
    //   return this.markdown.index
    // },
    layout_general: function(){
      if( this.seen.theme_1 ){
        return 'theme-1'
      }
    },
    layout_size: function(){
      if( this.seen.theme_1 ){
        return 'col-5'
      }
    },
    get_document: function() {
      // console.log(this.markdown[my_url].content);
      return this.markdown[my_url].content
    },
    site_title: function() {
      return 'fabacademy2018-'+ my_url;
    },
    // template part //
    doc_nav: function() {
      var  nb = 0
       var doc_nav = '<div class="main aside-them-2"><ul><li></li>';
          doc_nav += '<li><h3>Fabacademy2018</h3></li>';
          doc_nav += '<li><h4>Documentation</h4></li><li><ul>';
          doc_nav += '<li><a href="#">Final project developpement</a></li>';
      $.each(this.markdown, function( name, value ){
        console.log(name);
        console.log(my_url);
        var active = name == my_url? 'active': '';
        if(name == 'documentation') {
          doc_nav += '<li class="'+ active +'"><a href="'+ name + '.html">'+ value.title +'</a></li>';

        } else {
          doc_nav += '<li class="'+ active +'"><a href="'+ name + '.html">'+ value.title +" - week " + nb+ '</a></li>';
          nb++;
        }
      })
      doc_nav += '</ul></li></ul></div>';
      return doc_nav;
    },
    doc_nav_active: function(e) {
      console.log(e);
    },

  //   class_focus: function() {
  //     if( this.seen.focus ){
  //       return
  //     } else if ( this.seen.lab ) {
  //       return 'front'
  //     } else if ( this.seen.main ) {
  //       return 'front moreFront'
  //     }
  //   },
  },
  methods: {
    // display_main: function () {
    //   this.seen.main = true;
    //   this.seen.lab = false;
    //   this.seen.focus = false;
    // },
    // display_doc: function( data ) {
    //   this.markdown.index = layout_page.markdown[data]
    // }
  },
})


// loading of every markdown pages from assets
var validDoc = true;
$.each( layout_page.markdown, function(name, value) {
  // console.log('index est : ' + index);
  // console.log(value);
  $.get( 'md_files/' + value.index, function( markdownContent ) {
    layout_page.markdown[name].content = marked( markdownContent )
  },'html').fail(function(){
    validDoc = false;
  });
});
if( !validDoc ) {
  console.error( 'un probleme c\'est déroulé durant le chargement des fichiers' );
}
