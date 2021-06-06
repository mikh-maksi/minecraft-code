player.onChat("line", function () {
    agent.setItem(REDSTONE_WIRE, 1, 1)
    agent.setItem(UNPOWERED_REPEATER, 1, 2)
    agent.place(DOWN)
    for (let index = 0; index <= 15; index++) {
        if (index % 10 == 9) {
            agent.setSlot(2)
            agent.place(FORWARD)
            agent.move(FORWARD, 1)
        } else {
            agent.setSlot(1)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
    }
})
player.onChat("under", function () {
    agent.setItem(REDSTONE_WIRE, 1, 1)
    agent.setItem(UNPOWERED_REPEATER, 1, 2)
    agent.place(DOWN)
    for (let index = 0; index < 2; index++) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
        agent.place(DOWN)
    }
    for (let index = 0; index <= 10; index++) {
        if (index == 5) {
            agent.setSlot(2)
        } else {
            agent.setSlot(1)
        }
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
    for (let index = 0; index < 2; index++) {
        agent.destroy(UP)
        agent.move(UP, 1)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
})
player.onItemInteracted(IRON_SHOVEL, function () {
    agent.teleportToPlayer()
})
player.onChat("railline", function () {
    agent.setItem(CHISELED_STONE_BRICKS, 1, 1)
    agent.setItem(DISPENSER, 1, 2)
    agent.setItem(POWERED_RAIL, 1, 3)
    agent.setItem(REDSTONE_BLOCK, 1, 4)
    agent.setSlot(3)
    for (let index = 0; index <= 10; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
        if (index % 7 == 6) {
            agent.setSlot(4)
            agent.place(LEFT)
            agent.setSlot(3)
        }
    }
})
player.onChat("run", function () {
	
})
loops.forever(function () {
    while (blocks.testForBlock(DIAMOND_BLOCK, world(57, 4, -125))) {
        mobs.spawn(FIREWORKS_ROCKET, world(57, 4, -125))
    }
})
player.onChat("pusher", function () {
    agent.setItem(CHISELED_STONE_BRICKS, 1, 1)
    agent.setItem(DISPENSER, 1, 2)
    agent.setItem(POWERED_RAIL, 1, 3)
    agent.setItem(REDSTONE_BLOCK, 1, 4)
    agent.setItem(REDSTONE_BLOCK, 1, 4)
    agent.place(FORWARD)
    agent.move(RIGHT, 1)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.setSlot(2)
    agent.place(FORWARD)
    agent.setSlot(3)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.move(DOWN, 1)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.place(DOWN)
    agent.setSlot(4)
    agent.place(LEFT)
})
