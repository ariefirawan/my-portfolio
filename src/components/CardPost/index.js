import React from "react"
import { navigate } from "gatsby"
import Img from "gatsby-image"
import { Tag } from "../Tags"
import {
  Item,
  Post,
  ArticleImg,
  ArticleTitle,
  ArticleContent,
  Paragraph,
  Info,
  StyledSpan,
  Tags,
} from "./styles"

const CardPost = ({
  path,
  thumbnail,
  title,
  description,
  date,
  timeToRead,
  tags,
}) => {
  return (
    <Item>
      <Post>
        <ArticleImg
          onClick={() => {
            if (!path) return null
            navigate(path)
          }}
        >
          <Img fluid={thumbnail.childImageSharp.fluid} />
        </ArticleImg>
        <ArticleContent>
          <ArticleTitle
            onClick={() => {
              if (!path) return null
              navigate(path)
            }}
          >
            {title}
          </ArticleTitle>
          <Paragraph>{description}</Paragraph>
          {tags && (
            <Tags>
              {tags.map((item, idx) => (
                <Tag tag={item} link={`/${item}/`} key={idx}>
                  {item}
                </Tag>
              ))}
            </Tags>
          )}
          <Info
            onClick={() => {
              if (!path) return null
              navigate(path)
            }}
            path={path}
          >
            {date}
            {timeToRead && <StyledSpan>{timeToRead} min</StyledSpan>}
          </Info>
        </ArticleContent>
      </Post>
    </Item>
  )
}

export default CardPost
