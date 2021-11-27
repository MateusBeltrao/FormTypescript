import { Router} from './router'
import { FormProvider } from './componets/FormContext';

const App = () => {
  return(
    <FormProvider>
      <Router/>
    </FormProvider>
  );
}

export default App