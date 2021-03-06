import styled from "styled-components";
const MainBox = styled.div`
    padding: 0em 0em 5em;
    @media(max-width: 640px){
        padding: 0em 0em 2em;
    }
`
const Img = styled.img`
    img{
    width: 12em;
    height: auto;
   }
   @media(max-width: 1100px){
        width: 9.2em;
        height: auto;
       }
`;

const ContainerText = styled.div`
    flex-flow: column;
    justify-content: center;
    wrap: no-wrap;
    @media (min-width: 850px){
        padding-left: 10px;
    }
`;

const Info = styled.h1`
    font-size: 18px;
    color: #45505E;
`;

const InfoMorning = styled.h1`
    font-weight: 500;
    font-size: 14px;
    color: #8C9CAD;
`;
const InfoBox = styled.div`
    padding-right: 40px;
`;

export { Img, ContainerText, MainBox, Info, InfoMorning, InfoBox }
