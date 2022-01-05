import * as C from './styles'
import { Theme } from '../../Theme'
import { useNavigate } from 'react-router'
import { SelectOption } from '../../selecOption'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm, FormActions } from '../../FormContext'


export const FormStep2 = () => {


    const navegar = useNavigate();
    const {state, dispatch} = useForm()

    useEffect(() => {
        if(state.name === ''){
            navegar('/')
        } else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])
        
       

    const handleNextStep = () => {
        navegar('/step3')
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual profissional.</p>
                <hr />
                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programa há menos de 2 anos"
                    icon="🐰"
                    selected={state.level === 0 && state.lev ==="Comecei a programa há menos de 2 anos"}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title="Sou Programador"
                    description="Já programo há 2 anos ou mais"
                    icon="🐯"
                    selected={state.level === 1}
                    
                    onClick={()=>setLevel(1)}
                />
                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
        
    )
}