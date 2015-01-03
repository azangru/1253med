$( document ).ready(function() {

  function resizeMapContainer () {
    width = $('#map').width();
    console.log('width =' + width);
    $('#map').height(width * 0.5);
  }

  resizeMapContainer();

  var myMap;


  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(init);

  function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.734846, 37.592718], // Москва
      zoom: 17
    });
  }

});
