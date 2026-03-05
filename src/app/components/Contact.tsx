import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export function Contact() {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const phoneNumber = "6287898043300";

    const message = `
  Halo Billy Sistian Putra, saya tertarik untuk menghubungi Anda melalui portofolio Anda. Berikut adalah detail pesan saya:

  Nama: ${data.name}
  Email: ${data.email}
  Subject: ${data.subject}

  Pesan:
  ${data.message}
    `;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );

    reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            {t.contact.sectionLabel}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins']">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {t.contact.contactInformation}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {t.contact.email}
                    </p>
                    <a
                      href="mailto:billy.sistianputra@gmail.com"
                      className="text-slate-900 font-medium hover:text-blue-600"
                    >
                      billy.sistianputra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {t.contact.phone}
                    </p>
                    <a
                      href="whatsapp://send?phone=+6287898043300"
                      className="text-slate-900 font-medium hover:text-blue-600"
                    >
                      +62878-9804-3300
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {t.contact.location}
                    </p>
                    <p className="text-slate-900 font-medium">
                      {t.contact.locationCity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-500 mb-4">
                  {t.contact.followMe}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/billysistian"
                    className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/billy-sistian-putra"
                    className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {t.contact.sendMessage}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder={t.contact.name}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {t.contact.nameRequired}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.emailField}
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {t.contact.emailInvalid}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-xs mt-1">
                      Subject is required
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {t.contact.messageRequired}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  {t.contact.sendBtn}
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
