import { useEffect, useState } from "react"
import aboutImg from "../../assets/img/worldmap.png"

import useCategories from "../../hooks/useCategories"
export const About = () => {
    const {categories,loading,error,loadCategories} = useCategories()
    useEffect(() => {
       loadCategories();
    }, [])
   
    console.log(categories)
    return (
        <>
            <section id="about"   className={`bg-gray-100 relative overflow-hidden min-h-screen`} >
            {/* <section id="about" className="relative min-h-screen bg-primary-100" > */}
            <div style={{ backgroundImage: `url(${aboutImg})` }}
               className={`absolute inset-0 bg-cover md:bg-contain opacity-50 lg:scale-150  bg-center z-[1] bg-no-repeat`}
            ></div>
               <div className="container relative z-20 px-10 py-16 mx-auto">
                    <div className="flex flex-col items-center justify-center gap-10 p-6 rounded-lg md:flex-row bg-primary-300/75">
                    <div className="w-full p-3 ">
                        <h1 className="text-3xl font-normal font-bigtittle text-accent-100">Discover the World of Art and Culture with TravelYouuu</h1>
                        <h1 className="text-6xl font-bold text-white font-bigtittle">
                            About Us
                        </h1>
                        <p className="font-sans text-justify text-white">At TravelYouuu, we’re dedicated to curating travel experiences that immerse you in the rich arts and vibrant cultures of destinations around the globe. From exploring the ancient temples of Asia to experiencing the lively art scenes of Europe and Africa’s captivating traditions, each tour is designed to bring you closer to the heart of every country’s heritage.
                        <br /><br />
                        Whether you’re a history buff, an art enthusiast, or simply curious about new cultures, our tours offer unique, authentic encounters that leave a lasting impact. Don’t miss the chance to embark on a journey that’s more than sightseeing—it’s a cultural immersion.
                        <br /><br />
                        Book now and enjoy a 15% discount on purchases from our partners for the first 50 travelers!</p>
                    </div>
                    <div className="relative flex justify-center w-full p-3 ">
                        <div className="absolute top-0 left-0 transform -translate-x-2 translate-y-10 md:hover:scale-110 drop-shadow-lg hover:z-30">
                            {error ? (
                                 <img
                                     // Ganti dengan URL gambar pertama
                                 alt="Error "
                                 className="w-48 h-64 border-4 border-white rounded-lg shadow-lg"
                             />
                            ) : (
                                <img
                                src={`${categories[0]?.imageUrl}`} // Ganti dengan URL gambar pertama
                                alt="Cultural Landscape 1"
                                className="w-48 h-64 border-4 border-white rounded-lg shadow-lg"
                            />
                            )
                            }
                            {/* <img
                                src={`${categories[0]?.imageUrl}`} // Ganti dengan URL gambar pertama
                                alt="Cultural Landscape 1"
                                className="w-48 h-64 border-4 border-white rounded-lg shadow-lg"
                            /> */}
                        </div>
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-8 md:hover:scale-110 drop-shadow-lg hover:z-30">
                        <img
                            src={`${categories[1]?.imageUrl}`} // Ganti dengan URL gambar kedua
                            alt="Cultural Landscape 2"
                            className="w-48 h-64 border-4 border-white rounded-lg shadow-lg"
                        />
                        </div>
                        <div className="relative z-10 drop-shadow-lg md:hover:scale-110">
                        <img
                            src={`${categories[2]?.imageUrl}`} // Ganti dengan URL gambar ketiga
                            alt="Cultural Landscape 3"
                            className="w-48 h-64 border-4 border-white rounded-lg shadow-lg"
                        />
                        </div>
                    </div>
                    </div>
               </div>
            </section>
            <div className="bg-gray-100">
                <div className="container px-10 mx-auto">
                    <div className="flex flex-col justify-between gap-4 px-6 lg:flex-row">
                       <div className="flex flex-col items-center justify-center p-4 ">
                        <h1 className="text-6xl italic font-extrabold font-title text-primary-300">10</h1>
                        <p className="font-sans text-2xl font-medium text-gray-600">Year Experience</p>
                       </div>
                       <div className="flex flex-col items-center justify-center p-4 ">
                        <h1 className="text-6xl italic font-extrabold font-title text-primary-300">5000+</h1>
                        <p className="font-sans text-2xl font-medium text-gray-600"> Satisfied Clients</p>
                       </div>
                       <div className="flex flex-col items-center justify-center p-4 ">
                        <h1 className="text-6xl italic font-extrabold font-title text-primary-300">100</h1>
                        <p className="font-sans text-2xl font-medium text-gray-600">Countries Cover</p>
                       </div>
                    </div>
                    <div>
                        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                            <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

                            <div className="relative flex items-center bg-primary-100">
                                <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-primary-100"
                                ></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                                    esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                                    architecto eius quis quibusdam fugiat dicta.
                                </p>

                                <a
                                    href="#"
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in Touch
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}