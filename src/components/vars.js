import React from "react"
import { GiCoffeeMug } from "react-icons/gi"
import { FaGamepad, FaRegChartBar, FaHome, FaRegSun, FaHammer } from "react-icons/fa"
// import { GiMove, GiSettingsKnobs, } from "react-icons/gi"

const SECTION_NAMES = {
    dimensions: "Dimensions",
    inverseKinematics: "Inverse Kinematics",
    forwardKinematics: "Forward Kinematics",
    legPatterns: "Leg Patterns",
    landingPage: "Root",
    walkingGaits: "Walking Gaits",
}

const PATH_NAMES = {
    inverseKinematics: "/inverse-kinematics",
    forwardKinematics: "/forward-kinematics",
    legPatterns: "/leg-patterns",
    landingPage: "/",
    walkingGaits: "/walking-gaits",
}

const ANGLE_NAMES = ["alpha", "beta", "gamma"]
const DIMENSION_NAMES = ["front", "side", "middle", "coxia", "femur", "tibia"]
const LEG_NAMES = [
    "leftFront",
    "rightFront",
    "leftMiddle",
    "rightMiddle",
    "leftBack",
    "rightBack",
]

const IK_SLIDERS_LABELS = ["tx", "ty", "tz", "rx", "ry", "rz", "hipStance", "legStance"]
const RESET_LABEL = "reset"

const GAIT_SLIDER_LABELS = [
    "hipSwing",
    "liftSwing",
    "legStance",
    "hipStance",
    "tx",
    "tz",
    "rx",
    "ry",
    "stepCount",
]

/*************
 * RANGE PARAMS
 *************/

const rangeParams = (min, max) => ({ minVal: min, maxVal: max, stepVal: 1 })
const RANGES = {
    30: rangeParams(-30,30),
    45: rangeParams(-45,45),
    60: rangeParams(-60,60),
    90: rangeParams(-90, 90),
    180: rangeParams(-180, 180),
    alpha: rangeParams(-45,45),
    beta: rangeParams(-90,90),
    gamma: rangeParams(-50,90),
}

const translateInputs = { minVal: -1, maxVal: 1, stepVal: 0.05 }

const RANGE_PARAMS = {
    dimensionInputs: { minVal: 1, maxVal: 500, stepVal: 1 },
    tx: translateInputs,
    ty: translateInputs,
    tz: translateInputs,
    rx: RANGES[30],
    ry: RANGES[30],
    rz: RANGES[60],
    legStance: RANGES[90],
    hipStance: RANGES[60],
    alpha: RANGES.alpha,
    beta: RANGES.beta,
    gamma: RANGES.gamma,
}

const GAIT_RANGE_PARAMS = {
    tx: { minVal: -0.25, maxVal: 0.25, stepVal: 0.05, defaultVal: 0 },
    tz: { minVal: -0.5, maxVal: 0.5, stepVal: 0.05, defaultVal: 0 },
    rx: { minVal: -15, maxVal: 15, stepVal: 1, defaultVal: 0 },
    ry: { minVal: -15, maxVal: 15, stepVal: 1, defaultVal: 0 },
    legStance: { minVal: -50, maxVal: 50, stepVal: 1, defaultVal: 0 },
    hipStance: { minVal: -40, maxVal: 40, stepVal: 1, defaultVal: 0 },
    hipSwing: { minVal: -20, maxVal: 50, stepVal: 1, defaultVal: 0 },
    liftSwing: { minVal: 10, maxVal: 90, stepVal: 1, defaultVal: 60 },
    stepCount: { minVal: 3, maxVal: 7, stepVal: 1, defaultVal: 5 },
}
/*************
 * ICONS
 *************/

const ICON_COMPONENTS = {
    home: <FaHome className="vertical-align" />,
    walkGait: <FaGamepad className="vertical-align"/>,
    ik: <FaRegSun className="vertical-align" />,
    forward: <FaRegChartBar className="vertical-align" />,
    legPatterns: <FaHammer className="vertical-align" />
}

/*************
 * NAVIGATION
 *************/

const PATHS = {
    inverseKinematics: {
        path: PATH_NAMES.inverseKinematics,
        description: SECTION_NAMES.inverseKinematics,
        icon: ICON_COMPONENTS.ik,
    },
    forwardKinematics: {
        path: PATH_NAMES.forwardKinematics,
        description: SECTION_NAMES.forwardKinematics,
        icon: ICON_COMPONENTS.forward,
    },
    legPatterns: {
        path: PATH_NAMES.legPatterns,
        description: SECTION_NAMES.legPatterns,
        icon: ICON_COMPONENTS.legPatterns,
    },
    landingPage: {
        path: PATH_NAMES.landingPage,
        description: SECTION_NAMES.landingPage,
        icon: ICON_COMPONENTS.home,
    },

    walkingGaits: {
        path: PATH_NAMES.walkingGaits,
        description: SECTION_NAMES.walkingGaits,
        icon: ICON_COMPONENTS.walkGait,
    },
}

const KOFI_LINK_PROPERTIES = {
    name: "KOFI",
    icon: ICON_COMPONENTS.mug,
    description: "Buy Mithi Ko-Fi 🍵",
    url: "https://ko-fi.com/minimithi",
}

const REPO_LINK_PROPERTIES = {
    name: "REPO",
    icon: ICON_COMPONENTS.octocat,
    description: "Source Code",
    url: "https://github.com/mithi/hexapod-irl",
}

const PATH_LINKS = [
    PATHS.inverseKinematics,
    PATHS.forwardKinematics,
    PATHS.legPatterns,
    PATHS.walkingGaits,
    PATHS.landingPage,
]

const URL_LINKS = [KOFI_LINK_PROPERTIES, REPO_LINK_PROPERTIES]

/*************
 * LANDING PAGE
 *************/

const LANDING_PAGE_MESSAGE = `Hexapod`

export {
    ICON_COMPONENTS,
    LANDING_PAGE_MESSAGE,
    SECTION_NAMES,
    ANGLE_NAMES,
    DIMENSION_NAMES,
    LEG_NAMES,
    IK_SLIDERS_LABELS,
    GAIT_SLIDER_LABELS,
    RESET_LABEL,
    PATHS,
    URL_LINKS,
    PATH_LINKS,
    RANGE_PARAMS,
    GAIT_RANGE_PARAMS,
}
