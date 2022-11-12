import { Menu, Dropdown,Button, Space, Row, Col } from 'antd';
import React from 'react';
import { Link, NavLink } from "react-router-dom";


function DefaultLayout(props){
    const user = JSON.parse(localStorage.getItem('user'))
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to='/home'>
                Home
                </Link>
            </Menu.Item>
            <Menu.Item>   
                <a href="/bookings">
                Bookings
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="/profile">
                Profile
                </a>
            </Menu.Item>
            <Menu.Item onClick={()=> {
                localStorage.removeItem('user');
                window.location.href='/login'
            }}>
                <li>Logout</li>
            </Menu.Item>
          </Menu>
    );
    return(
        <div>
            <div className='header bs1'>
                <Row gutter ={50} justify= 'center'>
                    <Col lg={20} sm={24} xs= {24}></Col>
                </Row>
                <div className='d-flex justify-content-between'>
                    <h1>RSNV Cars</h1>
                    <Dropdown overlay= {menu} placement = 'bottom'>
                        <Button>{user.C_name}</Button>
                    </Dropdown>
                </div>
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}
export default DefaultLayout;