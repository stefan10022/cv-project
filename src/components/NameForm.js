import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = { editMode: true, name: "", btnText: "Submit" };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.editMode === true)
      this.setState({ editMode: false, btnText: "Edit" });
    else {
      this.setState({ editMode: true, btnText: "Submit" });
    }
  }

  render() {
    return (
      <form
        className="single-field-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="input-group">
          <label htmlFor="nameInput">Name:</label>
          {this.state.editMode === true && (
            <input
              value={this.state.name}
              type="text"
              id="nameInput"
              onChange={(e) => this.handleChange(e)}
              required
              maxLength={40}
            ></input>
          )}
          {this.state.editMode === false && <span>{this.state.name}</span>}
        </div>
        <button>{this.state.btnText}</button>
      </form>
    );
  }
}

export default NameForm;
