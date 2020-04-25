import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.studentlist.map((student, index)=> {
      return <ListElement student={student} key={index} index={index} getStudents={props.getStudents}/>
    })}
  </div>


export default List
