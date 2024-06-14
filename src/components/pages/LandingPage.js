import React from 'react'
import { Header } from '../Header'
import { Balance } from '../Balance';
import { IncomeExpenses } from '../functions/IncomeExpenses';
import { TransactionList } from '../TransactionList';
import { AddTransaction } from '../functions/AddIncome';
import { GlobalProvider } from '../../context/GlobalState';
import { NavigationBar } from '../NavigationBar';
import { LoginSignUp } from '../LoginSignUp'

export const LandingPage = () => {
  return (
    <GlobalProvider>
        <Header />
        <div className='Login'>
            <LoginSignUp />
        </div>
    </GlobalProvider>
  )
}
