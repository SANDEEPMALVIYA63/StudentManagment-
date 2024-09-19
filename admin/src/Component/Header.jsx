import React from "react";
import "./Css/Header.css";
import Cookies from "universal-cookie";
import {  Image, Space, Typography } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
function Header() {
  const cookies = new Cookies();
  const user = cookies.get("user");

  const logout = () => {
    cookies.remove("user");
    window.location.href = "/home";
  };
      
  return (
    <>
      {user ? (
        
           <div className="HeaderDeasboard">  
         
            <Image width={40}  src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"></Image>
            <SideMenu/>
            <Typography.Title>Dashboard</Typography.Title>
            
            <div className="AdminDesboard1">
                  <Link className="text-black border-bottom:none" onClick={logout}>Logout</Link>
                </div>
           </div>
      ) : (
        <Navbar bg="primary" expand="md"  className="HeaderMenu">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="AdminDesboard1">
                  <Link className="text-black border-bottom:none" to="/home">
                    Home
                  </Link>
                  <Link className="text-black border-bottom:none" to="/Contacte">Contacte</Link>
                  <Link  className= "text-black border-bottom:none" to="/About">About</Link>
                  <Link className="text-black border-bottom:none" to="/login">Login</Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default Header;
