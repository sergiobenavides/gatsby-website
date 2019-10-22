import React from "react"

import Layout from "../components/layout"

import { StaticQuery, graphql } from "gatsby";

const IndexPage = () => (
  <Layout>
    <StaticQuery
    query={
    graphql`
      query MyQuery {
        contentfulProduct {
          name
        }
      }
    `}
    render={({
      contentfulProduct: {
        name,
      }
    }) => (
      <>
        <h1>{name}</h1>
      </>
    )}
  />
  </Layout>
)

export default IndexPage
