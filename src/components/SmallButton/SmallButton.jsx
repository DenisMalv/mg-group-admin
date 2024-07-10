
import './SmallButton.scss'


import Icon from 'components/Icons/IconSprite';

const SmallButton = ({iconName,stroke,color, customStyles, secondBtn, handleClick}) => {
 
  return (
    <button className={`small-button ${secondBtn ? 'second-btn' : ''} ${customStyles}`} onClick={handleClick}>
      <Icon classlist={``} id={iconName} name={iconName} color={color} stroke={stroke} width="24" height="24" />
    </button>
  );
};

export default SmallButton;





