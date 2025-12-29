"use client";

import { useState } from "react";
// import "./WatchesCategory.css";

interface Watch {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  reviews: number;
  badge: string;
}

const watches: Watch[] = [
  {
    id: 1,
    name: "Classic Leather",
    price: 249,
    img: "/img/banner-02.webp",
    rating: 4.5,
    reviews: 120,
    badge: "NEW",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399,
    img: "/img/banner-03.webp",
    rating: 4.8,
    reviews: 240,
    badge: "HOT",
  },
  {
    id: 3,
    name: "Luxury Gold",
    price: 899,
    img: "/img/banner-04.webp",
    rating: 4.7,
    reviews: 98,
    badge: "NEW",
  },
  {
    id: 4,
    name: "Sports Edition",
    price: 199,
    img: "/img/banner-05.webp",
    rating: 4.3,
    reviews: 180,
    badge: "SALE",
  },
  {
    id: 5,
    name: "Minimal Black",
    price: 179,
    img: "/img/banner-07.webp",
    rating: 4.4,
    reviews: 76,
    badge: "NEW",
  },
  {
    id: 6,
    name: "Chronograph Pro",
    price: 499,
    img: "/img/banner-09.webp",
    rating: 4.6,
    reviews: 156,
    badge: "HOT",
  },
  {
    id: 7,
    name: "Rose Gold Women",
    price: 299,
    img: "/img/banner10.webp",
    rating: 4.5,
    reviews: 88,
    badge: "NEW",
  },
  {
    id: 8,
    name: "Digital Sport",
    price: 159,
    img: "/img/banner11.webp",
    rating: 4.2,
    reviews: 134,
    badge: "SALE",
  },
];

export default function WatchesCategory() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="watches-section">
      <h2 className="section-title">WATCHES COLLECTION</h2>

      <div className="watches-grid">
        {watches.map((watch) => (
          <div
            className="watch-card"
            key={watch.id}
            onMouseEnter={() => setHovered(watch.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="image-box">
              <img
                src={watch.img}
                alt={watch.name}
                className="watch-img"
                onError={(e) =>
                  ((e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/300x300?text=Watch")
                }
              />

              <span className="badge">{watch.badge}</span>

              <button
                className={`add-btn ${hovered === watch.id ? "show" : ""}`}
              >
                ADD TO CART
              </button>
            </div>

            <div className="watch-info">
              <h3>{watch.name}</h3>
              <p className="price">${watch.price}</p>
              <div className="rating">
                ⭐ {watch.rating} ({watch.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
