import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AdminNav.css";

export default function AdminNav({ setSelectedComponent }) {
  return (
    <>
      <Nav className="navbar navbar-light bg-faded navbar-static-top dash-navbar-top nb-visible admin-nav">
        <div className="dash-navbar-left nb-visible">
          <p className="nb-nav-title">Admin</p>
          <Nav
            className="nb-nav"
            onSelect={(selectedKey) => setSelectedComponent(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link eventKey="dashboard">
                <span className="nb-link-text">All Posts</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="create">
                <span className="nb-link-text">Create New</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Nav>
    </>
  );
}
