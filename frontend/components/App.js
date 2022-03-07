import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TO-DO LIST</h1>
        <ul>
          <li>laundry</li>
          <li>workout</li>
          <li>grocery shopping</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear Completed</button>
      </div>
    )
  }
}
