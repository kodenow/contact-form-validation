"use client";

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { useForm } from 'react-hook-form';


export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Contact Form with validations using react-hook-form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div>
          <div>
            <a
              href="http://www.kodenow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/KodeNowLogo.png"
                alt="KodeNow logo"
                width={100}
                height={16}
                priority
              />
            </a>
          </div>
        </div>

          <form className="basis-[40%] md:basis-[60%] xl:basis-[50%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="field__wrap relative z-10 ">
            <input 
              type="text" name="name" placeholder="Name"
              className={`field__input h-16 px-4 caret-gray-200 focus:outline-none ${
                errors.name ? 'border-red-500' : ''
                }`}
                {...register('name', { required: true })}
              />
               {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
      
          </div>

          <div className="field__wrap relative z-10 mt-4">
            <input 
              type="email" name="email" placeholder="Email"
              className={`field__input h-16 px-4 caret-gray-200 focus:outline-none ${
                errors.name ? 'border-red-500' : ''
                }`}
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
               {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
        
          </div>

          <div className="field__wrap relative z-10 mt-4">
            <textarea  
              name="message" placeholder="Message"
              className={`field__input h-60 px-4 pt-2 caret-gray-200 focus:outline-none ${
                errors.message ? 'border-red-500' : ''
                }`}
                {...register('message', { required: true })}
              />
               {errors.message && (
                <span className="text-red-500 text-sm">Message is required</span>
              )}
    
          </div>

          <button
            id="contactBtn"
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>   
      </main>
    </>
  )
}
