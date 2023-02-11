function say(toSay) {
    jsMessage.innerHTML = toSay
}

myButton1.onclick = function() {
    say("myButton1.onclick begin")
    let percentage = Math.random() * 10
    rainbowCakeImg.style.height = percentage + "rem"
    jsMessage.innerHTML
    say("myButton1.onclick end")
}

say("main.js loaded")
