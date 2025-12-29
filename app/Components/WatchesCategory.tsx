// "use client";

// import Image from 'next/image';
// import { useState } from 'react';
// import './WatchesCategory.css';





// const watches = [
//   {
//     id: 1,
//     name: "Classic Leather",
//     price: "$129.99",
//     originalPrice: "$199.99",
//     discount: "35% OFF",
//     image: "/img/banner-02.webp",
//     rating: 4.5,
//     reviews: 128,
//     isNew: true,
//     isSale: false
    
//   },
//   {
//     id: 2,
//     name: "Smart Watch Pro",
//     price: "$299.99",
//     originalPrice: "$399.99",
//     discount: "25% OFF",
//     image: "/img/banner-03.webp",
//     rating: 4.8,
//     reviews: 256,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 3,
//     name: "Luxury Gold",
//     price: "$499.99",
//     originalPrice: "$699.99",
//     discount: "29% OFF",
//     image: "/img/banner-04.jpg",
//     rating: 4.7,
//     reviews: 89,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 4,
//     name: "Sports Edition",
//     price: "$159.99",
//     originalPrice: "$229.99",
//     discount: "20% OFF",
//     image: "/img/banner-05.webp",
//     rating: 4.3,
//     reviews: 187,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 5,
//     name: "Minimalist Black",
//     price: "$89.99",
//     originalPrice: "$129.99",
//     discount: "31% OFF",
//     image: "/img/banner-07.webp",
//     rating: 4.4,
//     reviews: 213,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 6,
//     name: "Rose Gold Elegance",
//     price: "$349.99",
//     originalPrice: "$499.99",
//     discount: "30% OFF",
//     image: "/img/banner-09.webp",
//     rating: 4.9,
//     reviews: 67,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 7,
//     name: "Chronograph Pro",
//     price: "$279.99",
//     originalPrice: "$399.99",
//     discount: "30% OFF",
//     image: "/img/banner10.webp",
//     rating: 4.6,
//     reviews: 142,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 8,
//     name: "Waterproof Diver",
//     price: "$189.99",
//     originalPrice: "$259.99",
//     discount: "27% OFF",
//     image: "/img/banner11.webp",
//     rating: 4.5,
//     reviews: 98,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 9,
//     name: "Limited Edition",
//     price: "$599.99",
//     originalPrice: "$799.99",
//     discount: "25% OFF",
//     image: "/img/banner12.webp",
//     rating: 4.8,
//     reviews: 54,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 10,
//     name: "Business Classic",
//     price: "$229.99",
//     originalPrice: "$329.99",
//     discount: "30% OFF",
//     image: "/img/banner13.webp",
//     rating: 4.4,
//     reviews: 176,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 11,
//     name: "Fitness Tracker",
//     price: "$79.99",
//     originalPrice: "$119.99",
//     discount: "33% OFF",
//     image: "/img/banner14.jpg",
//     rating: 4.2,
//     reviews: 321,
//     isNew: true,
//     isSale: false
//   },
//   {
//     id: 12,
//     name: "Vintage Collection",
//     price: "$399.99",
//     originalPrice: "$549.99",
//     discount: "27% OFF",
//     image: "/img/banner15.jpg",
//     rating: 4.7,
//     reviews: 87,
//     isNew: true,
//     isSale: false
//   }
// ];

// export default function WatchesCategory() {
//   const [hoveredId, setHoveredId] = useState<number | null>(null);

//   return (
//     <div className="watches-section">
//       {/* Header */}
//       <div className="section-header">
//         <div className="header-left">
//           <h2 className="section-title">WATCHES</h2>
//           <p className="section-subtitle">Discover our premium watch collection</p>
//         </div>
//         <div className="header-right">
//           <span className="product-count">12 PRODUCTS</span>
//           <div className="filter-options">
//             <button className="filter-btn active">All</button>
//             <button className="filter-btn">New Arrivals</button>
//             <button className="filter-btn">Best Sellers</button>
//             <button className="filter-btn">On Sale</button>
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="watches-grid">
//         {watches.map((watch) => (
//           <div 
//             key={watch.id}
//             className={`watch-card ${hoveredId === watch.id ? 'hovered' : ''}`}
//             onMouseEnter={() => setHoveredId(watch.id)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             {/* Badges */}
//             <div className="card-badges">
//               {watch.isNew && <span className="badge new">NEW</span>}
//               {watch.isSale && <span className="badge sale">NEW</span>}
//               {watch.discount && <span className="badge discount">{watch.discount}</span>}
//             </div>

//             {/* Image */}
//             <div className="image-container">
//               <Image
//                 src={watch.image}
//                 alt={watch.name}
//                 width={280}
//                 height={280}
//                 className="watch-image"
//               />
              
//               {/* Quick Actions on Hover */}
//               <div className="quick-actions">
//                 <button className="quick-btn wishlist">
//                   <span className="heart-icon">♥</span>
//                 </button>
//                 <button className="quick-btn view">
//                   <span className="eye-icon">👁</span>
//                 </button>
//                 <button className="quick-btn cart">
//                   <span className="cart-icon">🛒</span>
//                 </button>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="product-info">
//               <h3 className="product-name">{watch.name}</h3>
              
//               {/* Rating */}
//               <div className="rating">
//                 <div className="stars">
//                   {[...Array(5)].map((_, i) => (
//                     <span 
//                       key={i} 
//                       className={`star ${i < Math.floor(watch.rating) ? 'filled' : ''}`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <span className="rating-text">({watch.reviews})</span>
//               </div>

//               {/* Price */}
//               <div className="price-container">
//                 <span className="current-price">{watch.price}</span>
//                 {watch.originalPrice && (
//                   <span className="original-price">{watch.originalPrice}</span>
//                 )}
//               </div>

//               {/* Add to Cart Button */}
//               <button className="add-to-cart-btn">
//                 ADD TO CART
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       <div className="load-more-container">
//         <button className="load-more-btn">
//           LOAD MORE PRODUCTS
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


interface Watch {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  features: string[];
  isNew?: boolean;
  isSale?: boolean;
}

interface CartItem extends Watch {
  quantity: number;
}

const watches: Watch[] = [
  {
    id: 1,
    name: "Classic Leather",
    price: 249.99,
    originalPrice: 299.99,
    image: "/img/banner-02.webp",
    rating: 4.5,
    reviews: 128,
    badge: "NEW",
    features: ["Free Shipping", "1 Year Warranty"],
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    image: "/img/banner-03.webp",
    rating: 4.8,
    reviews: 256,
    badge: "NEW",
    features: ["Free Shipping", "18 Month Warranty"],
    isNew: true,
    isSale: false
  },
  {
    id: 3,
    name: "Luxury Gold",
    price: 899.99,
    image: "/img/banner-04.jpg",
    rating: 4.7,
    reviews: 89,
    badge: "NEW",
    features: ["Free Shipping", "2 Year Warranty"],
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "Sports Edition",
    price: 199.99,
    image: "/img/banner-05.webp",
    rating: 4.3,
    reviews: 187,
    badge: "NEW",
    features: ["Free Shipping", "1 Year Warranty"],
    isNew: true,
    isSale: false
  },
  {
    id: 5,
    name: "Minimalist Black",
    price: 179.99,
    originalPrice: 229.99,
    image: "/img/banner-07.webp",
    rating: 4.4,
    reviews: 203,
    badge: "NEW",
    features: ["Free Shipping", "1 Year Warranty"],
    isNew: true,
    isSale: true
  },
  {
    id: 6,
    name: "Rose Gold Elegance",
    price: 459.99,
    originalPrice: 599.99,
    image: "/img/banner-09.webp",
    rating: 4.9,
    reviews: 312,
    badge: "NEW",
    features: ["Free Shipping", "1 Year Warranty"],
    isNew: true,
    isSale: true
  },
  {
    id: 7,
    name: "Chronograph Pro",
    price: 329.99,
    originalPrice: 399.99,
    image: "/img/banner10.webp",
    rating: 4.6,
    reviews: 167,
    badge: "NEW",
    features: ["Free Shipping", "1 Year Warranty"],
    isNew: true,
    isSale: true
  },
  {
    id: 8,
    name: "Waterproof Diver",
    price: 279.99,
    originalPrice: 349.99,
    image: "/img/banner11.webp",
    rating: 4.5,
    reviews: 234,
    badge: "NEW",
    features: ["Free Shipping", "2 Year Warranty"],
    isNew: true,
    isSale: true
  }
];

type FilterType = "all" | "new" | "sale" | "best";

export default function WatchesCategory() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Watch | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [showQuickView, setShowQuickView] = useState<Watch | null>(null);
  const [productQuantities, setProductQuantities] = useState<{[key: number]: number}>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize all quantities to 1
  useEffect(() => {
    const initialQuantities: {[key: number]: number} = {};
    watches.forEach(watch => {
      initialQuantities[watch.id] = 1;
    });
    setProductQuantities(initialQuantities);
  }, []);

  // Filter watches
  const filteredWatches = watches.filter((watch) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "new") return watch.isNew;
    if (activeFilter === "sale") return watch.isSale;
    if (activeFilter === "best") return watch.rating >= 4.6;
    return true;
  });

  const calculateDiscount = (price: number, originalPrice: number): number => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  // Calculate total cart items
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalCartPrice = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );

  // Event Handlers
  const handleProductClick = (watch: Watch) => {
    console.log("Product clicked:", watch.name);
    setSelectedProduct(watch);
    setIsModalOpen(true);
  };

  const handleAddToCart = (watch: Watch, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Adding to cart:", watch.name);
    
    const quantity = productQuantities[watch.id] || 1;
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === watch.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === watch.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...watch, quantity }];
      }
    });

    // Show success message
    alert(`✓ Added ${quantity} ${watch.name} to cart! Total: $${(watch.price * quantity).toFixed(2)}`);
  };

  const handleUpdateQuantity = (watchId: number, change: number) => {
    setProductQuantities(prev => {
      const currentQty = prev[watchId] || 1;
      const newQty = Math.max(1, currentQty + change);
      return { ...prev, [watchId]: newQty };
    });
  };

  const handleRemoveFromCart = (watchId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== watchId));
  };

  const handleUpdateCartQuantity = (watchId: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === watchId) {
          const newQty = Math.max(0, item.quantity + change);
          if (newQty === 0) {
            return null;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const handleAddToWishlist = (watchId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Wishlist toggle:", watchId);
    if (wishlistItems.includes(watchId)) {
      setWishlistItems(prev => prev.filter(id => id !== watchId));
      alert("Removed from wishlist");
    } else {
      setWishlistItems(prev => [...prev, watchId]);
      alert("Added to wishlist!");
    }
  };

  const handleQuickView = (watch: Watch, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Quick view:", watch.name);
    setShowQuickView(watch);
  };

  const handleFilterClick = (filter: FilterType) => {
    console.log("Filter changed to:", filter);
    setActiveFilter(filter);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add some items first.");
      return;
    }
    alert(`Checkout successful! \nTotal Amount: $${totalCartPrice.toFixed(2)} \nItems: ${totalCartItems}`);
    setCartItems([]);
  };

  // Close modal when clicking outside
  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSelectedProduct(null);
      setShowQuickView(null);
    }
  };

  return (
    <div className="watches-category-container">
      {/* Cart Summary Bar */}
      <div className="cart-summary-bar">
        <div className="cart-info">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalCartItems} items</span>
          <span className="cart-total">Total: ${totalCartPrice.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button 
            className="view-cart-btn"
            onClick={() => {
              if (cartItems.length === 0) {
                alert("Your cart is empty!");
              } else {
                alert(`Cart Details:\n${cartItems.map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTotal: $${totalCartPrice.toFixed(2)}`);
              }
            }}
          >
            View Cart
          </button>
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Checkout →
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content quick-view-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal" 
              onClick={() => setShowQuickView(null)}
            >
              ✕
            </button>
            <h2>{showQuickView.name}</h2>
            <div className="modal-image">
              {/* Fallback image if Next.js Image doesn't work */}
              <img 
                src={showQuickView.image} 
                alt={showQuickView.name}
                className="product-image-large"
              />
            </div>
            <div className="modal-details">
              <div className="price-row">
                <span className="current-price">${showQuickView.price.toFixed(2)}</span>
                {showQuickView.originalPrice && (
                  <>
                    <span className="original-price">${showQuickView.originalPrice.toFixed(2)}</span>
                    <span className="discount-badge">
                      -{calculateDiscount(showQuickView.price, showQuickView.originalPrice)}%
                    </span>
                  </>
                )}
              </div>
              <div className="rating-row">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(showQuickView.rating) ? 'filled' : ''}>
                      ★
                    </span>
                  ))}
                </div>
                <span>({showQuickView.reviews} reviews)</span>
              </div>
              <div className="features-list">
                {showQuickView.features.map((feature, index) => (
                  <div key={index} className="feature-item">✓ {feature}</div>
                ))}
              </div>
              <button 
                className="add-to-cart-btn-modal"
                onClick={(e) => {
                  handleAddToCart(showQuickView, e);
                  setShowQuickView(null);
                }}
              >
                ADD TO CART - ${showQuickView.price.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content product-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal" 
              onClick={() => {
                setIsModalOpen(false);
                setSelectedProduct(null);
              }}
            >
              ✕
            </button>
            <div className="modal-body">
              <div className="modal-image-section">
                {/* Using regular img tag for better compatibility */}
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="modal-product-image"
                />
              </div>
              <div className="modal-info-section">
                <h2>{selectedProduct.name}</h2>
                
                <div className="price-container">
                  <span className="current-price-large">${selectedProduct.price.toFixed(2)}</span>
                  {selectedProduct.originalPrice && (
                    <div className="original-price-container">
                      <span className="original-price-text">${selectedProduct.originalPrice.toFixed(2)}</span>
                      <span className="discount-percent">
                        Save {calculateDiscount(selectedProduct.price, selectedProduct.originalPrice)}%
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="rating-container">
                  <div className="stars-large">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'filled' : ''}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">{selectedProduct.rating.toFixed(1)} ({selectedProduct.reviews} reviews)</span>
                </div>
                
                <div className="features-container">
                  <h4>Features:</h4>
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="feature-item">• {feature}</div>
                  ))}
                </div>
                
                {/* Quantity Selector */}
                <div className="quantity-selector-modal">
                  <span>Quantity:</span>
                  <div className="qty-controls">
                    <button 
                      className="qty-btn minus"
                      onClick={() => handleUpdateQuantity(selectedProduct.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-value">{productQuantities[selectedProduct.id] || 1}</span>
                    <button 
                      className="qty-btn plus"
                      onClick={() => handleUpdateQuantity(selectedProduct.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button 
                    className="buy-now-btn"
                    onClick={(e) => {
                      handleAddToCart(selectedProduct, e);
                      setIsModalOpen(false);
                    }}
                  >
                    ADD TO CART - ${(selectedProduct.price * (productQuantities[selectedProduct.id] || 1)).toFixed(2)}
                  </button>
                  <button 
                    className="wishlist-btn-modal"
                    onClick={() => handleAddToWishlist(selectedProduct.id, {} as React.MouseEvent)}
                  >
                    {wishlistItems.includes(selectedProduct.id) ? "❤️ REMOVE FROM WISHLIST" : "❤️ ADD TO WISHLIST"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="watches-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">WATCHES COLLECTION</h2>
            <p className="section-subtitle">Click on any watch to view details | Adjust quantity before adding to cart</p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {[
              { key: "all", label: "All Watches" },
              { key: "new", label: "New Arrivals" },
              { key: "best", label: "Best Sellers" },
              { key: "sale", label: "On Sale" }
            ].map((filter) => (
              <button 
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                onClick={() => handleFilterClick(filter.key as FilterType)}
              >
                {filter.label}
                <span className="filter-count">
                  {filter.key === "all" ? watches.length :
                   filter.key === "new" ? watches.filter(w => w.isNew).length :
                   filter.key === "sale" ? watches.filter(w => w.isSale).length :
                   watches.filter(w => w.rating >= 4.6).length}
                </span>
              </button>
            ))}
          </div>

          {/* Watches Grid */}
          <div className="watches-grid">
            {filteredWatches.map((watch) => {
              const quantity = productQuantities[watch.id] || 1;
              const inCart = cartItems.find(item => item.id === watch.id);
              const cartQuantity = inCart?.quantity || 0;
              const isInWishlist = wishlistItems.includes(watch.id);

              return (
                <div 
                  key={watch.id} 
                  className="watch-card"
                  onMouseEnter={() => setHoveredProduct(watch.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => handleProductClick(watch)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleProductClick(watch)}
                >
                  <div className="image-container">
                    {/* Using regular img tag for better visibility */}
                    <img 
                      src={watch.image} 
                      alt={watch.name}
                      className="watch-image"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/280x280?text=Watch+Image";
                      }}
                    />
                    
                    {/* Badges */}
                    <div className="badges">
                      <span className={`badge ${watch.badge.toLowerCase().replace(' ', '-')}`}>
                        {watch.badge}
                      </span>
                      {watch.originalPrice && watch.isSale && (
                        <span className="badge discount">
                          -{calculateDiscount(watch.price, watch.originalPrice)}%
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className={`quick-actions ${hoveredProduct === watch.id ? 'visible' : ''}`}>
                      <button 
                        className={`action-btn wishlist ${isInWishlist ? 'active' : ''}`}
                        title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                        onClick={(e) => handleAddToWishlist(watch.id, e)}
                      >
                        <span className="icon">
                          {isInWishlist ? "❤️" : "🤍"}
                        </span>
                      </button>
                      <button 
                        className="action-btn quick-view"
                        title="Quick View"
                        onClick={(e) => handleQuickView(watch, e)}
                      >
                        <span className="icon">👁️</span>
                      </button>
                    </div>

                    {/* Quantity Selector */}
                    <div className={`quantity-selector-card ${hoveredProduct === watch.id ? 'visible' : ''}`}>
                      <button 
                        className="qty-btn minus"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateQuantity(watch.id, -1);
                        }}
                      >
                        -
                      </button>
                      <span className="qty-value">{quantity}</span>
                      <button 
                        className="qty-btn plus"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateQuantity(watch.id, 1);
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                      className={`add-to-cart-btn-card ${hoveredProduct === watch.id ? 'visible' : ''} ${inCart ? 'in-cart' : ''}`}
                      onClick={(e) => handleAddToCart(watch, e)}
                    >
                      {inCart ? `✓ ${cartQuantity} IN CART` : "ADD TO CART"}
                    </button>
                  </div>

                  <div className="watch-info">
                    <h3 className="watch-name">{watch.name}</h3>
                    
                    <div className="price-section">
                      <span className="current-price">${watch.price.toFixed(2)}</span>
                      {watch.originalPrice && (
                        <>
                          <span className="original-price">${watch.originalPrice.toFixed(2)}</span>
                          <span className="discount-tag">
                            Save {calculateDiscount(watch.price, watch.originalPrice)}%
                          </span>
                        </>
                      )}
                    </div>

                    <div className="rating-section">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`star ${i < Math.floor(watch.rating) ? 'filled' : ''}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="rating-details">
                        <span className="rating-value">{watch.rating.toFixed(1)}</span>
                        <span className="review-count">({watch.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="features">
                      {watch.features.map((feature, index) => (
                        <div key={index} className="feature-tag">
                          <span className="check">✓</span> {feature}
                        </div>
                      ))}
                    </div>

                    {/* Click Indicator */}
                    <div className="click-indicator">
                      <span className="click-text">Click to view details →</span>
                    </div>

                    {/* Cart Status */}
                    {cartQuantity > 0 && (
                      <div className="cart-status">
                        <span className="cart-qty">In cart: {cartQuantity}</span>
                        <button 
                          className="remove-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFromCart(watch.id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="cart-details">
              <h3>Your Shopping Cart ({totalCartItems} items)</h3>
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <span className="cart-item-name">{item.name}</span>
                    <div className="cart-item-qty">
                      <button 
                        className="qty-btn minus"
                        onClick={() => handleUpdateCartQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button 
                        className="qty-btn plus"
                        onClick={() => handleUpdateCartQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <div className="cart-total-row">
                  <span>Total Amount:</span>
                  <span className="total-price">${totalCartPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Stats Summary */}
          <div className="summary-bar">
            <div className="summary-item">
              <span className="summary-label">Cart Total:</span>
              <span className="summary-value">${totalCartPrice.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Items in Cart:</span>
              <span className="summary-value">{totalCartItems}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Wishlist Items:</span>
              <span className="summary-value">{wishlistItems.length}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}