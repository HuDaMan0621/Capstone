import React, { Component } from 'react';
import './App.css';
import { db } from './firebase';
import Hello from './components/Hello';
import NewUserForm from './components/NewUserForm';




class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [{
        fullname: 'Test Macbookpro',
        username: 'testuser',
        address: '10000 test way'
      }]
    }
  }

  componentDidMount() {
    db.collection('users').get().then((querySnapshot) => { //.then takes a call back function, querySnapshot
      // querySnapshot.forEach((doc) => { 
      //foreach is a call back function, takes the 1 item that is looping over, which is the doc
      let newUsers = [];
      querySnapshot.forEach(doc => {
        newUsers.push(doc.data());
        // db.collection('users').doc(doc.id).collection('bio').get().then(bio => {
        //   console.log(bio.id);
        //   console.log(bio.data);
        // });
      });
      this.setState({
        users: newUsers
      })
    })

    db.collection('users').onSnapshot((querySnapshot) => {
      let newUsers = [];
      querySnapshot.forEach(doc => {
        newUsers.push(doc.data());
        // db.collection('users').doc(doc.id).collection('bio').get().then(bio => {
        // });
      });
      this.setState({
        users: newUsers
      })
    })
  }
  render() {
    return (
      <div>
        <NewUserForm>

        </NewUserForm>
        {
          this.state.users.map((user, index) => {
            return <Hello name={user.fullname} address={user.address} key={index}/>
          })
        }
      </div >
    )
  }
}


export default App;
