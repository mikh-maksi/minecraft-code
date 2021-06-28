let list: string[] = []
player.onChat("time", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Начало игры", "У тебя 10 секунд: взять самое нужное!")
    list = [
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1"
    ]
    for (let value of list) {
        gameplay.title(mobs.target(LOCAL_PLAYER), value, "")
        loops.pause(1000)
    }
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
loops.forever(function () {
    if (blocks.testForBlock(EMERALD_BLOCK, world(51, 5, 47))) {
        player.say("Не верно")
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(50, 5, 47))) {
        player.say("Не верно")
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(49, 5, 47))) {
        player.say("Не верно")
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(48, 5, 47))) {
        player.teleport(world(0, 4, 0))
        player.runChatCommand("time")
    }
})
