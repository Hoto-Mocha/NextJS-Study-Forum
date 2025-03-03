import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if (session) {
        if (req.method == 'DELETE') {
            try {
                let contentId = req.query.contentId
                const db = (await connectDB).db("forum")
                let document = await db.collection('post').findOne({ _id: new ObjectId(contentId) })
                if (document) {
                    console.log(document)
                    if (document.auther == session.user.email) {
                        let result = await db.collection('post').deleteOne({ _id: new ObjectId(contentId) })
                        if (result.deletedCount > 0) {
                            return res.status(200).json('삭제완료')
                        } else {
                            return res.status(500).json('게시글을 찾을 수 없음')
                        }
                    } else {
                        return res.status(500).json('자신이 쓴 글이 아니면 삭제불가')
                    }
                } else {
                    return res.status(500).json('게시글을 찾을 수 없음')
                }
            } catch (error) {
                console.log(error)
                return res.status(500).json('DB 에러')
            }
        }
    } else {
        return res.status(500).json('자신이 쓴 글이 아니면 삭제불가')
    }
}