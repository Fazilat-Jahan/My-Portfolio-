'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Home() {

  const textArray = ["Developer", "Designer"];
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
  }, [text, isDeleting, loop, typingSpeed]);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <video src="/Background.mp4" autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full -z-10">
      </video>

      <div className="relative z-10 min-h-screen w-full bg-yellow-500 bg-opacity-85">

        <nav className="justify-between items-center flex flex-wrap w-full px-2 py-0.5 md:px-4">
          <div className="flex space-x-2 items-center">
            <Image src={"/BrandLogo.png"} alt="Portfolio" width={180} height={180} priority className="pt-2" /> </div>

          <div className="flex space-x-2 mt-2 md:mt-0 md:space-x-6 text-sm md:text-lg text-black font-bold  font-serif">
            <Link href="#home">  <button className="hover:text-yellow-500"> Home </button> </Link>
            <Link href="#about">  <button className="hover:text-yellow-500"> About </button> </Link>
            <Link href="#contact">  <button className="hover:text-yellow-500"> Contact </button> </Link>
            {/* <Link href="/">  <button> Projects </button> </Link>
          <Link href="/">  <button> Blog </button> </Link> */}
          </div>
        </nav>

        <main className="block">
          <section id="home" className="flex w-full flex-col min-h-screen">

            <div className="flex-row h-fit w-full flex ">

              <div className="flex flex-col w-full">
                <h1 className="flex text-2xl md:text-5xl font-serif font-bold md:font-extrabold px-8 md:px-18 md:py-8 pt-16 md:mt-20 mt:20 ">Hi! I'm FrontEnd</h1>

                <div className="text-2xl md:text-5xl font-serif font-bold md:font-extrabold px-8 md:px-18 pb-10">
                  <span>{text}</span>
                  <span className="animate-blink">|</span>
                </div>

                <Link href="/contact"> <button className="flex text-sm md:text-xl font-extrabold font-serif px-1 md:px-2 md:py-4 py-2 ml-8  bg-black rounded-2xl md:rounded-3xl border-spacing-1 text-yellow-500  hover:bg-yellow-500 hover:text-black hover:border-neutral-950  shadow-lg">Contact Me</button> </Link>
              </div>

              <div className=" h-full w-full flex flex-col px-0 md:px-12 md:py-0 py-0 items-center mt-0 md:mt-0">
                <Image src={"/Profile-Picture.png"} alt="Profile Picture" width={400} height={400} className="rounded-full h-96 w-60 md:h-full md:w-full" />
              </div>

            </div>
          </section>

          <section id="about" className="flex items-start space-y-2 min-h-screen px-8 md:px-16 flex-col">
            <div className=" flex">
              <h1 className="text-2xl md:text-5xl font-serif font-bold md:font-extrabold px-8 md:px-18 py-4 ">
              About My Self</h1>
            </div>
            <div className="">

              <p className="text-2xl py-6 md:text-xl text-justify font-serif font-medium text-black leading-normal">Hello! I'm Fazilat Jahan, a front-end developer and designer dedicated to crafting beautiful, intuitive digital experiences. With a strong foundation in HTML, CSS, and JavaScript, alongside expertise in frameworks like React and Next.js, I bring designs to life with seamless functionality. My design skills, allow me to create interfaces that are not only visually compelling but also user-centered.

                I’m driven by a passion for detail and a commitment to delivering high-quality, responsive, and engaging websites. Staying up-to-date with industry trends is essential to me, and I constantly explore new tools and techniques to keep my work innovative. Whether I'm developing or designing, my goal is always the same: to make the digital world more accessible and enjoyable for users.

                Let’s connect and discuss how I can contribute to your next project!</p>

            </div>
          </section>

          <section id="contact" className=" flex w-full min-h-screen items-center justify-center px-12">
            <div className="flex w-full max-w-xl mx-auto">
              <form action="" className="flex flex-col mx-auto my-0 rounded-xl border-black w-full min-w-min p-6 bg-white/20 border-2 shadow-md backdrop:blur-lg md:p-12" >

                <h1 className="text-2xl text-center font-bold font-serif mb-6 text-black"> Contact Me </h1>
                
                <div className="space-y-4">

                  <input type="text" placeholder="Name" required className="w-full bg-white/60 px-4 py-3 border-none  text-black rounded-lg placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:ring-2"/>

                  <input type="email" placeholder="Email" required className="w-full  bg-white/60 px-4 py-3 border-none text-black rounded-lg placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:ring-2" />

                  <textarea placeholder="Message" required className="w-full  bg-white/60 px-4 py-3 border-none text-black rounded-lg placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:ring-2"></textarea>
                </div>

                <div className="mt-6">
                  <input type="submit" value="Submit" className="w-full py-3 px-4 bg-black text-yellow-500 rounded-lg font-bold cursor-pointer hover:bg-yellow-500 hover:text-black transition duration-300 " />
                </div>

              </form>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}
