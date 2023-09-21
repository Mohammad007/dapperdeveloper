import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>IT Company</button>
                    <h1 className="white">Do Dapper.</h1>
                    <h1 className="white">Think Dapper!</h1>
                    <p className="gray">We built futuristic website and mobile application. That help your business to grow like a ROCKET.</p>
                    <a className="green" href="mailto:developerdapper@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/logo.png" width={463} height={513} alt="dapper developer"  /> 
            </div>
        </header>
    )
}