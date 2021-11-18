// import logo from './logo.svg';
import './CreateNote.css';
import React, { useState } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { addNote } from "./../store/actions";
import { removeNote } from "../store/actions";

const options = [
    { value: 'Personal', label: 'Personal' },
    { value: 'Professional', label: 'Professional' },
    { value: 'Health', label: 'Health' }
  ]
function CreateNote(props) {
  const [disabled, setDisabled]=useState(props.disabled);
  const [selectValue, setSelectValue]=useState('Personal');
  const [form, setForm] = useState({
    category: "",
    title: "",
    text: ""
  });
  
  function handleSelect(e) {

    let newForm = { ...form };
    newForm.category = e.value;
    setSelectValue(e.value);
    setForm(newForm);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    let newForm = { ...form };
    newForm[name] = value;

    setForm(newForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addNote(form);
    setForm({ title: "", text: "",category: selectValue});
    if(!props.mainNote){
      props.remove(props.id)
      setDisabled(true);
    }
  }

  return (
    <div >
      {(disabled && !props.mainNote)?<div className="note">
      <h4> Title : {props.title}</h4>
      <p>Text : {props.text}</p>
      <button className="edit" onClick={() => setDisabled(false)}>Edit</button>
      <button className="delete" onClick={() => props.remove(props.id) }>Remove</button>
    </div>:
    <div className="create-note">
    <form onSubmit={handleSubmit}>
      <h4>Add a Note</h4>
      <div>
      <label>Category : </label>
      <Select className="category" options={options} onChange={handleSelect}/>
      </div>
      <div>
        <label>Title : </label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label for = "middle-label">Text : </label>
        <textarea
          name="text"
          value={form.text}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button className="success">Add Note </button>
      </div>
    </form>
    </div>}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    remove: id => dispatch(removeNote(id)),
    addNote: payload => {
      console.log(payload);
      dispatch(addNote(payload));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
