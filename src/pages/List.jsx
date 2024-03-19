import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as SC from '../Css/StyleComp';
import list from '../Css/list.css';
import Bottom from '../components/Bottom';
import ListData from '../json/ListData.json';
import kakao from '../kakao.PNG'
import { IoIosSearch } from "react-icons/io";
import { TbMessageCirclePlus } from "react-icons/tb";
import { IoMusicalNotesOutline, IoSettingsOutline } from "react-icons/io5";

function List() {
  let [newList, listAdt] = useState(ListData);

  const setting = () => {
    const set = document.querySelector('.setting');
    set.classList.toggle('setting-on');
  }
  
  const RedSum = newList.reduce((acc, item) => acc + item.detail.length, 0);
  


  return(
    <>
    <SC.Pd20>
      <SC.WrapJustBetween>
        <SC.Banner>
          Chats
        </SC.Banner>
        <div>
          <ul className='flex'>
            <li><IoIosSearch size="20" /></li>
            <li><TbMessageCirclePlus size="20" /></li>
            <li><IoMusicalNotesOutline size="20" /></li>
            <li><IoSettingsOutline size="20" onClick={setting}/></li>
          </ul>
        </div>
      </SC.WrapJustBetween>
      {newList.map((item, index) => (
        <SC.WrapJustBetween className='pd-top' key={index}>
          <SC.WrapJustStart>
            <img src={kakao} alt="" />
            <div className='padding-RL'>
              <h5>{item.name}</h5>
              <p>{item.detail[0]}</p>
            </div>
          </SC.WrapJustStart>
          <SC.ColumnAlEnd>
            <h6>{item.time}</h6>
            <SC.Circle>{item.detail.length}</SC.Circle>
          </SC.ColumnAlEnd>
        </SC.WrapJustBetween>
      ))}
    </SC.Pd20>
    <Bottom name={RedSum}/>
    <ul className='setting'>
      <li>설정</li>
      <li><Link to={'/'}>로그아웃</Link></li>
    </ul>
    </>
  )
}

export default List;