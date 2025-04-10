const InputGroup = ({ 
  id, 
  type = "text", 
  label, 
  required = false, 
  errorMessage = "",
  value,
  onChange,
  showError = false  
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        value={value} 
        onChange={onChange} 
        required={required}
        className={showError ? 'input-error' : ''}
      />
      {showError && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default InputGroup;