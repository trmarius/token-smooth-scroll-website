import styled from "styled-components";

export const RoadmapContainer = styled.div`
    height: 860px;
    display: grid;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;


    @media screen and (max-width: 767px) {
        height: 700px;
    }

    @media screen(max-width: 480px) {
        height: 600px;
    }
`

export const RoadmapBg = styled.div`
    
    // align-items: center;
    top: 0;
    left: 5%;
    // background-color: #fff;
    // display: flex;
    // align-items: center;
    // justify-content: center;
`

export const RoadmapImg = styled.img`
    left: 5%;
    width: 80%;
    height: 60%;
    // background: #000;
`