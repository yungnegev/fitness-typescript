import { SelectedPage } from "@/shared/types";
import { motion as m } from "framer-motion";
import { set, useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger(); // an async function coming from react-hook-form
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <m.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <m.div
          className="md:w-3/5"
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
            <span className="text-primary-500">JOIN NOW</span> TO GET SHREDDED
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            ducimus soluta eum, unde quisquam reiciendis quae illo voluptate
            molestias tenetur tempore modi, iste vel enim illum eaque
            necessitatibus ad dolores.
          </p>
        </m.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <m.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="vidible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 70 },
              vidible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/arttik5@gmail.com"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxlength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxlength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </m.div>
          <m.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="vidible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 70 },
              vidible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img 
                className="w-full"
                src={ContactUsPageGraphic} 
                alt="image" 
              />
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default Contact;
