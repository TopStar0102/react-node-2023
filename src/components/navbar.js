import React, {useState} from "react";
import logo from '../images/logo.png'


export default function Navigation(props) {
    const links = [
        {
          id: 1,
          text: "Home",
          href: "#home_section"
        },
        {
          id: 2,
          text: "About",
          href: "#about_section"
        },
        {
          id: 3,
          text: "Careers",
          href: "#careers_section"
        },
        {
          id: 4,
          text: "Contact",
          href: "#contact_section"
        }
    ];
    const bars = [
      {
        id: 1,
        className: "bar1"
      },
      {
        id: 2,
        className: "bar2"
      },
      {
        id: 3,
        className: "bar3"
      }
    ]
    const menuIconAction = (e) => {
        e.target.closest('.menu_item_bars').classList.toggle('change');
        props.isOpened ? props.setIsOpened(false) : props.setIsOpened(true);
    }
    const [activeTagIndex, setActiveTagIndex] = useState(null);

    const handleTagClick = (index) => {
        const aTags = document.querySelectorAll('a.nav-item');
        aTags.forEach((tag, index) => {
            tag.classList.remove("active");
        });
        setActiveTagIndex(index)
    }
    const mNavBarAction = () => {
      props.setNavbarState(false);
    }
  return (
    <div className="navbar">
        <div className="logo_section">
            <img src={logo} alt="Log Image" />
        </div>
        <div>
            <div className="navigations">
            {links.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    className={`nav-item extra-light-font ${
                        activeTagIndex === link.id ? "active" : ""
                    }`}
                    onClick={() => handleTagClick(link.id)}
                >
                {link.text}
                <div className="border-item"></div>
                </a>
            ))}
            </div>
            {
              props.isNavbarState ?
              <div className="menu_item_bars" onClick={mNavBarAction}>
                <div className="bar bar1" style={{backgroundColor: props.isOpened ? 'black' : "white"}}></div>
                <div className="bar bar2" style={{backgroundColor: props.isOpened ? 'black' : "white"}}></div>
                <div className="bar bar3" style={{backgroundColor: props.isOpened ? 'black' : "white"}}></div>
              </div> :
              <div className="menu_item_bars" onClick={menuIconAction}>
                <div className="bar bar1" style={{backgroundColor: props.isOpened ? 'black' : "white"}}></div>
                <div className="bar bar2" style={{backgroundColor: props.isOpened ? 'black' : "white"}}></div>
                <div className="bar bar3" style={{backgroundColor: props.isOpened ? 'black' : "white"}}></div>
              </div>
            }
        </div>
    </div>
  );
}
