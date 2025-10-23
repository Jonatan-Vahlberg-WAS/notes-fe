import AuthDialog from "./AuthDialog";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Joogle - Keep</h1>
            </div>
            <AuthDialog />
        </header>
    )
}