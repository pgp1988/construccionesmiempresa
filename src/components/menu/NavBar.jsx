import { useState } from "react";
import { data } from "../../data/data";
import { MenuButton } from "./MenuButton";
import { useLocation } from "react-router-dom";
import "../../styles.css";

export const NavBar = () => {

  const location = useLocation();
  const [menuItems, setMenuItems] = useState(data);

  const handleClick = (id) => {
    const updatedItems = menuItems.map((item) =>
      item.id === id
        ? { ...item, isActive: "true" }
        : { ...item, isActive: "false" }
    );
    setMenuItems(updatedItems);
  };

  return (
    <>
      <nav className="navBar">
        <input type="checkbox" id="sidebar-active"/>
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </label>
          <ul className="listaBotones">
            {menuItems.map(({ value, id, text }) => (
              <MenuButton
                key={id}
                text={text}
                value={value}
                className={`menubutton ${location.pathname === value ? "activa" : ""}`}
                onClick={() => handleClick(id)}
              ></MenuButton>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
