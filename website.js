$( document ).ready(function() {

    var bgMusic = new buzz.sound("song/joannaSong", {
        formats: [ "mp3" ],
        preload: true,
        autoplay: false,
        loop: false,
        volume: 40
    });

    $( ".volume-button" ).click(function() {
        $( ".volume-button span" ).toggle();
        bgMusic.togglePlay();
    });
});
