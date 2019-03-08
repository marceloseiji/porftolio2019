$(document).ready(function(){
    $('.modal').modal({
      opacity: 0.5,
      inDuration: 500
    }   
  );
});

var zoom, stroke = 0;
var time = 20000;

function backgroundZoom() {
  $('#background-img').css('transform', 'scale(1.3)');
  setInterval(removeZoom, time);

  function removeZoom() {
    if (zoom == 0) {
      $('#background-img').css('transform', 'scale(1)');
      zoom = 1;
    } else {
      $('#background-img').css('transform', 'scale(1.2)');
      zoom = 0;
    }
  }
};

function strokeColor() {
  setInterval(setStrokeColor, 1000);

  function setStrokeColor() {
    if (stroke == 0) {
      $('.hex').css('stroke', 'yellow');
      stroke = 1;
    } else {
      $('.hex').css('stroke', '#42f4df');
      stroke = 0;
    }
  }
};