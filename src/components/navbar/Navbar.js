import { useRef} from 'react'
import {BiSearch} from 'react-icons/bi'

import logo from '../../assets/tmovie.png'
import './navbar.scss'

import { UseScrollY } from '../../hooks/useScrollY'

function Navbar({check, setCheck}) {
    const ref = useRef(null)
    const handleCheck = () => {
        setCheck(!check)
        if(!check) {
            ref.current.focus()

        } 
    }

    const scrollY = UseScrollY();

    return (  
        <div className={scrollY < 150 ? 'Navbar' : `Navbar active`} >
            <div className='logo'>
                <img src={logo} alt='' />
                <h1>My Movies</h1>
            </div>
            <div className={'search ' + (check && 'active')}>
                <div onClick={handleCheck}>
                    <BiSearch className='search__icon' />
                </div>
                
                <input ref={ref} type='text' placeholder='Enter movie or actor name' onBlur={() => setCheck(false)}/>
            </div>
        </div>
    );
}

export default Navbar;