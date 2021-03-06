import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/brand/eggshell.png';

class IdentityNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kw: ''
        };
    }

    componentWillMount() {
        this.props.getUserInfo();
    }

    handleSearch = (e) => {
        e.preventDefault();
    };

    handleSearchKw = (e) => {
        this.setState({
            kw: e.target.value.trim()
        });
    }

    render() {
        let identityEl = this.props.logined && (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to={'/identity/people'} className="nav-link">
                        {this.props.nickname}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" onClick={() => {
                        this.props.doLogout();
                    }}>
                        退出
                    </a>
                </li>
            </ul >) || (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to={'/identity/login'} className="nav-link">
                            登陆
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/identity/register' className="nav-link">
                            注册
                        </NavLink>
                    </li>
                </ul>);
        return (
            <nav id="identity-navbar" className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-2 bg-white rounded">
                <div className='container'>
                    <NavLink className="navbar-brand" to='/'>
                        <img src={logo} height="30" className="d-inline-block align-top mr-2" alt="" />
                        蛋壳
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbar-menu" className="collapse navbar-collapse">
                        <form className="form-inline mx-4 d-none d-lg-inline" onSubmit={this.handleSearch}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.handleSearchKw} />
                            <NavLink className="btn btn-outline-info my-2 my-sm-0" to={`/search/${this.state.kw}`}>Search</NavLink>
                        </form>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to='/classification' className="nav-link">
                                    分类
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/movie/ranking' className="nav-link">
                                    排行
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/review_list' className="nav-link">
                                    影评
                                </NavLink>
                            </li>
                        </ul>
                        {identityEl}
                    </div>
                </div>
            </nav>
        );
    }
}

export default IdentityNavbar;