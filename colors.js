
  var Body = {
    setColor:function(color) {
      // document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setBackgroundColor:function(color) {
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }


  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'day') {
      // target.style.backgroundColor = 'white';
      // target.style.color = 'black';
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
    } else {
      // target.style.backgroundColor = 'black';
      // target.style.color = 'white';
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
    }
  }
