import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FormStep1 } from './componets/pages/FormStep1';
import { FormStep2 } from './componets/pages/FormStep2';
import { FormStep3 } from './componets/pages/FormStep3';
import { FormStep4 } from './componets/pages/FormStep4';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1></FormStep1>} />
                <Route path="/step2" element={<FormStep2></FormStep2>} />
                <Route path="/step3" element={<FormStep3></FormStep3>} />
                <Route path="/step4" element={<FormStep4></FormStep4>} />
            </Routes>
        </BrowserRouter>
    )
}
