import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>

      
        <div className="nav-bar-actions">
          <div className="nav-bar-total">
            <span className="nav-bar-total-quantity">2 Itens </span>
          <span className="nav-bar-total-price">R$ 210.00</span></div>
         
          <button className="clean-btn">Limpar</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
