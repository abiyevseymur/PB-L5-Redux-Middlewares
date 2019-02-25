import React from 'react'

const Posts = props => {

    return (
        <table className="ui fixed table">
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody >
                {props.loading ? <tr><td className="ui active inline loader"> </td></tr>:
                    props.post.posts.map(p => <tr key={p.id}>
                        <td>{p.userId}</td>
                        <td>{p.title}</td>
                        <td>{p.body}</td>
                    </tr>)
                  
                }
            </tbody>
        </table>)

}
export default Posts;