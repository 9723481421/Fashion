import React from 'react';
// import './BlogPage.css';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Black Friday Guide: Best Sales & Discount Codes",
      author: "fashe-theme Admin",
      date: "Dec 28,2017",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
       image: "/img/blog1.webp",
    },
    {
      id: 2,
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      author: "fashe-theme Admin",
      date: "Dec 28,2017",
      excerpt: "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...",
       image: "/img/blog2.webp",
    },
    {
      id: 3,
      title: "New York SS 2018 Street Style: By Annina Mislin",
      author: "fashe-theme Admin",
      date: "Dec 28,2017",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
       image: "/img/blog3.jpg",
    }
  ];

  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <h1 className="blog-title">OUR BLOG</h1>
        <div className="header-divider"></div>
      </header>

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            {/* Blog Image */}
            <div className="blog-image">
              <img 
                src={post.image} 
                alt={post.title}
                className="post-image"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
              <h2 className="post-title">{post.title}</h2>
              
              {/* Post Meta */}
              <div className="post-meta">
                <div className="meta-item">
                  <User size={14} className="meta-icon" />
                  <span className="meta-text">by {post.author}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={14} className="meta-icon" />
                  <span className="meta-text">on {post.date}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="post-excerpt">
                {post.excerpt}
              </p>

              {/* Read More Button */}
              <button className="read-more-btn">
                Read More
                <ArrowRight size={16} className="btn-icon" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="blog-pagination">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <span className="pagination-dots">...</span>
        <button className="pagination-btn">10</button>
        <button className="pagination-next">
          Next
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3 className="newsletter-title">Subscribe to our Newsletter</h3>
        <p className="newsletter-text">Get the latest updates on new products and upcoming sales</p>
        <div className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="newsletter-input"
          />
          <button className="newsletter-btn">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;