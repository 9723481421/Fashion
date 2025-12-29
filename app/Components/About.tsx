import Image from "next/image";
// import "./about.css";

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="about-banner">
        <h1>ABOUT</h1>
      </section>

      {/* Content */}
      <section className="about-content">
        <div className="about-wrapper">
          
          {/* Left Image with Hover Container */}
          <div className="about-img-container">
            <div className="about-img">
              <Image
                src="/img/pic5.webp"
                alt="About"
                width={500}
                height={650}
                priority
                className="image-hover"
              />
            </div>
            {/* Hover Overlay */}
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-text">Our Journey</span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="about-text">
            <h2>Our story</h2>

            <p>
              Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
              Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
              dolor quis lorem accumsan, vitae molestie urna dapibus.
            </p>

            <p>
              Pellentesque porta est ac neque bibendum viverra. Vivamus
              lobortis magna ut interdum laoreet. Donec gravida lorem elit,
              quis condimentum ex semper sit amet.
            </p>

            <blockquote>
              "Creativity is just connecting things. When you ask creative
              people how they did something, they feel a little guilty because
              they didn't really do it, they just saw something. It seemed
              obvious to them after a while."
            </blockquote>
            <p className="quote-author">- Steve Jobs</p>
          </div>
        </div>
      </section>
    </>
  );
}