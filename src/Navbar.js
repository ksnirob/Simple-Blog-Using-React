import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>Hashtag Devs</h1>
            <div className = "links">
                <Link to = "/">Home</Link>
                <Link to = "/create" className = "newLink" style = {{
                    backgroundColor: '#f2f2f2',
                    borderRadius: '5px'             
                }}>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;