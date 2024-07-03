import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import About from "../components/about";
import Header from "../views/header";

export default function LandingPage() {
    return(
        <>
        <motion.div initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>

        <div className="bg-customLight">
        
        <About />
        </div>
 

    </motion.div></>

    )
    
}