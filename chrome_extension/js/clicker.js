document.arrive('.player-autoplay-interrupter', function() {
    document.querySelectorAll('.player-autoplay-interrupter button.button.continue-playing')[0].click();
});

chrome.storage.sync.get("playThroughSeasons", function(response) {

    if(response.playThroughSeasons){

        document.arrive(".player-postplay-still-hover-container", function() {
            document.querySelector('.player-postplay-still-hover-container').click();
        });
    }
});