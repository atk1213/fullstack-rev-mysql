import React from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import List from './List.jsx';
import Random from './Random.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'page': 'home',
      'studentlist' : []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changepage = this.changepage.bind(this)

  }

  componentDidMount(){
    this.getStudents()
  }

  getStudents(){
    axios.get('/api/students')
      .then((results) => {
        this.setState({
          studentlist: results.data
        })
      })
      .catch((err) => console.error(err))
  }

  changepage(e){
    // Todo - add logic to change pages
    // on click run setstate to change page to 
    if(e.target.value == 'home'){
      this.getStudents()
    }
    this.setState({
      page: e.target.value
    })
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List studentlist={this.state.studentlist} getStudents={this.getStudents} />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random students={this.state.studentlist}/>
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changepage} >Add Student</button>
          <button value='list' onClick={this.changepage}>List Students</button>
          <button value='random' onClick={this.changepage}>Random Student</button>
        </div>
      )
    }
  }
}