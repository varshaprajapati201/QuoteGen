import React from 'react';

export const QuoteCard = ({ item }) => {
  return (
    <div className="w-[90%] bg-gray-50 sm:w-[300px] rounded-xl  shadow hover:bg-gray-100 flex-col items-center justify-center p-4 text-center">
      {/* <div className="w-full flex items-center justify-center mb-6">
        <img
          src={`https://images.quotable.dev/profile/200/${quote.authorSlug}.jpg`}
          alt={quote.author}
          className="w-[100px] rounded-full"
        />
      </div> */}

      <div>
        <h3>{item.author}</h3>
        <p className="opacity-40">{item.quote}</p>
      </div>
    </div>
  );
};
