import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router";
import {RouteNames} from "../router/routerIndex";
import {log} from "util";

const NavBar: FC = () => {
    const router = useHistory();
    console.log(router)
    let auth = true;
    return (
        <Layout.Header>
            <Row justify={"end"}>
                {
                    auth ?
                        <>
                            <div style={{color: "white"}}>
                                Анна
                            </div>
                            <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
                                <Menu.Item onClick={() => console.log('Exit')} key={1}>
                                    Выйти
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu theme={"dark"} mode={"horizontal"} selectable={false}>
                            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
                                Логин
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );

};

export default NavBar;