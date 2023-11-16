import React from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import Reviewlist from "./components/Reviewlist";
export default function(){

    return(
        <>
        <Header/>
        {/* <AdminMenu/> */}
        <Reviewlist/>
        <Footer/>
        </>
    )
}