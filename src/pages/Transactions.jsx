import React, { useEffect, useState } from 'react';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('bank');

  useEffect(() => {
    // Fetch transactions
    fetch('https://walletbacked.onrender.com/api/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch(() => setError('Failed to load transactions.'));

    // Fetch categories
    fetch('https://walletbacked.onrender.com/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data)) // Directly setting categories array
      .catch(() => setError('Failed to load categories.'));
  }, []);

  const handleSetBudget = async () => {
    const budgetData = {
      amount: amount,
      account: account,
      category: selectedCategory,
      user: 'userId', // Replace with actual user ID
    };

    try {
      const response = await fetch('https://walletbacked.onrender.com/api/budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(budgetData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Budget set successfully');
        setIsModalOpen(false); // Close the modal after successful submission
      } else {
        alert('Failed to set budget');
      }
    } catch (err) {
      alert('Error setting budget');
    }
  };

  // Helper function to get the category name by ID
  const getCategoryNameById = (id) => {
    const category = categories.find((category) => category._id === id);
    return category ? category.name : 'Unknown Category';
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : transactions.length > 0 ? (
          <ul className="space-y-3">
            {transactions.map((transaction) => (
              <li
                key={transaction._id}
                className="border p-3 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-gray-700 font-semibold">
                      {transaction.account ?? 'No Account Provided'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString() ?? 'Unknown Date'}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 font-semibold">
                      {getCategoryNameById(transaction.category._id)} {/* Display category name */}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    {transaction.type === 'income' ? `+${transaction.amount}` : `-${transaction.amount}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent transactions found.</p>
        )}
      </div>

      {/* Budget Insights Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Budget Insights</h2>
        <p className="text-gray-600">
          Set a budget to avoid overspending. Track your expenses effectively and stay within
          your financial goals.
        </p>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on button click
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Set Budget
          </button>
        </div>
      </div>

      {/* Modal for Setting Budget */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Set Your Budget</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Account</label>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md"
              >
                <option value="bank">Bank</option>
                <option value="cash">Cash</option>
                <option value="mobileMoney">Mobile Money</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)} // Close modal on cancel
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSetBudget} // Call handleSetBudget when setting budget
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Set Budget
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transactions;
