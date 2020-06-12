import styled, { css } from 'styled-components';

export const TypographyContainer = styled.span`
	display: inline-block;
    ${props => props.variant === "link" && css`
        text-decoration: underline;
        color: #52b8c1 !important;
        font-weight: bold;
        cursor: pointer;
    `}
	${props => props.variant && css`
        @media (max-width: ${props => props.theme.breakpoints[0]}) {
            font-size: ${props => props.theme.typography[props.variant]['fontSizes'][0] }px;
        }
        @media (min-width: ${props => props.theme.breakpoints[0]}) and (max-width : ${props => props.theme.breakpoints[2]}) {
            font-size: ${props => props.theme.typography[props.variant]['fontSizes'][1] }px;
        }
        @media (min-width: ${props => props.theme.breakpoints[2]}) {
            font-size: ${props => props.theme.typography[props.variant]['fontSizes'][2] }px;
        }
        font-weight: ${props => props.theme.typography[props.variant]['fontWeight'] };
        font-family: ${props => "'" + props.theme.typography[props.variant]['fontFamily'] + "'"}, sans-serif;
        color : ${props => props.theme.palette.text[props.theme.typography[props.variant]['color']] };
    `}
    ${props => props.color && css`
        color: ${props => props.color};
    `}
    ${props => props.fontWeight && css`
        font-weight: ${props => props.fontWeight};
    `}
    ${props => props.fontSize && css`
        font-size: ${props => props.fontSize};
    `}
    ${props => props.fontSizes && css`
        @media (max-width: ${props => props.theme.breakpoints[0]}) {
            font-size: ${props => props.fontSizes[0] + 'px'};
            line-height: ${props => (props.fontSizes[0]*2) + 'px'};
        }
        @media (min-width: ${props => props.theme.breakpoints[0]}) and (max-width : ${props => props.theme.breakpoints[1]}) {
            font-size: ${props => props.fontSizes[1] + 'px'};
            line-height: ${props => (props.fontSizes[1]*2) + 'px'};
        }
        @media (min-width: ${props => props.theme.breakpoints[1]}) {
            font-size: ${props => props.fontSizes[2] + 'px'};
            line-height: ${props => (props.fontSizes[2]*2) + 'px'};
        }
    `}
`;