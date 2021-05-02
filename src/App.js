import "./App.css";
import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import SidebarComponent from './sidebar/sidebar'
import EditorComponent from './editor/editor'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  render() {
    return(
      <div>
         <SidebarComponent
         selectedNoteIndex={this.state.selectedNoteIndex}
         notes={this.state.notes}
         selectNote={this.selectNote}
         deleteNote={this.deleteNote}
         newNote={this.newNote}
         ></SidebarComponent>
        {
          this.state.selectedNote ?
          <EditorComponent
          selectedNoteIndex={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}>
          </EditorComponent>:
          null
        }

      </div>
    );
  }
  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  };

 selectNote = (note,index) => this.setState({selectedNoteIndex:index,selectedNote:note}) ;
}

export default App;
