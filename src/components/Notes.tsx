import type { Note } from "@/types/note"
import NoteCard from "./NoteCard"

const defaultNotes: Note[] = [
    {
        id: "1",
        title: "Note 1",
        content: "Content 1"
    },
    {
        id: "2",
        title: "Note 2",
        content: "Content 2"
    },
    {
        id: "3",
        title: "Note 3",
        content: "Content 3"
    }
]

type NotesProps = {
    notes: Note[]
}

export default function Notes({ notes = defaultNotes }: NotesProps) {
    return (
        <main className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </main>
    )
}