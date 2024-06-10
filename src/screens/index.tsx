import Grid from "../components/Grid";
import Hero from "./Hero";
import Header from "../components/Header";

const Home = () => {
  return (
    <Grid className="w-full h-full bg-[#04011C] overflow-hidden">
      <Header />
      <Hero />
    </Grid>
  );
};

export default Home;
