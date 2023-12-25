import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import WelcomeSection from "./home/WelcomeSection";
import FeaturedProducts from "./home/FeaturedProducts";
export default function Home() {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname === '/' ? <div>
          <Nav />
          <WelcomeSection/>
          <FeaturedProducts/>
        </div> : <></>
      }
      <Outlet />
    </div>
  )
}