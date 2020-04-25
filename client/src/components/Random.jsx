import React from 'react';


export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'student': {}
    }
  }

  componentDidMount(){
    
  }

  getRandomStudent(){
    var ind = Math.floor(Math.random() * this.props.students.length);
    this.setState({
      'student': this.props.students[ind]
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src='https://ca.slack-edge.com/T2SV1LBC6-UTC1Y9WDV-3db3deae8709-512'></img>
          <h1>Frankie</h1>
        </div>
        <button onClick={() => window.alert('heeeress frankie!')}>Randomize</button>
      </div>
    )
  }
}