import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <h1 className="text-4xl font-bold mb-8">Shadcn UI Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Shadcn UI</CardTitle>
            <CardDescription>
              Beautiful, accessible components for your Next.js application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Shadcn UI provides a set of reusable components that you can copy
              and paste into your apps.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Add components to your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Use the CLI to add more components:
              <code className="block mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                npx shadcn@latest add [component]
              </code>
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Docs</Button>
            <Button>Add Component</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
