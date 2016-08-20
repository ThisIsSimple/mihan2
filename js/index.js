$(document).ready(function(){

  var options = [
  {selector: '#board1', offset: 250, callback: function(el) { Materialize.showStaggeredList($(el)); } },
  {selector: '#board2', offset: 350, callback: function(el) { Materialize.fadeInImage($(el)); } } ];

  Materialize.scrollFire(options);
});
