import React,{ useRef,useState,useEffect } from 'react';
import './SelectBox.scss'

import Icon from 'components/Icons/IconSprite';



const SelectBox = ({ title, classList, value = '', name, type, handleChange, error, errorMessage, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(()=>options.find(el=>el.role===value)?.name);
    const selectRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (el) => {
      setSelectedValue(el.name);
      handleChange({ target: { name:'role', value: el.role } });
      setIsOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
        
      <div className={`select-label ${classList}`} ref={selectRef}>
        <p className='select-label-text'>{title}</p>
  
        <div className={`select-wrapper`} onClick={toggleDropdown}>
          <input
            value={selectedValue}
            name={name}
            className={`form-select-iso ${error ? 'error' : ''}`}
            type={type}
            readOnly
          />
          <Icon classlist={`form-select-icon ${isOpen ? 'open' : ''} ${error ? '' : 'show'}`} id={`select-arrow`} name="select-arrow" color="transparent" stroke='#333C38' width="24" height="24" />
          <Icon classlist={`form-input-ico ${error ? 'error' : ''}`} id={`warning`} name="warning" color="#DD7A02" width="24" height="24"/>
        </div>
  
        {isOpen && (
          <ul className="select-options">
            {options.map((el, index) => (
              <li
                key={index}
                className="select-option"
                onClick={() => handleOptionClick(el)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        )}
  
        <span className={`select-error ${error ? 'error' : ''}`}>{errorMessage}</span>
      </div>
    );
  };
  
  export default SelectBox;
