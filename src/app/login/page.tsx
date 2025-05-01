"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log("Login Data", values);
    // handle login logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-start ml-10 py-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-2xl p-10 bg-white border rounded-2xl shadow-lg min-h-[500px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Login to Your Account
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Forgot Password Link */}
              <div className="text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
