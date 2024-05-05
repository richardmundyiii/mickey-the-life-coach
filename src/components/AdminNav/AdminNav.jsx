import { Nav } from "react-bootstrap";
import { FaClipboardList } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

import "./AdminNav.css";

export default function AdminNav({ setSelectedComponent }) {
  return (
    <>
      <Nav className="navbar navbar-light bg-faded navbar-static-top dash-navbar-top nb-visible admin-nav">
        <div className="dash-navbar-left nb-visible">
          <Nav.Item>
            <Nav.Link>
              <p className="nb-nav-title">Admin</p>
            </Nav.Link>
          </Nav.Item>
          <Nav
            className="nb-nav"
            onSelect={(selectedKey) => setSelectedComponent(selectedKey)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Nav.Item className="p-2">
              <Nav.Link eventKey="index">
                <FaClipboardList className="m-2" />
                <span className="nb-link-text">All Posts</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link eventKey="create">
                <IoIosCreate className="m-2" />
                <span className="nb-link-text">Create New</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">
                <IoSettings className="m-2" />
                <span className="nb-link-text">Settings</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Nav>
    </>
  );
}
