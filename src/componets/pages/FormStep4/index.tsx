import * as C from './styles'
import { Theme } from '../../Theme'
import { useForm, FormActions } from '../../FormContext'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export const FormStep4 = () => {

    const {state, dispatch} = useForm()
    const navegar = useNavigate()

    const handleAlteraDados = () => {
        navegar('/')
    }

    useEffect(() => {
        if(state.name === ''){
            navegar('/')
        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    return(
        <Theme>
            <C.Container>
                <p>Obrigado pelo registro</p>
                <h1>Dados</h1>
                <hr />
                <p>{state.name}</p>
                <p>{state.email}</p>
                <p>{state.github}</p>
                <p>{state.lev}</p>
                <button onClick={handleAlteraDados}>Altera Dados</button>
            </C.Container>
        </Theme>
    )
}