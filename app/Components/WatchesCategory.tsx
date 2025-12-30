"use client";

import { useState } from "react";
import "./WatchesCategory.css";

interface Watch {
  id: number;
  name: string;
  price: number;
  img: string;
}

// Use placeholder images from Picsum or your actual deployed paths
const watches: Watch[] = [
  { 
    id: 1, 
    name: "Classic Leather", 
    price: 249, 
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    name: "Smart Watch Pro", 
    price: 399, 
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    name: "Luxury Gold", 
    price: 899, 
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 4, 
    name: "Sports Edition", 
    price: 199, 
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 5, 
    name: "Minimal Black", 
    price: 179, 
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 6, 
    name: "Chronograph Pro", 
    price: 499, 
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 7, 
    name: "Rose Gold Women", 
    price: 299, 
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 8, 
    name: "Digital Sport", 
    price: 159, 
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
];

export default function WatchesCategory() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const addToCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const increaseQty = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setCart((prev) => {
      const qty = prev[id] - 1;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: qty };
    });
  };

  // Calculate total items and total price
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  
  const totalPrice = watches.reduce((total, watch) => {
    const qty = cart[watch.id] || 0;
    return total + (watch.price * qty);
  }, 0);

  // Get cart items with details
  const cartItems = watches
    .filter(watch => cart[watch.id])
    .map(watch => ({
      ...watch,
      quantity: cart[watch.id],
      subtotal: watch.price * cart[watch.id]
    }));

  return (
    <section className="watches-section">
      {/* TOP CART COUNT */}
      <div className="top-bar">
        <h2>WATCHES COLLECTION</h2>
        <div className="cart-icon">
          🛒 
          <span className="cart-count">{totalItems}</span>
          {totalItems > 0 && <div className="cart-pulse"></div>}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Watches Grid */}
        <div className="watches-container">
          <div className="watches-row">
            {watches.slice(0, 4).map((watch) => {
              const qty = cart[watch.id] || 0;
              const isHovered = hoveredId === watch.id;

              return (
                <div 
                  key={watch.id} 
                  className="watch-card"
                  onMouseEnter={() => setHoveredId(watch.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Watch Image */}
                  <div className="image-box">
                    <div className="img-container">
                      <img 
                        src={watch.img} 
                        alt={watch.name} 
                        className={`watch-img ${isHovered ? 'img-hover' : ''}`} 
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/300x200/CCCCCC/666666?text=Watch+Image";
                        }}
                      />
                      {isHovered && <div className="quick-view">QUICK VIEW</div>}
                    </div>
                  </div>

                  {/* Watch Info */}
                  <div className="watch-info">
                    <h3>{watch.name}</h3>
                    <p className="price">${watch.price.toFixed(2)}</p>
                  </div>

                  {/* Add to Cart Box */}
                  <div className="add-to-cart-box">
                    {qty === 0 ? (
                      <button
                        className="add-btn"
                        onClick={() => addToCart(watch.id)}
                      >
                        ADD TO CART
                      </button>
                    ) : (
                      <div className="cart-controls-box">
                        <div className="in-cart-label">
                          <span className="checkmark">✓</span>
                          In Cart
                        </div>
                        <div className="qty-controls">
                          <button 
                            className="qty-btn minus" 
                            onClick={() => decreaseQty(watch.id)}
                          >
                            −
                          </button>
                          <span className="qty-number">{qty}</span>
                          <button 
                            className="qty-btn plus" 
                            onClick={() => increaseQty(watch.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="watches-row">
            {watches.slice(4, 8).map((watch) => {
              const qty = cart[watch.id] || 0;
              const isHovered = hoveredId === watch.id;

              return (
                <div 
                  key={watch.id} 
                  className="watch-card"
                  onMouseEnter={() => setHoveredId(watch.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Watch Image */}
                  <div className="image-box">
                    <div className="img-container">
                      <img 
                        src={watch.img} 
                        alt={watch.name} 
                        className={`watch-img ${isHovered ? 'img-hover' : ''}`} 
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/300x200/CCCCCC/666666?text=Watch+Image";
                        }}
                      />
                      {isHovered && <div className="quick-view">QUICK VIEW</div>}
                    </div>
                  </div>

                  {/* Watch Info */}
                  <div className="watch-info">
                    <h3>{watch.name}</h3>
                    <p className="price">${watch.price.toFixed(2)}</p>
                  </div>

                  {/* Add to Cart Box */}
                  <div className="add-to-cart-box">
                    {qty === 0 ? (
                      <button
                        className="add-btn"
                        onClick={() => addToCart(watch.id)}
                      >
                        ADD TO CART
                      </button>
                    ) : (
                      <div className="cart-controls-box">
                        <div className="in-cart-label">
                          <span className="checkmark">✓</span>
                          In Cart
                        </div>
                        <div className="qty-controls">
                          <button 
                            className="qty-btn minus" 
                            onClick={() => decreaseQty(watch.id)}
                          >
                            −
                          </button>
                          <span className="qty-number">{qty}</span>
                          <button 
                            className="qty-btn plus" 
                            onClick={() => increaseQty(watch.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cart Summary - Shows total information */}
        <div className="cart-summary">
          <div className="summary-header">
            <h3>🛒 YOUR CART SUMMARY</h3>
            <div className="total-items">Total Items: {totalItems}</div>
          </div>

          {totalItems === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <p className="empty-message">Add watches to see the total price</p>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">× {item.quantity}</span>
                    </div>
                    <div className="item-price">
                      ${item.subtotal.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Calculation */}
              <div className="total-calculation">
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="tax">
                  <span>Tax (10%):</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="shipping">
                  <span>Shipping:</span>
                  <span>{totalPrice > 500 ? "FREE" : "$15.00"}</span>
                </div>
                <div className="grand-total">
                  <span>GRAND TOTAL:</span>
                  <span className="total-amount">
                    ${(totalPrice + (totalPrice * 0.1) + (totalPrice > 500 ? 0 : 15)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="checkout-btn">
                PROCEED TO CHECKOUT
              </button>
            </>
          )}

          {/* Cart Stats */}
          <div className="cart-stats">
            <div className="stat-box">
              <div className="stat-value">{totalItems}</div>
              <div className="stat-label">Items</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">${totalPrice.toFixed(2)}</div>
              <div className="stat-label">Subtotal</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">{cartItems.length}</div>
              <div className="stat-label">Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}