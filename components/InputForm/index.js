import React from 'react';
import './index.css';

class InputForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.onSettingsChange({
      rawTree: this.props.rawTree
    });
  }
  onTreeChange(e) {
    this.props.onSettingsChange({
      rawTree: e.target.value
    });
  }
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onTreeChange = this.onTreeChange.bind(this);
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label htmlFor="raw_tree">Value to render</label>
        <textarea
          id="raw_tree"
          className="form__input"
          value={this.props.rawTree}
          onKeyUp={this.onTreeChange}
        />
        <button type="submit" className="btn form__btn">Render</button>
      </form>);
  }
}

export default InputForm;
