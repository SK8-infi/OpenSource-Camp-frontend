import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const LEARN_PLAN_URL = 'https://learn.microsoft.com/en-us/plans/yzghetmzk22r4?sharingId=8D39D5A005C0636&wt.mc_id=studentamb_480361';

const LearnPlanButton = () => {
  const handleClick = () => {
    window.open(LEARN_PLAN_URL, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 0px rgba(59, 130, 246, 0)',
          '0 0 20px rgba(59, 130, 246, 0.5)',
          '0 0 0px rgba(59, 130, 246, 0)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed top-20 right-4 z-40 flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-sm border border-blue-400/30 text-white text-sm md:text-base font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-xl shadow-blue-500/30"
    >
      <BookOpen className="w-5 h-5" />
      <span>Microsoft Learn Plan</span>
      <ExternalLink className="w-4 h-4" />
    </motion.button>
  );
};

export default LearnPlanButton;

