import Image from "next/image";
// import "./news.css";

export default function NewsPage() {
  return (
    <>
      {/* Banner */}
      <section className="news-banner">
        <h1>NEWS</h1>
      </section>

      {/* Content */}
      <section className="news-container">

        {/* LEFT CONTENT */}
        <div className="news-main">

          {/* BLOG IMAGE */}
          <div className="blog-img-box">
            <Image
              src="/img/vac1.webp"
              alt="Blog"
              fill
              className="blog-img"
            />
            <span className="date">28 DEC, 2017</span>
          </div>

          {/* BLOG CONTENT */}
          <h2 className="blog-title">
            Black Friday Guide: Best Sales & Discount Codes
          </h2>

          <p className="blog-meta">
            by fashe-theme Admin | crafts, street style | 1 Comments
          </p>

          <p className="blog-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet
            urna sed erat placerat...
          </p>

          <a href="#" className="read-more">
            Continue Reading →
          </a>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="news-sidebar">
          <div className="search-box">
            <input type="text" placeholder="Search all articles..." />
          </div>

          <h3>Featured products</h3>

          <div className="product">
            <Image src="/img/pic1.webp" alt="" width={70} height={90} />
            <div>
              <p>Boxy6 T-Shirt with Roll Sleeve</p>
              <span>$20.00</span>
            </div>
          </div>

          <div className="product">
            <Image src="/img/banner11.webp" alt="" width={70} height={90} />
            <div>
              <p>Boxy5 T-Shirt with Roll Sleeve</p>
              <span>$20.00</span>
            </div>
          </div>

          <div className="product">
            <Image src="/img/banner12.webp" alt="" width={70} height={90} />
            <div>
              <p>Boxy4 T-Shirt with Roll Sleeve</p>
              <span>$20.00</span>
            </div>
          </div>

          <div className="product">
            <Image src="/img/banner13.webp" alt="" width={70} height={90} />
            <div>
              <p>Boxy3 T-Shirt with Roll Sleeve</p>
              <span>$30.00</span>
            </div>
          </div>

          <div className="product">
            <Image src="/img/pic5.webp" alt="" width={70} height={90} />
            <div>
              <p>Boxy2 T-Shirt with Roll Sleeve</p>
              <span>$20.00</span>
            </div>
          </div>
        </aside>

      </section>
    </>
  );
}
