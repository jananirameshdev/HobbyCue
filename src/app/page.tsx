import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Det from "./components/Det";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Add from "./components/Add";
export default function Home() {
  return (
    <div className="hobby-cue" style={{background: "#FFFFFF"}}>
    <Navbar />
    <main>
        <Container />
        <Det />
        <Add />
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
