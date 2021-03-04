import styled from 'styled-components';

const Container = styled.div.attrs(props => ({
    mainColor: props.mainColor,
    secondColor: props.secondColor,
}))`

    width: fit-content;
    height: fit-content;
    margin: auto;
    background: ${props => props.mainColor || props.theme.mainColor || '#535353'};
    position: relative;
    box-shadow: 0 0 5px #000000;
    color: #ffff;
    border-radius: 10px;
    overflow: hidden;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
        background-color: ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'};
        z-index: 1;
        opacity: 0;
        transform: scale(0);
        transition: transform .5s ease, opacity .7s ease;
    }
    &:hover:after{
        transform: scale(1); 
        opacity: 1;
    }
`
const Button = styled.button.attrs(props => ({
    txtColor: props.txtColor,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
}))`

    position: relative;
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};;
    width: 100%;
    height: 100%;
    padding: .75rem 1rem;
    cursor: pointer;
    background: transparent;
    z-index: 2;
    border:none;
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    font-family: ${props => props.fontFamily || props.theme.fontFamily || 'monospace'};
    &:focus{ 
        outline: none;
    }
    &:active{
        bottom: -1px;
    }
`


export default function Zoom({ txt, fontFamily, fontSize, txtColor, secondColor, mainColor }) {

    return (
        <Container
            mainColor={mainColor}
            secondColor={secondColor}>

            <Button
                fontFamily={fontFamily}
                fontSize={fontSize}
                txtColor={txtColor}>
                {txt}

            </Button>

        </Container>
    )
}
