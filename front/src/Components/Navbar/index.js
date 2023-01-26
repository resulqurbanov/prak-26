import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <img
          src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
          alt=""
        />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Pages</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <button>Buy Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
