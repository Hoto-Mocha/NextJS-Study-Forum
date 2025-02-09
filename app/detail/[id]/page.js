import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Link from "next/link"

export default async function Detail(props) {
    const params = await props.params

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new ObjectId(params.id)
    })
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}