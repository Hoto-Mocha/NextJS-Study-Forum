import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        let contentId = JSON.parse(req.body).contentId
        console.log(contentId)
        const db = (await connectDB).db("forum")
        // let result = await db.collection('post').findOne({_id: new ObjectId(contentId)})
        // console.log(result)
        await db.collection('post').deleteOne({_id: new ObjectId(contentId)})

        return res.status(200).json('')
    }
}