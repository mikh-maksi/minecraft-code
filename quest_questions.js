loops.forever(function () {
    if (blocks.testForBlock(EMERALD_BLOCK, world(51, 5, 47))) {
        player.say("Berlin")
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(50, 5, 47))) {
        player.say("Paris")
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(49, 5, 47))) {
        player.say("Glazgo")
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(48, 5, 47))) {
        player.say("London")
    }
})
