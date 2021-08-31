import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author, category}
        setIsPending(true)
        // console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsPending(false)
            // history.go(-1)
            history.push('/')
        })
    }
    return (
        <div className = "create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value= {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Category:</label>
                <select
                    value = {category}
                    onChange = {(e) => setCategory(e.target.value)}
                >
                    <option value="select">-- Select --</option>
                    <option value="latest">Latest</option>
                    <option value="featured">Featured</option>
                </select>
                <label>Blog Author:</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="select">-- Select --</option>
                    <option value="khaled">Khaled</option>
                    <option value="guest">Guest</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog..</button>}
                <br/><br/>
                <h3>{title}</h3>
                <p>{body}</p>
                <p>{category}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;