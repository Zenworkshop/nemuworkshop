import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Whyagain from '../components/Whyagain';
import Testimonials from '../components/Testimonials';



export default function About() {
  return (
    <div className="min-h-screen pt-24">
    <Welcome />
    <Whyagain />
    <Testimonials />
    <Footer />

    </div>
  );
}