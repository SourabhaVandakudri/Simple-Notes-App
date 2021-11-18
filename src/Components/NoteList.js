import React from "react";
import { connect } from "react-redux";
import CreateNote from "./CreateNote"
import './CreateNote.css';

function NoteList(props) {
  return (
    <div className="notes-container">
        <div className="personal-category">
            <label>Personal</label>
        {props.notes.map(note => (
          (note.category === 'Personal')?
          <CreateNote disabled={true} key={note.id} text={note.text} title={note.title} id={note.id}/>
        :<p></p>
      ))}
        </div>
        <div className="professional-category">
        <label>Professional</label>
        {props.notes.map(note => (
          (note.category === 'Professional')?
          <CreateNote disabled={true} key={note.id} text={note.text} title={note.title} id={note.id}/>:<p></p>
      ))}
        </div>
        <div className="health-category">
        <label>Health</label>
        {props.notes.map(note => (
          (note.category === 'Health')?
          <CreateNote disabled={true} key={note.id} text={note.text} title={note.title} id={note.id}/>:<p></p>
      ))}
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state
  };
}

export default connect(mapStateToProps)(NoteList);
