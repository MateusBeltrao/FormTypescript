import { Link } from 'react-router-dom'
import * as C from './styled'
import {ReactComponent as Profileicon} from '../../svgs/profile.svg'
import {ReactComponent as Bookicon} from '../../svgs/book.svg'
import {ReactComponent as Mailicon} from '../../svgs/mail.svg'
import {ReactComponent as Cafeicon} from '../../svgs/cafe.svg'


type Props = {
    title: string
    descripton: string
    icon: string
    path: string
    active: boolean
}

export const SiderbarItem = ({title, descripton, icon, path, active}: Props) => {

    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Descripton>{descripton}</C.Descripton>
                </C.Info>
                <C.IconArea active={active}> 
                    {icon === 'profile' && 
                        <Profileicon fill='white' width={24} height={24}/>
                    }
                    {icon === 'book' && 
                        <Bookicon fill='white' width={24} height={24}/>
                    }
                    {icon === 'mail' && 
                        <Mailicon fill='white' width={24} height={24}/>
                    }
                    {icon === 'cafe' && 
                        <Cafeicon fill='white' width={24} height={24}/>
                    }
                </C.IconArea>
                <C.Point active={active}>

                </C.Point>
            </Link>
        </C.Container>
    )
}