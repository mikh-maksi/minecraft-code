let Ножка: number[] = []
let Перекладина: number[] = []
player.onItemInteracted(STICK, function () {
    agent.teleportToPlayer()
})
player.onChat("light", function () {
    agent.setItem(SPRUCE_FENCE, 1, 1)
    agent.setItem(BIRCH_FENCE, 1, 2)
    agent.setItem(JUNGLE_FENCE, 1, 3)
    agent.setItem(ACACIA_FENCE, 1, 4)
    agent.setItem(DARK_OAK_FENCE, 1, 5)
    Ножка = [5, 5, 5, 5]
    Перекладина = [5, 5, 5]
    for (let элемент of Ножка) {
        agent.setSlot(элемент)
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.move(LEFT, 1)
    for (let элемент of Перекладина) {
        agent.setSlot(элемент)
        agent.place(FORWARD)
        agent.move(RIGHT, 1)
    }
    agent.move(DOWN, 1)
    agent.move(LEFT, 1)
    agent.setSlot(6)
    agent.place(FORWARD)
    agent.move(LEFT, 2)
    agent.place(FORWARD)
})
