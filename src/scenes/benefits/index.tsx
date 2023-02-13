import HText from "@/shared/HText"
import Benefit from "./Benefit"
import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion as m } from "framer-motion"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

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
          <m.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="vidible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -70 },
                vidible: { opacity: 1, x: 0 },
            }}
            >
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum quo fuga, molestiae dicta est ducimus atque, quam, iure excepturi tempora temporibus qui quibusdam eligendi sint cumque deleniti iste officia praesentium. Inventore earum error voluptate temporibus distinctio amet, consectetur dicta.
            </p>
          </m.div>
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
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img
              className="mx-auto" 
              src={BenefitsPageGraphic} 
              alt="benefitsimage" 
              />
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                  <m.div
                      className="md:my-5 md:w-3/5"
                      initial="hidden"
                      whileInView="vidible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x: -70 },
                          vidible: { opacity: 1, x: 0 },
                      }}
                    >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING {" "}
                      <span className="text-primary-500"> FIT </span>
                    </HText>
                  </m.div>                  
                </div>
              </div>

              {/* DESCRIPTION */}
                <m.div
                  className="md:my-5 md:w-3/5"
                  initial="hidden"
                  whileInView="vidible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, x: -70 },
                      vidible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nisi, quos omnis quo modi quia odio quibusdam sint atque provident est repudiandae facilis, officia necessitatibus fugiat neque quisquam velit quidem!
                  </p>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis fugiat natus amet eius eaque dolorum sit eos nulla harum!
                  </p>
                </m.div>
              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
      </m.div>
    </section>
  )
}

export default Benefits