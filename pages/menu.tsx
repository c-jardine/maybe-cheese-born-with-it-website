import { NextSeo } from 'next-seo';
import Link from 'next/link';

const MenuItem = ({
  name,
  price,
  children,
}: {
  name: string;
  price: string;
  children: string;
}) => {
  return (
    <div className='relative'>
      <div className='absolute -left-14 flex justify-center items-center text-white font-bold font-handwriting text-xl w-12 h-12 bg-yellow-500 rounded-full'>
        {price}
      </div>
      <h2 className='font-handwriting text-2xl font-bold text-brand-600'>
        {name}
      </h2>
      <p className='text-sm'>{children}</p>
    </div>
  );
};

const Menu = () => {
  const menu = [
    {
      name: "Bubba's Bacon Chicken BBQ",
      description:
        'Bacon, chicken, caramelized onions and scallions drizzled with our house BBQ sauce and sprinkled with sharp cheddar cheese. Make a mess, you deserve it.',
      price: '$15',
    },
    {
      name: "Don't Go Bacon My Heart",
      description:
        "Mac n' cheese with juicy chicken and crisp bacon, drizzled with our house ranch and topped with sharp cheddar cheese. Ranch dressing should really go on everything, right?",
      price: '$15',
    },
    {
      name: 'Sweet Dreams Are Made of Cheese',
      description:
        'Five cheeses, no regrets. Aged cheddar, smooth white American, fresh mozzarella, tangy Swiss, and parmesan cheese, topped with a sprinkle of parsley to make it fancy.',
      price: '$15',
    },
    {
      name: 'Cray Cray Caprese',
      description:
        'Our caprese mac is a little bit classy and a little bit sassy. Classic mac n cheese topped with fresh mozzarella, basil leaves, ripe cherry tomatoes, and drizzled with balsamic glaze. Fuhgeddaboutit.',
      price: '$15',
    },
    {
      name: 'Truffle Shuffle Mac',
      description:
        "Classic mac n cheese drizzled with decadent truffle oil and sprinkled with parmesan and parsley. Oh, she's fancy.",
      price: '$15',
    },
    {
      name: 'I Swissed a Girl and I Liked It',
      description:
        'Tangy Swiss cheese paired with roasted baby bellas on top of creamy white American mac & cheese.',
      price: '$15',
    },
    {
      name: 'Pesto Both Worlds',
      description:
        "Classic mac n' cheese paired with bold pesto, parmesan cheese, and drizzled with balsamic glaze. Throw on a blonde wig to fool your friends.",
      price: '$15',
    },
    {
      name: 'Take Off All Your Cloves',
      description:
        "It's gettin' hot in here with white mac n cheese mixed with roasted garlic and parmesan cheese.",
      price: '$15',
    },
    {
      name: "Baby I'm Burnin' Hot Cheeto",
      description:
        'Classic mac piled high with crumbled hot Cheetos, sharp cheddar cheese, and cool ranch.',
      price: '$15',
    },
  ];

  return (
    <div className='relative py-16 px-2'>
      <NextSeo
        title='Serving the Sassiest Mac n Cheese at Your Event | Toledo, OH'
        description="Whether you're planning a wedding, birthday party, graduation party, or just need an excuse to eat mac and cheese, we're sure to be the best in Toledo!"
        canonical='https://www.maybecheesebornwithit.com/menu'
      />
      <div className='bg-white max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-black'>
        <div className='flex flex-col gap-32 py-16 px-4 max-w-5xl mx-auto sm:py-24 sm:px-6 lg:px-8'>
          <div>
            <div className='flex justify-center text-center'>
              <h1 className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                GET YOUR CHEESE ON
              </h1>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-20 md:grid-cols-2 ml-14 max-w-4xl mx-auto'>
              {menu.map((item) => {
                return (
                  <MenuItem key={item.name} name={item.name} price={item.price}>
                    {item.description}
                  </MenuItem>
                );
              })}
            </div>
            <div className='mt-16 flex justify-center text-center'>
              <p className='font-display text-yellow-500 text-4xl sm:text-6xl font-extrabold [text-shadow:_-2px_2px_0px_#CE5937]'>
                GET YOUR SALAD TOSSED
              </p>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-20 md:grid-cols-2 ml-14 max-w-4xl mx-auto'>
              <MenuItem name='Cray Cray Caprese Salad' price='$8'>
                Caprese salad with fresh mozzarella, basil leaves, and cherry
                tomatoes, served in a to-go cup with a balsamic glaze rim. Live
                that Jersey housewife fantasy.
              </MenuItem>
            </div>
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className='flex flex-col items-center mt-16 sm:mt-32 text-center bg-brand-500/50 backdrop-blur-md max-w-lg mx-auto px-8 py-8 sm:py-12 rounded-lg border-2 border-black'>
          <p className='text-3xl sm:text-4xl font-handwriting text-white font-bold'>
            Book Us for Your Event!
          </p>
          <Link href='/contact' passHref>
            <button className='mt-8 flex w-min items-center px-8 py-2 text-xl rounded-lg shadow-md font-semibold bg-yellow-400 hover:bg-yellow-500 transition'>
              <span>Contact</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ml-4 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Menu;
