import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import NewTransactionModal from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
      setNewTransactionModalOpen(true) 
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalOpen(false) 
  }
  return (
      <TransactionsProvider>
        <Header onOpenNewTransacionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
        />
        <GlobalStyle />
      </TransactionsProvider>
  );
}

export default App;
