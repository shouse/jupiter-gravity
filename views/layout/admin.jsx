import React from 'react';

export default class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_exists: this.props.data.user != null || false
    };
  }

  render() {
    const loggedHeader = (
      <nav className="navbar navbar-expand navbar-dark bg-custom-primary static-top">
        <a className="navbar-brand mr-1" href="/gravity">
          <i className="fa fa-fw fa-globe" /> YourBrand
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-fw fa-user" /> My Account
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="alertsDropdown"
            >
              <a className="dropdown-item" href="/settings">
                <i className=" fa fa-fw fa-cog"> </i> Settings
              </a>
              {/* <a className="dropdown-item" href="#">
                <i className="fa fa-fw fa-support"> </i> Support
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-fw fa-bitcoin"> </i> Fund my App
              </a> */}
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fa fa-fw fa-sign-in" /> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );

    const unloggedHeader = (
      <nav className="navbar navbar-expand navbar-dark bg-custom-primary static-top">
        <div className="container-fluid">
          <a className="navbar-brand mr-1" href="/gravity">
            <img
              src="/img/logo.png"
              className="pb-1"
              alt="sigwo"
              height="32px"
            />{' '}
            Sigwo Technologies
          </a>

          <div className="d-block d-sm-none ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="d-none d-sm-block ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  <i className="fa fa-fw fa-user-plus" /> Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <i className="fa fa-fw fa-sign-in" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

    const loggedWrapper = (
      <div id="wrapper">
        <ul className="sidebar navbar-nav">
          <div className="card card-account bg-secondary d-none d-sm-block">
            <div className="card-body">
              <h5>Account ID</h5>
              <a href="#" className="small">
                {this.state.user_exists
                  ? this.props.data.user.record.account
                  : 'JUP XXXX-XXXX-XXXX-XXXXX'}
              </a>
            </div>
          </div>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fa fa-fw fa-dashboard" /> App Summary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/tables">
              <i className="fa fa-fw fa-edit" /> Tables
            </a>
          </li>
        </ul>
        <div id="content-wrapper">
          <div className="container-fluid">{this.props.children}</div>
        </div>
      </div>
    );

    const unloggedWrapper = (
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container" id="page-wrapper">
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );

    return (
      <html>
        <head>
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          <title>{this.props.data.name}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css"
            rel="stylesheet"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js" />
          <link
            href="/vendor/font-awesome/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            href="/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i"
            rel="stylesheet"
          />

          <link href="/css/sb-admin.css" rel="stylesheet" />
        </head>
        <body>
          <span id="toastrMessages" />
          <div
            id={this.props.data.dashboard === true ? 'logged-in' : 'logged-out'}
          >
            {this.props.data.dashboard === true ? loggedHeader : unloggedHeader}

            {this.props.data.dashboard === true
              ? loggedWrapper
              : unloggedWrapper}
          </div>

          <div
            className="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby=" "
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id=" ">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select"Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a className="btn btn-primary" href="/logout">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <script src="/vendor/jquery/jquery.min.js" />
          <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />

          {/*
            <script src="/vendor/chart.js/Chart.min.js" />
            I replaced this with react-chartsjs
            https://github.com/reactjs/react-chartjs

          */}

          <script src="/js/sb-admin.min.js" />

          <script
            src="/js/bundle.js"
            data-props={JSON.stringify(this.props.data)}
            id="props"
          />
        </body>
      </html>
    );
  }
}
