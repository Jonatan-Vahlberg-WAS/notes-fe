import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

const noteFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  is_pinned: z.boolean().optional(),
});

type NoteFormSchema = z.infer<typeof noteFormSchema>;

export default function NoteForm() {
  const form = useForm<NoteFormSchema>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      id: undefined,
      title: "",
      content: "",
      is_pinned: false,
    },
  });

  function onSubmit(data: NoteFormSchema) {
    console.log(data);
    // TODO: Implement note creation / update logic
  }

  return (
    <div className="p-4">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_pinned"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is Pinned</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
