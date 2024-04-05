import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

    <div className="mt-40">
    <Image
          className="relative"
          src="/favicon.ico"
          alt="Me, i guess."
          width={230}
          height={50}
          priority
        />

    </div>
    <div className="mt-10 text-center ">
      <p className="text-[3rem] font-semibold">
        Abdullah<span className="font-normal font-sans">Dev </span> 
      </p>
      <p className="">A full-stack developer with 8 years of experience.</p>
      <br></br>
      <img src="https://lanyard-profile-readme.vercel.app/api/436938949588549634?theme=dark&bg=16161a&animated=true&hideDiscrim=true&borderRadius=30px&idleMessage=I use arch btw..."></img>
    </div>
    <a className="mt-20 mb-20" href="https://github.com/ajauish">
    <img src="https://skillicons.dev/icons?i=js,ts,html,css,py,nodejs,bash,bootstrap,cloudflare,discord,dart,flutter,docker,express,php,mysql,git,vue,react,md,bots,firebase,workers,git,go,rust,github,electron,linux,flask,tailwind,next,photoshop,premiere,aftereffects,audition)](https://skillicons.dev"></img>
    <br></br>
    <br></br>
    <img src="https://myreadme.vercel.app/api/embed/ajauish?panels=userstatistics,toprepositories,toplanguages,commitgraph" alt="reimaginedreadme" />
    
    </a>

    <p>Made with love. 2024</p>
    <br></br>

    </main>
  );
}
