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
    agent.setItem(SIGN, 1, 5)
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
    agent.move(LEFT, 4)
    agent.move(UP, 1)
    for (let index = 0; index < 1; index++) {
        agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            agent.setSlot(1)
            agent.place(FORWARD)
            agent.setSlot(5)
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
        agent.setSlot(1)
        agent.move(UP, 1)
        agent.move(LEFT, 4)
        for (let index = 0; index < 4; index++) {
            agent.setSlot(1)
            agent.place(FORWARD)
            agent.setSlot(5)
            agent.place(FORWARD)
            agent.move(RIGHT, 1)
        }
    }
})
