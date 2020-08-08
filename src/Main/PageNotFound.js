import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className = 'error'>
            <h1>Page Not Found</h1>
            <p>It seems like the path you have followed is broken or you have entered a URL that does not exist on this site</p>
            <Link to = '/' id = 'link'>-- Go Back to Homepage --</Link>
        </div>
    )
}

export default PageNotFound