function пол () {
    agent.move(FORWARD, 1)
    agent.move(LEFT, 1)
    agent.move(UP, 1)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 15; index++) {
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.move(FORWARD, 1)
        agent.move(RIGHT, 15)
    }
    agent.move(BACK, 6)
    agent.move(RIGHT, 1)
    agent.move(DOWN, 1)
}
player.onItemInteracted(IRON_SHOVEL, function () {
    agent.teleportToPlayer()
})
player.onItemInteracted(STICK, function () {
    пол()
    build()
    Переход1()
    крыша()
    проем()
    переход2()
    ступеньки()
})
function проем () {
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
}
function build () {
    agent.setItem(COBBLESTONE, 1, 1)
    agent.setItem(GLASS, 1, 2)
    agent.setItem(AIR, 1, 3)
    for (let index = 0; index <= 5; index++) {
        agent.move(UP, 1)
        for (let index2 = 0; index2 <= 1; index2++) {
            for (let index3 = 0; index3 <= 5; index3++) {
                if (index3 % 2 == 1 && index == 2 && index2 == 1) {
                    agent.setSlot(2)
                } else if (index3 % 2 == 1 && index == 5) {
                    agent.setSlot(3)
                } else {
                    agent.setSlot(1)
                }
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
            for (let index4 = 0; index4 <= 15; index4++) {
                if (index4 % 2 == 1 && index == 2) {
                    agent.setSlot(2)
                } else if (index4 % 2 == 1 && index == 5) {
                    agent.setSlot(3)
                } else {
                    agent.setSlot(1)
                }
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
    }
}
function переход2 () {
    agent.move(LEFT, 5)
    agent.turn(RIGHT_TURN)
    agent.move(LEFT, 1)
    agent.move(LEFT, 2)
    agent.move(FORWARD, 3)
    agent.move(DOWN, 3)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
}
function Переход1 () {
    agent.move(FORWARD, 1)
    agent.move(LEFT, 1)
    agent.move(DOWN, 1)
    agent.move(DOWN, 1)
}
function крыша () {
    agent.setSlot(1)
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(LEFT, 1)
        agent.move(BACK, 5)
    }
}
function ступеньки () {
    agent.setItem(COBBLESTONE_STAIRS, 1, 4)
    agent.setSlot(4)
    agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.move(RIGHT, 3)
        agent.move(FORWARD, 1)
        agent.move(UP, 1)
    }
}
