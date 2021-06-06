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