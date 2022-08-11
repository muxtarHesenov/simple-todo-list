import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      todoList:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState ({
      text:e.target.value
    })
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const {text, todoList} = this.state;
    const newTodoList = [...todoList, text];
    this.setState ({
      todoList:newTodoList,
      text:""
    })
  }
  handleDelete(e) {
    e.target.className ="d-none"
  }
  render() {
    const {text, todoList} = this.state;
    return (
      <>
      <div onSubmit={this.handleFormSubmit} className="container mb-3">
        <form className="mb-3 ">
          <label 
          htmlFor="todo" 
          className="form-label">
            Todo title
          </label>

          <input 
          type="text" 
          className="form-control" 
          id="todo" 
          placeholder="text"
          value={text}
          onChange={this.handleInputChange}/>
        </form>
        <ul className="list-group">
          {
            todoList.map(todoItem => (
              <li onClick={this.handleDelete} className="list-group-item">{todoItem}</li>
            ))
          }
        </ul>
      </div>
      </>
    );
  }
}
