"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

const Footerr = () => {
  return (
    <Footer container className="mt-[100px] border-t-[4px] border-solid border-green300">
      <div className="container">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="md:max-w-[500px]">
            <div className="flex items center justify-center md:justify-start"><img src={Logo} className="w-[200px]" alt="" /></div>
            <p className="mt-5 text-green300 text-[14px] mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quam ducimus totam cum ab minus in ipsa at ut fuga.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Link to='/digital-marketing-services' ><Footer.Link>Digital Marketing</Footer.Link></Link>
                <Link to='/it-solutions' ><Footer.Link>IT Services</Footer.Link></Link>
                <Link to='/repair-services' ><Footer.Link>Repair Services</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Link to='/' ><Footer.Link>Home</Footer.Link></Link>
                <Link to='/about' ><Footer.Link>About</Footer.Link></Link>
                <Link to='/contact' ><Footer.Link>Contact</Footer.Link></Link>
                <Link to='/faq' ><Footer.Link>FAQ</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to='' ><Footer.Link>Privacy Policy</Footer.Link></Link>
                <Link to='' ><Footer.Link>Terms &amp; Conditions</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="GenerationsFix. All right reserved" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link to='' ><Footer.Icon icon={BsFacebook} /></Link>
            <Link to='' ><Footer.Icon icon={BsInstagram} /></Link>
            <Link to='' ><Footer.Icon icon={BsTwitter} /></Link>
            <Link to='' ><Footer.Icon icon={BsGithub} /></Link>
            <Link to='' ><Footer.Icon icon={BsDribbble} /></Link>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footerr
