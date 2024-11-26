MPP.client.on("a", function (msg) {
let args = m.a.split(" ");
let cmd = args[0].toLowerCase();

if (cmd == "is" && args[1] == "it" && (args[2] == "on" || args[2] == "on")) {
  MPP.chat.send("yea h")
}
});
