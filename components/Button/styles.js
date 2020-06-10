import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  position: relative;
  display: flex;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: capitalize;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-width: fit-content;
  i {
    vertical-align: bottom;
    font-size: 18px;
  }

  &.xSmall {
    span {
      font-size: 13px;
    }
    height: 28px;
    line-height: 26px;
    padding: 0 12px;
    text-align: center;

    span {
      height: 22px;
      line-height: 22px;
      display: inline-block;
    }

    i {
      height: 24px;
      line-height: 24px;
      font-size: 1rem;
    }
  }

  &.medium {
    span {
      font-size: 13px;
    }
    height: 32px;
    line-height: 26px;
    padding: 0 12px;
    text-align: center;

    span {
      height: 22px;
      line-height: 22px;
      display: inline-block;
    }

    i {
      height: 24px;
      line-height: 24px;
    }
  }

  &.small {
    font-size: 14px;
    height: 32px;
    line-height: 30px;
    padding: 0px 16px;
    text-align: center;

    span {
      height: 30px;
      line-height: 30px;
      display: inline-block;
    }

    i {
      height: 15px;
      line-height: 15px;
    }
  }

  &.large {
    font-size: 14px;
    height: 45px;
    i {
      height: 14px;
      line-height: 14px;
    }
  }

  &.fullWidth {
    width: 100%;
  }

  &.contained {
    background-color: ${props => props.theme.palette.primary.main};
    border: 0.8px solid ${props => props.theme.palette.primary.main};
    i {
      color: ${props => props.theme.palette.white};
    }
    span {
      color: ${props => props.theme.palette.white};
    }

    &:hover {
      background-color: ${props => props.theme.palette.primary.dark};
    }
    &.disabled {
      background-color: ${props => props.theme.palette.border.main};
      border-color: ${props => props.theme.palette.border.main};
      pointer-events: none;
      span {
        color: ${props => props.theme.palette.white};
      }
      &:hover {
        background-color: ${props => props.theme.palette.border.main};
      }
    }
  }

  &.inverted {
    background-color: ${props => props.theme.palette.white};
    border: 0.8px solid ${props => props.theme.palette.primary.main};
    i {
      color: ${props => props.theme.palette.primary.main};
    }
    span {
      color: ${props => props.theme.palette.primary.main};
    }

    &:hover {
      background-color: #103577;
      span {
        color: ${props => props.theme.palette.white};
      }
    }
    &.disabled {
      background-color: ${props => props.theme.palette.border.main};
      border-color: ${props => props.theme.palette.border.main};
      pointer-events: none;
      span {
        color: ${props => props.theme.palette.white};
      }
      &:hover {
        background-color: ${props => props.theme.palette.border.main};
      }
    }
  }

  &.error {
    background-color: ${props => `${props.theme.palette.accent.error }F2`};
    border: 0.8px solid ${props => props.theme.palette.accent.error};
    i {
      color: ${props => props.theme.palette.accent.error};
    }
    span {
      color: ${props => props.theme.palette.white};
    }

    &:hover {
      background-color: ${props => props.theme.palette.accent.error};
    }
    &.disabled {
      background-color: ${props => props.theme.palette.text.primary};
      border-color: ${props => props.theme.palette.text.primary};
      pointer-events: none;
      span {
        color: ${props => props.theme.palette.text.secondary};
      }
      &:hover {
        background-color: ${props => props.theme.palette.text.primary};
      }
    }
  }

  &.success {
    background-color: ${props => `${props.theme.palette.accent.success }F2`};
    border: 0.8px solid ${props => props.theme.palette.accent.success};
    i {
      color: ${props => props.theme.palette.accent.success};
    }
    span {
      color: ${props => props.theme.palette.white};
    }

    &:hover {
      background-color: ${props => props.theme.palette.accent.success};
    }
    &.disabled {
      background-color: ${props => props.theme.palette.text.primary};
      border-color: ${props => props.theme.palette.text.primary};
      pointer-events: none;
      span {
        color: ${props => props.theme.palette.text.secondary};
      }
      &:hover {
        background-color: ${props => props.theme.palette.text.primary};
      }
    }
  }

  &.warning {
    background-color: ${props => `${props.theme.palette.accent.warning }F2`};
    border: 0.8px solid ${props => props.theme.palette.accent.warning};
    i {
      color: ${props => props.theme.palette.white};
    }
    span {
      color: ${props => props.theme.palette.white};
    }

    &:hover {
      background-color: ${props => props.theme.palette.accent.warning};
    }
    &.disabled {
      background-color: ${props => props.theme.palette.text.primary};
      border-color: ${props => props.theme.palette.text.primary};
      pointer-events: none;
      span {
        color: ${props => props.theme.palette.text.secondary};
      }
      &:hover {
        background-color: ${props => props.theme.palette.text.primary};
      }
    }
  }

  &.text {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.palette.text.primary};
    border: none;
    i {
      color: ${props => props.theme.accent};
    }

    :hover {
      background-color: ${props => props.theme.palette.smoke};
    }
  }

  &.text.cancel {
    color: ${props => props.theme.text} ${props => props.theme.opacity55};
  }

  &.outlined {
    background-color: ${props => props.theme.palette.white};
    border: 0.8px solid ${props => props.theme.palette.border.main};
    text-transform: capitalize;
    border-radius: 4px;
    span {
      color: ${props => props.theme.palette.text.primary};
    }
    &.disabled {
      background-color: ${props => props.theme.palette.text.primary};
      border-color: ${props => props.theme.palette.text.primary};
      span {
        color: ${props => props.theme.palette.text.secondary};
      }
      pointer-events: none;
    }

    &:hover {
      background-color: ${props => props.theme.palette.primary.main};
      border: 0.8px solid ${props => props.theme.palette.primary.main};
      i {
        color: ${props => props.theme.palette.white};
      }
      span {
        color: ${props => props.theme.palette.white};
      }
      .loaderButtonIcon {
        color: ${props => props.theme.palette.white};
      }
    }
  }

  &.withIcon {
    background-color: ${props => props.theme.palette.white};
    border: 0.8px solid ${props => props.theme.palette.text.primary};
    text-transform: capitalize;
    border-radius: 4px;
    span {
      color: ${props => props.theme.palette.text.primary};
    }
    &.disabled {
      background-color: ${props => props.theme.palette.text.primary};
      border-color: ${props => props.theme.palette.text.primary};
      span {
        color: ${props => props.theme.palette.text.secondary};
      }
      pointer-events: none;
    }

    &:hover {
      background-color: ${props => props.theme.palette.primary.main};
      border: 0.8px solid ${props => props.theme.palette.primary.main};
      i {
        color: ${props => props.theme.palette.white};
      }
      span {
        color: ${props => props.theme.palette.white};
      }
      .loaderButtonIcon {
        color: ${props => props.theme.palette.white};
      }
    }
  }

  &.paginationButton {
    background-color: ${props => props.theme.palette.border.light};
    color: ${props => props.theme.palette.text.primary};
    text-transform: capitalize;
    border-radius: 4px;
    height: 28px;
    border: none;
    font-size: 14px;
    min-width: 32px;
    i {
      color: ${props => props.theme.palette.text.primary};
      font-size: 14px;
    }
    &.disabled {
      background-color: ${props => props.theme.palette.border.light};
      color: ${props => props.theme.palette.text.secondary};
      span,
      i {
        opacity: 0.5;
      }
      pointer-events: none;
    }

    &:hover {
      background-color: ${props => props.theme.palette.primary.light};
    }
    &.selected {
      background-color: ${props => props.theme.palette.primary.light};
    }
  }

  .prefix {
    margin: 0 5px 0 0;
  }

  .suffix {
    margin: 0 0 0 5px;
  }

  :focus {
    outline: none;
  }
  .loaderButtonIcon {
    color: ${props => props.theme.palette.text.primary};
  }

  &.iconButton {
    padding: 0px 5px;
    .prefix {
      margin: 0;
    }

    .suffix {
      margin: 0;
    }
  }
`;
