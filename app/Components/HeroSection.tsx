// app/components/HeroSection.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
// import "./HeroSection.css";

const slides = [
  { 
    id: 1,
    title: "NEW ARRIVALS", 
    subtitle: "WOMEN COLLECTION 2018",
    button: "SHOP NOW",
    bgColor: "#e795a1ff",
    link: "/collections/women", // Added link
  },
  { 
    id: 2,
    title: "TRENDING NOW", 
    subtitle: "MEN FASHION 2024",
    button: "SHOP NOW",
    bgColor: "#a1b1ddff",
    link: "/collections/men-2024", // Added link
  },
  { 
    id: 3,
    title: "SUMMER SALE", 
    subtitle: "UP TO 50% OFF",
    button: "SHOP NOW",
    bgColor: "#7fdfc5ff",
    link: "/sale/summer", // Added link
  },
];

export default function HeroSection() {
  const router = useRouter();

  const handleButtonClick = (link: string, slideId: number) => {
    console.log(`Slide ${slideId} button clicked! Redirecting to: ${link}`);
    // You can add analytics/tracking here
    router.push(link);
  };

  const handleButtonClickNewTab = (link: string, slideId: number) => {
    console.log(`Slide ${slideId} button clicked! Opening in new tab: ${link}`);
    // Opens in new tab
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="hero-section">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        speed={800}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide"
              style={{ backgroundColor: slide.bgColor }}
            >
              {/* CENTER CONTENT */}
              <div className="center-content">
                
                {/* Subtitle with line - Top */}
                <div className="subtitle-with-line">
                  <div className="line-left"></div>
                  <h3 className="subtitle">{slide.subtitle}</h3>
                  <div className="line-right"></div>
                </div>
                
                {/* Main Title - Big and Bold */}
                <h1 className="main-title">{slide.title}</h1>
                
                {/* Shop Now Button - NOW CLICKABLE */}
                <button 
                  className="center-button"
                  onClick={() => handleButtonClick(slide.link, slide.id)}
                  // OR for new tab: onClick={() => handleButtonClickNewTab(slide.link, slide.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                  }}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span className="button-text">{slide.button}</span>
                  <span className="arrow">→</span>
                  
                  {/* Ripple effect on click */}
                  <style jsx>{`
                    .center-button:active::after {
                      content: '';
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      top: 0;
                      left: 0;
                      background: rgba(255, 255, 255, 0.3);
                      animation: ripple 0.6s linear;
                      border-radius: inherit;
                    }
                    
                    @keyframes ripple {
                      from { transform: scale(0); opacity: 1; }
                      to { transform: scale(4); opacity: 0; }
                    }
                  `}</style>
                </button>
                
              </div>
              
              {/* Decorative Circles */}
              <div className="decorative-circle circle-1"></div>
              <div className="decorative-circle circle-2"></div>
              <div className="decorative-circle circle-3"></div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Navigation Arrows */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        
        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}