import Accomplishments from "../components/Accomplishments/Accomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Timeline from "../components/TimeLine/TimeLine";
import Layout from "../components/Layout/Layout";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
