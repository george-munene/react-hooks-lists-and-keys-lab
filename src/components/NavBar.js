import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const liComponenents = links.map(link => <a key = {link} href={link}>{link}</a> )
  return <nav>
   {liComponenents}
  
  </nav>;
}

export default NavBar;
