// app/components/FeaturedProductsSlider.tsx
"use client";

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ALL 8 Products Data
const allProducts = [
  {
    id: 1,
    name: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20.00,
    originalPrice: 29.99,
    discount: 33,
    image: "/img/pic1.webp",
    isNew: true,
    rating: 4.5,
    badgeText: "NEW",
    productCode: "BOX1",
    link: "/products/boxy7-t-shirt",
  },
  {
    id: 2,
    name: "Boxy6 T-Shirt with Roll Sleeve",
    price: 20.00,
    originalPrice: 24.99,
    discount: 20,
    image: "/img/pic2.webp",
    isNew: false,
    rating: 4.0,
    badgeText: "",
    productCode: "BOX2",
    link: "/products/boxy6-t-shirt",
  },
  {
    id: 3,
    name: "Boxy5 T-Shirt with Roll Sleeve",
    price: 20.00,
    originalPrice: 25.50,
    discount: 22,
    image: "/img/pic3.webp",
    isNew: true,
    rating: 4.8,
    badgeText: "NEW",
    productCode: "BOX3",
    link: "/products/boxy5-t-shirt",
  },
  {
    id: 4,
    name: "Boxy4 T-Shirt with Roll Sleeve",
    price: 20.00,
    originalPrice: 27.99,
    discount: 29,
    image: "/img/pic4.webp",
    isNew: false,
    rating: 4.3,
    badgeText: "",
    productCode: "BOX4",
    link: "/products/boxy4-t-shirt",
  },
  {
    id: 5,
    name: "Boxy3 T-Shirt with Roll Sleeve",
    price: 22.00,
    originalPrice: 30.00,
    discount: 27,
    image: "/img/pic5.webp",
    isNew: true,
    rating: 4.6,
    badgeText: "NEW",
    productCode: "BOX5",
    link: "/products/boxy3-t-shirt",
  },
  {
    id: 6,
    name: "Boxy2 T-Shirt with Roll Sleeve",
    price: 19.99,
    originalPrice: 26.50,
    discount: 25,
    image: "/img/pic6.webp",
    isNew: false,
    rating: 4.2,
    badgeText: "",
    productCode: "BOX6",
    link: "/products/boxy2-t-shirt",
  },
  {
    id: 7,
    name: "Boxy1 T-Shirt with Roll Sleeve",
    price: 21.50,
    originalPrice: 28.00,
    discount: 23,
    image: "/img/pic7.webp",
    isNew: true,
    rating: 4.7,
    badgeText: "NEW",
    productCode: "BOX7",
    link: "/products/boxy1-t-shirt",
  },
  {
    id: 8,
    name: "Boxy8 T-Shirt with Roll Sleeve",
    price: 18.99,
    originalPrice: 23.99,
    discount: 21,
    image: "/img/pic8.webp",
    isNew: false,
    rating: 4.1,
    badgeText: "",
    productCode: "BOX8",
    link: "/products/boxy8-t-shirt",
  },
];

export default function FeaturedProductsSlider() {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Product ${productId} added to cart!`);
  };

  const handleQuickView = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Quick view for product ${productId}`);
  };

  const handleProductClick = (link: string) => {
    router.push(link);
  };

  const handleViewAll = () => {
    router.push('/products/all');
  };

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveSlide(index);
    }
  };

  return (
    <div className="featured-products-section">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">FEATURED PRODUCTS</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">8 Latest Trending Products</p>
      </div>

      {/* Swiper Carousel */}
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="products-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
        >
          {/* Slide 1 - First 4 products */}
          <SwiperSlide>
            <div className="products-grid">
              {allProducts.slice(0, 4).map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  handleQuickView={handleQuickView}
                  handleProductClick={handleProductClick}
                />
              ))}
            </div>
          </SwiperSlide>

          {/* Slide 2 - Next 4 products */}
          <SwiperSlide>
            <div className="products-grid">
              {allProducts.slice(4, 8).map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  handleQuickView={handleQuickView}
                  handleProductClick={handleProductClick}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation */}
        <div className="custom-navigation">
          <button className="custom-prev">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          {/* Custom Dots */}
          <div className="custom-pagination">
            {[0, 1].map((index) => (
              <button
                key={index}
                className={`custom-dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              >
                <span className="dot-inner"></span>
              </button>
            ))}
          </div>
          
          <button className="custom-next">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* View All Button */}
      <div className="view-all-container">
        <button className="view-all-btn" onClick={handleViewAll}>
          VIEW ALL PRODUCTS
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Product Card Component
const ProductCard = ({ 
  product, 
  handleAddToCart,
  handleQuickView,
  handleProductClick
}: any) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="product-card" onClick={() => handleProductClick(product.link)}>
      {/* Image Container */}
      <div className="image-container">
        {/* Badges */}
        <div className="badges-container">
          {product.isNew && <span className="badge new">NEW</span>}
          {product.discount > 0 && (
            <span className="badge discount">-{product.discount}%</span>
          )}
          <span className="badge code">{product.productCode}</span>
        </div>
        
        {/* Product Image */}
        <div className="image-wrapper">
          {imgError ? (
            <div className="image-fallback">
              <div className="fallback-text">{product.productCode}</div>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          )}
          
          {/* Hover Overlay */}
          <div className="hover-overlay">
            <button 
              className="action-btn cart-btn"
              onClick={(e) => handleAddToCart(product.id, e)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              Add to Cart
            </button>
            <button 
              className="action-btn view-btn"
              onClick={(e) => handleQuickView(product.id, e)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              Quick View
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        {/* Rating */}
        <div className="rating-container">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span 
                key={index} 
                className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="rating-value">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="price-container">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};