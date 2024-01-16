import { Stripe } from 'stripe'
import Image from 'next/image'

async function loadPrices() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product']
  })
  return prices
}

async function PricingPage() {
  const prices = await loadPrices()

  return(
    <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-4 gap-x2 bg-white text-black'>
      <h1 className='my-5 text-center'>Pricing</h1>
      {
        // 20 Min YT Video
        prices.map(price => (
          <div key={price.id} className='mb-2 p-6 border-2 border-red-800'>
            <h3>{price.product.name}</h3>
            <h2 className='text-center text-2xl font-bold'>{price.unit_amount / 100} $</h2>
            <div className=''>
              <img src={price.product.images} alt={price.product.name} 
                className='w-40 h-40 object-cover' 
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PricingPage