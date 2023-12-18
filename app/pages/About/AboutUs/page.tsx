import About from '@/app/components/About'
import PageNav from '@/app/components/PageNav'
import React from 'react'
import Clients from '@/app/components/Clients'
import Team from '@/app/components/Team'

const AboutUsPage = () => {
  return (
    <div>

      <PageNav name="About" />

      <About />

      <div className='bg-gray-100' >

        <div className='container p-5 sm:p-12 m-auto flex flex-col gap-5 ' >
          <h1 className='font-bold text-3xl text-center relative after:absolute after:m-auto after:-bottom-5 after:left-0 after:right-0 after:w-14 after:h-1 after:bg-lime-500 ' >FEATURES</h1>
          <p className='text-gray-500 text-center mt-8' >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

          <Team />

          <h1 className='font-bold text-3xl text-center relative after:absolute after:m-auto after:-bottom-5 after:left-0 after:right-0 after:w-14 after:h-1 after:bg-lime-500 ' >OUR SKILLS</h1>
          <p className='text-gray-500 text-center mt-8' >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

          <div className='flex flex-col gap-5' >

            <div className='flex flex-col sm:flex-row w-full gap-5' >
              <div className='sm:w-1/2' >
                <div>
                  <div className='flex justify-between' ><span className='uppercase' >html</span><span>100%</span></div>
                </div>
                <div>
                  <input type="range" value={100}
                    className='range h-2 bg-gray-300 text-white w-full'
                  />
                </div>
              </div>
              <div className='sm:w-1/2' >
                <div>
                  <div className='flex justify-between' ><span className='uppercase' >css</span><span>70%</span></div>
                </div>
                <div>
                  <input type="range" value={70} className='text-lime-500 rounded-none w-full ' />
                </div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row w-full gap-5' >
              <div className='sm:w-1/2' >
                <div>
                  <div className='flex justify-between' ><span className='uppercase' >javascript</span><span>50%</span></div>
                </div>
                <div>
                  <input type="range" value={50} className='text-lime-500 rounded-none w-full ' />
                </div>
              </div>
              <div className='sm:w-1/2' >
                <div>
                  <div className='flex justify-between' ><span className='uppercase' >next js</span><span>80%</span></div>
                </div>
                <div>
                  <input type="range" value={80} className='text-lime-500 rounded-none w-full ' />
                </div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row w-full gap-5' >
              <div className='sm:w-1/2' >
                <div>
                  <div className='flex justify-between' ><span className='uppercase' >tailwind css</span><span>70%</span></div>
                </div>
                <div>
                  <input type="range" value={70} className='text-lime-500 rounded-none w-full ' />
                </div>
              </div>
              <div className='sm:w-1/2' >
                <div>
                  <div className='flex justify-between' ><span className='uppercase' >Front end</span><span>90%</span></div>
                </div>
                <div>
                  <input type="range" value={90} className='text-lime-500 rounded-none w-full ' />
                </div>
              </div>
            </div>
          </div>

          <h1 className='font-bold text-3xl text-center relative after:absolute after:m-auto after:-bottom-5 after:left-0 after:right-0 after:w-14 after:h-1 after:bg-lime-500 ' >CLIENTS</h1>
          <p className='text-gray-500 text-center mt-8' >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>


          <Clients />

        </div>

      </div>

    </div>
  )
}

export default AboutUsPage