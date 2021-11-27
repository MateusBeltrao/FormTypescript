import { useNavigate } from 'react-router-dom'
import { Theme } from '../../Theme'
import * as C from './styles'
import { useForm, FormActions } from '../../FormContext'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () => {

    const navegar = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(()=>{
        dispatch({
            type:FormActions.setCurrentStep,
            payload: 1
        })
    }, [])


    const handleNextStep = () => {
        if(state.name === ''){
            alert('Preencha os dados')
        }else{
            navegar('/step2')
        }
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: event.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>passo 1/3 </p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu complete.</p>
               
                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text"
                        autoFocus
                        onChange={handleNameChange} 
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

