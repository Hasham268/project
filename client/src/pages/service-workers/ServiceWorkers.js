import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import WorkerCard from './../../components/worker-card/WorkerCard';
import Wdata from './../../components/worker-card/Wdata';
import './ServiceWorkers.css'
const ServiceWorkers = () =>{
    return (
        <>
       <Navbar />
       <Breadcrumb title="List of Workers Available" />
       <h2 className='Find-Service-Header'>Select Service You Need</h2>
       {Wdata.map((val) => {
        return (
            <WorkerCard
                imgsrc={val.imgscr} 
                sname={val.sname} 
                link={val.link}
            />
        );
    })}
       <Footer />
        </>
    );
}

export default ServiceWorkers;