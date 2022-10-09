import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'initial deposit',
          type: 'deposit',
          category: 'servico',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:12')
        },
        {
          id: 2,
          title: 'initial withdraw',
          type: 'withdraw',
          category: 'compra',
          amount: 1500,
          createdAt: new Date('2022-02-12 01:00:12')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


