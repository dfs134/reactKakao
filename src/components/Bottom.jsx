import React from 'react';
import styled from 'styled-components';
import { GoPerson } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { TfiMore } from "react-icons/tfi";
import * as SC from '../Css/StyleComp';

function List(props) {
  const abos = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding:'10px 0',
    borderTop: '1px solid #ddd',
    backgroundColor: '#f8f8f8'
  }
  const rel = {
    position: 'relative'
  }
  const abs = {
    position: 'absolute',
    top:'0',
    right:'0',
    margin:'0',
    width: '15px',
    height: '15px',
    lineHeight: '15px',
  }
  const min = {
    position: 'absolute',
    top:'0',
    right:'0',
    margin:'0',
    width: '5px',
    height: '5px',
  }
  const Around = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  `;

  const name = props.name;
  
  return(
    <div style={abos}>
      <Around>
        <li><GoPerson size='30' /></li>
        <li style={rel}><BiSolidMessageRounded size='30' /><SC.Circle style={abs}>{name}</SC.Circle></li>
        <li><IoIosSearch size='30' /></li>
        <li style={rel}><TfiMore size='30' /><SC.Circle style={min}/></li>
      </Around>
    </div>
  )
}

export default List;