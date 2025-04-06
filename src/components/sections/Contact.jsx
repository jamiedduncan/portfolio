import React, { useState } from "react";
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent!"); 
            setFormData({name: "", email: "", message: "" })

     }).catch(() => alert("Oops! Something went wrong. Please try again."))
    };
    
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-800 to-purple-500 bg-clip-text text-transparent">
                    Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    <div className='relative mb-4'>
                        <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        value={formData.name}
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3
                        text-white transition focus:outLine-none focus:border-purple-500 focus:bg-purple-500/5' 
                        placeholder='Name'
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
/>
                    </div>
               
                    <div className='relative mb-4'>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3
                        text-white transition focus:outLine-none focus:border-purple-500 focus:bg-purple-500/5'
                         placeholder='Email'
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         />
                    </div>
                
                    <div className='relative mb-6'>
                        <textarea 
                        id="message" 
                        name="message" 
                        required  
                        value={formData.message}
                        rows={5}
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3
                        text-white transition focus:outLine-none focus:border-purple-500 focus:bg-purple-500/5' 
                        placeholder='Your message'
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>

                    
                <button
                    type="submit"
                    className='w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(89, 130, 246, 0.6_]
                    '>
                        Send message


                </button>






                </form>

                


                
            </div>
        </section>
    );
};

export default Contact;