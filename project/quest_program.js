loops.forever(function () {
    if (blocks.testForBlock(EMERALD_BLOCK, world(51, 5, 47))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        WOODEN_SHOVEL,
        1
        )
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(50, 5, 47))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        STICK,
        1
        )
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(49, 5, 47))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        IRON_SHOVEL,
        1
        )
    }
    if (blocks.testForBlock(EMERALD_BLOCK, world(48, 5, 47))) {
        mobs.give(
        mobs.target(LOCAL_PLAYER),
        DIAMOND_SWORD,
        1
        )
        player.teleport(world(0, 4, 0))
        player.runChatCommand("time")
    }
})