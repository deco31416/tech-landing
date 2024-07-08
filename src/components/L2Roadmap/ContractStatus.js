import {
    CheckSVG,
    CogSVG,
    LinkSVG,
    MinusCircleSVG,
    PersonSVG,
    Typography,
} from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

import PencilSVG from '../../assets/roadmap/Pencil.svg';
import primaryColorForStatus from './utils/primaryColorForStatus';

const Container = styled.div(
    ({ theme, $status }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.space['0.5']};
        color: ${theme.colors[`${primaryColorForStatus($status)}Primary`]};
        text-transform: capitalize;
    `
);
const Icon = styled.div(
    ({ theme }) => css`
        width: ${theme.space['3']};
        height: ${theme.space['3']};
        display: block;
    `
);

const iconForStatus = (status) => {
    if (status === 'development') return CogSVG;

    if (status === 'testnet') return LinkSVG;

    if (status === 'governance') return PersonSVG;

    if (status === 'done') return CheckSVG;

    if (status === 'pending') return MinusCircleSVG;

    if (status === 'research') return PencilSVG;

    throw new Error('iconForStatus: Invalid status', status);
};

export default function ContractStatus({ status }) {
    return (
        <Container $status={status}>
            <Icon as={iconForStatus(status)} />
            <Typography fontVariant="extraSmallBold" color="inherit">
                {status}
            </Typography>
        </Container>
    );
}
