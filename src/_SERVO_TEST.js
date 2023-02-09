const { Board, Servo } = require("johnny-five")
const Raspi = require('raspi-io').RaspiIO;

/********************
    You can use this script to test if your servos
    are connected properly as you'd expect.
 ********************/

const board = new Board({io: new Raspi()})

board.on("ready", () => {
    console.log("board connected.")
    //let servo1 = new Servo({ pin: 15, address: "0x41", controller: "PCA9685" })
    //let servo2 = new Servo({ pin: 0, controller: "PCA9685" })
    let servo1 = new Servo({ pin: 5 })
    let servo2 = new Servo({ pin: 3 })

    servo1.sweep([70, 100])
    servo2.sweep()
})
