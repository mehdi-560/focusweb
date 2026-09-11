import Image from "next/image";
import Link from "next/link";
export default function HomeGateway({japanese=false}:{japanese?:boolean}) {
 const items=japanese?[
 ["/trading","貿易事業","調達から、世界へ。","/images/hero/slide-1-port.png"],
 ["/digital-solutions","デジタルソリューション","アイデアを、日々の力に。","/images/industries/consultancy.jpg"],
 ["/consultancy","市場調査・競合分析","次の判断に、確かな視点を。","/images/news/news-2-dubai.jpg"]
 ]:[
 ["/trading","Trading","Sourcing. Supply. Possibility.","/images/hero/slide-1-port.png"],
 ["/digital-solutions","Digital Solutions","Ideas for everyday progress.","/images/industries/consultancy.jpg"],
 ["/consultancy","Market Research","A clearer view of your next move.","/images/news/news-2-dubai.jpg"]
 ];
 return <main><h1 className="sr-only">FOCUS: {japanese?"貿易・デジタルソリューション・市場調査":"Trading, Digital Solutions and Market Research"}</h1><div className="grid lg:min-h-[calc(100svh-84px)] lg:grid-cols-3">{items.map(([href,title,subtitle,image],i)=><Link key={href} href={(japanese?"/ja":"")+href} className="group relative flex min-h-[calc(100svh-84px)] items-end overflow-hidden border-b border-white/20 p-7 text-white focus-visible:z-10 focus-visible:outline-offset-[-5px] lg:border-b-0 lg:border-r lg:p-10"><Image src={image} alt="" fill priority={i===0} sizes="(min-width:1024px) 33vw,100vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10"/><div className="relative pb-8"><p className="mb-5 text-sm tracking-[.2em]">FOCUS / 0{i+1}</p><h2 className="text-3xl font-bold leading-tight xl:text-5xl">{title}</h2><p className="mt-5 text-lg text-white/85">{subtitle}</p></div></Link>)}</div></main>;
}
