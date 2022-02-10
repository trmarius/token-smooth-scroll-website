import React, { useState } from "react";
import Img from "../../images/img-15.png"
import {
	HeroContainer,
	HeroBg,
    ImageBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
	BuyLink
} from "./HeroElements";
import { Button } from "../ButtonElements";
import ParticlesScript from "../First/particles";


const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};


	return (
		

		<HeroContainer>
			
			<HeroBg>
			<ParticlesScript />
                {/* <ImageBg src={Img}/> */}
				{/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
			</HeroBg>
			<HeroContent>
				<HeroH1>WELCOME TO HACHIKŌIN</HeroH1>
				<HeroP>This token is dedicated to all Hachiko lovers.
				</HeroP>
				<HeroP>We will be as loyal to our holders as Hachiko was to his master.
				</HeroP>
				<HeroP>Our goal is to surpass the successes of our brothers Dogecoin and Shiba Inu.
				</HeroP>
				<HeroBtnWrapper>
					<BuyLink
						href="https://exchange.pancakeswap.finance/#/swap"
						target="_blank"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
					>
						Buy Now {hover ? <ArrowForward /> : <ArrowRight />}
					</BuyLink>
				</HeroBtnWrapper>
			</HeroContent>
			
			
		</HeroContainer>
		
	);
};

export default HeroSection;
