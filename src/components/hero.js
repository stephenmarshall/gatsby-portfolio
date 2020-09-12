import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm Stephen Marshall
      </h1>
      <h2 className="subtitle">
        I build and design <span className="highlighted">things for the web</span>.
      </h2>
      <div className="description">
        Product Manager and Freelance Web Developer. Based in London.
      </div>
    </StyledSection>
  )
}

export default Hero