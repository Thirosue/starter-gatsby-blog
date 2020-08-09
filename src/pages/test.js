import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import SamplePreview from '../components/sample-preview'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class TestIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };

    this.getArticles = this.getArticles.bind(this);
  }

  // ブラウザ実行時のみ実行する
  // https://takumon.com/error-about-window-is-not-available-during-server-side-rendering-gatsby
  componentDidMount() {
    this.getArticles()
  }

  getArticles() {
    const rand = getRandomInt(4);
    fetch(`https://chakky-jr.github.io/mock/sample1/${rand}.json`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ articles: response })
      });
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <div className="clearfix">
              <div className="left-column">
                <h2 className="section-headline">Recent articles</h2>
              </div>
              <div className="right-column">
                <a href="javascript:void(0)">
                  <h4 className="section-reload" onClick={this.getArticles}>Reload</h4>
                </a>
              </div>
            </div>
            <ul className="article-list">
              {this.state.articles.map((node, i) => {
                return (
                  <li key={i}>
                    <SamplePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TestIndex

export const pageQuery = graphql`
  query TestIndexQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
