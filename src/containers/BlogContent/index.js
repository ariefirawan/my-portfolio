import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Container } from "../../components/Container"
import { Row } from "../../components/Row"
import CardPost from "../../components/CardPost"
// import { Wrapper } from "./styles.js"

const Popular = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            description: excerpt(pruneLength: 230)
            id
            timeToRead
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
              path
              tags
              thumbnail {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
      <Row>
        {edges.map(
          ({
            node: {
              id,
              description,
              timeToRead,
              frontmatter: { title, date, path, thumbnail, tags },
            },
          }) => (
            <CardPost
              key={id}
              description={description}
              timeToRead={timeToRead}
              title={title}
              date={date}
              path={path}
              thumbnail={thumbnail}
              tags={tags}
            />
          )
        )}
      </Row>
  )
}

export default Popular
