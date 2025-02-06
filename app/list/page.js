import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((a, i) => {
                    let id = a._id.toString();
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${id}`}>
                                <h4>{a.title}</h4>
                            </Link>
                            {/* <DetailLink contentId={id}/> */}
                            <p>1월 1일</p>
                            <Link href={`/edit/${id}`}>
                                <h4>✏️</h4>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}