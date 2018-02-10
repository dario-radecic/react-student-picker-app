import React from "react";

class AddStudent extends React.Component {
  state = {
    error: undefined
  };

  handleAddStudent = (e) => {
    e.preventDefault();
    const student = e.target.elements.studentName.value.trim();
    const error = this.props.handleAddStudent(student);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.studentName.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddStudent}>
          <div className="add-student">
            <input className="add-student__input" type="text" placeholder="Enter student name" name="studentName" />
            <button className="button button--add-student">Add Student</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStudent;