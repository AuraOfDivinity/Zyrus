import k from "./kaboomContext.js"
import world from "./scenes/world.js"

const scenes = {
    world,
}

for (const sceneName in scenes) {
    /**
     * Asks kaboom js to create a new scene with the given name and the global kaboom object
     */
    k.scene(sceneName, () => scenes[sceneName](k))
}

// Default scene to access
k.go("world")
