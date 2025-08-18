import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link to="/">
          <button type="button">Back To Homepage</button>
        </Link>
      </div>
    </>
  );
}
