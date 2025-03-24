import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        aria-hidden
        src="/background.jpg"
        alt="Designed-by-macrovector@Freepik"
        fill
        className="object-cover -z-10"
        quality={100}
        priority
      />

      <div className="flex flex-col w-full z-10 min-h-screen border border-red items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <h1 className="text-4xl sm:text-4xl italic">Andrea Salas</h1>
          <h2 className="text-2xl sm:text-6xl">Los Mejores Catálogos</h2>
        </div>
        <main className="flex flex-row items-center bg-amber-200 sm:w-2/3 justify-center sm:gap-[300px]  sm:absolute top-[40%] shadow shadow-orange-300 w-full gap-2 sm:mt-0 mt-10">
          <div className="h-[72px] flex items-center">
            <Image
              aria-hidden
              src="/cyzone.png"
              alt="cyzone"
              width={72}
              height={72}
            />
          </div>
          <div className="h-[72px] flex items-center">
            <Image
              aria-hidden
              src="/esika.webp"
              alt="esika"
              width={72}
              height={72}
            />
          </div>
          <div className="h-[72px] flex items-center">
            <Image
              aria-hidden
              src="/lbel.webp"
              alt="lbel"
              width={72}
              height={72}
              className="invert"
            />
          </div>
        </main>
        <footer className="min-h-80 mt-[10%] w-full flex gap-[60px] flex-wrap items-center justify-center pt-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xl"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/books.png"
              alt="File icon"
              width={64}
              height={64}
            />
            Ver catálogos
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xl"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/tutorials.png"
              alt="Window icon"
              width={96}
              height={96}
            />
            Tutoriales
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xl"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/phone_emoji.png"
              alt="Globe icon"
              width={64}
              height={64}
            />
            Contáctame
          </a>
        </footer>
      </div>

      {/* <div className="grid grid-rows-[120px_72px_1fr] items-center justify-items-center min-h-screen  sm:p-20 font-[family-name:var(--font-geist-sans)] z-10">
        <div className="w-full h-full flex flex-col justify-center items-center gap-3.5">
          <h1 className="text-4xl sm:text-4xl italic">Andrea Salas</h1>
          <h2 className="text-2xl sm:text-6xl">Los Mejores Catálogos</h2>
        </div>
        <main className="flex flex-row row-start-2 items-center sm:items-start bg-amber-200 w-1/2 justify-center gap-[120px] mx-20 px-2 absolute top-[35%] shadow shadow-orange-300">
          <div className="h-[72px] flex items-center">
            <Image
              aria-hidden
              src="/cyzone.png"
              alt="cyzone"
              width={72}
              height={72}
            />
          </div>
          <div className="h-[72px] flex items-center">
            <Image
              aria-hidden
              src="/esika.webp"
              alt="esika"
              width={72}
              height={72}
            />
          </div>
          <div className="h-[72px] flex items-center">
            <Image
              aria-hidden
              src="/lbel.webp"
              alt="lbel"
              width={72}
              height={72}
              className="invert"
            />
          </div>
        </main>
        <footer className="h-full w-full row-start-3 flex gap-[150px] flex-wrap items-center justify-center border border-black">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div> */}
    </div>
  );
}
