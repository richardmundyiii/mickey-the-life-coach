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
              <span class="nb-link-text">Statistics</span>
              <span class="fa fa-angle-up nb-btn-sub-collapse"></span>
            </a>
            <ul class="nb-sub-one collapse" id="collapseStatistics">
              <li>
                <a href="#">
                  <span class="fa fa-clock-o nb-link-icon"></span>
                  <span class="nb-link-text">Daily</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-history nb-link-icon"></span>
                  <span class="nb-link-text">Annual</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="active">
            <a href="#">
              <span class="glyphicon glyphicon-folder-open nb-link-icon"></span>
              <span class="nb-link-text">Pages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-comment nb-link-icon"></span>
              <span class="nb-link-text">Comments</span>
              <span class="badge">4</span>
            </a>
          </li>
          <li>
            <a
              class="collapsed"
              data-toggle="collapse"
              href="#collapseLevelOne"
              aria-expanded="false"
              aria-controls="collapseLevelOne"
            >
              <span class="fa fa-sort-amount-desc nb-link-icon"></span>
              <span class="nb-link-text">Dropdown level 1</span>
              <span class="fa fa-angle-up nb-btn-sub-collapse"></span>
            </a>
            <ul class="nb-sub-one collapse" id="collapseLevelOne">
              <li>
                <a href="#">
                  <span class="fa fa-slack nb-link-icon"></span>
                  <span class="nb-link-text">Level 1</span>
                </a>
              </li>
              <li>
                <a
                  class="collapsed"
                  data-toggle="collapse"
                  href="#collapseLevelTwo"
                  aria-expanded="false"
                  aria-controls="collapseLevelTwo"
                >
                  <span class="fa fa-level-down nb-link-icon"></span>
                  <span class="nb-link-text">Dropdown level 2</span>
                  <span class="fa fa-angle-up nb-btn-sub-collapse"></span>
                </a>
                <ul class="nb-sub-two collapse" id="collapseLevelTwo">
                  <li>
                    <a href="#">
                      <span class="fa fa-wifi nb-link-icon"></span>
                      <span class="nb-link-text">Level 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-wifi nb-link-icon"></span>
                      <span class="nb-link-text">Level 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-wifi nb-link-icon"></span>
                      <span class="nb-link-text">Level 2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-slack nb-link-icon"></span>
                  <span class="nb-link-text">Level 1</span>
                </a>
              </li>
            </ul>
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