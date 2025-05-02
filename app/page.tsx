"use client"; // Add this directive at the top

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import framer-motion
import supabase from "@/lib/supabase"; // Import the Supabase client

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
  
    try {
      // Use Supabase client to insert data into your "submissions" table
      const { data, error } = await supabase
        .from('submissions')
        .insert([formData]);
  
      if (error) {
        throw new Error(error.message);
      }
  
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", address: "", note: "" });
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-400 to-blue-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-white rounded-3xl p-8 w-full max-w-lg space-y-8 shadow-xl shadow-pink-500/40"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-extrabold text-center text-gray-800"
        >
          Share Your Details 💖
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg w-full transition-all focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Input
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg w-full transition-all focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            />
          </motion.div>

          {/* Phone Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Input
              placeholder="Your Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-4 bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg w-full transition-all focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            />
          </motion.div>

          {/* Address Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Input
              placeholder="Your Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="p-4 bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg w-full transition-all focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            />
          </motion.div>

          {/* Note Textarea */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Textarea
              placeholder="Leave a note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={4}
              className="p-4 bg-gray-50 border-2 border-gray-300 rounded-xl shadow-lg w-full transition-all focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 text-white bg-gradient-to-r from-pink-400 to-indigo-500 rounded-xl shadow-lg hover:from-pink-500 hover:to-indigo-600 transition-all"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </Button>
          </motion.div>

          {/* Success Message */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-green-600 text-sm text-center"
            >
              🎉 Submitted successfully!
            </motion.p>
          )}

          {/* Error Message */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-red-600 text-sm text-center"
            >
              😢 Something went wrong. Please try again.
            </motion.p>
          )}
        </form>
      </motion.div>
    </main>
  );
}
