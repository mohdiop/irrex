import { ChevronDown, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { useIsSafari } from "../hooks/useIsSafari";

export default function ContactCard() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const isSafari = useIsSafari();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-[#34C7A2]/40 bg-white shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="flex md:flex-row flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Prénom</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#34C7A2]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Nom</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#34C7A2]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#34C7A2]"
          />
        </div>

        {/* Sujet */}
        <div className="relative">
            <label className="text-sm text-gray-600">Objet</label>

            <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`
                    mt-1 w-full rounded-lg border border-gray-200 bg-gray-50
                    px-4 py-3 pr-10
                    outline-none focus:border-[#34C7A2]
                    ${!isSafari ? "appearance-none" : ""}
                `}
            >
                <option value="">Sélectionnez un sujet...</option>
                <option value="support">Demande de démonstration</option>
                <option value="info">Information</option>
                <option value="partnership">Partenariat</option>
                <option value="others">Autres</option>
            </select>
            {!isSafari  && (
                <ChevronDown
                    className="
                    pointer-events-none
                    absolute right-3 top-[42px]
                    w-5 h-5 text-gray-500
                    hidden md:block
                    "
                />
            )}
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            placeholder="Décrivez votre besoin ou votre question..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none resize-none focus:border-[#34C7A2]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-[#34C7A2] text-white py-3 rounded-sm font-medium transition-all hover:opacity-90"
        >
          Envoyez le message
          <MoveRight size={20} />
        </button>
      </form>
    </div>
  );
}