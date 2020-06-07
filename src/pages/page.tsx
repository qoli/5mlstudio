import * as React from 'react';
import Layout from '../components/layout';
import { useStaticQuery, graphql } from 'gatsby';

const ListPage = () => {
  // const data = useStaticQuery(graphql`
  //   query PageQuery {
  //     posts(id: { eq: "8feb0dc0-b7d6-5586-a36a-82a1056fd29a" }) {
  //       id
  //       html
  //     }
  //   }
  // `);
  // return (
  //   <Layout pageTitle="">
  //     <div className="pageView" dangerouslySetInnerHTML={{ __html: data.posts.html }}></div>
  //   </Layout>
  // );
};

export default ListPage;
