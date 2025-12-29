import Link from "next/link";
// import "./search.css";

export default function SearchPage() {
  return (
    <div className="search-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Search</span>
      </div>

      <h1 className="search-title">Search</h1>
    </div>
  );
}
