import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="foot1">
          <div className="review">
            <input type={"checkbox"}></input>
            <p>Review</p>
          </div>
        </div>

        <div className="foot2">
          <ul className={click ? "active" : "question-navigation nav-menu"}>
            <li>
              <p>Part 1:</p>
            </li>
            <li className="foot_item">
              <Link
                to="question_One"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>1</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Two"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>2</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Three"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>3</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Four"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>4</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Five"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>5</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Six"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
                className="active"
              >
                <button>6</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Seven"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>7</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Eight"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>8</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Nine"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>9</button>
              </Link>
            </li>
            <li>
              <Link
                to="question_Ten"
                onClick={closeMenu}
                duration={500}
                offset={-100}
                spy={true}
              >
                <button>10</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot3">
        <button>
          <span class="arrow-left"></span>
        </button>
        <button>
          <span class="arrow-right"></span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
