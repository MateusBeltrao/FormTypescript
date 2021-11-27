import { ReactNode } from 'react'
import { Header } from '../Header'
import * as C from './styles'
import { SiderbarItem } from '../sidebarItem'
import {useForm} from '../../componets/FormContext'

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {

    const {state} = useForm()

    return(
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>

                        <SiderbarItem
                            title='Pessoal'
                            descripton="se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SiderbarItem
                            title='Profissinal'
                            descripton="se identifique"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SiderbarItem
                            title='Contatos'
                            descripton="como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SiderbarItem
                            title='Dados'
                            descripton='Seus dados'
                            icon='cafe'
                            path='/step4'
                            active={state.currentStep === 4}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}