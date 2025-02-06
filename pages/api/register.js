import { connectDB } from "@/util/database"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        console.log(req.body)

        if (req.body.memberId =='') {
            return res.status(500).json('ID 입력하셈')
        }
        if (req.body.password =='') {
            return res.status(500).json('PW 입력하셈')
        }
        const db = (await connectDB).db("forum")
        let result = await db.collection('member').findOne({memberId : req.body.memberId})
        console.log(result)
        if (result) {
            return res.status(500).json('이미 사용 중인 ID임')
        }

        await db.collection('member').insertOne(req.body)
        res.status(200).json('회원가입 완료')
    }
}