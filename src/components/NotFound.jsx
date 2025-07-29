import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link to="/">
          <button
            type="button"
            // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Back To Homepage
          </button>
        </Link>
      </div>
    </>
  );
}
