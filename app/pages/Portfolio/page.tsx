"use client"
import PageNav from '@/app/components/PageNav'
import type { CustomFlowbiteTheme } from 'flowbite-react';
import React from 'react'

import Portfolio from '@/app/components/Portfolio';

const customTheme: CustomFlowbiteTheme = {
  // button: {
  //   color: {
  //     primary: 'bg-blue-500 hover:bg-red-600',
  //   },
  // },
  tabs: {
    tablist: {
      tabitem: {
        styles: {
          pills: {
            active: {
              on: "bg-lime-500 px-5 py-2 h-max text-gray-50 rounded-md focus:ring-0 focus:outline-none active:outline-none ",
              off: "hover:bg-lime-500 px-5 py-2 h-max text-gray-950 rounded-md focus:outline-none focus:ring-0 transition ease-in-out duration-500"
            }
          }
        }
      }
    }
  }
};

const PortfolioPage = () => {
  return (
    <section suppressHydrationWarning ><PageNav name="Portfolio" />
      <div className='container m-auto sm:p-12' >
        <div className="overflow-x-auto" >

          <Portfolio />

        </div>
      </div>
    </section>
  )
}

export default PortfolioPage
