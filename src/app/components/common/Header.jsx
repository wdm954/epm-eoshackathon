import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { EOSicon } from 'app/components/common';

const Header = props => (
    <div className="header">
        <div className="bounds">
            <div className="cols">
                <div className="col">
                    <div className="logo">
                        <EOSicon/>
                        <span className="logo-text">EPM</span>
                    </div>
                </div>
                <div className="col">
                    <div className="user">
                        <span className="name">Shawn Spencer</span>
                        <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;
