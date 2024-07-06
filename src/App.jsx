import { RiMenu4Line } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import jacket from "./assets/yellow.png";
import jacket2 from "./assets/purple.png";
import jacket3 from "./assets/green.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState(jacket);

  useEffect(() => {
    document.documentElement.style.setProperty('--image-url', `url(${image})`);
  }, [image]);

  const menuStyle = {
    backgroundColor: "#f5f5f5",
    color: "#111111",
    borderRadius: "50%",
    padding: "6px",
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div>
          <h1>Starlab</h1>
          <p>
            <RiMenu4Line style={menuStyle} />
            MENU
          </p>
        </div>
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>FAQ</li>
        </ul>
        <div>
          <span>
            <TbMessageCircle />
          </span>
          <span>
            <BsPerson />
          </span>
          <button>
            SHOP
            <p>
              <HiMiniArrowUpRight />
            </p>
          </button>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        id="main"
      >
        <div className="main-content">
          <h1>
            Winter 2024 <br /> <span>collection</span>
          </h1>
          <div className="part" id="part1"></div>
          <div className="part" id="part2"></div>
          <div className="part" id="part3"></div>
        </div>
        <div className="collection">
          <img
            src={jacket}
            alt="Yellow-Jacket"
            loading="lazy"
            onClick={() => setImage(jacket)}
          />
          <img
            src={jacket2}
            alt="Purple-Jacket"
            loading="lazy"
            onClick={() => setImage(jacket2)}
          />
          <img
            src={jacket3}
            alt="Green-Jacket"
            loading="lazy"
            onClick={() => setImage(jacket3)}
          />
        </div>
      </div>
      <div className="last-section">
        <ul>
          <li>Futuristic Design</li>
          <li>Premium Material</li>
          <li>Limited Edition</li>
        </ul>
        <div className="contact">
          <p>
            <TiSocialFacebook />
          </p>
          <p>
            <FaInstagram />
          </p>
          <p>
            <FaXTwitter />
          </p>
          <p>
            Explore the cutting edge <br />
            of fashion design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
