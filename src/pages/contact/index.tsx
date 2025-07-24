import React, { useState } from "react";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";

const ContactSection: React.FC = () => {
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
    <section id="contacto" className="bg-white w-full scroll-mt-[7rem]">
      <div className="w-full h-[80vh] flex flex-col md:flex-row items-stretch overflow-hidden mb-[5rem] md:mb-0">
        {/* Formulario */}
        <div className="w-full md:w-1/2 h-full px-6 py-10 flex flex-col justify-center">
          <div className="max-w-xl mx-auto text-[#2E2E2E]">
            <span className="uppercase text-sm tracking-widest text-gray-500 mb-2 block">
              contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6">
              Ponete en contacto
            </h2>
            <div className="h-1 w-16 bg-[#2E2E2E] mb-8" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <CustomInput
                label="Nombre"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-1 text-sm font-medium text-[#2E2E2E]"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Contanos en qué podemos ayudarte..."
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E2E2E]"
                />
              </div>
              <CustomButton type="submit" variant="primary" size="md">
                Enviar mensaje
              </CustomButton>
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
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
