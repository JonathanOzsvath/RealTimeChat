$(function () {
    var ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
    var chatSocket = new WebSocket(ws_scheme + '://' + window.location.host + window.location.pathname);

    chatSocket.onmessage = function (message) {
        var data = JSON.parse(message.data);
        var chat = $("#chat")
        var ele = $('<tr></tr>')

        ele.append(
            $("<td></td>").text(data.timestamp)
        )
        ele.append(
            $("<td></td>").text(data.handle)
        )
        ele.append(
            $("<td></td>").text(data.message)
        )

        chat.append(ele)
    };

    chatSocket.onclose = function (e) {
        console.error('Chat socket closed!');
    };

    $("#chatform").on("submit", function(event) {
        var message = {
            handle: $('#handle').val(),
            message: $('#message').val(),
        }
        chatSocket.send(JSON.stringify(message));
        $("#message").val('').focus();
        return false;
    });
});