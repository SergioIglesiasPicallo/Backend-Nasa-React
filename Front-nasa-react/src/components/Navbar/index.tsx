import { FC, useCallback } from 'react'
import { Props } from './types'
import { useNavigate } from 'react-router-dom';
import { BackButton, Signout } from '../../components/Navbar/styles'
import { CustomNavbar, BLogout } from './styles'



const Navbar: FC<Props> = ({type='list'}) => {

    const navigate = useNavigate()

    const goToBack = useCallback(() => {
        navigate('/home')
    }, [navigate])


    
    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/login')
    }, [navigate])

    return (
        <CustomNavbar>
            {type === 'details' &&<BackButton onClick={goToBack}>🔙</BackButton>}
            <BLogout onClick={handleLogout}>Logout</BLogout>
        </CustomNavbar>
    )
}



export default Navbar