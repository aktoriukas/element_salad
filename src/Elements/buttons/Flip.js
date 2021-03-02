import styled from 'styled-components';

const Button = styled.button`

  opacity: 1;
  outline: 0;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: 'Open Sans';
  text-transform: uppercase;
  padding:0;
  background-color: transparent;
  border: none;
  width: fit-content;
  height: fit-content;
  margin: auto;
  font-size: ${props => props.theme.fontSize || '1.4rem'};
  cursor: pointer;
  
  &:hover{
    
    &:after{
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }
    
    &:before{
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }
  
  &:after{
    top: 3px;
    left: 0;
    opacity: 0;
    width: 100%;
    color:  ${props => props.theme.main || '#535353'};
    display: block;
    transition: .5s ease;
    position: absolute;
    background-color: ${props => props.theme.second || '#A0A0A0'};
    content: 'back';
    transform: translateY(-50%) rotateX(90deg);
  }
  
  &:before{
    top: 0;
    left: 0;
    opacity: 1;
    color: ${props => props.theme.second || '#A0A0A0'};;
    display: block;
    line-height: 40px;
    transition:  .5s ease;
    padding: 0 3rem;
    position: relative;
    background: ${props => props.theme.main || '#535353'};
    content: 'Hover me';
    transform: translateY(0) rotateX(0);
  }
`


export default function Flip() {

    return (
        <Button />
    )
} 