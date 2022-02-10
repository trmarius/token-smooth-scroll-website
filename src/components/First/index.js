import React from 'react'
import { Button } from '../ButtonElements';
import img from "../../images/img-15.png";

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img, TopLine, ParticlesWraper} from './FirstElements';
import ParticlesScript from './particles';

const First = () => {
    return (
        <>  
            <InfoContainer>
                
                <InfoWrapper>
                    <InfoRow >
                        <Column1>
                            <TextWrapper>
                                {/* <TopLine>Welcome to HACHIKO</TopLine> */}
                                <Heading >Welcome to HACHIKŌIN</Heading>
                                <Subtitle >Hachiko is a deflationary token on bsc.</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80} 
                                    >
                                        BUY</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default First
