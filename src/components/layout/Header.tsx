"use client";

import Container from "@/elements/Container";
import UserMenu from "@/modules/Navbar/UserMenu";
import Search from "@/modules/Navbar/Search";
import Logo from "@/modules/Navbar/Logo";

const Header = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
