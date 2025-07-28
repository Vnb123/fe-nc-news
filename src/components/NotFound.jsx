import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link to="/">
          <button type="button" className="back">
            Back To Homepage
          </button>
        </Link>
      </div>
    </>
  );
}
