

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
      modal : false,
    },
    template: {
      nav : '<header class="nav-theme-1"><nav class="container "><ul class="row"><li class="col"><a href="index.html">About Me</a></li><li class="col"><a href="documentation.html">Weekly Assignement</a></li><li class="col"><a href="/about">Group Project</a></li><li class="col"><a href="/about">Final Project</a></li></ul></nav></header>',
      imgSrc_modal : '',
    },
    markdown: {
      documentation: {
        title: "Home - Readme",
        index : "readme.md",
        content: ''
      },
      week_0: {
        title: "Pre-Fabacademy",
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
        title : 'Electronic design',
        index: "week_7.md",
        content: ""
      },
      week_8: {
        title : 'Computer-controlled machining',
        index: "week_8.md",
        content: ""
      },
      week_9: {
        title : 'Embedded programming',
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
    header_nav: function(){
      var nav ='<header class="nav-theme-1"><nav class="container "><ul class="row">'
      nav += '<li class="col"><a href="index.html">Home</a></li>'
      nav += '<li class="col"><a href="documentation.html">Documentation</a></li>'
      nav += '<li class="col"><a href="/about">About</a></li>'
      nav += '</ul></nav></header>'
    },
    doc_nav: function() {
      var  nb = 0
       var doc_nav = '<div class="main aside-them-2"><ul><li></li>';
          doc_nav += '<li><h3>Fabacademy2018</h3></li>';
          doc_nav += '<li><h4>Documentation</h4></li><li><ul>';
          doc_nav += '<li><a href="#">Final project developpement</a></li>';
      $.each(this.markdown, function( name, value ){

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
      // console.log(e);
    },
    masonery_images: function() {
      var data = ''
      var target = this.markdown.week_0.content
      var evole = $(target).find('img')[1]
      evole = $(evole).attr('src')
      evole = '<img src="' + evole + '">'
      return evole
    }
  },
  methods: {
    close_modal: function(){
      this.seen.modal = false;
    },
  },
})
if( my_url == 'index') {
  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 200
  });
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
var size = Object.size(layout_page.markdown);
console.log(size);

var control_stop = 0;
// loading of every markdown pages from md_files referenced in this.markdown
$.each( layout_page.markdown, function(name, value) {
  $.get( 'md_files/' + value.index, function( markdownContent ) {
    layout_page.markdown[name].content = marked( markdownContent )
  },'html').fail(function(){
    console.log('Mauvais chargement des docs')
  }).done(function( ) {
    // Modal Img Creation
    if( control_stop < size ){
      var images = $('.markdown-body').find('img')
      // console.log(images);
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
// Modale image

// .on('click', function(){
//   var images =  $(this).find('img')
//   console.log(images);
// })
