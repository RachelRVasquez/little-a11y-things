import {Link} from "react-router-dom";

function NotFound(){
    return(
        <section>
            <h1>Oops!</h1>
            <p>Looks like you're lost. That's okay! Here's a link back to <Link to={{
                pathname: "/"
            }}>the homepage</Link>.</p>
        </section>
    );
}

export default NotFound;
