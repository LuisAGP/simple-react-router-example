import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Blog = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const {data} = useFetch("https://jsonplaceholder.typicode.com/posts")

    const handlerChange = (e) => {
        let filter = e.target.value;

        if(filter){
            setSearchParam({filter: filter});
        }else{
            setSearchParam({})
        }

    }


    return (
        <div>
            <h1>Blog</h1>
            <input 
                type="text" 
                name="filter" 
                onChange={handlerChange} 
                className="form-control my-3"
                value={searchParam.get('filter') || ""}
            />
            <ul className="list-group">
                {
                    data && data.filter((item) => {
                        let filter = searchParam.get('filter');
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLocaleLowerCase());
                    }).map(item => (
                        <li key={item.id} className="list-group-item">
                            <Link to={`/blog/${item.id}`}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Blog;