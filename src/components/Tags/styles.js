import styled from "@emotion/styled"
import { Link } from "gatsby"

export const StyledTag = styled(Link)`
  padding: 0.2rem 1rem;
  background: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 50px;
  transition: 0.3s all;
  opacity: 1;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: 0.3s all;
  }
`
