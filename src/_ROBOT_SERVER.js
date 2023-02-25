const { Board, Servo } = require("johnny-five")
const Raspi = require('raspi-io').RaspiIO;
const { servoConfig } = require("./_SERVO_CONFIG")
const { SOCKET_SERVER_PORT, SOCKET_CLIENT_URLS, CHANNEL_NAME } = require("./_VAR_CONFIG")

const app = require("express")()
const http = require("http").Server(app)

const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    },
})

const LEG_POSITIONS = [
    "rightMiddle",
    "rightFront",
    "leftFront",
    "leftMiddle",
    "leftBack",
    "rightBack",
]

const board = new Board({
    io: new Raspi()
});

board.on("ready", () => {
    console.log("board connected.")

    // *************************
    // INITIALIZE SERVOS
    // *************************
    const initServo = (legPosition, angleName) =>
        new Servo(servoConfig[legPosition][angleName])

    let hexapodServos = {}

    for (let leg of LEG_POSITIONS) {
        hexapodServos[leg] = {
            alpha: initServo(leg, "alpha"),
            beta: initServo(leg, "beta"),
            gamma: initServo(leg, "gamma"),
        }

        // hexapodServos[leg].alpha.to(90)
        // hexapodServos[leg].beta.to(90)
        // hexapodServos[leg].gamma.to(90)
        hexapodServos[leg].alpha.center()
        hexapodServos[leg].beta.center()
        hexapodServos[leg].gamma.center()
    }

    // *************************
    // COMMAND SERVOS
    // *************************

    var currentPose;
    const setServo = (pose, leg, angle) => {
        const newPose = pose[leg][angle]
        hexapodServos[leg][angle].to(newPose)
    }

    const setHexapodPose = pose => {
        console.log("pose", pose, )
        console.log("pocurrentPosese", currentPose)
        for (let leg of LEG_POSITIONS) {
            setServo(pose, leg, "alpha")
            setServo(pose, leg, "beta")
            setServo(pose, leg, "gamma")
        }

        currentPose = pose;
    }

    // *************************
    // LISTEN TO SOCKET
    // *************************
    io.on("connection", socket => {
        console.log("client connected.")

        socket.on("disconnect", () => {
            console.log("client disconnected.")
        })

        socket.on(CHANNEL_NAME, msg => {
            // console.log("lag:", new Date() - msg.time)
            if (msg.pose) {
                try {
                    setHexapodPose(msg.pose)

                } catch(e) {
                    console.error(e)
                }
            }
        })
    })
})

http.listen(SOCKET_SERVER_PORT, function () {
    console.log(`listening on *:${SOCKET_SERVER_PORT}`)
})
