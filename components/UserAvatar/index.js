import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AvatarContainer } from './styles';

import Image from '../Image';

const DefaultUserImage = "defaultAvatarImage";

function UserAvatar(props) {
    const {
        text,
    } = props;
    let variant, namedInitial, scale;
    if (props.variant) {
        variant = props.variant;
    }
    if (props.name) {
        variant = "namedInitial";
        let name = props.name.replace(/\s+/g, " ");
        if (name.split(' ').length > 1) {
            namedInitial = name.split(' ')[0][0] + name.split(' ')[1][0];
            scale = 1;
        } else {
            namedInitial = name.split(' ')[0][0];
            scale = 1.5;
        }
    }

    if (props.src) {
        variant = "imageSrc";
    }


    return (
      <AvatarContainer
        onClick={props.onClick ? props.onClick : null}
        {...props}
        variant={variant}
        scale={scale}
        className={props.className ? props.className : ''}
      >
        {variant === "defaultUser" &&
            <Image src={DefaultUserImage} alt="Default User Image" />
        }
        {variant === "namedInitial" &&
            <div className="namedInitial">{namedInitial}</div>
        }
        {variant === "imageSrc" &&
            <Image src={props.src} alt="User Image" />
        }
      </AvatarContainer>
    );
}

UserAvatar.defaultProps = {
    variant: 'defaultUser'
}

UserAvatar.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    round: PropTypes.bool,
}


export default UserAvatar;