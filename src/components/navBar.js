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
        <li className="items">A propos de moi</li>
        <li className="items">Compétences</li>
        <li className="items">Portefolio</li>
        <li className="items">Me contacter</li>
      </ul>
    </div>
  );
};

export default NavBar;
