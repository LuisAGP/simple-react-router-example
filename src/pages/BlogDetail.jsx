import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
    const params = useParams()
    const {data} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return (
        <div>
            {
                data && <div>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <Link to="/blog">Volver</Link>
                </div>
            }
        </div>
    )
}


export default BlogDetail;