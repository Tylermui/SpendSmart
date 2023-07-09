import React from 'react'
import { Header } from '../Header'
import { Balance } from '../Balance';
import { IncomeExpenses } from '../IncomeExpenses';
import { TransactionList } from '../TransactionList';
import { AddTransaction } from '../AddIncome';
import { GlobalProvider } from '../../context/GlobalState';
import { NavigationBar } from '../NavigationBar';

export const AddIncomePage = () => {
  return (
    <GlobalProvider>
      <NavigationBar />
      <Header />
      <div className='Balance'>
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}
