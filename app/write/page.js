export default function Write() {
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <input name="title" placeholder="글 제목..."></input>
                <input name="content" placeholder="글 내용..."></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}