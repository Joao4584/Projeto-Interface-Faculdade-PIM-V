// * Modules * //
import React, {  } from 'react';
import { Avatar, Badge,Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

// * Exports * //
import * as Styled from '../../Styles/navBar.style';

// * Components * //
const suffix = (
   <AudioOutlined
     style={{
       fontSize: 16,
       color: '#1890ff',
     }}
   />
);

export function NavBar(props) {

 return (
    <Styled.Content>
        <Search
      placeholder="Pesquise Funções e Dados"
      enterButton="Search"
      className='search-div'
      size="large"
      suffix={suffix}
    />
    <div className="avatar-div">
      <Badge count={5}>
         <Avatar shape="square" size="large" >
            Unip
         </Avatar>
      </Badge>
    </div>
    </Styled.Content>
 )
}