const Button = ({handleClick, name, seconds}) => {
  return ( <button value={seconds} onClick={handleClick}>{name}</button> );
}
 
export default Button;