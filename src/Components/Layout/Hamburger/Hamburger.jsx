import React from 'react';

import { useState } from 'react'
import { FiAlignRight, FiX } from 'react-icons/fi'

import { useOnclickOutside } from '../../../hooks/useOnClickOutside'

import styles from '../Hamburger/hamburger.module.scss'

import Menu from './Menu'

const Hamburger = () => {
	const { isShow, setIsShow, ref } = useOnclickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <FiX/> : <FiAlignRight/>}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
