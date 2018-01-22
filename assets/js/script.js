var layout_page = new Vue({
  el: '#portfolio',
  data: {
    seen: {
      theme_1: true,
      theme_2: true,
    },
    markdown: {
      index: {
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
    layout_aside: function(){
      if( this.seen.theme_1 ){
        return 'col-5'
      }
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
$.each( layout_page.markdown, function(index, value) {
  console.log('index est : ' + index);
  console.log(value);
  $.get( 'assets/docs/' + value.index, function( markdownContent ) {
    layout_page.markdown[index].content = marked( markdownContent )
  },'html').fail(function(){
    console.error('%cPas de document...%c', "color: #EEEB52; font-size: 2em;")
  });
});
