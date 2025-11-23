import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <div>
        <main className="max-w-10xl mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Pricing Plans</h1>
            <p className="mb-4">Choose a plan that suits your needs. All plans include access to all features of TwixTalks.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow"> 
                    <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
                    <p className="mb-4">Access to basic features, limited to 100 tweets per month.</p>
                    <p className="text-green-500 font-bold">$0/month</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Here!</button>
            </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
                    <p className="mb-4">Unlimited tweets, access to premium features, and priority support.</p>
                    <p className="text-green-500 font-bold">$19.99/month</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Here!</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">Business Plan</h3>
                    <p className="mb-4">All Pro features plus team collaboration tools and analytics.</p>
                    <p className="text-green-500 font-bold">$29.99/month</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Here!</button>
                </div>
            </div>
            <p className="mt-4">For custom plans or enterprise solutions, please <a href="/contact" className="text-blue-500">contact us</a>.</p>
        </main>
        <section className="bg-gray-100 p-4 rounded-lg max-w-2xl mx-auto mt-8">
            <h3 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h3>
            <p>Have questions about our pricing? Check out our <a href="/faq" className="text-blue-500">FAQ</a> page for more information.</p>
        </section>
        <section className="bg-gray-200 p-4 rounded-lg max-w-2xl mx-auto mt-8">
            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
            <p>If you have any further questions or need assistance, please <a href="/contact" className="text-blue-500">reach out to us</a>.</p>
        </section>
    </div>
  )
}

export default Pricing