import { useState } from "react";
import classNames from "classnames";
import { MenuOutlined } from "@ant-design/icons";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const classnames = classNames("container-nav", {
    "container-nav--open": open,
  });
  return (
    <div className={classnames}>
      <button className="anticon-btn" onClick={() => setOpen(!open)}>
        <MenuOutlined />
      </button>
      <ul className="list-nav">
        <li className="items">
          <a href="#aboutMe">A propos de moi</a>
        </li>
        <li className="items">
          <a href="#skills">Compétences</a>
        </li>
        <li className="items">
          <a href="#projects">Portefolio</a>
        </li>
        <li className="items">
          <a href="#contact">Contacter-moi</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
