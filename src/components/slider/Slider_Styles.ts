import styled from 'styled-components';

const StyledSlider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  margin: 22px 0 42px;
  display: inline-block;
`

export const S = {
    StyledSlider,
    Slide,
    Text,
    Name
}