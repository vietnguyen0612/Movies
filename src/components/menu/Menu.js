import {FaHome, FaHotjar, FaStar} from 'react-icons/fa'
import {MdTheaterComedy} from 'react-icons/md'

import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll
} from 'react-icons/gi'

import './menu.scss';
import MenuItem from '../menuItem/MenuItem';

function Menu() {
    return (  
        <div className='menu'>
            <MenuItem Icon={FaHome} name='Home' />
            <MenuItem Icon={FaHotjar} name='Trending' />
            <MenuItem Icon={FaStar} name='Top rated' />
            <MenuItem Icon={GiNinjaHeroicStance} name='Actions Movies' />
            <MenuItem Icon={MdTheaterComedy} name='Comedy Movies' />
            <MenuItem Icon={GiGhost} name='Horror Movies' />
            <MenuItem Icon={GiRomanToga} name='Romance Movies' />
            <MenuItem Icon={GiBandageRoll} name='Documentaries' />  
            
        </div>
    );
}

export default Menu;