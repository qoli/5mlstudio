import * as React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

interface caseType {
  id: string;
  coverImage: string;
  backgroundColor: string;
  name: string;
  type: [string];
  role: [string];
}

type CaseProps = {
  caseData: caseType;
  key: string;
};

const Case = ({ caseData, key }: CaseProps) => {
  const bgColor = {
    backgroundColor: '#' + caseData.backgroundColor,
  };
  return (
    <div className="caseOne" style={bgColor}>
      <h6>Case Study</h6>
      <div className="caseTitle">
        <h1>{caseData.name}</h1>
        <p>{caseData.type}</p>
      </div>
      <p className="caseDescription">{caseData.role}</p>
      <div className="caseImage">
        <img src={'/case/' + caseData.coverImage + '.png'} alt={caseData.coverImage} />
      </div>
      <a className="caseViewButton" href="#">
        view wrok <i className="fad fa-long-arrow-right" />
      </a>
    </div>
  );
};

const ListPage = () => {
  const data = useStaticQuery(graphql`
    query ListQuery {
      allCase {
        totalCount
        nodes {
          id
          name
          role
          type
          coverImage
          backgroundColor
        }
      }
    }
  `);

  return (
    <Layout pageTitle="all case">
      <div className="caseList container mx-auto">
        {data.allCase.nodes.map((item: caseType) => (
          <Case caseData={item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
};

export default ListPage;
