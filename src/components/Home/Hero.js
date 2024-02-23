import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import mq from '../../mediaQuery';
import { ButtonSecondary } from '../Typography';

const Title = styled('h2')`
    font-size: 28px;
    font-weight: 700;
    color: white;
    text-align: center;
    max-width: 600px;
    padding: 0 20px;

    ${mq.medium`
    margin-top: 0;
    padding: 120px 20px 0;
    font-size: 68px;
  `}
`;

const HeroContainer = styled('div')`
    background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 23px;

    ${mq.medium`
    margin-bottom: 96px;
  `}
`;

export default function Hero(_properties) {
    const { t } = useTranslation();

    return (
        <HeroContainer>
            <Title>{t('home.hero.title')}</Title>
            <ButtonContainer>
                <ButtonSecondary href="https://app.ens.domains">
                    Get your name
                </ButtonSecondary>
                <ButtonSecondary href="https://blog.ens.domains/post/beginners-guide-to-ethereum-and-ens">
                    Learn more
                </ButtonSecondary>
            </ButtonContainer>
        </HeroContainer>
    );
}
