import * as React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

// import './font-circe.css';
import './animations.css';
import './app.scss';

export default class extends React.PureComponent<{ pageTitle: string }> {
  public render() {
    return (
      <div>
        <Helmet title="Studio 5ml - UI/UX Designer">
          {/* --SEO-- */}
          <meta
            name="description"
            content="i help my clients to build beautiful design on website or apps. my capabilities range from animation to web design, and follow a conversion-focused a design approach.​"
          />
          <meta name="keywords" content="UIUX, designer, iOS, wechat" />
          <meta name="author" content="qoli wong" />

          {/* FACEBOOK */}
          <meta property="og:title" content="Studio 5ml - UI/UX Designer - qoli wong" />
          <meta
            property="og:description"
            content="i help my clients to build beautiful design on website or apps. my capabilities range from animation to web design, and follow a conversion-focused a design approach."
          />
          <meta property="og:image" content="https://www.5mlstudio.com/thumbnail.jpg" />
          <meta property="og:url" content="https://www.5mlstudio.com"></meta>
          <meta property="og:site_name" content="Studio 5ml"></meta>

          {/* Twitter */}
          <meta name="twitter:title" content="Studio 5ml - UI/UX Designer - qoli wong " />
          <meta
            name="twitter:description"
            content="i help my clients to build beautiful design on website or apps. my capabilities range from animation to web design, and follow a conversion-focused a design approach."
          />
          <meta name="twitter:image" content=" https://www.5mlstudio.com/thumbnail.jpg" />
          <meta name="twitter:card" content="summary_large_image"></meta>

          {/* --SEO-- */}
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
