loops.forever(function () {
    if (gameplay.timeQuery(GAME_TIME) > 17000) {
        player.say(gameplay.timeQuery(GAME_TIME))
    }
})