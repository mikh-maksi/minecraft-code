player.onChat("digits", function () {
    for (let index = 0; index <= 20; index++) {
        if (index % 5 == 0) {
            player.say("" + index + " - Число кратно 5")
        } else {
            player.say("" + index + " - Число не кратно 5")
        }
    }
})
