import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        console.log(req.body)
        let newContent = {
            title: req.body.title,
            content: req.body.content
        }
        if (req.body.title == '') {
            return res.status(500).json('너 왜 제목 안씀')
        }
        const db = (await connectDB).db("forum")
        await db.collection('post').updateOne({_id: new ObjectId(req.body.contentId)}, {$set: newContent})
        return res.redirect(302, '/list')
    }
}