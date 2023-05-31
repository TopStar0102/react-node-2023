import React, {useState} from 'react';

import '../css/style.scss';

const MobileDashboard = (props) => {
    const links = [
        {
          id: 1,
          text: "Home",
        },
        {
          id: 2,
          text: "About",
        },
        {
          id: 3,
          text: "Careers",
        },
        {
          id: 4,
          text: "Contact",
        }
    ];
    const [clickedMenu, setClickedMenu] = useState('');

    const handleMenu = (event, name) => {
        event.preventDefault();
        setClickedMenu(name);
        props.setNavbarState(true)
    }
    return (
        <>
        <div className="mobile_container">
            <div className='mobile_content'>
                <div className='mobile_menu_items' style={{display: props.isNavbarState ? 'none' : 'flex'}}>
                {links.map((link) => (
                    <a
                        key={link.id}
                        href="!#"
                        className={`mobile_menu_item`}
                        onClick={(event) => handleMenu(event, link.text)}
                    >
                    {link.text}
                    <div className="border-item"></div>
                    </a>
                ))}
                </div>
                {
                    props.isNavbarState && clickedMenu === 'About' ?
                        <div className='mobile_section mobile_about_section'>
                            <p className='mobile_main_title mobile_about_title'>About us</p>
                            <p className='mobile_text mobile_about_text'>Our mission at thinkAble is to transform education through technology. We are dedicated to creating innovative, user friendly products and services that empower educators and learners worldwide. Our team of passionate professionals brings a unique perspective and skillset to the challenges of creating effective education technology solutions. We are committed to quality, innovation, and user centered design, and we believe that education is one of the most important investments we can make in our future. Together, we are on a journey to make that investment as effective and accessible as possible.</p>
                        </div>
                    : ''
                }
            </div>
        </div>
        </>
    )
}

export default MobileDashboard;
