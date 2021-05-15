let rush = 0
player.onItemInteracted(IRON_SHOVEL, function () {
    gameplay.timeSet(gameplay.time(DAWN))
    gameplay.timeAdd(1000)
    player.say(gameplay.timeQuery(DAY_TIME))
    rush = 0
})
loops.forever(function () {
    if (rush < gameplay.timeQuery(DAY_TIME) / 100) {
        rush += 1
        player.say(rush)
        player.say(gameplay.timeQuery(DAY_TIME))
        if (rush == 5) {
            gameplay.setDifficulty(EASY)
            gameplay.setGameMode(
            SURVIVAL,
            mobs.target(LOCAL_PLAYER)
            )
            mobs.spawn(mobs.monster(ZOMBIE), pos(15, 0, 0))
        }
    }
})
player.onItemInteracted(DIAMOND_SHOVEL, function () {
    player.say(gameplay.timeQuery(DAY_TIME))
})
