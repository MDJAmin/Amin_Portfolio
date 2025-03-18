import { useState } from "react";
import { RevealOnScroll } from "../Common/RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", title: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [quotaExhausted, setQuotaExhausted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { name, email, title, message } = formData;

    if (!name || !email || !title || !message) {
      setStatusMessage("❌ All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage("❌ Please enter a valid email address.");
      return false;
    }

    if (message.length < 20) {
      setStatusMessage("❌ Message must be at least 20 characters long.");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", title: "", message: "" });
    setStatusMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quotaExhausted) {
      setStatusMessage("❌ Quota exhausted. Please try again later.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    const lastSentTimes = JSON.parse(localStorage.getItem("lastSentTimes") || "{}");
    const lastSentTime = lastSentTimes[formData.email];
    const currentTime = Date.now();
    const cooldownPeriod = 4 * 60 * 1000;

    if (lastSentTime && currentTime - lastSentTime < cooldownPeriod) {
      setStatusMessage(
        "❌ Please wait 4 minutes before sending another message from this email."
      );
      return;
    }

    if (
      !import.meta.env.VITE_SERVICE_ID ||
      !import.meta.env.VITE_TEMPLATE_ID ||
      !import.meta.env.VITE_PUBLIC_KEY
    ) {
      setStatusMessage("Configuration error. Please check your email setup.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setStatusMessage("✅ Message sent successfully!");
      lastSentTimes[formData.email] = currentTime;
      localStorage.setItem("lastSentTimes", JSON.stringify(lastSentTimes));
      setTimeout(() => {
        resetForm();
      }, 4000);
    } catch (error) {
      if (error.status === 429) {
        setStatusMessage("❌ Quota exhausted. Please try again later.");
        setQuotaExhausted(true);
      } else {
        setStatusMessage("❌ Oops! Something went wrong. Please try again.");
      }

      setTimeout(() => {
        setStatusMessage("");
      }, 4000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center'>
            Get In Touch
          </h2>

          <form
            className='space-y-6'
            onSubmit={handleSubmit}
          >
            <div className='relative'>
              <input
                type='text'
                id='name'
                name='name'
                aria-label='Full Name'
                required
                value={formData.name}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-300 focus:bg-blue-500/5'
                placeholder='Name...'
                onChange={handleChange}
                disabled={quotaExhausted}
              />
            </div>

            <div className='relative'>
              <input
                type='email'
                id='email'
                name='email'
                aria-label='Email Address'
                required
                value={formData.email}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-300 focus:bg-blue-500/5'
                placeholder='example@gmail.com'
                onChange={handleChange}
                disabled={quotaExhausted}
              />
            </div>

            <div className='relative'>
              <input
                type='text'
                id='title'
                name='title'
                aria-label='Title'
                required
                value={formData.title}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-300 focus:bg-blue-500/5'
                placeholder='Title...'
                onChange={handleChange}
                disabled={quotaExhausted}
              />
            </div>

            <div className='relative'>
              <textarea
                id='message'
                name='message'
                aria-label='Message'
                required
                rows={5}
                value={formData.message}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-300 focus:bg-blue-500/5 min-h-14'
                placeholder='Your Message...'
                onChange={handleChange}
                disabled={quotaExhausted}
              />
            </div>

            <button
              type='submit'
              className='w-full bg-gray-100 text-black py-3 px-6 rounded font-medium relative overflow-hidden hover:bg-gray-200 hover:text-black transition-all cursor-pointer'
              disabled={isSending || quotaExhausted}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            <div className='min-h-6'>
              {statusMessage && (
                <p
                  className={`text-center ${
                    statusMessage.startsWith("✅") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
