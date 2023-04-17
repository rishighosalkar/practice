import { Link } from "react-router-dom";

const HomePage = () => {
    return <div>
        Home Page
        <div>
            <Link to="/products">Go to Products</Link>
        </div>
    </div>
}

export default HomePage;