function save_options() {
    var playThroughSeasons = document.getElementById('play_through_seasons').checked;
    chrome.storage.sync.set({
        playThroughSeasons: playThroughSeasons
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        playThroughSeasons: false
    }, function(items) {
        document.getElementById('play_through_seasons').checked = items.playThroughSeasons;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);