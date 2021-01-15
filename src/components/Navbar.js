import React, {useContext} from 'react'
import { Container, Anchor, Icon } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Navbar = () => {

    const { openCart } = useContext(ShopContext)

    return (
        <>  
            <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
                <Link to="/"><img src="https://picario.web.app/static/media/gif-logo-rev.e94c6bcb.bin" height={20} ></img></Link>
                <Anchor onClick={() => openCart()}><Icon name="Bag" size="20px" color="black500" /></Anchor>
            </Container>
        </>
    )
}

export default Navbar
