import styled,{ css } from 'styled-components';

export const AvatarContainer = styled.div`
    width: ${props => props.size ? (props.size + 'px') : '40px'};
    height: ${props => props.size ? (props.size + 'px') : '40px'};
    display: inline-block;
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border-radius: 50%;
    }
    ${props => props.variant === "namedInitial" && css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        .namedInitial {
            font-weight: 100;
            transform: scale(${props => ((props.size*props.scale)/40)});
            color: white;
        }
    `}
`;