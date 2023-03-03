const { Board, Servo } = require("johnny-five")
const Raspi = require('raspi-io').RaspiIO;
const { servoConfig } = require("./_SERVO_CONFIG")
const { SOCKET_SERVER_PORT, SOCKET_CLIENT_URLS, CHANNEL_NAME } = require("./_VAR_CONFIG")

const app = require("express")()
const http = require("http").Server(app)

const socketio = require("socket.io")(http, {
    cors: {
        origin: "*",
    },
})

const LEGS = [
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

    for (let leg of LEGS) {
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

    const getCurrentState = () => {
        let servos = {}
        for (let leg of LEGS){
            servos[leg] = {
                alpha: hexapodServos[leg].alpha.position,
                beta: hexapodServos[leg].beta.position,
                gamma: hexapodServos[leg].gamma.position
            }
        }
        return servos;
    };
    const setServo = (pose, leg, angle) => {
        const newPose = pose[leg][angle]
        hexapodServos[leg][angle].to(newPose)
    }

    const setHexapodPose = pose => {
        for (let leg of LEGS) {
            setServo(pose, leg, "alpha")
            setServo(pose, leg, "beta")
            setServo(pose, leg, "gamma")
        }

        currentPose = pose;
    }

    // *************************
    // LISTEN TO SOCKET
    // *************************

    const readySequance = () => {
        const center = {
            "leftFront": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "rightFront": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "leftMiddle": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "rightMiddle": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "leftBack": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "rightBack": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            }
        }
        const pose1 = {
            "leftFront": {
                "alpha": 90,
                "beta": 150,
                "gamma": 45
            },
            "rightFront": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "leftMiddle": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "rightMiddle": {
                "alpha": 90,
                "beta": 38,
                "gamma": 130
            },
            "leftBack": {
                "alpha": 90,
                "beta": 160,
                "gamma": 45
            },
            "rightBack": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            }
        }
        const pose2 = {
            "leftFront": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "rightFront": {
                "alpha": 90,
                "beta": 30,
                "gamma": 140
            },
            "leftMiddle": {
                "alpha": 90,
                "beta": 150,
                "gamma": 40
            },
            "rightMiddle": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "leftBack": {
                "alpha": 90,
                "beta": 90,
                "gamma": 90
            },
            "rightBack": {
                "alpha": 90,
                "beta": 30,
                "gamma": 140
            }
        }
        // setHexapodPose(center)
        // setHexapodPose(pose1)
        // setHexapodPose(pose2)
        // setHexapodPose(center)
        // setHexapodPose(pose2)
        // setHexapodPose(center)
        setTimeout(()=>setHexapodPose(center), 0)
        setTimeout(()=>setHexapodPose(pose1), 100)
        setTimeout(()=>setHexapodPose(center), 200)
        setTimeout(()=>setHexapodPose(pose2), 300)
        setTimeout(()=>setHexapodPose(center), 500)

    }
    socketio.on("connection", socket => {
        console.log("client connected.")




        // const current_pose = getCurrentState()
        // console.log(current_pose)
        // socket.send(JSON.stringify(current_pose))
        readySequance()
        
        socket.on("disconnect", () => {
            console.log("client disconnected.")
        })

        socket.on(CHANNEL_NAME, msg => {
            // console.log("lag:", new Date() - msg.time)
            if (msg.pose) {
                try {
                    console.log(msg.pose)
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
