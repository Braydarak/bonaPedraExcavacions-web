import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contacto" className="bg-[var(--color-base)] w-full scroll-mt-[7rem]">
      <div className="w-full min-h-dvh md:min-h-[70vh] flex flex-col md:flex-row items-stretch md:mb-0 mb-12">
        {/* Formulario */}
        <div className="w-full md:w-1/2 h-full px-6 py-10 flex flex-col justify-center">
          <div className="w-full max-w-xl mx-auto text-[#2E2E2E]">
            <span className="uppercase text-sm tracking-widest text-gray-500 mb-2 block">
              {t("contact.label")}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-8">
              {t("contact.title")}
            </h2>
            <div className="h-1 w-16 bg-[#2E2E2E] mb-8" />

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <CustomInput
                label={t("contact.form.name")}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={t("contact.form.namePlaceholder")}
              />
              <CustomInput
                label={t("contact.form.email")}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder={t("contact.form.emailPlaceholder")}
              />
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-1 text-start text-md font-semibold text-[#2E2E2E]"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="px-4 py-2 rounded-md border border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] mb-0 md:mb-4"
                />
              </div>
              <div className="flex w-full md:mb-0 mb-8" >
                <CustomButton type="submit" variant="primary" size="lg" className="w-full">
                  {t("contact.form.submit")}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>

        {/* Imagen con sierra */}
        <div className="w-full md:w-1/2 h-full relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/machine.avif')" }}
          />
          <svg
            className="hidden md:block absolute top-0 left-0 h-full w-[40px] z-10"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M0,0 
                L10,10 
                L0,20 
                L10,30 
                L0,40 
                L10,50 
                L0,60 
                L10,70 
                L0,80 
                L10,90 
                L0,100 
                L0,0
              "
              fill="#efeee9"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
