var layout_page = new Vue({
  el: '#portfolio',
  data: {
    seen: {
      main : false,
      lab: true,
      focus: false,
      no_display: false,
    },
    markdown: {
      index: "readme.md",
      semaine_0: "semaine_0.md",
      semaine_1: "semaine_1.md",
      semaine_2: "semaine_2.md",
      semaine_3: "semaine_3.md",
      semaine_4: "semaine_4.md",
      semaine_5: "semaine_5.md",
      semaine_6: "semaine_6.md",
    }
  },
  computed: {
    md_text: function(){
      return this.markdown.index
    },
    class_main: function() {
      if( this.seen.main ){
        return
      } else if (  this.seen.lab ) {
        return 'blur'
      } else if ( this.seen.focus ) {
        return 'blur moreBlur'
      }
    },
    class_lab: function() {
      if( this.seen.lab ){
        return
      } else if( this.seen.main ) {
        return 'front'
      } else if( this.seen.focus ) {
        return 'blur'
      }
    },
    class_focus: function() {
      if( this.seen.focus ){
        return
      } else if ( this.seen.lab ) {
        return 'front'
      } else if ( this.seen.main ) {
        return 'front moreFront'
      }
    },
  },
  methods: {
    display_main: function () {
      this.seen.main = true;
      this.seen.lab = false;
      this.seen.focus = false;
    },
    display_lab: function () {
      this.seen.main = false;
      this.seen.focus = false;
      this.seen.lab = true;
    },
    display_focus: function() {
      this.seen.main = false;
      this.seen.lab = false;
      this.seen.focus = true;
    },
    display_doc: function( data ) {
      this.markdown.index = layout_page.markdown[data]
    }
  },
})


// loading of every markdown pages from assets
$.each( layout_page.markdown, function(index, value) {
  $.get( 'assets/docs/' + value, function( markdownContent ) {
    layout_page.markdown[index] = marked( markdownContent )

  },'html').fail(function(){
    console.error('%cPas de document...%c', "color: #EEEB52; font-size: 2em;")
  });
});
