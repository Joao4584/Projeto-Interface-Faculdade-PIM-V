// * Modules * //
import React, {  } from 'react'
import { AiOutlineHome, AiOutlineCalendar, AiFillProject, AiFillCalculator, AiFillBug, AiFillAppstore } from 'react-icons/ai';
import { GiWoodFrame } from 'react-icons/gi';
import { Button, Menu, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ImExit } from 'react-icons/im';
import { Navigate, useNavigate } from 'react-router';

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
    getItem('Agendar', '/', <AiOutlineHome />),
    getItem('Calendario', 'calendario', <AiFillAppstore />),
    getItem('Equipamentos', 'itens', <AiFillBug />),

    
  ];

export function SideBar(props) {

    const [messageApi, contextHolder] = message.useMessage();
    
    let navegar = useNavigate();
    const keyChangeValue = (dad) => {
        navegar(dad.key);
    }

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
                        onClick={e => keyChangeValue(e)}
                    />
                    
                </div>
                    <div className="trocar-conta">
                        <Button type="primary" onClick={() => {
                            message.error('Não fiz essa parte aqui :/', 1.5)
                        }} >
                            Trocar De Conta
                        </Button>
                        <Button type="primary" shape="circle" className='style-btn' onClick={() => {
                        navegar('/login');
                        }}>
                            <ImExit/>
                        </Button>
                    </div>
        </div>
        </Styled.Content>
    )
}