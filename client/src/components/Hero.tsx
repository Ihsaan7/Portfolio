import { motion } from "framer-motion";
import { ArrowDown, Code, Layout, Send, Zap } from "lucide-react";

export default function Hero() {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2 + (i * 0.2),
        duration: 0.5,
        type: "spring", 
        stiffness: 200
      }
    })
  };

  const backgroundShapes = [
    { top: "20%", left: "5%", size: "clamp(150px, 15vw, 300px)", delay: 0.2, duration: 20 },
    { top: "60%", left: "8%", size: "clamp(100px, 10vw, 200px)", delay: 0, duration: 15 },
    { top: "10%", right: "10%", size: "clamp(120px, 12vw, 250px)", delay: 0.5, duration: 25 },
    { top: "65%", right: "12%", size: "clamp(80px, 8vw, 180px)", delay: 0.3, duration: 18 },
    { top: "40%", right: "25%", size: "clamp(70px, 7vw, 150px)", delay: 0.7, duration: 22 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-background/60 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background opacity-90"></div>
        
        {/* Moving shapes */}
        {backgroundShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 blur-2xl"
            style={{
              top: shape.top,
              ...(shape.left ? { left: shape.left } : {}),
              ...(shape.right ? { right: shape.right } : {}),
              width: shape.size,
              height: shape.size
            }}
            animate={{
              x: [0, 30, -20, 15, 0],
              y: [0, -30, 15, -20, 0],
              rotate: [0, 5, -5, 3, 0]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: shape.duration,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Geometric patterns */}
        <div className="absolute w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-block mb-4 py-1 px-4 rounded-full bg-primary/10 border border-primary/20"
                >
                  <span className="text-primary font-medium">Frontend Developer & Creative Stylist</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Bringing <span className="gradient-text">creative ideas</span> to life through code
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Hi, I'm <span className="font-semibold text-primary">Ihsaan Ullah</span>, a web developer 
                  who creates engaging digital experiences through clean code and innovative design.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <a 
                    href="#projects" 
                    className="px-8 py-4 bg-primary text-white rounded-lg font-medium relative overflow-hidden group hover-lift animated-border"
                  >
                    <span className="relative z-10 flex items-center">
                      View My Work
                      <Zap className="w-4 h-4 ml-2 group-hover:animate-[pulse_1s_ease-in-out_infinite]" />
                    </span>
                  </a>
                  
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-card text-foreground rounded-lg border border-primary/20 font-medium relative overflow-hidden hover-lift"
                  >
                    <span className="flex items-center">
                      Get In Touch
                      <Send className="w-4 h-4 ml-2" />
                    </span>
                  </a>
                </motion.div>
                
                {/* Floating icons */}
                <div className="hidden sm:flex gap-6 items-center">
                  {[Code, Layout, Zap].map((Icon, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-3 bg-card rounded-lg border border-primary/20 text-primary"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Hero image or animated element */}
            <motion.div 
              className="lg:col-span-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative w-full aspect-auto max-w-md ">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60 blur-xl opacity-20 animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-card border-2 border-primary/20 p-1">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-card flex items-center space-x-1.5 px-3 border-b border-primary/10 rounded-t-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/30"></div>
                  </div>
                  
                  <div className="w-full h-full pt-6 rounded-lg bg-card/50 overflow-hidden flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="flex justify-center mb-8">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                          <img 
                            src="/images/profile1.jpg" 
                            alt="Ihsaan Ullah" 
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4 font-mono text-xs sm:text-sm text-left bg-card/80 p-4 rounded-lg border border-primary/20 overflow-hidden">
                        <motion.div 
                          className="text-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-secondary">const</span> <span className="text-accent">developer</span> = {'{'}
                        </motion.div>
                        
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <span className="pl-4">role: </span>
                          <span className="text-primary">"Frontend Developer"</span>,
                        </motion.div>
                        
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <span className="pl-4">skills: </span>
                          <span className="text-primary">[</span>
                          <span className="flex flex-col  gap-1">
                            <span className="text-accent text-center">"React" <span className="text-white"> ,</span></span> 
                            <span className="text-accent text-center">"Next.js" <span className="text-white"> ,</span></span> 
                            <span className="text-accent text-center">"Tailwind" <span className="text-white"> </span></span>
                          </span>
                          <span className="text-primary text-center flex justify-center mr-10">] <span className="text-white"> ,</span></span>
                        </motion.div>
                        
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <span className="pl-4">experience: </span>
                          <span className="text-primary">"2+ years"</span>
                        </motion.div>
                        
                        <motion.div 
                          className="text-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          {'};'}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-3 rounded-full bg-card border border-primary/20 shadow-lg hover:shadow-xl cursor-pointer hover-lift"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="w-5 h-5 text-primary" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
