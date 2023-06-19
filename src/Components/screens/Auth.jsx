import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Loader from '../ui/Loader'
import Button from '../ui/button/Button'
import Field from '../ui/field/field'

import Layout from '../Layout/layout'

import styles from './auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('auth')

	const { register, handleSubmit , formState: { errors }} = useForm({
		mode: 'onChange'
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	const isLoading = false
	const isLoadingAuth = false

	return (
		<>
		<Layout heading='Sign In' bgImage='/images/bg-auth.png'/>
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
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
						<Button clickHandler={() => setType('auth')}>Sign In</Button>
						<Button clickHandler={() => setType('reg')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
