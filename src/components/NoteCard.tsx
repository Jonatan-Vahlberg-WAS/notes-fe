import type { Note } from "@/types/note"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { PinIcon } from "lucide-react"
import moment from "moment"

type NoteProps = {
    note: Note
}

export default function NoteCard({ note }: NoteProps) {

    const updatedAt = note.updated_at || note.created_at;
    const updatedAtDate = moment(updatedAt).format('DD/MM/YYYY HH:mm');

    return (
        <Card>
            <CardHeader> 
                <CardTitle className="flex items-center gap-2">
                    {note.title}
                    {note.is_pinned && <PinIcon className="w-4 h-4" />}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm w-full text-start">{note.content}</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-gray-500">
                    {updatedAtDate}
                </p>
            </CardFooter>
        </Card>
    )
}