import * as React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

interface caseType {
  id: string;
  coverImage: string;
  backgroundColor: string;
  name: string;
  type: [string];
  role: [string];
  URL: string;
}

type CaseProps = {
  caseData: caseType;
  key: string;
};

const Case = ({ caseData, key }: CaseProps) => {
  console.log(caseData);

  const bgStyle = {
    backgroundColor: '#' + caseData.backgroundColor,
  };

  var buttonStyle = {
    backgroundColor: '#B1E8F4',
    boxShadow: '0 4px 12px 0 rgba(19, 168, 200, 0.32)',
  };

  var buttonText = 'view work';

  if (caseData.URL == null) {
    buttonText = 'coming soon';
    buttonStyle = {
      backgroundColor: '#333',
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
    };
  }
  return (
    <div>
      <div className="caseOne" style={bgStyle}>
        <h6>Case Study</h6>
        <div className="caseTitle viewOnDesktop">
          <h1>{caseData.name}</h1>
          <p>{caseData.type}</p>
        </div>
        <p className="caseDescription viewOnDesktop">{caseData.role}</p>
        <div className="caseImage">
          <img src={'/case/' + caseData.coverImage + '.png'} alt={caseData.coverImage} />
        </div>
        <a className="caseViewButton" href={caseData.URL} style={buttonStyle}>
          {buttonText} <i className="fad fa-long-arrow-right" />
        </a>

        {/* <Link to="/page/" className="caseViewButton" style={buttonStyle}>
          {buttonText} <i className="fad fa-long-arrow-right" />
        </Link> */}
      </div>
      <div className="caseMobileMeta viewOnMobie">
        <h1>{caseData.name}</h1>
        <p>{caseData.type}</p>
        <p className="caseDescription">{caseData.role}</p>
      </div>
    </div>
  );
};

const ListPage = () => {
  const data = useStaticQuery(graphql`
    query ListQuery {
      allCase {
        edges {
          node {
            id
            name
            role
            type
            coverImage
            backgroundColor
            URL
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="all case">
      <div className="caseList container mx-auto">
        {data.allCase.edges.map((item: any) => (
          <Case caseData={item.node} key={item.node.id} />
        ))}
      </div>
    </Layout>
  );
};

export default ListPage;
