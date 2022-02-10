import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
	FaFacebook,
	FaInstagram,
	FaTelegram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
	FooterH1,
	Footerp
} from "./FooterElements";

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
					<Footerp>HACHIKŌIN is a social experiment issued on the Binance smart chain!
					The content shared on this website is for information purpose only and, thus, should not be considered as financial advice.
					Trading/investing is risky and you should never invest more than you can afford to lose. 
					Always seek professional advice before making any investment.
					You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or
o					ther Content on this website before making any decisions based on such information or other content. </Footerp>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
						HACHIKŌIN
						</SocialLogo>
						<WebsiteRights>
						HACHIKŌIN © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							{/* <SocialIconLink
								href="//www.twitter.com"
								target="_blank"
								aria-labbel="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="//www.twitter.com"
								target="_blank"
								aria-labbel="Instagram"
							>
								<FaInstagram />
							</SocialIconLink> */}
							{/* <SocialIconLink
								href="//www.twitter.com"
								target="_blank"
								aria-labbel="Youtube"
							>
								<FaYoutube />
							</SocialIconLink> */}
							<SocialIconLink
								href="//www.twitter.com"
								target="_blank"
								aria-labbel="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="//www.twitter.com"
								target="_blank"
								aria-labbel="Telegram"
							>
								<FaTelegram />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
