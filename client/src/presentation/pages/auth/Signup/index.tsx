import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '@store/actions/auth.actions';
import { useMutation } from 'react-query';
import Alert from '@components/Alert';
import PageLoader from '@components/Loaders/PageLoader';
import { register } from '@services/auth.servise';
import IRegister from 'src/domaine/IRegister';

interface IFormFields {
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    birthDate: Date | string
}

function formReduser(state: IFormFields, action: { type: string; payload: string | Date; }) {
    return { ...state, [action.type]: action.payload }
}

const Signup = () => {
    const [formState, updateFormState] = useReducer(formReduser, { email: '', password: '', firstName: '', lastName: '', birthDate: '', confirmPassword: '' })
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: (formData: IFormFields) => register(formData as unknown as IRegister),
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
            {
                isError && (
                    <Alert
                        className="absolute top-6 bg-red-50 rounded-md text-red-700"
                        message={isError ? 'Invalid email or password' : ''}
                        type="error"
                    />
                )
            }
            {
                isLoading
                &&
                <PageLoader />
            }


            <div className="w-full max-w-md p-10 rounded-md drop-shadow-md border border-gray-200 dark:border-0  bg-white dark:bg-dark-bg-main">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#22d3ee]">Sign Up</h2>
                        <div className="w-full flex gap-3">
                            <input
                                className="capitalize  rounded-md  shadow-2xl p-3 ex w-full border-gray-200  border  outline-none focus:border-[#035ec5] placeholder:text-black"
                                type="text" placeholder="First Name"
                                name="First-Name"
                                onChange={(e) => dispatch({ type: 'firstName', payload: e.target.value })}
                                required />
                            <input
                                className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => dispatch({ type: 'lastName', payload: e.target.value })}
                                name="Last-Name"
                                required
                            />
                        </div>
                        <div className="grid gap-6 w-full">
                            <input className="p-3 shadow-2xl  glass w-full placeholder:text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="Email"
                                placeholder="Email"
                                name="email"
                                required
                                onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
                            />
                            <input
                                className="p-3 shadow-2xl   glass w-full text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="date"
                                required
                                onChange={(e) => dispatch({ type: 'date', payload: e.target.value })}
                            />
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="p-3 glass shadow-2xl  w-full placeholder:text-black  border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                                required />
                            <input
                                className="p-3 glass shadow-2xl  w-full placeholder:text-black  border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="password"
                                placeholder="Confirm password"
                                onChange={(e) => dispatch({ type: 'confirmPassword', payload: e.target.value })}
                                required />
                        </div>
                        <button type="submit" value="Login" className="flex w-full justify-center rounded-md bg-[#22d3ee] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        <p className="dark:text-gray-200 text-center">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold"> Sign in</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup;