import {Link} from "react-router-dom";

function Navigation(){
    return(
        <div>
            <h2>navigate</h2>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
       
    )
}

export default Navigation;