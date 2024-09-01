import React from 'react';

const cardData = [
  {
    title: 'Premium Cards',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRr-Oem8R37xHVPiusGRMcxyacn6dIQKKTeQ&s',
  },
  {
    title: 'Reward Cards',
    imageUrl: 'https://www.urlaubstracker.de/wp-content/uploads/2023/11/amex-blue-beitragsbild-2024-300x290.png',
  },
  {
    title: 'Travel Cards',
    imageUrl: 'https://www.americanexpress.com/content/dam/amex/en-in/business/payments/plat.jpg',
  },
  {
    title: 'Corporate Cards',
    imageUrl: 'https://icm.aexp-static.com/Internet/internationalcardshop/gcp/business/it_it/images/cards/Green.png',
  },
];

export default function HomeSectionCards() {
  return (
    <div className="flex mt-10 ml-20 mr-20 justify-center">
    <div className="container  grid grid-cols-12 gap-4">
      {/* Left Column Cards */}
      <div className="col-span-12 md:col-span-3 flex justify-center">
        <div className="space-y-0 items-center">
          {cardData.map(({ title, imageUrl }) => (
            <div key={title} className="max-w-full ml-10 card w-80 p-4">
              <img
                className="object-contain"
                style={{ height: '3.9rem', width: '3.9rem' }}
                src={imageUrl}
                alt={title}
              />
              <span className="ml-1 mt-1 font-semibold">
                <h3>{title}</h3>
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Center Image */}
      <div className="col-span-12 md:col-span-6 hidden lg:block">
        <img
          className="w-full h-100"
          src="https://www.medialogic.com/wp-content/uploads/2018/06/FS_american-express_dont-live-without-it-2.jpg"
          alt="Album"
        />
      </div>

      {/* Right Column Cards */}
      <div className="col-span-12 md:col-span-3 space-y-4">
        <div className="max-w-full bg-[#E6E6E6]">
          <a href="#">
            <img
              className="rounded-t-lg w-full"
              src="https://www.americanexpress.com/content/dam/amex/en-in/homepage/promo/Eligibility-Checker_Promo-Placement_400x130.jpg"
              alt=""
            />
          </a>
          <div className="p-2">
            <p className="mb-3 font-sans text-gray-700 dark:text-gray-400">
              Explore American Express &reg; Cards
            </p>
            <p className="mb-3 font-sans text-gray-700 dark:text-gray-400">
              Choose the Card that Suits You Best.
            </p>
          </div>
        </div>

          <div className="max-w-full bg-[#E6E6E6]">
          <a href="#">
            <img
              className="rounded-t-lg w-full"
              src="https://www.americanexpress.com/content/dam/amex/en-in/homepage/promo/Membership-Rewards_Promo-Placement_400x130.jpg"
              alt=""
            />
          </a>
          <div className="p-2">
            <p className="mb-3 font-sans text-gray-700 dark:text-gray-400">
              Rewards Always By Your Side
            </p>
            <p className="mb-3 font-sans text-gray-700 dark:text-gray-400">
              Make the Most of Your Points With 500+ redemption Points
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
