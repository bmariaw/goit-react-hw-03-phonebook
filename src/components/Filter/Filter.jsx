import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter contacts by name:
        <Input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
