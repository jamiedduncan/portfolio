 export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4"> 
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Hi, I am Jamie Duncan.



            </h1>
        <p className="text-gray-400 text-lg md-8 max-w-lg mx-auto">

       I am learning to build websites and applications using React, Tailwind CSS, and other modern web technologies. 
       I am passionate about creating user-friendly and visually appealing digital experiences. I am currently working 
       on several projects to enhance my skills and knowledge in web development. Stay tuned for updates on my journey!

        </p><br/>
        <div className="flex justify-center space-x-4">
            <a href="#projects" 
            className="bg-purple-500 text-white py-3 px-6 rounded font-medium 
            transition relative overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15_rgba(89, 130, 246, 0.4)]">View Projects
                </a> 

            <a href="#contact" 
            className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all
            duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15_rgba(89, 130, 246, 0.2)] hover:bg-purple-500/10 ">Contact Me
                </a> 


        </div>
        </div>



    </section>);

}