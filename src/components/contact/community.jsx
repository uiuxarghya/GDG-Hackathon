import React from "react";
import Spline from '@splinetool/react-spline';

export default function Contact() {
  return (
    <section className=" bg-transparent">
      <div class="container px-6 py-12 mx-auto">
        <div>
          <p class="font-bold text-5xl text-purple-700">Contact us</p>
        </div>


        <div className="flex flex-row justify-center align-middle items-center ">
          <div>
            <main>
              <Spline
                scene="https://prod.spline.design/r7TkSVnOuOX-InjO/scene.splinecode"
              />
            </main>
          </div>
          <div class="p-4 py-6 rounded-lg bg-transparent md:p-8 w-[50%] -ml-48 mr-32 ">
            <form>
              <div class="-mx-2 md:items-center md:flex mt-8">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-md text-start text-gray-200">First Name</label>
                  <input type="text" placeholder="First Name" class="block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border " />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-md text-start text-gray-200">Last Name</label>
                  <input type="text" placeholder="Last Name" class="block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border " />
                </div>
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-md text-start text-gray-200">Email address</label>
                <input type="email" placeholder="user@gmail.com" class="block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border " />
              </div>

              <div class="w-full mt-4">
                <label class="block mb-2 text-md text-start text-gray-200">Send Your Message</label>
                <textarea class=" h-32  block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border " placeholder="Message"></textarea>
              </div>

              <button class="w-full px-6 py-3 mt-4 text-md font-medium tracking-wide bg-purple-700 text-white rounded-2xl">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

    </section >
  )
}