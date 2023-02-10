import HText from "@/shared/HText"
import Benefit from "./Benefit"
import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion as m } from "framer-motion"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title:"State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestiae vero officiis nam culpa labore."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title:"100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestiae vero officiis nam culpa labore."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title:"Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestiae vero officiis nam culpa labore."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <m.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum quo fuga, molestiae dicta est ducimus atque, quam, iure excepturi tempora temporibus qui quibusdam eligendi sint cumque deleniti iste officia praesentium. Inventore earum error voluptate temporibus distinctio amet, consectetur dicta.
            </p>
          </div>
          {/* BENEFITS */}
          <m.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
              <Benefit 
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
          </m.div>
      </m.div>
    </section>
  )
}

export default Benefits