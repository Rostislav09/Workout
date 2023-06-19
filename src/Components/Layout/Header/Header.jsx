import { IoMdArrowBack } from 'react-icons/io'

import { VscAccount } from "react-icons/vsc";
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import React from 'react';

import Hamburger from '../Hamburger/Hamburger'

import styles from './header.module.scss'

const Header = ({ backLink='' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
                <button 
                onClick={() => {
                    navigate(backLink)
                }}
                >
				<IoMdArrowBack color='white' fontSize={30} />
			</button>
            ): 
            <button 
                onClick={() => {
                    navigate(isAuth ? '/profile' : '/auth')
                }}
                >
				<VscAccount color='white' fontSize={30} />
			</button>}
			<Hamburger />
		</header>
	)
}

export default Header
