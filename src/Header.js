import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home">
            <p>
              <i class="fa-solid fa-address-card fa-fade"></i> <strong className="text-light">Contact App</strong>
            </p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
