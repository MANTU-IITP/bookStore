import React from 'react';

const Cards = ({ item }) => {
  console.log('Current item:', item); // ✅ Debug

  return (
    <div className="bg-white rounded-lg w-96 shadow-sm dark:bg-slate-900 dark:text-white">
      <figure>
        <img
          src={item.image}
          alt={item.title || "Book Image"}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </figure>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {item.category}
          </span>
        </div>
        <p className="mb-4">{item.title}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm font-semibold">
            ${item.price}
          </span>
          <button className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
