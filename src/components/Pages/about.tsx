import drawings from "../../assets/drawings.jpg";
import Button from "../ui/button";

import Toaster from "../ui/toaster";
import Skeleton from "../ui/skeleton";
import Dropdown from "../ui/dropdown";
import Tabs from "../ui/tabs";

function About() {
  return (
    <div className="main_cont">
      <div className="About">
        <h1 className="text-3xl font-bold">About</h1>
        <img src={drawings} alt="" className="h-100 w-50 object-contain" />
        <Button variant="danger" className="mt-4">
          Learn More
        </Button>
        <Toaster></Toaster>
        <Skeleton></Skeleton>
        <Dropdown></Dropdown>
        <Tabs></Tabs>
      </div>
    </div>
  );
}

export default About;
