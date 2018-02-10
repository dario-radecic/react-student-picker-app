import React, { Component } from 'react';
import "normalize.css/normalize.css";
import "./styles/style.css";
import Header from "./components/Header";
import Action from "./components/Action";
import Students from "./components/Students";
import AddStudent from "./components/AddStudent";
import StudentModal from "./components/StudentModal";
import InfoModal from "./components/InfoModal";

class App extends Component {
  state = {
    students: [],
    selectedStudent: undefined,
    infoModalShown: false
  };

  handleDeleteStudents = () => {
    this.setState(() => ({ students: [] }));
  };

  handleClearSelectedStudent = () => {
    this.setState(() => ({ selectedStudent: undefined }));
  };

  handleDeleteStudent = (studentToRemove) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((student) => studentToRemove !== student)
    }));
  };

  handleAddStudent = (student) => {
    if (!student) {
      return "Please enter a valid name to add student.";
    } else if (this.state.students.indexOf(student) > -1) {
      return "This student already exists!";
    }
    this.setState((prevState) => ({ students: prevState.students.concat(student) }));
  };

  handlePickStudent = () => {
    const random = Math.floor(Math.random() * this.state.students.length);
    const student = this.state.students[random];
    this.setState(() => ({ selectedStudent: student }));
  };

  handleShowInfoModal = () => {
    this.setState(() => ({ infoModalShown: true }));
  };

  handleCloseInfoModal = () => {
    this.setState(() => ({ infoModalShown: false }));
  };

  componentDidMount() {
    try {
      const get = localStorage.getItem("students");
      const students = JSON.parse(get);

      if (students) {
        this.setState(() => ({ students }));
      }

    } catch (e) { }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.students.length !== this.state.students.length) {
      const add = JSON.stringify(this.state.students);
      localStorage.setItem("students", add);
    }
  };

  render() {
    return (
      <div>
        <Header title="Student Picker" handleShowInfoModal={this.handleShowInfoModal} />
        <div className="container">
          <Action handlePickStudent={this.handlePickStudent} hasStudents={this.state.students.length > 0} />
          <Students students={this.state.students} handleDeleteStudents={this.handleDeleteStudents} handleDeleteStudent={this.handleDeleteStudent} />
          <AddStudent handleAddStudent={this.handleAddStudent} />
        </div>
        <StudentModal
          selectedStudent={this.state.selectedStudent}
          handleClearSelectedStudent={this.handleClearSelectedStudent}
        />
        <InfoModal
          infoModalShown={this.state.infoModalShown}
          handleCloseInfoModal={this.handleCloseInfoModal}
        />
      </div>
    );
  }
}

export default App;
