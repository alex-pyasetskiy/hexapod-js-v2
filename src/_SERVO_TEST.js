// const { Board, Servo } = require("johnny-five")
// const Raspi = require('raspi-io').RaspiIO;
const { SerialPort } = require('serialport')

/********************
    You can use this script to test if your servos
    are connected properly as you'd expect.
 ********************/

// const board = new Board({io: new Raspi()})
const serialport = new SerialPort({ path: '/dev/tty.usbmodem5CFA575831321', baudRate: 9600 })
serialport.write('#6P700T500D100')
serialport.write('#6P200T1000D100')
// board.on("ready", () => {
//     console.log("board connected.")
//     //let servo1 = new Servo({ pin: 15, address: "0x41", controller: "PCA9685" })
//     //let servo2 = new Servo({ pin: 0, controller: "PCA9685" })
//     serialport.write('#6P700T500D100')
//     serialport.write('#6P200T1000D100')
// })
