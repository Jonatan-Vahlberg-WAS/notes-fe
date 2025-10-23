import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import AuthDialogForm from "./AuthDialogForm";

export default function AuthDialog() {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="ghost">Login</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                </DialogHeader>
                <AuthDialogForm />
            </DialogContent>
        </Dialog>
    )
}