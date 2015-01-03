//= require 'jquery-1.11.1.min'


$ ->
  
  resizeCarouselStudentContainer = () ->
    width = $('#carousel-student-photos-container').width()
    $('#carousel-student-photos-container').height(width / 1.8)

  resizeCarouselStudentContainer()


