

var my_url = window.location.href.split('/')
var nb = my_url.length - 1
console.log(nb);
my_url = my_url[nb].split('.')[0]
// location = location[location.lenght-1].split('.')[0]
console.log(my_url)
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
        index : "readme.md",
        content: ''
      },
      semaine_0: {
        index : "semaine_0.md",
        content: ''
      },
      semaine_1: {
        index: "semaine_1.md",
        content: ""
      },
      semaine_2: {
        index: "semaine_2.md",
        content: ""
      },
      semaine_3: {
        index: "semaine_3.md",
        content: ""
      },
      semaine_4: {
        index: "semaine_4.md",
        content: ""
      },
      semaine_5: {
        index: "semaine_5.md",
        content: ""
      },
      semaine_6: {
        index: "semaine_6.md",
        content: ""
      },
    }
  },
  computed: {
    md_text: function(){
      return this.markdown.index
    },
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
    }
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
$.each( layout_page.markdown, function(index, value) {
  // console.log('index est : ' + index);
  // console.log(value);
  $.get( 'md_files/' + value.index, function( markdownContent ) {
    layout_page.markdown[index].content = marked( markdownContent )
  },'html').fail(function(){
    validDoc = false;
  });
});
if( !validDoc ) {
  console.error( 'un probleme c\'est déroulé durant le chargement des fichiers' );
}
