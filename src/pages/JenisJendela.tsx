import Footer from '../components/Footer';
import Jjendela from '../components/Jjendela';
import Jjwhyalum from '../components/Jjwhyalum';
import Jjchoice from '../components/Jjchoice';
import OrderSection from '../components/OrderSection';
import Jjgaleri from '../components/Jjgaleri';



export default function JenisJendela() {
  return (
    <div className="min-h-screen pt-24">
    <Jjendela />
    <Jjwhyalum />
    <Jjchoice />
    <OrderSection />
    <Jjgaleri />
    <Footer />
    
    
    

    </div>
  );
}