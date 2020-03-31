import React from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function CustomLayout(props){
    return(
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1">Users Activity Details</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{background:'#fff', padding:24, minHeight:28}}>{props.children}</div>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}
export default CustomLayout