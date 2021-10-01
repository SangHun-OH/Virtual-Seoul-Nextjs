import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <div>VIRTUAL<br/> SEOUL</div>
            </div>
            <div className="header-title">
                EVENT NAME
            </div>
            <div className="header-menu">
                <Link href='#'><a>Login Name</a></Link>
                |
                <Link href='#'><a>Logout</a></Link>                
            </div>
                <div className="header-logout">
                LOG OUT
            </div>
        </div>
    );
}


export default Header;
