'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { FaLinkedin } from 'react-icons/fa';
import "../app/globals.css";


import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
  // { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-6xl" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white text-6xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-6xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-6xl" /> },
  { name: 'Sanity CMS', icon: <SiSanity className="text-red-600 text-6xl" /> },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


export default function Home() {

  const textArray = useMemo(() => ["Developer"], []);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = loop % textArray.length;
      const fullText = textArray[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster speed when deleting
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150); // Slower speed when typing
      }

      if (!isDeleting && text === fullText) {
        // Pause at the end of the word before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        // Move to the next word after deleting
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, typingSpeed, textArray]);

  // Logo Animation Speed

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust this value to slow down the video
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  //Image Swipers
  const images = [
    "/calculator.png",
    "/number guessing.png",
    "/atm.png",
    "/to do list.png",
    "/currency converter.png",
    "/word counter.png",
    "/SMS.png",
    "/adventure game.png",
    "/quiz app.png",
    "/countdowns timer.png",
  ];


  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">

      <video src="/Background.mp4" autoPlay loop muted className="absolute top-0 left-0 object-cover w-full min-h-screen opacity-40 -z-10">
      </video>

      <div className="relative z-10 min-h-screen w-full bg-greenish-tuscan bg-opacity-85">

        <nav className=" top-0 right-0 left-0 justify-between items-center flex flex-wrap w-full  ">
          <div className="flex space-x-2 items-center md:px-10">
            <video ref={videoRef} src="/Logo.mp4" autoPlay loop muted className="w-3/5 h-3/5 md:w-4/5 md:h-4/5  opacity-75" />
          </div>


          {/* Hamburger Menu Icon */}
          <div
            className={`fixed right-2 md:right-6 flex flex-col space-y-1 cursor-pointer z-40 ${isMenuOpen ? "opacity-0" : "opacity-100"
              }`} // Set opacity to 0 when menu is open, and 1 when it's closed
            onClick={toggleMenu} // Toggle the side menu visibility
          >
            <span className="h-1 w-8 bg-greenish-garden rounded"></span>
            <span className="h-1 w-8 bg-greenish-garden rounded"></span>
            <span className="h-1 w-8 bg-greenish-garden rounded"></span>
          </div>
        </nav>

        {/* Toggle Menu */}
        <div
          className={`fixed top-0 right-0 md:h-screen  h-full w-28 md:w-32 rounded-s-full bg-greenish-garden bg-opacity-60 text-greenish-sunset shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 z-30`}
        >

          <button
            onClick={toggleMenu} // Close the menu when clicked
            className="text-greenish-tuscan text-4xl font-extrabold absolute top-4 right-4 z-40"
          >
            &times;
          </button>

          {/* Menu Items */}
          <div className="flex flex-col space-y-8 mt-28 md:mt-40 text-xl text-center items-center justify-center font-serif">
            {
              [
                { href: "#home", label: "Home" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <Link
                  key={item.href + index}
                  href={item.href}
                  className="textOutline hover:text-greenish-garden hover:font-bold transform transition-transform duration-200 hover:scale-125"
                  onClick={() => setIsMenuOpen(false)} // Close the menu on item click
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>


        {/* HOME SECTION */}

        <main className="block ">
          <section id="home" className="flex w-full min-h-screen">

            <div className="flex-col md:flex-row min-h-screen w-full flex ">

              <div className="flex flex-col md:w-1/2 w-full items-center sm:items-center md:items-start ">
                <h1 className="flex text-4xl md:text-6xl font-serif font-bold md:font-extrabold px-4 md:px-1 md:py-8 pt-8 mt-8 text-greenish-garden ">Hi! I'm Web</h1>

                <div className="text-4xl md:text-6xl font-serif font-bold md:font-extrabold px-8 md:px-1 pb-10 pt-8 md:pt-6 text-greenish-sunset ">
                  <span>{text}</span>
                  <span className="animate-blink">|</span>
                </div>

                <div className='flex gap-2'>
                  <Link href="#projects"> <button className="flex text-sm md:text-xl font-extrabold font-serif px-4 md:px-5 md:py-3 py-2 md:ml-8 mb-3 md:mb-0 md:rounded-2xl rounded-xl text-greenish-garden  hover:bg-greenish-sunset hover:text-greenish-garden border border-greenish-sunset hover:border-greenish-garden shadow-lg ">Projects</button> </Link>

                  <Link href="#contact"> <button className="flex text-sm md:text-xl font-extrabold font-serif px-1 md:px-2 md:py-3 py-2 md:ml-8 mb-3 md:mb-0 md:rounded-2xl rounded-xl text-greenish-sunset  hover:bg-greenish-sunset hover:text-greenish-garden border border-greenish-garden hover:border-greenish-garden shadow-lg">Contact Me</button> </Link>
                </div>
              </div>


              {/* Image */}
              <div className="flex md:w-1/2 w-full justify-center mt-6">
                <div className="relative md:w-80 md:h-80 w-64 h-64 flex ">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Wave Layers */}
                    <div className="absolute w-full h-full rounded-full border-[2px] border-greenish-garden animate-thin-wave"></div>

                    <div className="absolute w-full h-full rounded-full border-[2px] border-greenish-tuscan animate-thin-wave animation-delay-1"></div>

                    <div className="absolute w-full h-full rounded-full border-[2px] border-greenish-sunset animate-thin-wave animation-delay-2"></div>

                    <div className="absolute w-full h-full rounded-full border-[2px] border-greenish-garden animate-thin-wave animation-delay-3"></div>

                    <div className="absolute w-full h-full rounded-full border-[2px] border-greenish-tuscan animate-thin-wave animation-delay-4"></div>

                    <div className="absolute w-full h-full rounded-full border-[2px] border-greenish-sunset animate-thin-wave animation-delay-5"></div>
                  </div>



                  <div className="absolute inset-0 rounded-full bg-gradient-to-l from-greenish-tuscan via-greenish-sunset to-greenish-tuscan p-1 flex items-center justify-center">
                    <div className="absolute inset-1 rounded-full border-[6px] border-greenish-tuscan"></div>
                    <div className="absolute inset-2 rounded-full border-[4px] border-greenish-sunset"></div>
                    <div className="absolute inset-3 rounded-full border-[2px] border-greenish-garden"></div>
                  </div>


                  <div className=" absolute inset-3.5 md:inset-4 rounded-full overflow-hidden flex items-center justify-center">
                    <Image src={"/display picture.png"} alt="Profile Picture" width={400} height={400} className="md:w-full md:h-full  w-fit h-fit" />
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* Project Sections */}
          <div id='projects' className='min-h-screen justify-center items-center'>
            <div className=" flex px-8 md:px-16 ">
              <h1 className="text-3xl md:text-5xl font-serif font-bold md:font-extrabold px-4 md:px-18 py-2 text-greenish-garden underline ">
                My Featured Projects</h1>
            </div>


            {/* websites cards */}
            <section className="h-auto flex place-items-center md:p-4 p-8 ">

              <div className="grid sm:grid-cols-1 md:grid-cols-2 w-11/12 gap-6 p-2 md:p-6 ">

                {/* card 1 */}
                <Link href={"https://estore-clothing.vercel.app/"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>Fully Functional E-Commerce  </h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/clothing-e-store.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>

                {/* card 2 */}
                <Link href={"https://techware-blog.vercel.app/"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>Blog Website</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/techwareBlog.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>




                {/* card 3 */}

                <Link href={"https://my-portfolio-fazilat-jahans-projects.vercel.app"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>Personal Portfolio</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/personal portfolio.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>
              </div>
            </section>

            {/* hands on projects */}
            <div className=" flex px-8 md:px-16 ">
              <h1 className="text-3xl md:text-5xl font-serif font-bold md:font-extrabold px-4 md:px-18 py-4 text-greenish-garden underline ">
                My Hands-on Projects</h1>
            </div>

            {/* websites cards */}
            <section className="h-auto flex place-items-center md:p-4 p-8 ">

              <div className="grid sm:grid-cols-1 md:grid-cols-2 w-11/12 gap-6 p-2 md:p-6 ">

                {/* card 2 */}
                <Link href={"https://the-wall-art.vercel.app"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>Multi Page Responsive Website</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/wall art.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>

                {/* card 2 */}
                <Link href={"https://e-commerce-store-swart-two.vercel.app/"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>Responsive UI/UX Figma Desing</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/shop.co.jpg"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>


                {/* card 4 */}
                <Link href={"https://ui-ux-e-commerce.vercel.app/"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>UI/UX Figma Clone</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/figma clone.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>


                {/* card 5 */}
                <Link href={"https://resume-builder-fazilat-jahans-projects.vercel.app/"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>Static Resume</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/static resume.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>


                {/* card 6 */}
                <Link href={"https://resume-builder-fazilat-jahans-projects.vercel.app/indexx.html"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>ATS Resume Builder</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/resume builder.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>



                {/* card 7 */}

                <Link href={"https://governor-initiative-liard.vercel.app/"} target='blank'>
                  <div className="w-full h-auto md:py-2 py-4 px-3 md:px-4 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl place-items-center hover:scale-105 transition duration-150">
                    <h1 className='font-bold text-greenish-sunset font-serif md:text-xl text-lg text-center md:py-4 pb-2'>GIAIC Website</h1>
                    <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                      <Image src={"/giaic.png"} alt="wall art" width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                    </div>
                    <button className='text-sm md:text-lg font-bold font-serif px-1 md:px-2 pt-2 my-2 md:rounded-2xl rounded-xl text-greenish-garden  hover:text-greenish-sunset shadow-lg'>Get Live Demo</button>
                  </div>
                </Link>

              </div>
            </section>


            <section className="h-auto  place-items-center md:p-4 p-6   ">

              <div className=" w-11/12 md:w-1/2 gap-6 px-2 md:p-8">
                <div className="md:w-11/12 w-full h-auto md:py-10 py-8 px-8 md:px-16 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl hover:scale-105 transition duration-150">
                  <h1 className="font-bold text-greenish-sunset font-serif md:text-2xl text-lg text-center md:pb-8 pb-2">TypeScript Projects</h1>
                  <Slider {...settings} className="rounded-xl justify-center items-center">
                    {images.map((src, index) => (
                      <div key={index} className="flex justify-center place-items-center items-center">
                        <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto rounded-lg ">
                          <Image src={src} alt={`Project ${index + 1}`} width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* 
              <div className="md:w-11/12 w-full h-auto md:py-10 py-8 px-8 md:px-16 bg-gradient-to-l from-greenish-garden via-greenish-tuscan border border-greenish-garden rounded-2xl md:rounded-3xl hover:scale-105 transition duration-150">
                <h1 className="font-bold text-greenish-sunset font-serif md:text-2xl text-lg text-center md:pb-8 pb-2">Next.JS Projects</h1>
                <Slider {...settings} className="rounded-xl justify-center items-center">
                  {images.map((src, index) => (
                    <div key={index} className="flex justify-center place-items-center items-center">
                      <div className="overflow-hidden  place-items-center text-center w-full md:w-full h-auto   rounded-lg ">
                        <Image src={src} alt={`Project ${index + 1}`} width={500} height={500} className="shadow-2xl rounded-lg w-full h-full" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div> */}
              </div>
            </section>


          </div>

          {/* Skills */}

          <section id="skills" className="w-full py-10 px-8 md:px-16 ">
            <h1 className="text-3xl mt-6 md:text-5xl font-serif font-bold md:font-extrabold px-8 md:px-18 py-4 text-greenish-garden underline   ">
              My Skills</h1>
            <div className="max-w-5xl mx-auto px-4">
              <Slider {...sliderSettings}>
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <p className="mt-2 text-lg font-semibold text-greenish-garden">{skill.name}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* ABOUT SECTION */}

          <section id="about" className="flex space-y-2 min-h-screen flex-col ">


            <div className=" flex px-8 md:px-16 ">
              <h1 className="text-3xl mt-6 md:text-5xl font-serif font-bold md:font-extrabold px-8 md:px-18 py-4 text-greenish-garden underline   ">
                About My Self</h1>
            </div>
            <div className="px-8 md:px-16 ">

              <p className="text-2xl py-6 md:text-xl text-center font-serif font-medium text-greenish-sunset leading-normal">Hello! I am Fazilat Jahan, a Web Developer. <br /> <br /> I build high-performing e-commerce platforms and modern web solutions that don’t just work—they drive results. With a strong command of web development, I’ve delivered multiple projects that are scalable, efficient, and built for growth. <br /> <br />

                For front-end, I specialize in HTML, Tailwind CSS, TypeScript, and Next.js, building responsive, visually engaging websites that offer smooth user experiences and clean, scalable code. <br /> <br />

                On the back-end, I use Sanity CMS to create content-driven websites that are easy for non-technical users to manage. With a focus on simplicity, I ensure that clients can easily update and maintain their sites without any hassle, while also providing robust functionality behind the scenes. <br /> <br />

                Beyond coding, I’ve led 1,500+ students as a Student Leader, guiding them in their learning and problem-solving journeys. Leadership has sharpened my ability to think critically, communicate effectively, and build solutions that matter. <br /><br />

                Now, I’m diving into Agentic AI and Prompt Engineering, exploring how AI can enhance web development and business automation. <br /><br />

                If you need a developer who builds not just websites, but solutions that scale and succeed. Let’s connect and bring your vision to life.</p>

            </div>
          </section>

          {/* CONTACT SECTION */}

          <section id="contact" className="flex w-full min-h-screen items-center justify-center px-4 md:px-12">
            <div className="md:w-auto w-full md:mx-auto mx-3">
              <form action="" className="flex flex-col mx-auto my-0 rounded-xl border-greenish-garden w-full p-4 bg-white/20 border-2 shadow-md backdrop:blur-lg md:p-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold font-serif mb-6 text-greenish-garden">Contact Me</h1>

                <div className="space-y-4 md:text-base text-sm md:font-bold font-semibold">
                  <div className="w-full font-serif bg-greenish-sunset/30 px-4 py-3 border-none text-greenish-garden rounded-lg">
                    <span className='md:font-medium font-normal'>Name: </span>Fazilat Jahan
                  </div>
                  <div className="w-full font-serif bg-greenish-sunset/30 px-4 py-3 border-none text-greenish-garden rounded-lg">
                    <span className='md:font-medium font-normal'>Email: </span>fazilat.jahan07@gmail.com
                  </div>
                  <div className="w-full font-serif bg-greenish-sunset/30 px-4 py-3 border-none text-greenish-garden rounded-lg">
                    <span className='md:font-medium font-normal'>LinkedIn: </span>
                    <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="hover:underline hover:text-greenish-tuscan">linkedin.com/fazilatjahan
                    </Link>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" className="block w-full py-3 px-4 font-bold cursor-pointer transition duration-300 rounded-lg text-greenish-garden bg-greenish-tuscan hover:bg-greenish-sunset/40 hover:text-greenish-garden border border-greenish-sunset hover:border-greenish-garden shadow-lg text-center font-serif">
                    Feel Free To Contact Me
                  </Link>
                </div>
              </form>
            </div>
          </section>



        </main>


        <div className="fixed md:bottom-5 md:right-5 z-20 bottom-1 right-1">
          <Link href="https://www.linkedin.com/in/fazilatjahan-content-writer/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} color="#b9b26c" className=" linkedInIcon shadow-2xl rounded-full" />
          </Link>
        </div>

      </div>
    </div>
  );
}
