import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    const params = await props.params

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new ObjectId(params.id)
    })
    
    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/edit" method="POST">
                <input type="hidden" name="contentId" defaultValue={params.id}></input>
                <input name="title" placeholder="글 제목..." defaultValue={result.title}></input>
                <input name="content" placeholder="글 내용..." defaultValue={result.content}></input>
                <button type="submit">수정완료</button>
            </form>
        </div>
    )
}