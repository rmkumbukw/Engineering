import Card from "../ui/card";
import Carousel from "../ui/carousel";
import Dgs from "../../assets/drawings.jpg";
import Accordion from "../ui/accordion";

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

        <h2 className="text-xl font-bold">Welcome</h2>

        <div className="flex flex-col ">
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

          <div className="flex flex-col gap-4 p-8">
            <a href="/about">
              <Card className="shadow-xl">
                <h2 className="text-xl font-bold text-center">Did you Know</h2>
                <p className="text-center">Current Eng Projects</p>
                <img
                  className="w-6 flex justify-center items-center mx-auto"
                  src={Dgs}
                  alt="Drawings"
                />
              </Card>
            </a>
          </div>
        </div>

        <h2 className="text-xl font-bold">Applying My NewSkills</h2>
        <div className="grid grid-cols-1 gap-4 my-15 md:grid-cols-2">
          <div className="...">
            <Accordion
              title="Mechanical Engineering Overview"
              contents={[
                "Mechanical engineering applies physics, mathematics, and materialsscience to design, analyze, manufacture, and maintain mechanical systems.",
              ]}
            />
          </div>
          <div className="...">
            <Accordion
              title="Chemical Engineering Overview"
              contents={[
                "Chemical engineering applies chemistry, physics, mathematics, and biology to design, optimize, and operate processes that turn raw materials into useful products such as fuels, medicines, plastics, and food.",
              ]}
            />
          </div>
          <div className="...">
            <Accordion
              title="Electrical Engineering Overview"
              contents={[
                "Electrical engineering applies physics and mathematics to design, develop, and maintain electrical systems and electronic devices, including power generation, communications, circuits, and control systems.",
              ]}
            />
          </div>
          <div className="...">
            <Accordion
              title="Civil Engineering Overview"
              contents={[
                "Civil engineering applies physics, mathematics, and materials science to design, build, and maintain infrastructure such as roads, bridges, buildings, dams, and water systems.",
              ]}
            />
          </div>
        </div>

        <Card className="shadow-xl">
          <h2 className="text-xl font-bold">Welcome to the Home Page</h2>
          <p>This is a simple card component.</p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
