import React from "react";
import Link from "next/link";
const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-menu-1">
                <Link href="#">
                    <a>대쉬보드</a>
                </Link>
                <Link href="#">
                    <a>이벤트 정보</a>
                </Link>
                <Link href="#">
                    <a>메일 폼</a>
                </Link>
                <Link href="#">
                    <a>참가자 / 스피커</a>
                </Link>
            </div>

            <hr></hr>

        </div>
    );

}

export default Nav;
