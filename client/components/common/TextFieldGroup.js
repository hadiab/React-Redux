import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error} )}>
      <label className="control-label" htmlFor={field}><strong>{label}</strong></label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={field}
        className="form-control"
        id={field} />
        {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
