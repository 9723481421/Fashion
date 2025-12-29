"use client";

const products = [
  {
    id: 1,
    name: "Denim Jacket",
    img: "/Img/pic3.webp",
    price: "$45",
  },
  {
    id: 2,
    name: "Gray T-Shirt",
    img: "/Img/pic4.webp",
    price: "$30",
  },
  {
    id: 3,
    name: "White Top",
    img: "/Img/pic6.webp",
    price: "$25",
  },
  {
    id: 4,
    name: "Casual Shirt",
    img: "/Img/pic5.webp",
    price: "$35",
  },
  {
    id: 5,
    name: "Blue Jeans",
    img: "/Img/pic2.webp",
    price: "$40",
  },
  {
    id: 6,
    name: "Black Hoodie",
    img: "/Img/pic7.webp",
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
