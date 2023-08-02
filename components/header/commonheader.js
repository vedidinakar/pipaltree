import React, {useState, useEffect, useRef } from 'react';
import { deleteCookie } from 'cookies-next';
import Router, { useRouter } from "next/router";



export default function CommonHeader(){
    const router = useRouter();
    const goToMonitor = () =>{
      Router.push("/monitor");
    }
    const goToDashboard = () =>{
      Router.push("/");
    }
    const goToReports = () =>{
      Router.push("/reports");
    }
    const goTocustomers = () =>{
      Router.push("/customers");
    }
    
    

    return (
        <header className= "w-full top-0">
          <div className= "flex items-center flex-wrap py-5 px-8 bg-white">
            <div className='w-full inline-flex justify-between'>
              <div className= "">
                <a href="/">
                  <img className='w-28 sm:w-11/12 xs:w-11/12'  src='/logo.png' />
                </a>
              </div>
              <div className='text-black'>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-2">
                        <a href="/" className={`inline-flex  items-center px-4 py-3 cursor-pointer ${router.pathname === ("/")?"bg-tabsActiveColor rounded-lg active text-white":"bg-white text-primaryColor"} `} aria-current="page">
                          <img className='w-4 h-4' src='./dashboard.png'/>
                          <span className='pl-2'>Dashboard</span>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="/monitor" className={`inline-flex  items-center px-4 py-3 cursor-pointer ${router.pathname.startsWith("/monitor")?"bg-tabsActiveColor rounded-lg active text-white":"bg-white text-primaryColor"} `}>
                        <img className='w-4 h-4' src='./monitor.png'/>
                          <span className='pl-2'>Monitor</span>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="/reports" className={`inline-flex  items-center px-4 py-3 cursor-pointer ${router.pathname.startsWith("/reports")?"bg-tabsActiveColor rounded-lg active text-white":"bg-white text-primaryColor"} `}>
                          <img className='w-4 h-4' src='./reports.png'/>
                          <span className='pl-2 text-primaryColor'>Reports</span>
                        </a>
                    </li>
                    <li className="mr-2">
                        <a href="/customers" className={`inline-flex  items-center px-4 py-3 cursor-pointer ${router.pathname.startsWith("/customers")?"bg-tabsActiveColor rounded-lg active text-white":"bg-white text-primaryColor"} `}>
                        <img className='w-4 h-4' src='./customers.png'/>
                          <span className='pl-2 text-primaryColor'>Customers</span>
                        </a>
                    </li>
                </ul>

              </div>
              <div className='inline-flex'>
                <div className='pr-10'>
                    <img className='w-10' src='./settings.png'/>
                </div>
                <ul role="list">
                  <li className="">
                      <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src="/user.png" alt="Neil image"/>
                          </div>
                          <div className="flex-1 min-w-0">
                              <p className="text-sm text-black font-medium">
                                  Neil Sims
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                  email@windster.com
                              </p>
                          </div>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    )
}