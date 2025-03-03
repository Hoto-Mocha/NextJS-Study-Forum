'use client'

import Link from "next/link";

export default function ListItem(props) {
    let result = JSON.parse(props.result)
    return (
        <div>
            {
                result.map((a, i) => {
                    let id = a._id.toString();
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${id}`}>
                                <h4>{a.title}</h4>
                            </Link>
                            <p>1월 1일</p>
                            <Link href={`/edit/${id}`}>✏️</Link>
                            <span onClick={(e) => {
                                fetch(`/api/delete?contentId=${id}`, {
                                    method: 'DELETE'
                                })
                                    .then((r) => {
                                        if (r.status == 200) {
                                            e.target.parentElement.style.opacity = 0;
                                            setTimeout(() => {
                                                e.target.parentElement.style.display = 'none';
                                            }, 1000)
                                        } else {
                                            //서버가 에러코드전송시 실행할코드
                                            console.log(r.json())
                                        }
                                    })
                                    .catch((error) => {
                                        //인터넷문제 등으로 실패시 실행할코드
                                        console.log(error)
                                    })
                            }}>🗑️</span>
                        </div>
                    )
                })
            }
        </div>
    )
}