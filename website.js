$( document ).ready(function() {

    // Load Music
    var bgMusic = new buzz.sound("song/joannaSong", {
        formats: [ "mp3" ],
        preload: true,
        autoplay: true,
        loop: true,
        volume: 40
    });

    // Mute/Play Button
    $( ".volume-button" ).click(function() {
        $( ".volume-button span" ).toggle();
        bgMusic.togglePlay();
    });

    

    
});

$(function() {
      $( "draggable" ).draggable();
  });