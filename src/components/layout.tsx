import * as React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

import './font-circe.css';
import './animations.css';
import './app.css';

export default class extends React.PureComponent<{ pageTitle: string }> {
  public render() {
    return (
      <div>
        <Helmet title="Studio 5ml - UI/UX Designer">
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link href="https://cdn.bootcss.com/tailwindcss/1.2.0/base.min.css" rel="stylesheet" />
          <link
            href="https://cdn.bootcss.com/tailwindcss/1.2.0/tailwind.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"
            integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH"
            crossorigin="anonymous"
          />
          {/* <link rel="stylesheet" href="css/font-circe.css" />
          <link rel="stylesheet" href="css/animations.css" />
          <link rel="stylesheet" href="css/app.css" /> */}
        </Helmet>
        {/* Navigation */}
        <div className="Navigation">
          <div className="left Logo">
            <Link to="/">
              Studio <span>5ml</span>
            </Link>
          </div>
          <div className="center">{this.props.pageTitle}</div>
          <div className="right">
            <a href="https://www.behance.net/qoli">
              <i className="fab fa-behance" />
            </a>
            <a href="http://dribbble.com/qoli">
              <i className="fab fa-dribbble" />
            </a>
            <a href="http://facebook.com/qoli.wong">
              <i className="fab fa-facebook" />
            </a>
          </div>
        </div>
        {/* MainBody */}
        <div className="container mx-auto">{this.props.children}</div>
        {/* Footer */}
        <div className="Footer">
          <div id="footerText">
            <h5>want to work with me?</h5>
            <p>drop us a line and we'll get back as soon as i can.</p>
            <p>
              <a className="mailtome button" href="mailto:llqoli@gmail.com">
                mail to me
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
