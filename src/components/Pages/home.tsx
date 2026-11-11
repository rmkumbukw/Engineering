import Card from "../ui/card";
import Carousel from "../ui/carousel";
import Dgs from "../../assets/drawings.jpg";
import Accordion from "../ui/accordion";
import ScrollReveal from "../ui/scrollReveal";
import { Mats } from "../ui/mat";
import Cards from "../ui/mat";
import { Counter } from "../ui/mat";
import motor from "../../assets/motor.jpg";
import networks from "../../assets/networks.jpg";

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

        <div className="flex flex-col ">
          <div className=" p-7">
            <p className="p-4">
              Four years of challenges, late nights, teamwork, and growth have
              brought us to this milestone. Together, we have designed, built,
              tested, learned, and pushed ourselves beyond what we thought
              possible. Today, we celebrate not only our accomplishments but
              also the friendships, memories, and experiences that shaped our
              journey.
            </p>

            <p className="p-4">
              Four years of challenges, late nights, teamwork, and growth have
              brought us to this milestone. Together, we have designed, built,
              tested, learned, and pushed ourselves beyond what we thought
              possible. Today, we celebrate not only our accomplishments but
              also the friendships, memories, and experiences that shaped our
              journey.
            </p>
          </div>

          <div className="flex flex-col p-4 px-20">
            <a href="/about">
              <Card className="shadow-xl" title="Your Game">
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
        <div className="space-y-20 p-10">
          <ScrollReveal>
            <h1 className="text-5xl font-bold">Welcome to My Website</h1>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <p className="text-xl">This paragraph slides in from the left.</p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <img
              src="/images/engine.jpg"
              className="w-full rounded-xl"
              alt="Engine"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="rounded-xl bg-gray-100 p-10">
              <h2 className="text-3xl font-bold">My Projects</h2>
              <p>Explore my engineering projects.</p>
            </div>
          </ScrollReveal>
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
        <div className="grid grid-cols-1 gap-4 my-15 md:grid-cols-4">
          <Card className="shadow-xl" title="Moto Master" age={22} dwg={motor}>
            <p>This is a simple card component.</p>
          </Card>

          <Card className="shadow-xl" title="Moto Master" age={22} dwg={motor}>
            <p>This is a simple card component.</p>
          </Card>
          <Card className="shadow-xl" title="Networks" age={33} dwg={networks}>
            <p>This is a simple card component.</p>
          </Card>
          <Card className="shadow-xl" title="Moto Master" age={22} dwg={motor}>
            <p>This is a simple card component.</p>
          </Card>
          <Card className="shadow-xl" title="Moto Master" age={22} dwg={motor}>
            <p>This is a simple card component.</p>
          </Card>
          <Card className="shadow-xl" title="Moto Master" age={22} dwg={motor}>
            <p>This is a simple card component.</p>
          </Card>
        </div>

        <Mats />
        <Cards title="My Projects" count={5}></Cards>

        <Counter />
      </div>
    </div>
  );
}

export default Home;
