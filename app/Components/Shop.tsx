"use client";

const products = [
  {
    id: 1,
    name: "Denim Jacket",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    price: "$45",
  },
  {
    id: 2,
    name: "Gray T-Shirt",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: "$30",
  },
  {
    id: 3,
    name: "White Top",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    price: "$25",
  },
  {
    id: 4,
    name: "Casual Shirt",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    price: "$35",
  },
  {
    id: 5,
    name: "Blue Jeans",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: "$40",
  },
  {
    id: 6,
    name: "Black Hoodie",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    price: "$50",
  },
];

export default function Products() {
  return (
    <>
      <div className="products-banner">
        <h1>PRODUCTS</h1>
      </div>

      <div className="products-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li>Best Seller</li>
            <li>Featured</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </aside>

        {/* Products */}
        <section className="products-content">
          <div className="products-top">
            <select>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
            <p>Showing 6 products</p>
          </div>

          <div className="product-grid">
            {products.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.img} alt={item.name} className="product-img" />
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
