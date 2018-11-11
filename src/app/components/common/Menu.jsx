import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import categories from 'app/data/categories';

const Menu = props => (
    <div className="menu">
        <ul className="list">
            <li className="heading body-text">EOS Packages</li>
            {Object.keys(categories).map(key => (
                <li className="item">
                    <NavLink className="link" activeClassName="active" to={'/packages/' + key}>
                        <div className="icon">
                            <FontAwesomeIcon icon={categories[key].icon} size="lg"/>
                        </div>
                        <span className="label">{categories[key].label}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default withRouter(Menu);
