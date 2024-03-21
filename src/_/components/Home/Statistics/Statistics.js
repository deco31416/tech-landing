import styled from '@emotion/styled';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import mq from '../../../mediaQuery';
import { loadIntegrations } from '../../../utils';
import { Anchor, AnchorContainer } from '../../Anchor';
import { H2 as DefaultH2 } from '../../Typography';
import statsBG from './statsBG.jpg';

const HeroContainer = styled('div')`
    padding: 60px 20px;
    background: url(${statsBG}) no-repeat;
    background-size: cover;

    ${mq.medium`
    padding: 120px 20px;
  `}
`;

const H2 = styled(DefaultH2)`
    color: #2b2b2b;
    text-align: center;
    max-width: 900px;
    margin: 0 auto 20px;
    font-size: 28px;
    line-height: 36px;

    ${mq.medium`
    font-weight: 700;
    font-size: 52px;
    line-height: 62px;
    margin: 0 auto 50px;
  `}
`;

const Stats = styled('div')`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    margin: 0 auto 0;
    max-width: 800px;

    ${mq.small`
    flex-direction: row;
    justify-content: space-between;
    gap: 64px;
  `}

    strong {
        font-size: 45px;
        color: #2c46a6;
        ${mq.small`
      font-size: 60px;
    `};

        ${mq.large`
      font-size: 92px;
    `};
    }
    span {
        font-size: 20px;
        color: black;
        text-transform: capitalize;
        ${mq.small`
      font-size: 24px;
    `};
        ${mq.large`
      font-size: 28px;
    `};
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default function Statistics(properties) {
    const { t } = useTranslation();

    const [integrations, setIntegrations] = useState([]);

    useEffect(() => {
        loadIntegrations().then((data) => setIntegrations(data));
    }, []);

    const integrationsCount = useMemo(
        () => Object.keys(integrations).length,
        [integrations]
    );

    return (
        <HeroContainer id="home-statistics">
            <AnchorContainer href={'#home-statistics'}>
                <H2>
                    {t('home.statistics.title')}
                    <Anchor />
                </H2>
            </AnchorContainer>
            <Stats>
                <p>
                    <strong>2.14m</strong>{' '}
                    <span>{t('home.statistics.names')}</span>
                </p>
                <p>
                    <strong>{integrationsCount}</strong>{' '}
                    <span>{t('home.statistics.services')}</span>
                </p>
                <p>
                    <strong>800k</strong>{' '}
                    <span>{t('home.statistics.owners')}</span>
                </p>
            </Stats>
        </HeroContainer>
    );
}
