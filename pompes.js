let list: string[] = []
let Ответы: number[] = []
let index = 0
let Вопросы: string[] = []
let Очки = 0
player.onChat("time", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "У тебя 10 секунд: взять самое нужное!", "")
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
player.onItemInteracted(GOLDEN_SHOVEL, function () {
    if (Ответы[index] == 0) {
        player.say("Верно")
    } else {
        player.say("Неверно")
    }
    player.say(index)
    index += 1
    player.say(Вопросы[index])
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
function Красный_камень () {
    agent.setSlot(4)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
}
function Инструменты () {
    agent.setItem(STICKY_PISTON, 1, 1)
    agent.setItem(SLIME_BLOCK, 1, 2)
    agent.setItem(REDSTONE_BLOCK, 1, 3)
    agent.setItem(REDSTONE_WIRE, 1, 4)
}
function Поршень_2 () {
    agent.setSlot(1)
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.setSlot(2)
    agent.move(UP, 2)
    agent.place(DOWN)
}
player.onChat("help", function () {
	
})
player.onChat("start", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Начало игры", "Привет, игрок! Ты начал увлекательное приключение: квест и RPG до накопления необходимого количества баллов")
    player.teleport(world(-1, 4, 4))
    agent.teleport(world(3, 4, 3), WEST)
    agent.setItem(GOLDEN_SHOVEL, 1, 1)
    agent.setItem(DIAMOND_SHOVEL, 1, 2)
    agent.drop(FORWARD, 1, 1)
    agent.move(LEFT, 1)
    agent.drop(FORWARD, 2, 1)
    blocks.fill(
    OAK_FENCE,
    world(-10, 4, -10),
    world(10, 10, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-9, 4, -9),
    world(9, 9, 9),
    FillOperation.Replace
    )
    Вопросы = ["Илон Маск - Миллиардер?", "Стартапы - это хорошо?"]
    Ответы = [1, 1]
    Очки = 0
    index = 0
    player.say(Вопросы[index])
})
function Переход () {
    agent.move(BACK, 1)
    agent.move(RIGHT, 1)
}
player.onItemInteracted(IRON_PICKAXE, function () {
    Инструменты()
    Красный_камень()
    Переход()
    Поршень1()
    Поршень_2()
})
player.onItemInteracted(WOODEN_SHOVEL, function () {
    agent.teleportToPlayer()
})
function Поршень1 () {
    agent.setSlot(1)
    agent.place(FORWARD)
    agent.move(BACK, 1)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.move(BACK, 1)
}
player.onItemInteracted(DIAMOND_SHOVEL, function () {
    if (Ответы[index] == 1) {
        player.say("Верно")
    } else {
        player.say("Неверно")
    }
    player.say(Вопросы[index])
    player.say(index)
    index += 1
})
