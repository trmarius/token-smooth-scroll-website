import React from 'react';
import Icon1 from '../../images/img-18.png'
import Icon2 from '../../images/img-19.png'
import Icon3 from '../../images/img-27.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="rewards">
            <ServicesH1>Rewards Distribution</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reward distribution</ServicesH2>
                    <ServicesP>4% of each transaction is distributed amongst HACHIKŌIN holders. This increases the incentive to hold the tokens in the wallets. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Auto-locking liquidity</ServicesH2>
                    <ServicesP>6% of each transaction is automatically locked to the liquidity pool. 
                    This contributes to lower volatility and a continuously increasing price floor.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>100% Rugpull safe</ServicesH2>
                    <ServicesP>LP tokens from presale will be locked automatically by DXSale.Network. This means that nobody can drain liquidity from Pancakeswap.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
