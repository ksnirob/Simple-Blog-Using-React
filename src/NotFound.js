import {Link} from 'react-router-dom'
const NotFound = () => {
    return(
        <div className="not-found">
            <h1>Opps! 404</h1>
            <p>Page can not be found.</p>
            <Link to='/' className="go-back">Go Back Home</Link>
        </div>
    )
}

export default NotFound;