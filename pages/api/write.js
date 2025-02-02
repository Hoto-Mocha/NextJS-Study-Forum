import { connectDB } from "@/util/database"

export default async function Write(req, res) {
    const db = (await connectDB).db("forum")
    await db.collection('post').insertOne(req.body)

    return res.status(200).json('처리완료')
}