import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Calendar from '../Calendar';
import MultiSelect from '../MultiSelectInput';
import Constants from '../../constants';
import CloseButton from '../CloseButton';
import './style.css';

const handleSubmit = () => {

};

const validate = () => {

};

const multiselectValidate = (data) => {

};

const reset = () => {

};

const submit = () => {

};

const MovieAdd = ({ modalTitle, closeAction }) => (
  <>
    <CloseButton closeAction={closeAction}/>
    <form className="add-movie" onSubmit={handleSubmit}>
      <p className="modal-title">{modalTitle}</p>
      <Input id="movie-id"
             title="Movie id"
             visibility="visibility"
             onChange={validate}/>
      <Input id="movie-title"
             title="Title"
             visibility=""
             onChange={validate}/>
      <Calendar id="movie-release"
                title="Release date"
                onChange={validate}
                value={this}/>
      <Input id="movie-url"
             title="Movie url"
             visibility=""
             onChange={validate}/>
      <MultiSelect title="genre"
                   options={Constants.DEFAULT}
                   onAction={(data) => multiselectValidate(data)}/>
      <Input id="movie-overview"
             title="Overview"
             visibility=""
             onChange={validate}/>
      <Input id="movie-runtime"
             title="Runtime"
             visibility=""
             onChange={validate}/>
      <div className="add-movie-actions">
        <button type="button"
                className="reset-button"
                onClick={() => reset}>RESET
        </button>
        <button type="button"
                className="submit-button"
                onClick={() => submit}>SUBMIT
        </button>
      </div>
    </form>
  </>
);

MovieAdd.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.string.isRequired
};

export default MovieAdd;