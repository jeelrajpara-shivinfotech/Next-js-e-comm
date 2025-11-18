'use client'
import { FaPhone } from 'react-icons/fa6'
import { FaMapPin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { IoMdSend } from "react-icons/io";
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border text-gray-600  focus:ring-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border text-gray-600  focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border text-gray-600  focus:ring-primary"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border text-gray-600  focus:ring-primary"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white cursor-pointer px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
              {!submitted && <IoMdSend className="w-5 h-5" />}
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
