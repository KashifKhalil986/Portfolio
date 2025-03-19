import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Experience from "@/components/experience/Experience"
import Skills from "@/components/skills/Skills";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="m-auto w-10/12">
<Navbar/>
<Hero/>
<Experience/>
<Skills/>
<Project/>
<Contact/>


    </div>
  );
}
