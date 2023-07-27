export default function Home() {
    return (
        <header className="flex gap-8 flex-col justify-center items-center w-max">
            <h1 className="font-black uppercase text-6xl font-serif">
                A Polling App
            </h1>
            <a href="/polls" className="btn btn-block">
                see the polls
            </a>
        </header>
    );
}
