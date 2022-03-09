import { useState } from "react";
import { Link } from "react-router-dom";

const LinkCard = ({ link, linkText, blackImg, whiteImg }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link to={link}>
      <div
        className="link-card"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={isHover ? whiteImg : blackImg} alt="Link" />
        <h3>{linkText}</h3>
      </div>
    </Link>
  );
};

export default LinkCard;
