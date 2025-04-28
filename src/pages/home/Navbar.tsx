"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Book,
  GraduationCap,
  Calendar,
  FileText,
  Users,
  Bell,
  User,
  LogOut,
  Menu,
  Settings,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Students",
      href: "/students",
      icon: <Users className="h-4 w-4 mr-2" />,
    },
    {
      name: "Courses",
      href: "/courses",
      icon: <Book className="h-4 w-4 mr-2" />,
    },
    {
      name: "Attendance",
      href: "/attendance",
      icon: <Calendar className="h-4 w-4 mr-2" />,
    },
    {
      name: "Grades",
      href: "/grades",
      icon: <GraduationCap className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="ml-2 text-xl font-bold">College Management</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-2">
              {navigation.map((item) =>
                item.name === "Students" || item.name === "Courses" ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={
                          pathname?.startsWith(item.href) ? "default" : "ghost"
                        }
                        className="flex items-center"
                      >
                        {item.icon}
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      <DropdownMenuLabel>Manage {item.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {item.name === "Students" && (
                        <>
                          <DropdownMenuItem>
                            <Link href="/students" className="flex w-full">
                              View All Students
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/students/add" className="flex w-full">
                              Add New Student
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              href="/students/admission"
                              className="flex w-full"
                            >
                              Admission
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              href="/students/alumni"
                              className="flex w-full"
                            >
                              Alumni
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                      {item.name === "Courses" && (
                        <>
                          <DropdownMenuItem>
                            <Link href="/courses" className="flex w-full">
                              View All Courses
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/courses/add" className="flex w-full">
                              Add New Course
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              href="/courses/departments"
                              className="flex w-full"
                            >
                              Departments
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              href="/courses/schedule"
                              className="flex w-full"
                            >
                              Course Schedule
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    key={item.name}
                    variant={pathname === item.href ? "default" : "ghost"}
                    asChild
                  >
                    <Link href={item.href} className="flex items-center">
                      {item.icon}
                      {item.name}
                    </Link>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2">
            {/* Notifications dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[280px] sm:w-[350px] md:w-[400px]"
              >
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[50vh] overflow-y-auto">
                  <DropdownMenuItem className="py-3 cursor-pointer">
                    <div className="w-full">
                      <p className="font-medium">New student registration</p>
                      <p className="text-sm text-muted-foreground">
                        John Doe has registered for Computer Science course
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 hours ago
                      </p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer">
                    <div className="w-full">
                      <p className="font-medium">Grade update</p>
                      <p className="text-sm text-muted-foreground">
                        Mid-term grades have been posted for Mathematics
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Yesterday
                      </p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer">
                    <div className="w-full">
                      <p className="font-medium">System maintenance</p>
                      <p className="text-sm text-muted-foreground">
                        The system will be down for maintenance on Sunday
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        3 days ago
                      </p>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center cursor-pointer">
                  <Link
                    href="/notifications"
                    className="text-center w-full text-primary"
                  >
                    View all notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme toggle - hidden on smallest screens */}
            <div className="hidden xs:block">
              <ThemeToggle />
            </div>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 pl-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/assets/avatars/admin.jpg" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium">Admin User</span>
                    <span className="text-xs text-muted-foreground">
                      Administrator
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/profile" className="flex-1">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/settings" className="flex-1">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <Link href="/auth/signout" className="flex-1">
                    Sign out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[80%] sm:w-[350px] overflow-y-auto"
                >
                  <div className="flex flex-col gap-6 py-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="ml-2 text-lg font-bold">
                          College Management
                        </span>
                      </div>
                      <ThemeToggle />
                    </div>

                    <div className="grid gap-4">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          {item.name === "Students" ||
                          item.name === "Courses" ? (
                            <div className="space-y-3">
                              <div className="font-medium flex items-center text-sm">
                                {item.icon}
                                {item.name}
                              </div>
                              <div className="ml-6 space-y-2 border-l pl-2">
                                {item.name === "Students" && (
                                  <>
                                    <Link
                                      href="/students"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      View All Students
                                    </Link>
                                    <Link
                                      href="/students/add"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      Add New Student
                                    </Link>
                                    <Link
                                      href="/students/admission"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      Admission
                                    </Link>
                                    <Link
                                      href="/students/alumni"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      Alumni
                                    </Link>
                                  </>
                                )}
                                {item.name === "Courses" && (
                                  <>
                                    <Link
                                      href="/courses"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      View All Courses
                                    </Link>
                                    <Link
                                      href="/courses/add"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      Add New Course
                                    </Link>
                                    <Link
                                      href="/courses/departments"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      Departments
                                    </Link>
                                    <Link
                                      href="/courses/schedule"
                                      className="block py-1 text-sm hover:text-primary"
                                    >
                                      Course Schedule
                                    </Link>
                                  </>
                                )}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={`flex items-center py-2 text-sm ${
                                pathname === item.href
                                  ? "text-primary font-medium"
                                  : "hover:text-primary"
                              }`}
                            >
                              {item.icon}
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t pt-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage
                            src="/assets/avatars/admin.jpg"
                            alt="Admin"
                          />
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Admin User</p>
                          <p className="text-xs text-muted-foreground">
                            Administrator
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/profile"
                          className="flex items-center py-1 text-sm hover:text-primary"
                        >
                          <User className="h-4 w-4 mr-2" />
                          Profile
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center py-1 text-sm hover:text-primary"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Link>
                        <Link
                          href="/auth/signout"
                          className="flex items-center py-1 text-sm text-red-500 hover:text-red-600"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
