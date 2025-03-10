// Previously all 100
const DEFAULT_DIMENSIONS = {
    front: 115,
    side: 220,
    middle: 220,
    coxia: 85,
    femur: 95,
    tibia: 140,
}

const DEFAULT_BODY_DIMENSIONS = {
    front: DEFAULT_DIMENSIONS.front,
    side: DEFAULT_DIMENSIONS.side,
    middle: DEFAULT_DIMENSIONS.middle,
}
const DEFAULT_LEG_DIMENSIONS = {
    coxia: DEFAULT_DIMENSIONS.coxia,
    femur: DEFAULT_DIMENSIONS.femur,
    tibia: DEFAULT_DIMENSIONS.tibia,
}

const DEFAULT_POSE = {
    leftFront: { alpha: 0, beta: 0, gamma: 0 },
    rightFront: { alpha: 0, beta: 0, gamma: 0 },
    leftMiddle: { alpha: 0, beta: 0, gamma: 0 },
    rightMiddle: { alpha: 0, beta: 0, gamma: 0 },
    leftBack: { alpha: 0, beta: 0, gamma: 0 },
    rightBack: { alpha: 0, beta: 0, gamma: 0 },
}

const DEFAULT_PATTERN_PARAMS = { alpha: 0, beta: 0, gamma: 0 }

const DEFAULT_IK_PARAMS = {
    tx: 0,
    ty: 0,
    tz: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    hipStance: 0,
    legStance: 0,
}

const DEFAULT_GAIT_PARAMS = {
    tx: 0,
    tz: 0,
    rx: 0,
    ry: 0,
    legStance: 25,
    hipStance: 0,
    //hipSwing: 25,
    hipSwing: 0,
    liftSwing: 40,
    stepCount: 5,
}

export {
    DEFAULT_DIMENSIONS,
    DEFAULT_LEG_DIMENSIONS,
    DEFAULT_BODY_DIMENSIONS,
    DEFAULT_POSE,
    DEFAULT_IK_PARAMS,
    DEFAULT_PATTERN_PARAMS,
    DEFAULT_GAIT_PARAMS,
}
