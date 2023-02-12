myButton1.onclick = function() {
    say("myButton1.onclick begin")
    let percentage = Math.random() * 10
    rainbowCakeImg.style.height = percentage + "rem"
    say("myButton1.onclick end")
}

versionNumber.innerHTML = "v1.0.3"
say("main.js loaded")
