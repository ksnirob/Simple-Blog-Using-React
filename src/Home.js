import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     const deleteBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(deleteBlogs)
    // }
    // const [name, setName] = useState('Nirob')

    return (
        <div className = "home">
            { error && <div>{ error }</div> }
            {isPending && <div style={{
                textAlign: 'center'
            }}>Loading...</div>}
            {blogs && <BlogList blogs = {blogs.filter((blog) => blog.category === 'featured')} title ="Featured Posts" />}
            {blogs && <BlogList blogs = {blogs.filter((blog) => blog.category === 'latest')} title ="Latest Posts" />}
            {/* <button onClick={() => setName('Khaled')}>Change Value</button>
            <p>{name}</p> */}
        </div>
    )
}

export default Home;