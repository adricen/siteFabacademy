function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
  sURLVariables = sPageURL.split('&'),
  sParameterName,
  i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
var layout_page = new Vue({
  el: '#app',
  data: {
    seen: {
      theme_1: true,
      theme_2: true,
      modal : false,
    },
    template: {
      nav : '<header class="nav-theme-1"><nav class="container "><ul class="row"><li class="col"><a href="index.html">Home</a></li><li class="col"><a href="assignement.html?page=documentation">Weekly Assignement</a></li><li class="col"><a href="assignement.html?page=week_11">Group Project</a></li><li class="col"><a href="assignement.html?page=finalProject">Final Project</a></li></ul></nav></header>',
      imgSrc_modal : '',
    },
    markdown: {
      finalProject: {
        title: "Final project Developpement",
        index : "finalProject.md",
        content: ''
      },
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
        title : 'Molding and Casting',
        index: "week_10.md",
        content: ""
      },
      week_11: {
        title : 'Input Device',
        index: "week_11.md",
        content: ""
      },
      week_12: {
        title : 'Output devices',
        index: "week_12.md",
        content: ""
      },
      week_13: {
        title : 'Molding and casting',
        index: "week_13.md",
        content: ""
      },
      week_14: {
        title : 'Input devices',
        index: "week_14.md",
        content: ""
      },
      week_15: {
        title : 'Wildcard week',
        index: "week_15.md",
        content: ""
      },
      week_16: {
        title : 'Networking and communications',
        index: "week_16.md",
        content: ""
      },
      week_17: {
        title : 'Interface and application programming',
        index: "week_17.md",
        content: ""
      },
      week_18: {
        title : 'Applications and implications',
        index: "week_18.md",
        content: ""
      },
      week_19: {
        title : 'Invention, intellectual property, and income',
        index: "week_19.md",
        content: ""
      },
    }
  },
  computed: {
    layout_general: function(){
      if( this.seen.theme_1 ){
        return 'theme-1'
      }
    },
    layout_size: function(){
      if( this.seen.theme_1 ){
        return 'col-6'
      }
    },
    get_document: function() {
      // console.log(this.markdown[my_url].content);
      return this.markdown[getUrlParameter('page')].content
    },
    site_title: function() {
      // return 'fabacademy2018-'+ my_url;
      return 'fabacademy2018-'+ getUrlParameter('page');
    },
    // template part //
    header_nav: function(){
      var nav ='<header class="nav-theme-1"><nav class="container "><ul class="row">'
      nav += '<li class="col"><a href="index.html">Home</a></li>'
      nav += '<li class="col"><a href="documentation.html">Documentation</a></li>'
      nav += '<li class="col"><a href="/about">About</a></li>'
      nav += '</ul></nav></header>'
    },
    // Aside Nav => assignement.html
    doc_nav: function() {
      var  nb = 0
      var doc_nav = '<div class="main aside-them-2"><ul><li></li>';
          doc_nav += '<li><h3>Fabacademy2018</h3></li>';
          doc_nav += '<li><h4>Documentation</h4></li><li><ul>';
      $.each(this.markdown, function( name, value ){
        console.log(name);
        // console.log(this);
        var active = name == getUrlParameter('page')? 'active': '';
        if(name == 'documentation' || name == 'finalProject') {
          doc_nav += '<li class="'+ active +'"><a href="assignement.html?page='+ name + '">'+ value.title +'</a></li>';
        } else {
          doc_nav += '<li class="'+ active +'"><a href="assignement.html?page='+ name + '">'+ value.title +" - week " + nb+ '</a></li>';
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

// Counting my pages numbers
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
console.log(getUrlParameter('page'));
