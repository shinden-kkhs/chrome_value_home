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

var viewMessage = messages[Math.floor(Math.random()*messages.length)];
$("#value_message").html(viewMessage);
