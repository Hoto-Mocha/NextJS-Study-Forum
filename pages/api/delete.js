import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        // try {
        //     let contentId = JSON.parse(req.body).contentId
        //     const db = (await connectDB).db("forum")
        //     let result = await db.collection('post').deleteOne({ _id: new ObjectId(contentId) })
        //     console.log(result)
        //     if (result.deletedCount > 0) {
        //         return res.status(200).json('삭제완료')
        //     } else {
        //         return res.status(500).json('게시글을 찾을 수 없음')
        //     }
        // } catch (error) {
        //     console.log(error)
        //     return res.status(500).json('DB 에러')
        // }

        // console.log(req.query)
        try {
            let contentId = req.query.contentId
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').deleteOne({ _id: new ObjectId(contentId) })
            console.log(result)
            if (result.deletedCount > 0) {
                return res.status(200).json('삭제완료')
            } else {
                return res.status(500).json('게시글을 찾을 수 없음')
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json('DB 에러')
        }
    }
}