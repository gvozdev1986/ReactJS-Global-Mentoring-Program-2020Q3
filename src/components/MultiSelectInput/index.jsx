import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-multi-select-component';
import './style.css';
import Constants from '../../constants';

const buildValues = (elem) => elem.map((e) => ({ label: e, value: e }));

const MultiSelectInput = ({ title, options, onAction, preselected }) => {
  const [selected, setSelected] = useState(buildValues(preselected) || []);

  const onChange = (selectedElements) => {
    onAction(selectedElements);
    setSelected(selectedElements);
  };

  const ArrowRenderer = ({ expanded }) => (expanded ? <img className="arrow" src={Constants.ARROWS[0]} alt="arrow_up"/> :
    <img className="arrow" src={Constants.ARROWS[1]} alt="arrow_down"/>);

  return (
    <label htmlFor="genres" className="genres" id="malty">
      {title}
      <MultiSelect
        id="genres"
        ArrowRenderer={ArrowRenderer}
        options={options}
        value={selected}
        onChange={onChange}
        hasSelectAll={false}
        labelledBy="malty"/>
    </label>
  );
};

MultiSelectInput.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired
    }),
  ).isRequired,
  preselected: PropTypes.arrayOf(PropTypes.string),
};

MultiSelectInput.defaultProps = {
  preselected: []
};

export default MultiSelectInput;