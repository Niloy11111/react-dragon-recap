import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import SingleNewsCard from "./NewsCards/SingleNewsCard";


const Home = () => {

    const news = useLoaderData() ;

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <h2 className="text-3xl font-poppins font-semibold">This is home</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="col-span-2">
                    <h2 className="text-3xl">news comming soon</h2>
                    {
                        news.map(item => <SingleNewsCard
                        item={item}
                        key={item.id}
                        >
                        </SingleNewsCard> )
                    }
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>


        </div>
    );
};

export default Home;