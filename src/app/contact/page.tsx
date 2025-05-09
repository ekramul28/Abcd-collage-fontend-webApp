"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Validation Schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-600 text-white text-center p-6 rounded-lg mb-8"
      >
        <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
        <p className="mt-2">
          Wed love to hear from you. Feel free to reach out for any queries.
        </p>
      </motion.div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>📬 Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-medium">Name</label>
              <Input
                type="text"
                {...register("name")}
                className="mt-1 w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <Input
                type="email"
                {...register("email")}
                className="mt-1 w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <Textarea
                rows={5}
                {...register("message")}
                className="mt-1 w-full p-2 border rounded"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle>📍 Our Location & Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">Phone Number</h3>
            <p className="text-gray-600">+1 (234) 567-890</p>
          </div>

          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">contact@college.com</p>
          </div>

          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-600">123 College Avenue, City, Country</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-64 mt-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0144317000576!2d144.95373531567012!3d-37.81627977975103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d443ed2a0d3%3A0x804e2e3fc74e833b!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1618834349184!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              //   allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
