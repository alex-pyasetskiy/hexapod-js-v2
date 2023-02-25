import { useState, useEffect, useCallback, useRef } from "react"
import {io} from "socket.io-client"
import {
    SOCKET_SERVER_URL,
    MINIMUM_TIME_BETWEEN_MESSAGES,
    CLIENT_SENDER_NAME,
    CHANNEL_NAME,
} from "./_VAR_CONFIG"

import transformPose from "./_TRANSFORM"
const socket = io(SOCKET_SERVER_URL, {withCredentials: false, transports: ['websocket', 'polling', 'flashsocket']});

const useSendPose = () => {
    const socketRef = useRef()
    // const [lastDate, setLastDate] = useState(() => new Date())
    // delta date is the interval between the last two messages sent
    // const [deltaDate, setDeltaDate] = useState(0)
    const [isConnected, setIsConnected] = useState(socket.connected);


    useEffect(() => {
        // socketRef.current = socketIOClient(SOCKET_SERVER_URL)
        socket.on('connect', () => {
            setIsConnected(true);
            console.log("CONNECTED")
          });
      
          socket.on('disconnect', () => {
            setIsConnected(false);
            console.log("DISCONECTED")
          });
        socketRef.current = socket;
        return () => {
            socket.off('connect');
            socket.off('disconnect');
          };
    }, [])

    
    const sendPose = useCallback(
        pose => {
            // const currentDate = new Date()
            // const newDeltaDate = currentDate - lastDate

            // // we shouldn't spam the robot with commands
            // if (newDeltaDate < MINIMUM_TIME_BETWEEN_MESSAGES) {
            //     console.log("too soon: ", newDeltaDate)
            //     return
            // }

            // console.log("just right: ", newDeltaDate)

            socketRef.current.emit(CHANNEL_NAME, {
                pose: transformPose(pose),
                sender: CLIENT_SENDER_NAME,
                // time: currentDate.getTime(),
            })

            // setLastDate(currentDate)
            // setDeltaDate(newDeltaDate)
        },[]
        // [lastDate]
    )

    return [sendPose]
}

export default useSendPose
