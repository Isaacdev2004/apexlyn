import { motion } from "framer-motion";
import { sectionHeading, sectionHeadingSub, easeSmooth, REVEAL_DURATION } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  inView?: boolean;
  delay?: number;
  className?: string;
  descriptionClassName?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  inView = true,
  delay = 0,
  className = "",
  descriptionClassName = "",
  center = false,
}: SectionHeadingProps) {
  const wrapperClass = center ? `${className} text-center max-w-2xl mx-auto`.trim() : className;
  return (
    <div className={wrapperClass}>
      <motion.p
        initial={sectionHeading.hidden}
        animate={inView ? sectionHeading.show : {}}
        transition={{ duration: REVEAL_DURATION, ease: easeSmooth }}
        className="text-primary text-xs font-semibold tracking-widest uppercase mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={sectionHeadingSub.hidden}
        animate={inView ? sectionHeadingSub.show : {}}
        transition={{ duration: REVEAL_DURATION + 0.1, delay: delay + 0.08, ease: easeSmooth }}
        className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={sectionHeadingSub.hidden}
          animate={inView ? sectionHeadingSub.show : {}}
          transition={{ duration: REVEAL_DURATION + 0.1, delay: delay + 0.16, ease: easeSmooth }}
          className={`text-slate-600 text-base leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
