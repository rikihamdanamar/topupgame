/* eslint-disable react/jsx-closing-bracket-location */
import AOS from 'aos';
import React, { useEffect } from 'react';
import FeaturedGame from '../components/organisms/FeaturedGame';
import MainBanner from '../components/organisms/MainBanner';
import Navbar from '../components/organisms/Navbar';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import TransactionStep from '../components/organisms/TransactionStep';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
