import styled from "@emotion/styled"

export const Item = styled.div`
  max-width: 32%;
  widows: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-self: stretch;

  @media (max-width: 960px) {
    max-width: 48%;
  }

  @media (max-width: 680px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`
export const Post = styled.div`
  border-radius: 0.2rem;
  box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.24);
  background: ${({ theme }) => theme.colors.background};
  transition: 0.7s;
  height: 100%;
  overflow: hidden;
  
  @media (max-width: 680px) {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.24);
    transition: 0.7s;
  }
`

export const ArticleImg = styled.div`
  height: 200px;
  overflow: hidden;

  /* ${({ path }) =>
    path &&
    `
    cursor: pointer;
  `} */

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (max-width: 992px) {
    height: 200px;
  }

  @media (max-width: 680px) {
    height: 150px;
    width: auto;
    flex: 1;

    /* ${({ talk }) =>
      talk &&
      `
      height: 170px;
    `} */
  }
`

export const ArticleContent = styled.div`
  padding: 1rem;
  
  @media (max-width: 680px) {
    flex: 2;
    overflow: hidden;
    padding: 0 1rem;
  }
`

export const ArticleTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: 680px) {
    margin-bottom: 0.1rem;
    font-size: 12pt;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  overflow-y: hidden;
  height: 200px;

  @media (max-width: 680px) {
    height: 20px;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
    font-size: 10pt;
  }
`

export const Info = styled.i`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.6em;

  cursor: pointer;

  @media (max-width: 680px) {
    font-size: 0.6em;
  }
`

export const StyledSpan = styled.span`
  margin-left: 10px;
`

export const Tags = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow-y: hidden;
  height: 100px;
  margin-bottom: 0.5rem;

  @media (max-width: 960px) {
    height: 38px;
  }

  a {
    margin: 0 1rem 1rem 0;
    color: #fff;

    @media (max-width: 960px) {
      padding: 0.05rem 0.5rem;
      margin: 0 0.4rem 0.4rem 0;
      font-size: 8pt;
    }

    &:last-child {
      margin: 0 0 1rem 0;

      @media (max-width: 960px) {
        margin: 0 0 0.4rem 0;
      }
    }
  }
`
