import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import authService from "@/utils/authService";

const formSchema = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(8, "Password is required minimum 8 characters"),
});

type FormSchema = z.infer<typeof formSchema>;
export default function AuthDialogForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormSchema) {
    console.log(values);
    try {
      const response = await authService.signin(values.email, values.password)
      if(response.ok) {
        return alert("Login successful")
      }
     throw new Error("Login unsuccesful") 
    } catch(err) {
      console.warn("Login unsuccessful: ",err)
      alert("Login unsuccesful")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
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
                <Input {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
