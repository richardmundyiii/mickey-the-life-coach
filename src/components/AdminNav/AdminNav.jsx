import { Container } from "react-bootstrap";

export default function AdminNav() {
  return (
    <Container>
      <nav className="navbar navbar-light bg-faded navbar-static-top dash-navbar-top nb-visible admin-nav">
        <button class="nb-btn-toggle">
          <span class="fa fa-bars"></span>
        </button>
      </nav>
      <div class="dash-navbar-left nb-visible">
        <p class="nb-nav-title">Admin</p>
        <ul class="nb-nav">
          <li>
            <a
              class="collapsed"
              data-toggle="collapse"
              href="#collapseStatistics"
              aria-expanded="false"
              aria-controls="collapseStatistics"
            >
              <span class="glyphicon glyphicon-stats nb-link-icon"></span>
              <span class="nb-link-text">All Posts</span>
              <span class="fa fa-angle-up nb-btn-sub-collapse"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-folder-open nb-link-icon"></span>
              <span class="nb-link-text">Create New</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="content-wrap nb-visible" data-effect="nb-push">
        <div class="container-fluid">
          <div class="row">
            <div class="dummy-div"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
