import Card from "../ui/card";
import Carousel from "../ui/carousel";
import Drawings from "../../assets/drawings.jpg";

function Home() {
  return (
    <div className="main_cont">
      <div>
        <Carousel></Carousel>
      </div>
      <div className="my-15">
        <div className="text-white flex flex-col md:flex-row justify-center m-3">
          <p>
            "Scientists study the world as it is; engineers create the world
            that has never been." — Theodore von Kármán
          </p>
          <p>
            "Engineering is the art of directing the great sources of power in
            nature for the use and convenience of mankind." — Thomas Tredgold
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 my-15">
          <div className=" ">
            <p>
              Four years of challenges, late nights, teamwork, and growth have
              brought us to this milestone. Together, we have designed, built,
              tested, learned, and pushed ourselves beyond what we thought
              possible. Today, we celebrate not only our accomplishments but
              also the friendships, memories, and experiences that shaped our
              journey.
            </p>

            <p>
              Four years of challenges, late nights, teamwork, and growth have
              brought us to this milestone. Together, we have designed, built,
              tested, learned, and pushed ourselves beyond what we thought
              possible. Today, we celebrate not only our accomplishments but
              also the friendships, memories, and experiences that shaped our
              journey.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="/about">
              <Card className="shadow-xl">
                <h2 className="text-xl font-bold">Welcome to the Home Page</h2>
                <p>This is a simple card component.</p>
                <img className="w-60" src={Drawings} alt="Drawings" />
              </Card>
            </a>
          </div>
        </div>

        <Card className="shadow-xl">
          <h2 className="text-xl font-bold">Welcome to the Home Page</h2>
          <p>This is a simple card component.</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Welcome to the Home Page</h2>
          <p>This is a simple card component.</p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold">Welcome to the Home Page</h2>
          <p>This is a simple card component.</p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
