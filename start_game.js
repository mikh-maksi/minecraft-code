let Secret = 0
player.onChat("start", function () {
    player.teleport(world(20, 4, 56))
    Secret = 0
    blocks.place(PLANKS_OAK, world(21, 4, 53))
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
loops.forever(function () {
    if (blocks.testForBlock(PLANKS_OAK, world(21, 4, 53))) {
        Secret = 0
    } else {
        if (Secret == 0) {
            player.say("Привіт! Натини кнопку в (21;4;53)")
            Secret += 1
        }
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(20, 4, 65))) {
        gameplay.title(mobs.target(ALL_PLAYERS), "Kill for Win", "Начинайте")
        loops.pause(300)
        start()
    } else {
    	
    }
})
function start () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Начало игры", "Старт")
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
}
