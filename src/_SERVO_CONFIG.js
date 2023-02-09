// See configurable parameters at: http://johnny-five.io/api/servo/

const controller = "PCA9685"
const pca_left = "0x41"
const pca_right = "0x40"

const servoConfig = {
    rightMiddle: {
        alpha: { controller, pin: 8, pca_right },
        beta: { controller, pin: 9, pca_right },
        gamma: { controller, pin: 10, pca_right },
    },

    rightFront: {
        alpha: { controller, pin: 13, pca_right },
        beta: { controller, pin: 14, pca_right},
        gamma: {controller, pin: 15, pca_right },
    },

    leftFront: {
        alpha: { controller, pin: 0, pca_left },
        beta: { controller, pin: 1, pca_left },
        gamma: { controller, pin: 2, pca_left },
    },

    leftMiddle: {
        alpha: { controller, pin: 4, pca_left },
        beta: { controller, pin: 5, pca_left },
        gamma: { controller, pin: 6, pca_left },
    },

    leftBack: {
        alpha: { controller, pin: 13, pca_left },
        beta: { controller, pin: 14, pca_left },
        gamma: { controller, pin: 15, pca_left },
    },

    rightBack: {
        alpha: { controller, pin: 0, pca_right },
        beta: { controller, pin: 1, pca_right },
        gamma: { controller, pin: 2, pca_right },
    },
}

module.exports = { servoConfig }
