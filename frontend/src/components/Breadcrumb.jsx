import { Link, useLocation } from "react-router-dom";

function toStartCase(text) {
  if (!text) return "";
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <nav style={{ margin: "10px auto",
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "10px auto",
        background: "#fff" }}
    >
      <Link to="/dashboard" style={{ color: "black", textDecoration: "underline", fontWeight: 400 }}>Home</Link>
      {pathParts.length > 0 && (
        <>
          {" > "}
          <span style={{
            color: "black",
            fontWeight: 400
          }}>
            {toStartCase(pathParts[pathParts.length - 1])}
          </span>
        </>
      )}
    </nav>
  );
}
