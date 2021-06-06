let list: string[] = []
player.onChat("time", function () {
    player.say(":)")
    player.say("!!!")
    gameplay.title(mobs.target(LOCAL_PLAYER), "У тебя 10 секунд: взять самое нужное!", "У тебя 10 секунд: взять самое нужное!")
    loops.pause(3000)
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
    "1",
    "Старт"
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
player.onChat("creative", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onItemInteracted(IRON_SHOVEL, function () {
    agent.setItem(STICKY_PISTON, 1, 1)
    agent.setItem(SLIME_BLOCK, 1, 2)
    agent.setItem(REDSTONE_BLOCK, 1, 3)
    agent.setItem(REDSTONE_WIRE, 1, 4)
    agent.setSlot(4)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.move(RIGHT, 1)
    agent.setSlot(1)
    agent.place(FORWARD)
    agent.move(BACK, 1)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.move(BACK, 1)
    agent.setSlot(1)
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.setSlot(2)
    agent.move(UP, 2)
    agent.place(DOWN)
})
player.onChat("help", function () {
	
})
player.onChat("start", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Начало игры", "Привет, игрок! Ты начал увлекательное приключение: квест и RPG до накопления необходимого количества баллов")
})
player.onItemInteracted(WOODEN_SHOVEL, function () {
    agent.teleportToPlayer()
})
player.onTellCommand("time", function () {
    player.say("!!!")
    gameplay.title(mobs.target(LOCAL_PLAYER), "У тебя 10 секунд: взять самое нужное!", "У тебя 10 секунд: взять самое нужное!")
    loops.pause(3000)
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
    "1",
    "Старт"
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
