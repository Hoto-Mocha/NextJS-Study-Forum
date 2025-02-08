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
                            <span onClick={() => {
                                fetch('/api/delete', {
                                    method:'POST',
                                    body:JSON.stringify({contentId: id})
                                }).then(() => {
                                    
                                })
                            }}>🗑️</span>
                        </div>
                    )
                })
            }
        </div>
    )
}