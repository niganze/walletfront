import React, { useEffect, useState } from 'react';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch transactions from the endpoint
    fetch('https://walletbacked.onrender.com/api/transactions')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Transactions:', data); // Debug the response
        setTransactions(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load transactions.');
      });
  }, []);

  return (
    <div className="p-4">
      {/* Recent Transactions Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : transactions.length > 0 ? (
          <ul className="space-y-3">
            {transactions.map((transaction) => (
              <li
                key={transaction._id} // Use `_id` as the unique key
                className="border p-3 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="text-gray-700 font-semibold">
                    {transaction.name ?? 'No Name Provided'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction.createdAt
                      ? new Date(transaction.createdAt).toLocaleDateString()
                      : 'Unknown Date'}{' '}
                    - {transaction.parentCategory ?? 'No Category'}
                  </p>
                </div>
                <p className="font-bold text-gray-800">
                  {/* Add transaction amount or other details here if available */}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent transactions found.</p>
        )}
      </div>

      {/* Additional Content Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Budget Insights</h2>
        <p className="text-gray-600">
          Set a budget to avoid overspending. Track your expenses effectively and stay within
          your financial goals.
        </p>
        <div className="mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Set a Budget
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
