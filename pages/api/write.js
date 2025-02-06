import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        console.log(req.body)
        if (req.body.title == '') {
            return res.status(500).json('너 왜 제목 안씀')
        }
        // try {
        //     const db = (await connectDB).db("forum")
        //     await db.collection('post').insertOne(req.body)
        //     return res.redirect(302, '/list')
        // } catch (error) {
        //     console.log(error)
        //     return res.status(500).json(error)
        // }
        const db = (await connectDB).db("forum")
        await db.collection('post').insertOne(req.body)
        return res.redirect(302, '/list')
    }
}