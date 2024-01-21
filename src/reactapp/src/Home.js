import React, { Component } from 'react';
import './App.css';
import MemberList from './MemberList';
import DataSender from './DataSender'

class Home extends Component {
    render() {
        return (
            <div>
                <DataSender/>
                <MemberList/>
            </div>
        );
    }
}
export default Home;