import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            console.log('chatra.js');
            (function (d, w, c) {
              w.ChatraID = 'yFDDW9QryEEQEEE4b';
              var s = d.createElement('script');
              w[c] = w[c] || function () {
                (w[c].q = w[c].q || []).push(arguments);
              };
              s.async = true;
              s.src = 'https://call.chatra.io/chatra.js';
              if (d.head) d.head.appendChild(s);
            })(document, window, 'Chatra');
        `,
          }}
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
