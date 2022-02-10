import React from 'react'
import { RoadmapContainer, RoadmapBg, RoadmapImg } from './RoadmapElements';
import img from '../../images/roadmap.png'

const Roadmap = () => {
    return (
        <>
        <RoadmapContainer id="roadmap">
            <RoadmapBg>
                <RoadmapImg src={img}/>
            </RoadmapBg>
        </RoadmapContainer>
        </>
    )
}

export default Roadmap;
