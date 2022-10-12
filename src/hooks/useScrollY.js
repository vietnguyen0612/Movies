import {useEffect,useState} from 'react';

export function UseScrollY() {
   
        const [scrollY, setScrollY] = useState(0)

    const handleScrollY = ()=> {
        const scroll = window.scrollY || document.documentElement.scrollTop

        setScrollY(scroll)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollY)
        return() => {
            window.removeEventListener('scroll', handleScrollY)
        }
    },[])

    return scrollY
}
