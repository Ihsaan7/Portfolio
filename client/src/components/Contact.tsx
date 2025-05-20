import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AtSign, Linkedin, Send, MapPin, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  // EmailJS configuration - these will need to be set up with your EmailJS account
  const serviceId = "service_id"; // Replace with your EmailJS service ID
  const templateId = "template_id"; // Replace with your EmailJS template ID
  const publicKey = "public_key"; // Replace with your EmailJS public key
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Option 1: With EmailJS configuration
      if (serviceId !== "service_id" && templateId !== "template_id" && publicKey !== "public_key") {
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
        
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } 
      // Option 2: Without EmailJS configuration - direct email link
      else {
        // Create a mailto link as fallback
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Message from: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
        const mailtoLink = `mailto:ihsaan2215@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.open(mailtoLink, '_blank');
        
        toast({
          title: "Opening email client",
          description: "You'll be redirected to your email client to send your message.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Message could not be sent",
        description: "There was an error sending your message. Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 } 
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.1 } 
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="mb-4 inline-block">
            <span className="bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full border border-primary/20">
              Contact Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-lg text-foreground/80">
            Interested in collaborating or have a question? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover-lift">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="text-primary mr-2">•</span> Let's Connect
                </h3>
                <p className="text-foreground/80 mb-8">
                  I'm currently seeking job opportunities to gain hands-on experience and grow my skills 
                  in a professional environment. Whether you're looking to hire or just want to chat about 
                  web development, I'd love to hear from you!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                      <AtSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Email</h4>
                      <a 
                        href="mailto:ihsaan2215@gmail.com" 
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        ihsaan2215@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/ihsaan7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        linkedin.com/in/ihsaan7
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Location</h4>
                      <p className="text-foreground/80">
                        Islamabad, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-md p-8 border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-primary mr-2">•</span> Send Me a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group hover-lift animated-border"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
                
                <p className="text-sm text-foreground/60 text-center mt-4">
                  Or email me directly at{" "}
                  <a 
                    href="mailto:ihsaan2215@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    ihsaan2215@gmail.com
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
