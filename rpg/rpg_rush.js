let rush = 0
player.onItemInteracted(IRON_SHOVEL, function () {
    gameplay.timeSet(gameplay.time(DAWN))
    gameplay.timeAdd(1000)
    player.say(gameplay.timeQuery(DAY_TIME))
    rush = 0
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("run", function () {
	
})
loops.forever(function () {
    if (rush < gameplay.timeQuery(DAY_TIME) / 100) {
        rush += 1
        mobs.spawn(mobs.monster(ZOMBIE), pos(15, 0, 0))
        player.say(rush)
    }
})
