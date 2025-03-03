import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if (session) {
        req.body.auther = session.user.email
        
        if (req.method == 'POST') {
            console.log(req.body)
            if (req.body.title == '') {
                return res.status(500).json('너 왜 제목 안씀')
            }
            const db = (await connectDB).db("forum")
            await db.collection('post').insertOne(req.body)
            return res.redirect(302, '/list')
        }
    }
}