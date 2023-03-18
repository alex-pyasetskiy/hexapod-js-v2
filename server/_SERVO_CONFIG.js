// See configurable parameters at: http://johnny-five.io/api/servo/
const servoConfig = {
    
    rightFront: {
        alpha: {pin: 9, pwmRange: [ 700, 2400 ], startAngle: 90},
        beta: {pin: 10, pwmRange: [ 700, 2400 ], startAngle: 90},
        gamma: {pin: 11, pwmRange: [ 700, 2400 ], startAngle: 90},
    },
    rightMiddle: {
        alpha: {pin: 5, pwmRange: [ 700, 2400 ], startAngle: 90},
        beta: {pin: 6, pwmRange: [ 700, 2400 ], startAngle: 90},
        gamma: {pin: 7, pwmRange: [ 700, 2400 ], startAngle: 90},
    },
    rightBack: {
        alpha: {pin: 1, pwmRange: [ 700, 2400 ], startAngle: 90},
        beta: {pin: 2, pwmRange: [ 700, 2400 ], startAngle: 90},
        gamma: {pin: 3, pwmRange: [ 700, 2400 ], startAngle: 90},
    },
    leftFront: {
        alpha: {pin: 21, pwmRange: [ 700, 2400 ], startAngle: 90},
        beta: {pin: 22, pwmRange: [ 700, 2400 ], startAngle: 90},
        gamma: {pin: 23, pwmRange: [ 700, 2400 ], startAngle: 90},
    },

    leftMiddle: {
        alpha: {pin: 25, pwmRange: [ 700, 2400 ], startAngle: 90},
        beta: {pin: 26, pwmRange: [ 700, 2400 ], startAngle: 90},
        gamma: {pin: 27, pwmRange: [ 700, 2400 ], startAngle: 90},
    },

    leftBack: {
        alpha: {pin: 28, pwmRange: [ 700, 2400 ], startAngle: 90},
        beta: {pin: 30, pwmRange: [ 700, 2400 ], startAngle: 90},
        gamma: {pin: 31, pwmRange: [ 700, 2400 ], startAngle: 90},
    },
}

module.exports = { servoConfig }
