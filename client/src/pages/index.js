//import { ConnectWallet } from "@thirdweb-dev/react";

//import styles from "../styles/Home.module.css";
import Marketplace from "../components/Marketplace";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Homepg } from "../components/Homepg";
import ExpertDashboard from "../components/ExpertDashboard";
import Expertnfts from "../components/Expertnfts";
import Expert_uploadcourses from "../components/Expert_uploadcourses";
import Student_dashboard from "../components/Student_dashboard";
import Studentcourses from "../components/Student_courses";



export default function Home() {
  return (
    <div >
 
   {/* <Header/>
   
    <Homepg/> 
       <Marketplace/> 
       <ExpertDashboard/>
       <Navbar/>
       <Expertnfts/>
       <Student_dashboard/>
       <Expert_uploadcourses/>
        */}
      <Studentcourses/>
   
    </div>
  );
}
