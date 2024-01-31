import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '@store/actions/auth.actions';
import { useMutation } from 'react-query';
import Alert from '@components/Alert';
import PageLoader from '@components/Loaders/PageLoader';
import { login } from '@services/auth.servise';

interface IFormFields {
    email: string;
    password: string;
}

function formReducer(
    state: IFormFields,
    action: { type: 'email' | 'password'  ; payload: string }
): IFormFields {
    return { ...state, [action.type]: action.payload };
}

function Login() {
    const [formState, updateFormState] = useReducer(formReducer, { email: '', password: '' });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: (formData: IFormFields) => login(formData.email, formData.password),
        onSuccess: (data) => {
            dispatch(loginAction(data));
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            navigate('/todo');
        },
        onError: () => {
            updateFormState({ type: 'password', payload: '' });
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            mutate(formState);
        } catch (err) {
            console.error('Error during mutation:', err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-full px-6">
            {isError && (
                <Alert
                    className="absolute top-6 bg-red-50 rounded-md text-red-700"
                    message={isError ? 'Invalid email or password' : ''}
                    type="error"
                />
            )}
            {isLoading && <PageLoader />}

            <div className="w-full max-w-md p-10 rounded-md drop-shadow-md border border-gray-200 dark:border-0 bg-white dark:bg-dark-bg-main">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-6 w-full">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#22d3ee]">
                            Sign In
                        </h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={formState.email}
                            onChange={(e) => updateFormState({ type: 'email', payload: e.target.value })}
                            required
                            className="p-3 shadow-2xl glass w-full placeholder:text-black border-gray-200 border rounded-md outline-none focus:border-[#035ec5]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={(e) => updateFormState({ type: 'password', payload: e.target.value })}
                            className="p-3 shadow-2xl glass w-full placeholder:text-black border-gray-200 border rounded-md outline-none focus:border-[#035ec5]"
                        />
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#22d3ee] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                        <p className="dark:text-gray-200 text-center">
                            Need an account?
                            <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
