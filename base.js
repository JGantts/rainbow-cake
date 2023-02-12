function say(toSay) {
    jsMessage.innerHTML += toSay + "<br/>"
}

jsMessageResetButton.onclick = function() {
    jsMessage.innerHTML = ""
}
