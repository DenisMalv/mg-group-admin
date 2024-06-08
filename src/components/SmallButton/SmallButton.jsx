
import './SmallButton.scss'


import Icon from 'components/Icons/IconSprite';

const SmallButton = ({iconName,stroke,color, customStyles, handleClick}) => {
 
  return (
    <button className='small-button' onClick={handleClick}>
      <Icon classlist={``} id={iconName} name={iconName} color={color} stroke={stroke} width="24" height="24" />
    </button>
  );
};

export default SmallButton;





