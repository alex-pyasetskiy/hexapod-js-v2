// See configurable parameters at: http://johnny-five.io/api/servo/

const controller = "PCA9685"
const left_address = "0x40"
const right_address="0x41"

const servoConfig = {
    
    rightFront: {
        alpha: { controller, pin: 8, adress: right_address },
        beta: { controller, pin: 9, adress: right_address},
        gamma: { controller, pin: 10, adress: right_address },
    },
    rightMiddle: {
        alpha: { controller, pin: 4, adress: right_address },
        beta: { controller, pin: 5, adress: right_address },
        gamma: { controller, pin: 6, adress: right_address },
    },
    rightBack: {
        alpha: { controller, pin: 0, right_address },
        beta: { controller, pin: 1, right_address },
        gamma: { controller, pin: 2, right_address },
    },
    leftFront: {
        alpha: { controller, pin: 0, address: left_address },
        beta: { controller, pin: 1, address: left_address },
        gamma: { controller, pin: 2, address: left_address },
    },

    leftMiddle: {
        alpha: { controller, pin: 4, address: left_address },
        beta: { controller, pin: 5, address: left_address },
        gamma: { controller, pin: 6, address: left_address },
    },

    leftBack: {
        alpha: { controller, pin: 12, address: left_address },
        beta: { controller, pin: 13, address: left_address },
        gamma: { controller, pin: 14, address: left_address },
    },
}

module.exports = { servoConfig }
