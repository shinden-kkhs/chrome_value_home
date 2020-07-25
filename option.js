
// Saves options to chrome.storage
function save_options() {
  var valueText = document.getElementById('value_text').value;
  var valueUrl = document.getElementById('data_url').value;
  chrome.storage.sync.set({
    valueText: valueText,
    valueUrl : valueUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function load_options() {
  chrome.storage.sync.get({
    valueText: '',
    valueUrl : ''
  }, function(items) {
    document.getElementById('value_text').value = items.valueText;
    document.getElementById('data_url').value = items.valueUrl;
// document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', load_options);
document.getElementById('save').addEventListener('click', save_options);