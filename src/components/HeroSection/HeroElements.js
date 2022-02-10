import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 0;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 0;
    }

`;

export const HeroBg = styled.div`
    // background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // display: flex;
    // align-items: center;
    // justify-content: center;

`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    background: #000;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // position: absolute;
    // background: #000;
`;

export const HeroContent = styled.div`
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: block;
    flex-direction: column;
    align-items: center;
    z-index: 4;
`;

export const HeroH1 = styled.h1`
    color: #FF6100;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768 px) {
        font-size: 40px
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 18px;
    color: #FF6100;
    font-size: 24px;
    text-align: center;
    justify-content: center;
     max-width: 920px;

    @media screen and (max-width: 768 px) {
        font-size: 24px
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BuyLink = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

&:hover {
    transition: all 0.2 ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#FF6100')};
}
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px
`
