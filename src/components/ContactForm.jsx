import { useState } from "react";
import { Button, TextInput, Textarea, Label, Alert } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaRegSmile } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });

    setTimeout(() => {
      console.log("Form data:", formData);
      
      setStatus({
        submitted: true,
        loading: false,
        success: true,
        message: "Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setTimeout(() => {
        setStatus({
          submitted: false,
          loading: false,
          success: false,
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE - Inspirational Text */}
        <div className="sticky top-24 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#779776]/20 bg-[#779776]/5">
            <HiSparkles className="text-[#779776] h-3 w-3" />
            <p className="text-xs text-[#779776] font-medium">Let's Connect</p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Let's Build Something
            <span className="text-[#779776] block mt-2">Amazing Together</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed">
            Got a project in mind? Want to collaborate or just say hello? 
            I'm always excited to hear about new opportunities and creative ideas.
          </p>

          {/* Quote / Motto */}
          <div className="border-l-4 border-[#779776] pl-4 py-2 bg-gray-50 rounded-r-lg">
            <p className="text-gray-600 italic text-sm">
              "Great things never come from comfort zones. Let's create something that matters."
            </p>
          </div>         
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          {/* Form Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Send a Message</h3>
          </div>

          {/* Alert untuk feedback */}
          {status.submitted && (
            <Alert
              color={status.success ? "success" : "failure"}
              icon={status.success ? FaCheckCircle : FaExclamationCircle}
              className="mb-6 animate-fade-in"
              onDismiss={() => setStatus({ ...status, submitted: false })}
            >
              <span className="font-medium">
                {status.success ? "Success!" : "Error!"}
              </span>
              {" " + status.message}
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <Label htmlFor="name" value="Your Name" className="text-gray-700 mb-2 block" />
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiUser className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10"
                  theme={{
                    field: {
                      input: {
                        base: "block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm focus:border-[#779776] focus:ring-[#779776]",
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <Label htmlFor="email" value="Email Address" className="text-gray-700 mb-2 block" />
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiMail className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10"
                  theme={{
                    field: {
                      input: {
                        base: "block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm focus:border-[#779776] focus:ring-[#779776]",
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <Label htmlFor="message" value="Your Message" className="text-gray-700 mb-2 block" />
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <MdMessage className="h-5 w-5 text-gray-400" />
                </div>
                <Textarea
                  id="message"
                  placeholder="Hi, I'd like to discuss a project with you..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="pl-10"
                  theme={{
                    base: "block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm focus:border-[#779776] focus:ring-[#779776]",
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status.loading}
              className="w-full bg-black hover:bg-[#779776] transition-all duration-300 py-3"
              theme={{
                base: "w-full flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300",
              }}
            >
              {status.loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}