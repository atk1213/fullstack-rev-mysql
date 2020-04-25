import React from 'react';


export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }

  }

  changeHandler(e){
    // Todo - handle input change
  }

  handleSubmit(e){
    // Todo- handle new student submission
  }

  // Todo modify html to use necessary functions
  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" />
          <label>Image URL: </label>
          <input type="text" name="imgurl" />
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    )
  }
}