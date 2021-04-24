let n = 0
let k = 0
let Ширина = 0
player.onChat("tree", function () {
    agent.setItem(OAK_SAPLING, 20, 1)
    agent.setSlot(1)
})
player.onChat("slot", function (num1) {
    agent.setSlot(num1)
})
player.onChat("ar", function () {
    for (let сторона = 0; сторона <= 3; сторона++) {
        for (let довжина = 0; довжина <= 10; довжина++) {
            agent.setSlot(сторона + 2)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.setSlot(1)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.turn(LEFT_TURN)
    }
})
player.onChat("rect", function (Ширина, Длинна) {
    agent.move(UP, 1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < Длинна; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        for (let index = 0; index < Ширина; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
    }
})
player.onChat("line", function (num1) {
    agent.setItem(PLANKS_SPRUCE, 10, 1)
    agent.setSlot(1)
    agent.move(UP, 1)
    for (let index = 0; index < num1; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(DOWN, 1)
})
player.onChat("flower", function () {
    agent.setItem(OXEYE_DAISY, 20, 1)
    agent.setSlot(1)
})
player.onChat("test", function () {
    if (blocks.testForBlock(PLANKS_OAK, world(-59, 4, 17))) {
        player.say(":)")
    }
})
player.onChat("sq", function (Ширина) {
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < Ширина; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 1)
    agent.move(LEFT, 1)
})
player.onChat("t", function () {
    agent.teleportToPlayer()
})
player.onChat("iz", function () {
    agent.setItem(EMERALD_BLOCK, 1, 1)
    agent.setSlot(1)
})
player.onChat("пирамида", function (b) {
    agent.move(UP, 1)
    n = (b - 1) / 2
    k = n
    for (let index = 0; index < k; index++) {
        Ширина = n * 2
        for (let index = 0; index < n; index++) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < Ширина; index++) {
                    agent.place(DOWN)
                    agent.move(FORWARD, 1)
                }
                agent.turn(LEFT_TURN)
            }
            agent.move(FORWARD, 1)
            agent.move(LEFT, 1)
            Ширина += -2
        }
        agent.place(DOWN)
        n += -1
        agent.move(BACK, n)
        agent.move(RIGHT, n)
        agent.move(UP, 1)
    }
    player.runChatCommand("light")
})
player.onChat("sqall", function (Ширина) {
    n = Ширина / 2
    for (let index = 0; index < n; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < Ширина; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
        agent.move(FORWARD, 1)
        agent.move(LEFT, 1)
        Ширина += -2
    }
    agent.place(DOWN)
})
player.onChat("основа", function (Ширина) {
    agent.move(UP, 1)
    n = Ширина / 2
    for (let index = 0; index < n; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < Ширина; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
        agent.move(FORWARD, 1)
        agent.move(LEFT, 1)
        Ширина += -2
    }
    agent.place(DOWN)
})
player.onChat("area", function () {
    for (let сторона = 0; сторона <= 3; сторона++) {
        for (let довжина = 0; довжина <= 10; довжина++) {
            agent.setSlot(2)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.setSlot(1)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.turn(LEFT_TURN)
    }
})
player.onChat("boards", function () {
    agent.setItem(PLANKS_SPRUCE, 10, 1)
    agent.setSlot(1)
})
player.onChat("active", function () {
    agent.setItem(OAK_SAPLING, 20, 1)
    agent.setItem(OXEYE_DAISY, 20, 2)
    agent.setItem(WHITE_TULIP, 20, 3)
    agent.setItem(ORANGE_TULIP, 20, 4)
    agent.setItem(AZURE_BLUET, 20, 5)
})
player.onChat("l", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("light", function () {
    agent.setItem(BEACON, 1, 1)
    agent.place(DOWN)
})
