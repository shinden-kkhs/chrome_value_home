const messages = [
  "⽇本の医療体験を、しなやかに。",
  "明⽇の医療の基盤となる、<br>エコシステムの実現。",
  "高潔",
  "価値貢献",
  "カタチにする",
  "無知の知",
  "変幻自在",
  "情報対称性"
];

function applyMessage(targetMessages) {

  if(targetMessages == null || targetMessages.length == 0) {
    targetMessages = messages;
  }

  var viewMessage = targetMessages[Math.floor(Math.random()*targetMessages.length)];
  $("#value_message").html(viewMessage);
}

function cleansingData(data, callback_func) {
  if(data == null || data == '') {
    return false;
  }
  var valueMessages = data.split('\n');
  valueMessages = valueMessages.filter(function(e){return e.trim() !== "";});
  if(valueMessages.length > 0) {
    callback_func(valueMessages);
    return true;
  }
  return false;
}

var targetMessages = null;

try {
  chrome.storage.sync.get({
    valueText: '',
    valueUrl:''
  }, function(items) {

    var valueUrl = items.valueUrl.trim();
    if(valueUrl != '') {
      $.ajax({
        url: valueUrl,
        timeout: 1000
      }).done(function(data) {
        if(cleansingData(data, function(messages){targetMessages = messages;})) {
          // URLから取得したデータで処理完了
        } else {
          //ローカルのtextデータを処理
          var text = items.valueText.trim();
          cleansingData(text, function(messages){targetMessages = messages;})
        }
        //alert(data);
        applyMessage(targetMessages);
    
      }).fail(function() {
        applyMessage(targetMessages);
      });
    } else {
      //ローカルのtextデータを処理
      var text = items.valueText.trim();
      cleansingData(text, function(messages){targetMessages = messages;})

      applyMessage(targetMessages);
    }    
  });

} catch (e) {
  console.log(e);
  applyMessage(targetMessages);
}
