import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { EOSicon } from 'app/components/common';
import categories from 'app/data/categories';
import contracts from 'app/data/contracts';

class ContractList extends Component {
    render() {
        const category = categories[this.props.match.params.category];
        return (
            <div className="contract-list view">
                <h1 className="category">
                    <span className="icon">
                        <FontAwesomeIcon icon={category.icon}/>
                    </span>
                    <span className="title">{category.label}</span>
                </h1>
                <div className="bounds">
                    {Object.keys(contracts).map(key => (
                        <div className="contract">
                            <h2 className="heading">
                                <EOSicon/>
                                <Link className="package-link" to={'/packages/'+this.props.match.params.category+'/'+contracts[key].path}>{`${contracts[key].name} ${category.label} Package`}</Link>
                            </h2>
                            <p className="description body-text muted">
                                {contracts[key].description}
                            </p>
                            <div className="version-author body-text">
                                <span className="version">
                                    {'Version ' + contracts[key].version}
                                </span>
                                {' published by '}
                                <span className="author">
                                    {contracts[key].user}
                                </span>
                            </div>
                            <div className="cols">
                                <div className="col body-text">
                                    <div className="downloads">
                                        <span className="count">{contracts[key].downloads}</span>
                                        weekly downloads
                                        <span className="badge">
                                            Audited
                                        </span>
                                    </div>
                                </div>
                                <div className="col text-right">
                                    <Link className="package-link" to={'/packages/'+this.props.match.params.category+'/'+contracts[key].path}>
                                        <span className="view-package">View Package</span>
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ContractList;
