import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';

import { MAIL, PASSWORD } from '../../config';

import '../../styles/SignIn.css';

function SignIn() {
    const history = useHistory();
    const toast = useRef(null);
    const [mailId, setMailId] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        if (mailId === MAIL && password === PASSWORD)
            history.push("/explore");
        else {
            toast.current.show({ severity: 'error', summary: 'Invalid Credentials', life: 3000 });
        }
    }

    return (
        <div className="sign-in-container">
            <div className="sign-in-div">
                <div className="p-d-flex p-text-center p-flex-wrap p-m-6">
                    <p className="welcome-text p-my-2">Welcome back!</p>
                    <div className="p-col-12">
                        <p className="form-text p-text-left">Email *</p>
                        <InputText value={mailId} onChange={(e) => setMailId(e.target.value)} autoFocus required />
                    </div>
                    <div className="p-col-12">
                        <p className="form-text p-text-left p-mt-1">Password *</p>
                        <Password value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} required />
                    </div>
                    <div className="p-col-12 p-mt-4">
                        <Button label="Sign in" onClick={() => signIn()}></Button>
                    </div>
                </div>
                <Toast ref={toast} />
            </div>
        </div>
    )
}

export default SignIn
