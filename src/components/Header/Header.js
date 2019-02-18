import React, {Component} from 'react';

import firebase from '../../firebase';

import './header.scss';


class Header extends Component{
    constructor(props){
        super(props);

        this.logOutHandle = this.logOutHandle.bind(this);
    }

    logOutHandle(){
            firebase.auth().signOut().then(()=> {
                console.log('logout successful');
            }).catch(function(error) {
                alert(`${error.code}   ${error.message}`);
            });
    }
    render() {
        return(
            <div className='header'>
                <h1 className='header__title'>Hi,  *user*</h1>
                <button className='header__logOut' onClick={this.logOutHandle}>Log out</button>
            </div>
        );
    }
}

export default Header;