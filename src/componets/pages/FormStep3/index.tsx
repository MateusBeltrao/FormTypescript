import * as C from './styles'
import { Theme } from '../../Theme'
import { useNavigate } from 'react-router'
import { ChangeEvent, useEffect } from 'react'
import { FormActions, useForm } from '../../FormContext'
import { Link } from 'react-router-dom'

export const FormStep3 = () => {

    const navegar = useNavigate()
    const {state,dispatch} = useForm()

    useEffect(() => {
        if(state.name === ''){
            navegar('/')
        }else{
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    
    const handleNext = () => {
        if(state.github === '' || state.email===''){
            alert('Preencha os campos')
        }else{
            navegar('/step4')
        }

        
       
    }

    const handleGit = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: event.target.value
        })
    }

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: event.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>passo 3/3</p>
                <h1>Legal {state.name}, onde te achaos?</h1>
                <p>Preencha com seu contatos para conseguimos entra em contato</p>
                <hr />
                <label>
                    Qual seu email?
                    <input
                    type="email"
                    onChange={handleEmail} />
                </label>
                <label>
                    Qual seu GitHub?
                    <input 
                    type="url" 
                    onChange={handleGit}/>
                </label>
                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNext}>Finaliza Cadastro</button>
            </C.Container>
        </Theme>
    )
}