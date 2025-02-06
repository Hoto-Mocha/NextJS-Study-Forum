export default function Register() {
    return (
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/register" method="POST">
                <input name="memberId" placeholder="ID..."></input>
                <input name="password" placeholder="PW..." type="password"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}