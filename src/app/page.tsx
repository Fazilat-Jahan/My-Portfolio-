'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { FaLinkedin } from 'react-icons/fa';
import "../app/globals.css";

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

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust this value to slow down the video
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen w-full overflow-hidden">

      <video src="/Background.mp4" autoPlay loop muted className="absolute top-0 left-0 object-cover w-full min-h-screen -z-10">
      </video>

      <div className="relative z-10 min-h-screen w-full bg-greenish-tuscan bg-opacity-85">

        <nav className=" top-0 right-0 left-0 justify-between items-center flex flex-wrap w-full  ">
          <div className="flex space-x-2 items-center md:px-10">
            <video ref={videoRef} src="/NameLogo.mp4" autoPlay loop muted className="w-4/5 h-4/5 opacity-80" />
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
          className={`fixed top-0 right-0 h-screen w-28 md:w-32 rounded-s-full bg-greenish-garden bg-opacity-60 text-greenish-sunset shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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

        <main className="block">
          <section id="home" className="flex w-full min-h-screen">

            <div className="flex-col md:flex-row min-h-screen w-full flex ">

              <div className="flex flex-col md:w-1/2 w-full items-center sm:items-center md:items-start ">
                <h1 className="flex text-4xl md:text-6xl font-serif font-bold md:font-extrabold px-4 md:px-1 md:py-8 pt-16 md:mt-10 mt:20 text-greenish-garden ">Hi! I'm FrontEnd</h1>

                <div className="text-4xl md:text-6xl font-serif font-bold md:font-extrabold px-8 md:px-1 pb-10 pt-10 md:pt-6 text-greenish-sunset ">
                  <span>{text}</span>
                  <span className="animate-blink">|</span>
                </div>

                <Link href="#contact"> <button className="flex text-sm md:text-xl font-extrabold font-serif px-1 md:px-2 md:py-3 py-2 md:ml-8 mb-3 md:mb-0 md:rounded-2xl rounded-xl text-greenish-garden  hover:bg-greenish-sunset hover:text-greenish-garden border border-greenish-sunset hover:border-greenish-garden shadow-lg">Contact Me</button> </Link>
              </div>



              <div className="flex md:w-1/2 w-full justify-center">
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



                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-greenish-garden via-greenish-tuscan to-greenish-sunset p-1 flex items-center justify-center">
                    <div className="absolute inset-1 rounded-full border-[6px] border-greenish-tuscan"></div>
                    <div className="absolute inset-2 rounded-full border-[4px] border-greenish-sunset"></div>
                    <div className="absolute inset-3 rounded-full border-[2px] border-greenish-garden"></div>
                  </div>


                  <div className=" absolute inset-4 rounded-full overflow-hidden flex items-center justify-center">
                    <Image src={"/Profile-Picture.png"} alt="Profile Picture" width={400} height={400} className="md:w-fit md:h-96 w-fit h-80" />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ABOUT SECTION */}

          <section id="about" className="flex space-y-2 min-h-screen flex-col bg-gradient-to-l from-greenish-garden via-greenish-tuscan">
            {/*             
            <nav className="shadow-xl top-0 right-0 left-0 justify-between items-center flex flex-wrap w-full  ">
            <div className="flex space-x-2 items-center md:px-10">
            <Image src="/NameLogo1.png" alt="Name Logo" width={200} height={200} className="" />
             </div>

          <div className="flex px-4 space-x-2 mt-2 md:mt-0 md:space-x-6 text-sm md:text-lg font-bold  font-serif">
            <Link href="#home">  <button className=" textOutline hover:text-greenish-garden  text-greenish-sunset "> Home </button> </Link>
            <Link href="#about">  <button className="textOutline hover:text-greenish-garden  text-greenish-sunset"> About </button> </Link>
            <Link href="#contact">  <button className="textOutline hover:text-greenish-garden  text-greenish-sunset"> Contact </button> </Link>
            {/* <Link href="#contact">  <button className="hover:text-yellow-500  text-greenish-sunset"> Project </button> </Link> */}
            {/* <Link href="/">  <button> Projects </button> </Link>
          <Link href="/">  <button> Blog </button> </Link> */}
            {/* </div> */}
            {/* </nav> */}


            <div className=" flex px-8 md:px-16 ">
              <h1 className="text-3xl mt-6 md:text-5xl font-serif font-bold md:font-extrabold px-8 md:px-18 py-4 text-greenish-garden  ">
                About My Self</h1>
            </div>
            <div className="px-8 md:px-16 ">

              <p className="text-2xl py-6 md:text-xl text-justify font-serif font-medium text-greenish-sunset leading-normal">Hello! I am Fazilat Jahan, a front-end developer and designer dedicated to crafting beautiful, intuitive digital experiences. With a strong foundation in HTML, CSS, and JavaScript, alongside expertise in frameworks like React and Next.js, I bring designs to life with seamless functionality. My design skills, allow me to create interfaces that are not only visually compelling but also user-centered.
                I am driven by a passion for detail and a commitment to delivering high-quality, responsive, and engaging websites. Staying up-to-date with industry trends is essential to me, and I constantly explore new tools and techniques to keep my work innovative. Whether I am developing or designing, my goal is always the same to make the digital world more accessible and enjoyable for users.

                Let connect and discuss how I can contribute to your next project!</p>

            </div>
          </section>

          {/* CONTACT SECTION */}

          <section id="contact" className=" flex w-full min-h-screen items-center justify-center px-12">
            <div className="flex w-full max-w-xl mx-auto">
              <form action="" className="flex flex-col mx-auto my-0 rounded-xl border-greenish-garden w-full min-w-min p-6 bg-white/20 border-2 shadow-md backdrop:blur-lg md:p-12" >

                <h1 className="text-2xl text-center font-bold font-serif mb-6 text-greenish-garden"> Contact Me </h1>

                <div className="space-y-4">

                  <input type="text" placeholder="Name" required className="w-full bg-greenish-sunset/30 px-4 py-3 border-none  text-black rounded-lg placeholder-greenish-garden focus:outline-none focus:ring-greenish-tuscan focus:ring-2" />

                  <input type="email" placeholder="Email" required className="w-full   bg-greenish-sunset/30 px-4 py-3 border-none text-black rounded-lg placeholder-greenish-garden focus:outline-none focus:ring-greenish-tuscan focus:ring-2" />

                  <textarea placeholder="Message" required className="w-full   bg-greenish-sunset/30 px-4 py-3 border-none text-black rounded-lg placeholder-greenish-garden focus:outline-none focus:ring-greenish-tuscan focus:ring-2"></textarea>
                </div>

                <div className="mt-6">
                  <input type="submit" value="Submit" className="w-full py-3 px-4 font-bold cursor-pointer transition duration-300 rounded-lg text-greenish-garden bg-greenish-tuscan hover:bg-greenish-sunset/40 hover:text-greenish-garden border border-greenish-sunset hover:border-greenish-garden shadow-lg" />
                </div>

              </form>
            </div>

          </section>


        </main>


        <div className="fixed md:bottom-5 md:right-5 z-20 bottom-1 right-1">
          <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} color="#b9b26c" className=" linkedInIcon shadow-2xl rounded-full" />
          </Link>
        </div>

      </div>
    </div>
  );
}
