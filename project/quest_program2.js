loops.forever(function () {
    if (blocks.testForBlock(DIAMOND_BLOCK, world(41, 5, 40))) {
        player.say(":)")
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(41, 5, 39))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        STICK,
        1
        )
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(41, 5, 38))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        IRON_SHOVEL,
        1
        )
    }
    if (blocks.testForBlock(DIAMOND_BLOCK, world(41, 5, 37))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        DIAMOND_SWORD,
        1
        )
        player.teleport(world(0, 4, 0))
        player.runChatCommand("time")
    }
})