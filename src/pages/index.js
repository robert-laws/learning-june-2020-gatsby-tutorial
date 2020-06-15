import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../static/device"

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const ImageWrapper = styled.div`
  width: 400px;
  overflow: hidden;
  border-radius: 2rem;
  border: 1px solid #555;
  margin: 1rem;
`

const MyImagesWrapper = ({ children }) => (
  <ImagesWrapper>{children}</ImagesWrapper>
)

const MyImage = ({ children }) => <ImageWrapper>{children}</ImageWrapper>

export default function Home({ data }) {
  return (
    <div
      style={{
        color: "purple",
        height: "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Header text="Header for the site" />
        <h1>Gatsby website</h1>
        <p>Hello everyone...</p>

        <MyImagesWrapper>
          {data.allImageSharp.edges.map(edge => (
            <MyImage key={edge.node.id}>
              <Img fluid={edge.node.fluid} />
            </MyImage>
          ))}
        </MyImagesWrapper>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
