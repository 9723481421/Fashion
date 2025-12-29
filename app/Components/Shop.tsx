import Image from "next/image";

const products = [
  { id: 1, name: "Denim Jacket", image: "/img/fac1.webp", price: "$45" },
  { id: 2, name: "Gray T-Shirt", image: "/img/fac2.webp", price: "$30" },
  { id: 3, name: "White Top", image: "/img/fac3.webp", price: "$25" },
  { id: 4, name: "Casual Shirt", image: "/img/fac4.webp", price: "$35" },
  { id: 5, name: "Blue Jeans", image: "/img/fac5.webp", price: "$40" },   // ➕ NEW
  { id: 6, name: "Black Hoodie", image: "/img/fac6.webp", price: "$50" }, // ➕ NEW
];

export default function Products() {
  return (
    <>
      {/* Banner */}
      <div className="products-banner">
        <h1>PRODUCTS</h1>
      </div>

      <div className="products-wrapper">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li>Best Seller (8 items)</li>
            <li>Featured (8 items)</li>
            <li>Men (8 items)</li>
            <li>Women (8 items)</li>
          </ul>

          <h3 className="mt">Color</h3>
          <label><input type="checkbox" /> Black</label>
          <label><input type="checkbox" /> Gray</label>
          <label><input type="checkbox" /> Red</label>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="products-content">
          {/* TOP BAR */}
          <div className="products-top">
            <div>
              <select>
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
                <option>Price, Low to High</option>
              </select>

              <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>

            <p>Showing 1 to 6 of 6 items</p>
          </div>

          {/* PRODUCT GRID */}
          <div className="product-grid">
            {products.map((item) => (
              <div className="product-card" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={400}
                />
                <h4>{item.name}</h4>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
