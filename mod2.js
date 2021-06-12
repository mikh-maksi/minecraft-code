player.onChat("mod2", function () {
    for (let index = 0; index <= 10; index++) {
        if (index % 2 == 0) {
            player.say("" + index + " - четное")
        } else {
            player.say("" + index + "- нечетное")
        }
    }
})