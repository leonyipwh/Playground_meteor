// App component - represents the whole app
App = React.createClass({
  getTasks() {
    return [
      { _id: 1, text: "This is task 1" },
      { _id: 2, text: "This is task 2" },
      { _id: 3, text: "This is task 3" }
    ];
  },

  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>

        <Input />
      </div>
    );
  }
});

Input = React.createClass({
    getInitialState : function() {
    return {
      name : "chris"
    };
  },
  getInput(event) {
    var data = event.target.value;
    console.log(data);
    this.setState({name: data});
  },
  render() {
    return (
      <div>
        <input type="text" placeholder="Input" onChange={this.getInput}/>
        <GetState name={this.state.name} />
      </div>
    );
  }
});

GetState = React.createClass({
  render() {
    var data = this.props.name;
    return (
      <div>
        GetState: {data}
      </div>
    );
  }
});

// Testing = React.createClass({
//   render() {
//     return (
//       <div>hi</div>
//     );
//   }
// });
