"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavLink from "@/utils/components/NavLink";
import { usePathname } from "next/navigation";

export default function Header({ color }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Remove all attributes from the <body> tag
    const body = document.body;
    const attributes = body.getAttributeNames();

    attributes.forEach((attr) => {
      body.removeAttribute(attr);
    });
  }, [pathname]);

  return (
    <header 
      className={`fixed-top py-3 small ${scrolled ? "bg-white shadow text-dark" : `bg-transparent text-${color}`}`} 
      style={{ transition: "background-color 0.3s ease, box-shadow 0.3s ease" }}
    >
      <div className="container-fixed d-flex align-items-center align-items-lg-end justify-content-lg-between gap-4">
        <div className="logo">
          <Link style={{ color: "currentColor" }} href="/">
            <Logo />
          </Link>
        </div>
        <nav
          className="navbar navbar-expand-lg p-0 ms-auto m-lg-0"
          aria-label="Offcanvas navbar large"
        >
          <button
            className={`navbar-toggler ${color === "light" && !scrolled ? "bg-light" : ""}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline gap-3 align-items-start">
                <li className="nav-item">
                  <NavLink href="/sok-finansiering">Sök finansiering</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="/investera">Investera</NavLink>
                </li>
              </ul>
              <div className="d-flex d-md-none mt-2 gap-2">
                <Link href="#" className="btn btn-success d-flex align-items-center gap-2" data-bs-dismiss="offcanvas">
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                    </svg>
                    <small>Öppna konto</small>
                </Link>
                <Link href="#" className={`btn btn-outline-dark d-flex align-items-center gap-2`} data-bs-dismiss="offcanvas">
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                    </svg>
                    <small>Logga in</small>
                </Link>
              </div>
              <div className="d-flex d-sm-none gap-2 mt-3 align-self-center">
                <Link href="#" className={`text-uppercase text-dark`} data-bs-dismiss="offcanvas">Eng</Link>
                <Link href="#" className={`text-uppercase fw-bold text-dark`} data-bs-dismiss="offcanvas">Swe</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="buttons d-none d-sm-flex align-items-center gap-4">
            <div className="d-none d-md-flex gap-2">
                <Link href="#" className="btn btn-success d-flex align-items-center gap-2">
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                    </svg>
                    <small>Öppna konto</small>
                </Link>
                <Link href="#" className={`btn ${scrolled ? "btn-outline-dark" : `btn-outline-${color}`} d-flex align-items-center gap-2`}>
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                    </svg>
                    <small>Logga in</small>
                </Link>
            </div>
            <div className="d-flex gap-2">
                <Link href="#" className={`text-uppercase ${scrolled ? "text-dark" : `text-${color}`}`}>Eng</Link>
                <Link href="#" className={`text-uppercase fw-bold ${scrolled ? "text-dark" : `text-${color}`}`}>Swe</Link>
            </div>
        </div>
      </div>
    </header>
  );
}
