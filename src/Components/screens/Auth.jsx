import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query';

import Loader from '../ui/Loader'
import Button from '../ui/button/Button'
import Field from '../ui/field/field'

import Layout from '../Layout/layout'

import styles from './auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({email, password}) => AuthService.main(email, password,type),
		{
			onSuccess: (data) => {
				alert('success')
				reset()
			}
		}
	)

	const onSubmit = (data) => {
		mutate(data)
	}

	return (
		<>
			<Layout heading='Sign In' bgImage='/images/bg-auth.png' />
			<div className='wrapper-inner-page'>
				{(isLoading) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign In</Button>
						<Button clickHandler={() => setType('register')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
