import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeHandler(e){
    // Todo - handle input change
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    // Todo- handle new student submission
    e.preventDefault();
    const {name, imgurl} = this.state;
    axios.post('/api/images', { imgurl: imgurl })
      .then(()=>{
        axios.post('/api/students', {name: name})
          .then(() => {
            window.alert('added student')
            // this.props.getStudents()
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  }

  // Todo modify html to use necessary functions
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={this.changeHandler}/>
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    )
  }
}