import * as React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/layout';

export default class index extends React.Component<Layout> {
  public render() {
    return (
      <Layout pageTitle="">
        <div>
          <div className="mainScreen">
            <p id="mainText">
              i help my clients to build beautiful design on <b>website</b> or <b>apps</b>. my
              capabilities range from animation to web design, and follow a{' '}
              <b>conversion-focused</b> a design approach.​
            </p>
            <div className="mainAction">
              <Link to="/list/">my work</Link>
            </div>
          </div>
          <div className="closetoButtom">
            <i className="fal fa-mouse-alt" />
          </div>
          <div className="Service">
            <div className="inside">
              <div className="grid grid-flow-row md:grid-flow-col xl:grid-flow-col">
                <div className="service-item">
                  <img
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    src="img/service-01.png"
                    srcSet="img/service-01@2x.png 2x,img/service-01@3x.png 3x"
                    className="01 UI/UX Design"
                  />
                </div>
                <div className="service-item delayShow" data-delay={2}>
                  <img
                    src="img/service-02.png"
                    srcSet="img/service-02@2x.png 2x,img/service-02@3x.png 3x"
                    className="02 typography"
                  />
                </div>
                <div className="service-item delayShow" data-delay={3}>
                  <img
                    src="img/service-03.png"
                    srcSet="img/service-03@2x.png 2x,img/service-03@3x.png 3x"
                    className="03 branding"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Skill">
            <dl>
              <dt className="delayShow" data-delay={4}>
                interaction
              </dt>
              <dd className="delayShow" data-delay={5}>
                user research / wire framing / prototyping / user testing
              </dd>
              <dt className="delayShow" data-delay={6}>
                design
              </dt>
              <dd className="delayShow" data-delay={7}>
                adobe suite / sketch / zeplin / lanhuapp
              </dd>
              <dt className="delayShow" data-delay={8}>
                coding
              </dt>
              <dd className="delayShow" data-delay={9}>
                node.js / vue / react / php / swift / go
              </dd>
            </dl>
          </div>
        </div>
      </Layout>
    );
  }
}
