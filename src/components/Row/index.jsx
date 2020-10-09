import styled from "@emotion/styled"

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: wrap;

  &:after {
    content: "";
    max-width: 32%;
    width: 100%;

    @media (max-width: 960px) {
      content: unset;
    }
  }
`
