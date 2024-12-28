

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

function WorkProcess() {
  const steps = [
    {
      icon: 'mdi:chart-timeline-variant',
      title: 'STRATEGY PLANNING',
      description: 'Develop comprehensive digital marketing strategies aligned with business goals.',
      
    },
    {
      icon: 'mdi:target',
      title: 'AUDIENCE TARGETING',
      description: 'Identify and analyze target audience demographics and behaviors.',
      
    },
    {
      icon: 'mdi:trending-up',
      title: 'CONTENT CREATION',
      description: 'Create engaging content optimized for different digital platforms.',
      
    },
    {
      icon: 'mdi:share-variant',
      title: 'SOCIAL MEDIA',
      description: 'Execute strategic campaigns across social media channels.',
     
    },
    {
      icon: 'mdi:chart-bar',
      title: 'ANALYTICS',
      description: 'Track performance metrics and optimize marketing strategies.',
     
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="w-full max-w-full mx-auto px-4 py-12 bg-black">
   
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold inline-flex flex-col md:flex-row items-center gap-2">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-md">Work</span>
          <span className="text-gray-300">PROCESS</span>
        </h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={itemVariants}
          >
       
            <div className="flex flex-col items-center text-center">
         
              <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className={`w-20 h-20 rounded-full border-2 border-dotted border-orange-500 flex items-center justify-center ${step.color}`}>
                  <Icon 
                    icon={step.icon} 
                    className="w-8 h-8 text-orange-500"
                  />
                </div>
                
               
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-orange-500/30" />
                )}
              </div>

        
              <div className="space-y-4">
                <h3 className="font-bold text-gray-400 text-sm md:text-base pb-2 border-b-2 border-orange-500 inline-block">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>

            
            {index < steps.length - 1 && (
              <div className="lg:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4 w-[2px] h-8 bg-orange-500" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default  WorkProcess
