import React from 'react';
import { useParams } from 'react-router-dom';
import { BET_CONTENT } from '../constants'; 

const BetDetails = () => {
  const { id } = useParams();
  const bet = BET_CONTENT.bets.find(bet => bet.id === parseInt(id));

  if (!bet) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-neutral-400 text-5xl">Bet not found :( select specific Bet from BetMarket)</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bet-details p-6 bg-neutral-900 rounded-xl shadow-lg">
      <div className="flex justify-center">
        <img
            src={bet.image}
            alt={bet.title}
            className="rounded-lg mb-4 h-40 w-40"
        />
        </div>
        <h2 className="text-2xl font-semibold mb-4">{bet.title}</h2>
        <p className="text-neutral-400 mb-4">{bet.description}</p>
        <div className="flex justify-around mb-4">
          <button className="bg-green-600 py-2 px-4 rounded-lg">
            Yes ({bet.yesPercentage}%)
          </button>
          <button className="bg-red-600 py-2 px-4 rounded-lg">
            No ({bet.noPercentage}%)
          </button>
        </div>
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 mb-4 rounded-lg text-black"
        />
        <button className="bg-blue-600 w-full py-3 px-4 rounded-lg">Buy</button>
        <div className="text-neutral-400 mt-4">
          <p>Volume: {bet.volume} USDC</p>
          <p>Liquidity: {bet.liquidity} USDC</p>
          <p>Expires At: {bet.expiryDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BetDetails;
