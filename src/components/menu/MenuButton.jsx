import { Link } from 'react-router-dom';
import '../../styles.css';

export const MenuButton = ({ value, id, text, className, onClick }) => {

    return <>
    
        <li className="menuItem"><Link onClick={onClick} className={className} to={value} key={id}>{text}</Link></li>
        
    </>

}