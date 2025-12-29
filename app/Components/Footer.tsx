import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* GET IN TOUCH */}
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St,
            Ahemdabad, NY 10018 or call us on (+91) 9723481481
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaGooglePlusG />
            <FaInstagram />
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="footer-col">
          <h4>CATEGORIES</h4>
          <ul>
            <li><Link href="/men">Men</Link></li>
            <li><Link href="/women">Women</Link></li>
            <li><Link href="/dresses">Dresses</Link></li>
            <li><Link href="/sunglasses">Sunglasses</Link></li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>LINKS</h4>
          <ul>
            <li><Link href="/User/Home">Home</Link></li>
            <li><Link href="/User/About">About </Link></li>
            <li><Link href="/User/Contact">Contact </Link></li>
            <li><Link href="/User/Shop">Shop</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li><Link href="/track-order">Track Order</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h4>NEWSLETTER</h4>
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div>

      </div>
    </footer>
  );
}
