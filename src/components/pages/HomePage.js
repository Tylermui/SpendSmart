import React from 'react'
import { Header } from '../Header'
import { Balance } from '../Balance';
import { IncomeExpenses } from '../IncomeExpenses';
import { TransactionList } from '../TransactionList';
import { AddTransaction } from '../AddIncome';
import { GlobalProvider } from '../../context/GlobalState';
import { NavigationBar } from '../NavigationBar';

export const HomePage = () => {
  return (
    <GlobalProvider>
        <NavigationBar />
        <Header />
        <div className='Balance'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  )
}
