import { About } from "@/components/home/about";
import { Categories } from "@/components/home/categories";
import { Contact } from "@/components/home/contact";
import { Educational } from "@/components/home/educational";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Latest } from "@/components/home/latest";
import { Navbar } from "@/components/home/navbar";
import { Subscribe } from "@/components/home/subscribe";
import { Trending } from "@/components/home/trending";

const Home = () => {
  return (
    <div className="root">
      <Navbar />
      <Hero></Hero>
      <Trending></Trending>
      <Latest></Latest>
      <Categories></Categories>
      <Educational></Educational>
      <Subscribe></Subscribe>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
