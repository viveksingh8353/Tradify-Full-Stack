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
    <nav className="w-full py-3">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        
        <Link
          to="/dashboard"
          className="hover:text-teal-600 transition font-medium"
        >
          Home
        </Link>

        {pathParts.length > 0 && (
          <>
            <span className="text-gray-400">/</span>

            {/* Current Page */}
            <span className="font-semibold text-gray-800">
              {toStartCase(pathParts[pathParts.length - 1])}
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
