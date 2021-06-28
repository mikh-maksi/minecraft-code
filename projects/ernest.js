let points = 0
let list: string[] = []
let teleport = 0
function check () {
    if (points > 10) {
        gameplay.title(mobs.target(LOCAL_PLAYER), "Вы победили!", "")
    }
}
player.onChat("mobs", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), world(9, 4, 9))
    }
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(CREEPER), world(9, 4, 9))
    }
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(SKELETON), world(9, 4, 9))
    }
})
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
        loops.pause(500)
    }
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    gameplay.setDifficulty(EASY)
    player.runChatCommand("arena")
})
player.onChat("about", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Умный воин", "Тебе нужно ответить на вопрос и победить мобов, чтобы получить 10+ очков!")
})
mobs.onMobKilled(mobs.monster(SKELETON), function () {
    points += 3
    player.say(points)
    check()
})
mobs.onMobKilled(mobs.monster(CREEPER), function () {
    points += 4
    player.say(points)
    check()
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    points += 2
    player.say(points)
    check()
})
player.onChat("start", function () {
    player.teleport(world(95, 4, 111))
    player.runChatCommand("about")
    teleport = 0
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
loops.forever(function () {
    if (blocks.testForBlock(DIAMOND_BLOCK, world(82, 5, 97))) {
        if (teleport == 0) {
            teleport = 1
            player.teleport(world(0, 4, 0))
            player.runChatCommand("time")
        } else {
        	
        }
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(82, 5, 98))) {
        player.say("Не верно")
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(82, 5, 99))) {
        player.say("Не верно")
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(82, 5, 100))) {
        player.say("Не верно")
    }
})
loops.forever(function () {
	
})
player.onItemInteracted(WOODEN_SHOVEL, function () {
    agent.teleport(world(40, 4, 40), WEST)
    blocks.fill(
    AIR,
    world(35, 4, 35),
    world(45, 10, 45),
    FillOperation.Replace
    )
    agent.setItem(BRICKS, 1, 1)
    agent.setItem(DIAMOND_BLOCK, 1, 2)
    agent.setItem(STICKY_PISTON, 1, 3)
    agent.setItem(WOODEN_BUTTON, 1, 4)
    agent.setSlot(1)
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
        agent.setSlot(3)
        agent.move(UP, 1)
        agent.move(LEFT, 4)
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
    }
    agent.move(BACK, 1)
    agent.move(LEFT, 4)
    agent.move(DOWN, 1)
    agent.setSlot(1)
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
        agent.setSlot(2)
        agent.move(UP, 1)
        agent.move(LEFT, 4)
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
    }
    agent.move(FORWARD, 4)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(RIGHT, 1)
    agent.move(DOWN, 1)
    for (let index = 0; index < 1; index++) {
        agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
        agent.setSlot(1)
        agent.move(UP, 1)
        agent.move(LEFT, 4)
        for (let index = 0; index < 4; index++) {
            agent.setSlot(1)
            agent.place(FORWARD)
            agent.setSlot(4)
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
    }
    agent.move(LEFT, 1)
})
player.onChat("arena", function () {
    player.teleport(world(0, 4, 0))
    blocks.fill(
    OAK_FENCE,
    world(10, 10, 10),
    world(-10, 4, -10),
    FillOperation.Destroy
    )
    blocks.fill(
    AIR,
    world(9, 9, 9),
    world(-9, 4, -9),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    world(9, 3, 9),
    world(-9, 3, -9),
    FillOperation.Destroy
    )
    player.runChatCommand("mobs")
})
player.onChat("s", function () {
    player.teleport(world(433, 69, 55))
    gameplay.title(mobs.target(LOCAL_PLAYER), "mortal kombat", "надо выжыть")
})
player.onItemInteracted(DIAMOND_SWORD, function () {
    mobs.spawn(mobs.monster(VINDICATOR), pos(5, 0, 0))
})
