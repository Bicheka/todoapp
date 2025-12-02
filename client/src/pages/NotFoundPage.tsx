import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div className="text-center mt-8">
            <h1 className="text-4xl m-5">404 Not Found</h1>
            <button className="bg-gray-300 p-2 rounded-sm shadow"><Link to='/'>Go Home</Link></button>
        </div>
    )
}