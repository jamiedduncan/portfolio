
    
    export const About = () => { 
    const frontEndSkills = [
     "React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "GitHub"
    ];

    const backEndSkills = [
      "Node.js", "MySQL"
    ];


    return (<section id="about" className="min-h-screen flex items-center justify-center py-20">
    
   
    <div className="max-w-3xl mx-auto px-4"> 

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-800 to-purple-500 bg-clip-text text-transparent"> About Me</h2>
         <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

                <p className="text-gray-300 mb-6">
                 I am learning to code and I am passionate about technology and its potential to change the world. I am currently focused
                  on web development, particularly in React and Tailwind CSS. I enjoy creating beautiful and functional user interfaces 
                  that provide a great user experience. I am also interested in exploring other areas of technology, such as artificial i
                  ntelligence and machine learning.
                </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2"> 
            
                {frontEndSkills.map((tech, key) => ( 
                    <span key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(89, 130, 246, 0.2)]">
                        {tech}


                    </span>
                ))}

            </div>
         </div>
   
             <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2"> 
            
                {backEndSkills.map((tech, key) => ( 
                    <span key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(89, 130, 246, 0.2)] transition">
                        {tech}


                    </span>
                ))}

            </div>
         </div>

    </div>


    </div>
    <div className="mt-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-800 to-purple-500 bg-clip-text text-transparent">Relevent Experience</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Technology
               </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                      <li>
                      Learned third party software for use in recording and scoring student videos and acted as the resident expert for use of this software (and its hardware components).
                     </li>
                     <li>
                    Access databases for tracking and scheduling part time employees and participants.</li>
                    <li>
                     Installed a MySQL database driven website, including modifying the template to include company logos and maintaining information disseminated on the website.
                    </li>
                    <li>
                    Utilized social media to assist in the recruitment process of community actors.
                    </li>
                    <li>Used Sony Vegas to create and edit training videos for community actors.
                    </li>
                    <li>Employed Zoom H6 and Audacity to record and edit podcast.</li>
                    <li>
                    Shot photographs with a Nikon DSLR and edited them using Adobe Lightroom and Photoshop.
                    </li>
                    <li>
                    Proficient with Microsoft Office, Windows 11, IOS 18.2, iPadOS 18.2.
                    </li>
                    <li>I adapt easily to new technology, apps, programs and equipment.

                    </li>
               </ul>
            
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Training and Instruction
               </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                      <li>
                      Created course materials, inclusive of rubrics for scoring students and accurately identifying areas of improvement at both the K12 and collegiate levels.</li>

                    <li>Taught middle school and high school mathematics, which saw students’ scores improve within one school year.

                    </li>
                    <li>Instructed and trained welfare recipients in basic job readiness skills, including basic computer skills.</li>
                    <li>

                    </li>
                    <li>Trained program participants in interview skills and résumé writing.

                    </li>
                    <li>Labeled videos with subtitles to help medical students understand the importance of taking a good history and physical.

                    </li>
                    <li>Used differentiation to cater to different learning styles.

                    </li>
                    <li>Utilized technology throughout my career to assist in instruction.

                    </li>
                    <li>Developed training materials for use instructing both actors and welfare recipients.</li>
               </ul>
            
            </div>

</div>






    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education
               </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                      <li>
                    <strong>
                        EdS in Curriculum and Instruction-  
                    </strong> Lincoln Memorial University, 2012
                </li>
                <li>
                    <strong>
                        MBA-  
                    </strong> Lincoln Memorial University, 2011
                </li>
                <li>
                    <strong>
                        BA in Business Administration with IT Concentration-  
                    </strong> Lincoln Memorial University, 2005
                </li>
                <li>
                    <strong>
                        AAS-
                    </strong> Southeast Kentucky Community and Technical College, 2003
                </li>
               </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work History
               </h3>
            
                <div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>
                            Community Support Specialist-  
                            </strong> Wyatt Duncan-Padilla Via New Vista, 2013-Present
                        </li>
                        <li>
                            <strong>
                            Business and Math Teacher-  
                            </strong> Scott County Board of Education, 2022-2023         
                        </li>
                        <li>
                            <strong>
                            Standardized Patient/Patient Model Coordinator
                            </strong> Lincoln Memorial University, 2008-2013
                        </li>
                        <li>
                            <strong>
                           Job Readiness Coordinator-  
                            </strong> Goodwill Industries of Kentucky, 2007-2008
                        </li>
                    </ul>
            
               </div>
            </div>

        </div>




            </div>

    
    </section>
    );






}