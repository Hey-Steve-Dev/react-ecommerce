import React from "react";
import SearchForm from "./SearchForm";
import CompanyIcon from "./CompanyIcon";
import CompanyTitle from "./CompanyTitle";
import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";

const Nav = ({ cartItems, search, setSearch }) => {
  return (
    <>
      <nav className="Nav fadeIn">
        <div className="companyDetails">
          <CompanyIcon />
          <CompanyTitle />
        </div>

        <HamburgerMenu />
        <DesktopMenu cartItems={cartItems} />

        <SearchForm search={search} setSearch={setSearch} />
      </nav>
    </>
  );
};

export default Nav;
