import { Socket } from "socket.io";

export const socketEvents = (_: unknown, socket: Socket) => {
    console.log(`socket.io - socket.id \`${socket.id}\` connection`);
    socket.on("disconnect", () => {
        console.log(`socket.io - socket.id \`${socket.id}\` disconnected`);
    });
    socket.on("signin", () => {
        console.log("socket.io - signin");
    });
};
