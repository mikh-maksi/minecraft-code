player.onChat("railstone", function () {
    agent.setItem(POWERED_RAIL, 1, 1)
    agent.setItem(REDSTONE_BLOCK, 1, 2)
    for (let index = 0; index <= 100; index++) {
        if (index % 10 == 0) {
            agent.setSlot(2)
            agent.place(RIGHT)
        } else {
        	
        }
        agent.setSlot(1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})