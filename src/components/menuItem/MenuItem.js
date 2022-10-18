import { colorRandom } from '../untils/untils';
import './menuItem.scss';

function MenuItem({Icon, name}) {
    return (  
        <div className='home menu-icon'>
            <Icon className='icon' style={{color: colorRandom(1)}}/>
            <span>{name}</span>
        </div>
    );
}

export default MenuItem;