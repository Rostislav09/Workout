import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../ui/button/Button'

import { useAuth } from '../../hooks/useAuth'

import Layout from '../Layout/layout'

import styles from './home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage={'./images/home-bg.jpg'}>
			<Button clickHandler={() => navigate(!isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}

export default Home
