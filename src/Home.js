import React from 'react'
import DatePicker from 'react-datepicker2';
import moment from 'moment';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: moment('01/01/2000'),
      isGregorian: true
    }
  }

  render() {
    // is this now on github ok
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 flex-center">

            <DatePicker
              timePicker={false}
              inputFormat="DD/MM/YYYY"
              isGregorian={true}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />

          </div>
        </div>
      </div>
    )

  }
}


export default Home
