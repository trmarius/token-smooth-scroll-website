import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = { isOpen } onClick = { toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick = { toggle }>About</SidebarLink>
                    <SidebarLink to="tokenomics" onClick = { toggle }>Tokenomics</SidebarLink>
                    <SidebarLink to="rewards" onClick = { toggle }>Rewards</SidebarLink>
                    <SidebarLink to="roadmap" onClick = { toggle }>Roadmap</SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute 
                        href="https://exchange.pancakeswap.finance/#/swap"
						target="_blank"
                        >
                            Buy Now!</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
