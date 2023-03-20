// * Modules * //
import React, {  } from 'react'
import { MailOutlined, SettingOutlined,  } from '@ant-design/icons';
import { AiOutlineHome, AiOutlineCalendar, AiFillProject, AiFillCalculator, AiFillBug, AiFillAppstore } from 'react-icons/ai';
import { GiWoodFrame } from 'react-icons/gi';
import { Button, Menu } from 'antd';

// * Exports * //
import * as Styled from '../../Styles/sideBar.style';
 
// * Components * //
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

const items = [
    getItem('Inicio', 'inicio', <AiOutlineHome />),
    getItem('Agendar', 'p1', <AiOutlineCalendar />),
    getItem('Calendario', 'p2', <AiFillAppstore />),
    getItem('', 'p3', <AiFillBug />),

    
  ];

export function SideBar(props) {

 return (
    <Styled.Content>
       <div className='sideBar'>
            <div className="imageLogo">
                <img src="./logo-colegio-vencer.png" alt="" />
            </div>
            <div className="contentSide">
                <Menu
                    defaultSelectedKeys={['inicio']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </div>
       </div>
    </Styled.Content>
 )
}