import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import SideNav from '../dashboard/SideNav'
import Dropdown from './Dropdown'
import axios from 'axios'
import { v1 } from 'uuid'
import Checkbox from '@material-ui/core/Checkbox';
import './tools.css'

class TopNavbar extends React.Component {

    state = {
        username: null,
        profileImg: null,
    }

    componentDidMount() {
        axios.get('/auth/current_user').then(res => {
            console.log('backend profile:')
            console.dir(res.data)
            this.setState({
                username: res.data.username,
                profileImg: res.data.picture
            })
        })
    }

    render() {
        const { open, side, propertyOpen, layerOpen, tilesetOpen, handleWindowOpen } = this.props;
        const { username, profileImg } = this.state;
        return (
            <>
                <Navbar className="dashboard-top-navbar" bg="white" expand="lg">
                    {side ? <Navbar.Brand onClick={this.props.handleSidebarOpen} style={{ cursor: "pointer" }}><i className="fas fa-list list-icon"></i></Navbar.Brand> : null}
                    <Navbar.Brand href="/dashboard"> <div className="logo" >Delit</div></Navbar.Brand>
                    {!side ? <>
                        <Dropdown title="FILE" width={96} handleOpen={this.handleOpen}
                            items={[
                                <div className="better-dropdown-item" key={v1()}>Import</div>,
                                <div className="better-dropdown-item" key={v1()}>Export</div>,
                                <div className="better-dropdown-item" key={v1()}>Save</div>,
                                <div className="better-dropdown-item" key={v1()}>Duplicate</div>,
                            ]} />
                        <Dropdown title="EDIT" width={128} handleOpen={this.handleOpen}
                            items={[
                                <div className="better-dropdown-item" key={v1()}>{"Undo   CTRL+Z"}</div>,
                                <div className="better-dropdown-item" key={v1()}>{"Redo   CTRL+Y"}</div>,
                                <div className="better-dropdown-item" key={v1()}>{"Copy   CTRL+C"}</div>,
                                <div className="better-dropdown-item" key={v1()}>{"Paste  CTRL+V"}</div>,
                            ]} />
                        <Dropdown title="VIEW" width={174} handleOpen={this.handleOpen}
                            items={[
                                <div className="better-dropdown-item" key={v1()} style={{ paddingLeft: 0 }} onClick={e => handleWindowOpen(e, 'property')}>
                                    <Checkbox
                                        checked={propertyOpen}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                Show Property Window
                            </div>,
                                <div className="better-dropdown-item" key={v1()} style={{ paddingLeft: 0 }} onClick={e => handleWindowOpen(e, 'layer')}>
                                    <Checkbox
                                        checked={layerOpen}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                Show Layer Window
                            </div>,
                                <div className="better-dropdown-item" key={v1()} style={{ paddingLeft: 0 }} onClick={e => handleWindowOpen(e, 'tileset')}>
                                    <Checkbox
                                        checked={tilesetOpen}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                Show Tileset Window
                            </div>,
                            ]} />
                    </> : null}

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Navbar.Brand><img src={profileImg} className="profile-img" alt="delit-profile-logo"></img></Navbar.Brand>
                        <Navbar.Brand>{username}</Navbar.Brand>
                        <Navbar.Brand href="http://localhost:5000/auth/logout">Log Out</Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>
                {side ? <SideNav open={open} handleSidebarOpen={this.props.handleSidebarOpen} /> : null}
            </>
        )
    }

}

export default TopNavbar;