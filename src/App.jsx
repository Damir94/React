import React, { Component } from 'react'
import './index.css'
import {users} from './data.js';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
       dataList: users,
       name: '',
       status: '',
       select: null,
       search: ''
    }
  }
    
  render() {
  
    const filteredInfo = (e) => {
      let filtered = users.filter((value) => `${value[this.state.search]}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));

      this.setState({
        dataList: filtered
      })

    }
    
    const onDelete = (ids) => {
      let filtered = this.state.dataList.filter((value) => value.id !== ids);
      this.setState({
        dataList: filtered
      })
    }
    
    const onChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    const onCreate = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      }

      this.setState({
        dataList: [...this.state.dataList, user],
        name: '',
        status: '',
      })


    };

    const onUpdate = ({id, name, status}, isActive) => {
      if(isActive) {
        let updatedValuee = this.state.dataList.map((value) => value.id === this.state.select.id ? {...value, name: this.state.name, status: this.state.status} : value);
        this.setState({
          select: null,
        dataList: updatedValuee
      })
      }else {
        this.setState({
          select: {id, name, status}
        })
      }
    }
    
    const onSelect = (e) => {
      this.setState({
        search: e.target.value
      })
    }


    return (
      <div>
        <hr/>
        <h1> Name: {this.state.name} </h1>
        <h1> Status: {this.state.status} </h1>
        <select onChange={onSelect}>
          <option value='id'>ID</option>
          <option value='name'>Name</option>
          <option value='status'>Status</option>
        </select>
        <input onChange={filteredInfo} type='text' placeholder='search.....' />
        <hr/>
        <input value={this.state.name} name='name' onChange={onChange} type='text' placeholder='name'/>
        <input value={this.state.status} name='status' onChange={onChange} type='text' placeholder='status'/>
        <button onClick={onCreate}>Create</button>
        <table width={'50%'} style={{borderCollapse: 'collapse'}} border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          {
            this.state.dataList.length ?
            this.state.dataList.map(({id, name, status}) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td> {id} </td>
                    <td> {this.state.select?.id === id? <input onChange={onChange} name='name' value={this.state.name} type="text"/> : name} </td>
                    <td> {this.state.select?.id === id? <input onChange={onChange} name='status' value={this.state.status} type='text'/> : status} </td>
                    <td><button onClick={()=> onDelete(id)}>Delete</button></td>
                    <td>
                    <button onClick={()=> onUpdate({id, name, status}, this.state.select?.id === id)}>
                      {this.state.select?.id === id ? 'Save' : 'Edit'}
                    </button>
                    </td>
                  </tr>
                </tbody>
              )
            })
            : 
            <tbody>
             <tr>
              <th colSpan={5}> 
              <h1>No user</h1>
              </th>
             </tr>
            </tbody>
          }
        </table>
      </div>
    )
  }
}
