import React, { Component } from 'react';
import categories from 'app/data/categories';
import contracts from 'app/data/contracts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class PackageProfile extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            package: {}
        };
    }
    componentDidMount() {
        for (let i = 0; i < contracts.length; i++) {
            if (this.props.match.params.package === contracts[i].path) {
                this.setState({package: contracts[i]});
            }
        }
    }
    render() {
        const p = this.state.package;
        const c = categories[this.props.match.params.category];
        return (
            <div className="package-profile view">
                <div className="bounds">
                    <div className="cols">
                        <div className="col profile-body">
                            <div className="heading">
                                <h1 className="title">{p.name} {c.label} Package</h1>
                                <p className="description">{p.description}</p>
                                <span className="epm-install">
                                    <pre>epm install {p.path}-{this.props.match.params.category}</pre>
                                </span>
                                <div className="readme">
                                    <h1>Docs</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Odio pellentesque diam volutpat commodo sed egestas. Venenatis cras sed felis eget. Integer feugiat scelerisque varius morbi. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Vivamus arcu felis bibendum ut tristique. Mi bibendum neque egestas congue quisque egestas diam in.
                                    </p>
                                    <p>Vel pretium lectus quam id leo. Molestie ac feugiat sed lectus vestibulum mattis.
                                    </p>
                                    <p>Sodales neque sodales ut etiam sit. Odio aenean sed adipiscing diam. In hendrerit gravida rutrum quisque non tellus. Turpis massa tincidunt dui ut ornare lectus sit amet. Nunc mi ipsum faucibus vitae. Nibh ipsum consequat nisl vel pretium lectus quam id. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Cursus metus aliquam eleifend mi in. Integer vitae justo eget magna fermentum iaculis eu non diam. Sem nulla pharetra diam sit.
                                    </p>
                                    <p>Dolor sit amet consectetur adipiscing elit ut. Et tortor consequat id porta nibh venenatis cras sed felis. Integer feugiat scelerisque varius morbi enim nunc faucibus. Quis varius quam quisque id diam. Molestie ac feugiat sed lectus. Nulla facilisi nullam vehicula ipsum a arcu cursus. Id cursus metus aliquam eleifend mi in nulla posuere. Ultrices sagittis orci a scelerisque purus semper eget duis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sit amet consectetur adipiscing elit. Augue interdum velit euismod in pellentesque. Viverra accumsan in nisl nisi scelerisque eu ultrices. Quisque non tellus orci ac auctor augue. Non nisi est sit amet. Non tellus orci ac auctor augue. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                                    </p>
                                    <p>Eu consequat ac felis donec et odio pellentesque. Consectetur lorem donec massa sapien faucibus et molestie ac. Pellentesque dignissim enim sit amet. Sed ullamcorper morbi tincidunt ornare massa eget. Lacinia at quis risus sed. Sapien faucibus et molestie ac. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Sed cras ornare arcu dui vivamus arcu felis. Arcu cursus vitae congue mauris rhoncus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col profile-sidebar">
                            <div className="attributes">
                                <div className="item">
                                    <b className="label">Weekly Downloads</b>
                                    <b>{p.downloads}</b>
                                </div>
                                <div className="item">
                                    <b className="label">Version</b>
                                    <b>{p.version}</b>
                                </div>
                                <div className="item">
                                    <b className="label">License</b>
                                    <b>MIT</b>
                                </div>
                                <div className="item">
                                    <b className="label">Repository</b>
                                    <b><FontAwesomeIcon icon={faGithub}/> github</b>
                                </div>
                                <div className="item">
                                    <b className="label">Website</b>
                                    <b>https://{p.path}-{this.props.match.params.category}.com</b>
                                </div>
                                <div className="item">
                                    <b className="label">Audit</b>
                                    <b>View Report</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PackageProfile;
