
import { useState } from 'react'
import { Link } from 'react-router-dom'  
import { Facebook, Twitter, Linkedin, WebcamIcon as Skype, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        { email: email },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )

      console.log(result.text)
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      console.error('Error:', error)
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const galleryImages = [
    '/G1.webp',
    '/G2.webp',  
    '/G3.webp',
    '/G4.webp',
    '/G5.webp',
    '/G6.webp',
   
  ]

  return (
   
    <footer className="relative text-white py-16 overflow-hidden">
 
  <div className="absolute inset-0 z-10"> 
    <img
      src="/Footer.webp"
      alt="Footer background"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/90" />
  </div>

  {/* Content Section */}
  <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
   
    <div className="space-y-6">
      <Link to="/" className="inline-block">
        <img
          src="/ReputationArchitectsFinalLogo.webp"
          alt="Tors Logo"
          width={120}
          height={50}
          className="brightness-0 invert"
        />
      </Link>
      <p className="text-gray-400 max-w-sm">
        There are many variations of passages Lorem Ipsum available, the Ipsum has been majority
        suffered.
      </p>
      <p className="text-gray-400 max-w-sm">
        We have the custom support and great team members. Digital Agency with the creative ideas.
      </p>
    </div>

  
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Newsletter</h3>
      <p className="text-gray-400">Get the latest news other tips</p>
      <form onSubmit={handleSubmit} className="relative max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-white text-black rounded-md"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-0 top-0 h-full px-6 bg-[#ff4a17] hover:bg-[#ff5e33] transition-colors rounded-r-md disabled:bg-gray-400"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
      {message && (
        <p className={`text-sm ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </div>

    {/* Gallery */}
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Our Services</h3>
      <div className="grid grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md aspect-[4/3]"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700">
              <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
            
            {/* Zoom Focus Point */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-white transform scale-0 group-hover:scale-100 transition-transform duration-500">
                <div className="w-10 h-10 rounded-full border-2 border-white m-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Contact */}
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Contact Us</h3>
      <div className="space-y-4 text-gray-400">
        <p>301 Princes Street, Damietta</p>
        <p>Egypt-104</p>
        <p>+92-207-823-7766</p>
        <p>info@example.com</p>
        <div className="flex gap-4">
          <Link 
            to="#" 
            className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link 
            to="#" 
            className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link 
            to="#" 
            className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            to="#" 
            className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Skype className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

