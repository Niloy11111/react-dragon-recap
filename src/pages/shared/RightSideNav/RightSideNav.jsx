import React from 'react';
import { FaGooglePlusG, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            <div className='p-4'>
                <h2 className='text-3xl font-poppins mb-3'>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGooglePlusG></FaGooglePlusG>
                    Google
                </button>
                <button className="mt-4 btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>

            <div className='py-4 mb-6'>
                <h2 className='text-3xl font-bold'>Find Us On</h2>
                <a href="" className="p-4 flex text-lg rounded-t-lg border">
                <FaFacebook className='mr-3'></FaFacebook> 
                <span>Facebook</span> </a>
                <a href="" className="p-4 flex text-lg rounded-t-lg border">
                <FaTwitter className='mr-3'></FaTwitter> 
                <span>Facebook</span> </a>
                <a href="" className="p-4 flex text-lg rounded-t-lg border">
                <FaInstagram className='mr-3'></FaInstagram>
                <span>Facebook</span> </a>
            </div>

            {/* q zone */}
            <div className='p-4'>
                <h2 className='text-3xl font-poppins mb-3'>Q Zone</h2>
                
                <img src={qZone1}></img>
                <img src={qZone2}></img>
                <img src={qZone3}></img>
              
            </div>

        </div>
    );
};

export default RightSideNav;