import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Home({ }) {

  return (
    <div className="">
      {/* <div className="heroSection h-full"> */}
      <div className="w-full h-screen items-center justify-center headBg px-6">
        {/* Hidden in mobile and tab devicees */}
        <div className="mt-10 flex">
          <div className='w-1/4'>
            <div className="w-full max-w-md p-4 bg-white rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-md leading-none text-gray-500">Overall Brand Personality Score</h5>
              </div>
              <div className="flow-root">
              
              </div>
            </div>
            <div className="w-full max-w-md p-4 bg-white rounded-lg mt-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-sm leading-none text-gray-500">TARGET BRAND PERSONALITY</h5>
              </div>
              <div className='mt-4'>
                <h5 className='text-2xl text-primaryColor'>Modi</h5>
                <div class="flex items-center justify-between mt-10">
                    <input id="default-range" type="range" value="50" class="w-full h-1 bg-slidderBg rounded-lg appearance-none cursor-pointer"/>
                    <img className="w-20 h-20 rounded-full img-target" src="/modi.png" alt="Neil image"/>
                </div>
              </div>
            </div>
          </div>
          <div className='w-3/4'>
            <div className="w-full bg-white rounded-lg ml-4 h-full">
              <div className="flex items-center justify-between p-4">
                <h5 className="text-md leading-none text-gray-500">CURRENT BRAND PERSONALITY</h5>
              </div>
              <div className='border-b border-borderColor'>
                <div className="flex custom-width m-auto place-content-end items-center justify-between">
                  <div className='w-full flex items-center'>
                    <div className='w-1/4 '>
                      <div className='w-full text-center'>
                        <div className='w-1/2 mx-auto'>
                          <CircularProgressbarWithChildren value={66}
                            styles={{
                              path: {
                                stroke: `#27AE60`
                              }
                            }}>
                            <img style={{ width: 70 }} src="./currentBrand.png" alt="doge" />
                          </CircularProgressbarWithChildren>
                        </div>
                        <p className='text-xl text-highlightText font-semibold'>Government Servant</p>
                        <p className='text-primaryColor'>69%</p>
                      </div>
                    </div>
                  <div className='w-3/4 flex space-x-4'>
                    <div className='text-center'>
                      <div className='w-2/6 mx-auto'>
                        <CircularProgressbarWithChildren value={12}
                            styles={{
                              path: {
                              stroke: `#EB5757`
                            }
                          }}>
                          <img style={{ width: 45 }} src="./rahul.png" alt="doge" />
                        </CircularProgressbarWithChildren>
                      </div>
                        <p className='text-sm text-highlightText'>Rahul Gandhi</p>
                        <p className='text-primaryColor'>12%</p>
                    </div>
                    <div className='text-center'>
                      <div className='w-2/6 mx-auto'>
                        <CircularProgressbarWithChildren value={11}
                          styles={{
                            path: {
                              stroke: `#EB5757`
                            }
                          }}>
                          <img style={{ width: 45 }} src="./kohli.png" alt="doge" />
                        </CircularProgressbarWithChildren>
                      </div>
                        <p className='text-sm text-highlightText'>Viral Kohli</p>
                        <p className='text-primaryColor'>11%</p>
                    </div>
                    <div className='text-center'>
                      <div className='w-2/6 mx-auto'>
                        <CircularProgressbarWithChildren value={8}
                          styles={{
                            path: {
                              stroke: `#EB5757`
                            }
                          }}>
                          <img style={{ width: 45 }} src="./modi.png" alt="doge" />
                        </CircularProgressbarWithChildren>
                      </div>
                        <p className='text-sm text-highlightText'>Modi</p>
                        <p className='text-primaryColor'>08%</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className='border-b mt-4'>
                <h3 className='text-xl text-primaryColor text-center font-bold'>Brand Personality Summary</h3>
                <div className='flex max-w-3xl m-auto text-primaryColor mt-4 mb-4'>
                  <span>59-year-old government servant who doesn't fulfil their duty of serving the public and taking responsibility. They are selfish, not trustworthy, and although they may seem polite, they don't work for the well-being of other</span>
                </div>
              </div>
              <div className='max-w-3xl m-auto mt-6 mb-6'>
                <div class="grid grid-cols-3 gap-10 text-primaryColor h-60">
                  <div className='flex flex-col place-content-evenly text-right'>
                    <div className='space-y-[35px]'>
                        <div className='pricing flex justify-between items-center'>
                          <div>Pricing</div>
                          <div><img className='w-1/2 h-auto' src='./arrrowright.png'/></div>
                        </div>    
                        <div className='service flex justify-between items-center'>
                          <div>Service</div>
                          <div><img className='w-1/2 h-auto' src='./arrrowright.png'/></div>
                          
                        </div>    
                        <div className='retail flex justify-between items-center'>
                            <div> Retail Location Quality</div>
                            <div><img className='w-1/2 h-auto' src='./arrrowright.png'/></div>
                        </div>    
                    </div> 
                  </div>
                  <div className='border border-4 border-borderHighlight rounded-full flex items-center justify-center'>
                    <img class="w-10/12 rounded-full" src="./currentBrand.png" alt="currentBrand"/>
                  </div>     
                  <div className='flex flex-col place-content-evenly text-left'>
                    <div className=' space-y-[35px]'>
                        <div className='discount flex justify-between items-center'>
                          <div>Discount</div>
                          {/* <div><img className='w-1/2 h-auto' src='./arrrowright.png'/></div> */}
                        </div>    
                        <div className='product flex justify-between items-center'>
                          <div>Product</div>
                          {/* <div><img className='w-1/2 h-auto' src='./arrrowright.png'/></div> */}
                          
                        </div>    
                        <div className='promotion flex justify-between items-center'>
                            <div>Promotion</div>
                            {/* <div><img className='w-1/2 h-auto' src='./arrrowright.png'/></div> */}
                        </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

