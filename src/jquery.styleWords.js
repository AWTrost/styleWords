/*
 * jquery.styleWords
 * https://github.com/AWTrost/styleWords
 *
 * Copyright (c) 2012 Adam
 * Licensed under the MIT, GPL licenses.
 */

(function($) {
  var styleWords = {
    init: function (el, numWords, config) {
      this.numWords = numWords || 1;

      this.config = $.extend({}, $.fn.styleWords.defaults, config);
      this.el = el;
      this.$el = $(el);
      this.updateHTML();
    },
    test: function () {
      // body...
    },
    updateHTML: function(){
      var self = this;
      this.$el.html(function(i, text){
        return self.createWrapper(text);
        //return '<span>' + text + '</span>';
      });
    },
    createWrapper: function(text){
      var words = text.split(' '),
          tag = this.config.tag;
      delete this.config.tag;
      var wrapper = $(tag, this.config).text(words.splice(0, this.numWords).join(' '));
      wrapper = $('<div>').append(wrapper).html();
      // console.log(span);
      return [wrapper].concat(words).join(' ');// + ' ' + words.join(' ');
    }
  };
  $.fn.styleWords = function (numWords, config) {
    var obj = Object.create(styleWords);
    return this.each(function () {
      obj.init(this, numWords, config);
    });
  };
  $.fn.styleWords.defaults = {
    tag: '<span>',
    'class': 'styleWords'
  };
}(jQuery));
