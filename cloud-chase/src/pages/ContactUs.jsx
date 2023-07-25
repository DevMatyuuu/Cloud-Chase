import React from 'react'
import { Button } from '@material-tailwind/react'

function ContactUs() {
  return (
    <section className='text-white'>
        <div className="py-8 lg:py-16 px-6 mx-auto md:max-w-[1000px] sl:max-w-[1000px] sm:max-w-[600px] md:mt-10 sl:mt-5 sm:mt-5 sm:mb-5 mt-5 mb-5 sl:mb-5 md:mb-10 rounded-xl bg-gradient-to-b from-gray-900 to-gray-600">
            <h2 className="mb-7 sl:text-4xl md:text-4xl sm:text-2xl tracking-tight font-poppins font-bold text-center text-white uppercase">Contact Us</h2>
            <p className="mb-8 sm:mb-6 lg:mb-16 font-poppins text-center text-white sm:text-md">Got a technical issue? Want to send feedback about our service? Need assistance about our product? Let us know.</p>
            <form action="#" className="space-y-8">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required></input>
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <Button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</Button>
            </form>
        </div>
  </section>
  )
}


export default ContactUs