import Banner from "../components/Banner/Banner";
import Popular from "../components/Popular/Popular";
import Recommended from "../components/Recommended/Recommended";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Recommended></Recommended>
        </div>
    );
};

export default Home;