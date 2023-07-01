import mongoose from "mongoose"

export function connect() {
    // const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
    // add mongoDB password to connect and sometimes it's need to update the IP addresse in MongoDb.
    const connStr = `mongodb+srv://nasim:(password)@cluster0.lrlld.mongodb.net/?retryWrites=true&w=majority`

    // Mongoose connection events.
    const { connection } = mongoose
    connection.on("connecting",      () => console.log("[DB] connecting"))
    connection.on("connected",       () => console.log("[DB] connected"))
    connection.on("disconnecting",   () => console.log("[DB] disconnecting"))
    connection.on("disconnected",    () => console.log("[DB] disconnected"))
    connection.on("reconnected",     () => console.log("[DB] reconnected"))
    connection.on("error",           error => console.log("[DB] error", error))

    // Mongoose - start to connect
    mongoose.connect(connStr)
}
