const LEG_POSITIONS = [
    "leftFront",
    "rightFront",
    "leftMiddle",
    "rightMiddle",
    "leftBack",
    "rightBack",
]

const LEFT_LEGS = ["leftFront", "leftMiddle", "leftBack"]

const clean = (x, shouldInvert) => {
    let directed = shouldInvert ? -1 * x : x
    return Math.max(Math.min(Math.round(directed) + 90, 180), 0)
}

const transformPose = pose => {
    let newPose = {}
    for (let leg of LEG_POSITIONS) {
        const { alpha, beta, gamma } = pose[leg]
        const isLeft = LEFT_LEGS.includes(leg)
        newPose[leg] = {
            alpha: clean(alpha, true),
            beta: leg.includes('right') ? clean(beta, true) : clean(beta, !isLeft),
            // beta: clean(beta, isLeft),
            // gamma: clean(gamma, !isLeft)

            gamma: leg.includes('right') ? clean(gamma, true) : clean(gamma, !isLeft)
        }
    }
    console.log(newPose)
    return newPose
}

export default transformPose
