import Header from "../std/header";
import Accordion from "../ui/accordion";

function MechE() {
  return (
    <div className="main_cont">
      <Header name="Mechanical Engineering"></Header>
      <h1 className="text-xl font-bold tracking-tight">
        What is it? Sub Disciplines Explained
      </h1>
      <p className="me-lead">
        Mechanical engineering applies physics, mathematics, and materials
        science to design, analyze, manufacture, and maintain mechanical
        systems.
      </p>

      <div className="me-grid">
        <article className="me-card">
          <h3 className="font-bold">Mechanics and Solid Mechanics</h3>
          <p>
            The study of forces, motion, stress, and strain in solid bodies. It
            includes statics, dynamics, and strength of materials, and helps
            ensure structures and components withstand their loads without
            failing. Applications include bridges, engine parts, machine frames,
            and pressure vessels.
          </p>
        </article>

        <article>
          <h3 className="font-medium">Thermodynamics and Heat Transfer</h3>
          <p>
            Thermodynamics covers how energy converts between heat, work, and
            other forms. Heat transfer examines how thermal energy moves through
            conduction, convection, and radiation. Together they underpin
            engines, turbines, refrigeration systems, heat exchangers, and
            electronics cooling.
          </p>
        </article>

        <article>
          <h3 className="font-medium">Fluid Mechanics</h3>
          <p>
            The study of how liquids and gases behave at rest and in motion,
            including pressure, flow, turbulence, drag, and lift. Applications
            include pumps, pipelines, hydraulic systems, wind turbines, aircraft
            wings, and ventilation.
          </p>
        </article>

        <article>
          <h3 className="font-medium">Materials Science and Engineering</h3>
          <p>
            Focuses on the properties and behavior of metals, polymers,
            ceramics, and composites. Engineers choose materials for strength,
            weight, cost, durability, corrosion resistance, and temperature
            performance. It is closely tied to failure analysis, which
            investigates why parts crack, wear out, or break.
          </p>
        </article>

        <article>
          <span>Design</span>
          <h3 className="font-medium">Machine and Mechanical Design</h3>
          <p>
            The creation of components and assemblies such as gears, bearings,
            shafts, springs, fasteners, linkages, and couplings. It combines
            engineering analysis with Computer-Aided Design (CAD) to produce
            parts that are functional, reliable, manufacturable, and
            cost-effective.
          </p>
        </article>

        <article>
          <span>Production</span>
          <h3>Manufacturing Engineering</h3>
          <p>
            Concerned with how products are made, including machining, casting,
            forging, welding, injection molding, 3D printing (additive
            manufacturing), and assembly. Manufacturing engineers focus on
            quality, efficiency, cost, tolerances, and scaling production.
          </p>
        </article>

        <article>
          <span>Automation</span>
          <h3 className="font-medium">Mechatronics and Robotics</h3>
          <p>
            Integrates mechanical engineering with electronics, control systems,
            and software. Mechatronics produces smart, automated machines such
            as industrial robots, drones, autonomous vehicles, and CNC machines.
            Robotics focuses on machines that can sense, decide, and act.
          </p>
        </article>

        <article>
          <span>Automation</span>
          <h3 className="font-medium">Control Systems and Automation</h3>
          <p>
            The design of systems that regulate machines and processes using
            sensors, actuators, and feedback loops. Examples include cruise
            control, thermostats, flight stabilization, and automated factory
            lines.
          </p>
        </article>

        <article>
          <span>Analysis</span>
          <h3 className="font-medium">
            Vibration, Acoustics, and Noise Control
          </h3>
          <p>
            Analyzes oscillations in structures and machines and the sound they
            produce. Engineers in this area reduce unwanted vibration and noise
            to improve comfort, safety, and equipment lifespan in vehicles,
            aircraft, buildings, and rotating machinery.
          </p>
        </article>

        <article>
          <span>Energy</span>
          <h3 className="font-medium">Energy Systems and Power Engineering</h3>
          <p>
            Covers the generation, conversion, storage, and distribution of
            energy. It includes conventional power plants, internal combustion
            engines, and renewables such as wind, solar thermal, geothermal,
            hydropower, and hydrogen systems, with efficiency and sustainability
            as central concerns.
          </p>
        </article>

        <article>
          <span>Energy</span>
          <h3 className="font-medium">HVAC and Refrigeration</h3>
          <p>
            Heating, ventilation, air conditioning, and refrigeration
            engineering. It focuses on controlling temperature, humidity, and
            air quality in buildings, vehicles, data centers, and cold-chain
            logistics.
          </p>
        </article>

        <article>
          <span>Transport</span>
          <h3 className="font-medium">Automotive Engineering</h3>
          <p>
            Applies mechanical principles to vehicle design, including engines,
            drivetrains, suspension, braking, and chassis, and increasingly
            electric and hybrid powertrains.
          </p>
        </article>

        <article>
          <span>Transport</span>
          <h3 className="font-medium">Aerospace and Aeronautical Mechanics</h3>
          <p>
            Overlaps with aerospace engineering and focuses on the mechanical
            systems of aircraft and spacecraft, such as propulsion, structures,
            landing gear, and thermal protection.
          </p>
        </article>

        <article>
          <span>Health</span>
          <h3 className="font-medium">
            Biomechanical and Biomedical Engineering
          </h3>
          <p>
            Applies mechanical principles to the human body and healthcare.
            Examples include prosthetic limbs, artificial joints, surgical
            instruments, medical devices, and the study of how forces affect
            tissue and movement.
          </p>
        </article>

        <article>
          <span>Analysis</span>
          <h3 className="font-medium">
            Computational Mechanics and Simulation
          </h3>
          <p>
            Uses software to predict how designs will behave before they are
            built. Key tools include Finite Element Analysis (FEA) for
            structures and Computational Fluid Dynamics (CFD) for flow and heat,
            which reduces cost and speeds up development.
          </p>
        </article>

        <article>
          <span>Systems</span>
          <h3 className="font-medium">
            Reliability, Maintenance, and Quality Engineering
          </h3>
          <p>
            Mechanical engineers often work in areas such as reliability
            engineering, maintenance engineering, quality control, and supply
            chain optimization, aiming to make systems safe, dependable, and
            efficient.
          </p>
        </article>

        <article>
          <span>Emerging</span>
          <h3 className="font-medium">Nanotechnology and Micro-Mechanics</h3>
          <p>
            Explores mechanical behavior at microscopic and nanoscopic scales,
            including Micro-Electro-Mechanical Systems (MEMS) used in
            smartphones, sensors, and medical devices.
          </p>
        </article>
      </div>

      <h2>Key Skills of a Mechanical Engineer</h2>
      <ul>
        <li>Strong foundations in mathematics, physics, and mechanics</li>
        <li>
          CAD and simulation software (such as SolidWorks, AutoCAD, ANSYS, or
          MATLAB)
        </li>
        <li>Problem-solving and analytical thinking</li>
        <li>Prototyping, testing, and troubleshooting</li>
        <li>Teamwork and technical communication</li>
      </ul>

      <h2>Career Paths</h2>
      <p>
        Mechanical engineers work as design engineers, manufacturing engineers,
        project engineers, R&amp;D engineers, maintenance and reliability
        engineers, energy engineers, robotics engineers, and consultants, among
        many other roles.
      </p>

      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>What does a mechanical engineer do?</summary>
        <p>
          A mechanical engineer designs, tests, and improves machines, devices,
          and systems. This can range from engines and HVAC systems to robots
          and medical devices, covering everything from the initial concept to
          production and maintenance.
        </p>
      </details>
      <details>
        <summary>Is mechanical engineering a good career?</summary>
        <p>
          It is a versatile field with opportunities in many industries, which
          lets engineers change direction between sectors such as energy,
          automotive, aerospace, and manufacturing over a career.
        </p>
      </details>
      <details>
        <summary>
          What is the difference between mechanical and mechatronics
          engineering?
        </summary>
        <p>
          Mechanical engineering focuses on physical systems and energy, while
          mechatronics combines mechanical design with electronics, sensors,
          control systems, and software to build smart, automated machines.
        </p>
      </details>
      <details>
        <summary>Which software do mechanical engineers use?</summary>
        <p>
          Common tools include CAD packages (SolidWorks, AutoCAD, CATIA),
          simulation tools (ANSYS, Abaqus), and MATLAB for analysis and
          modeling.
        </p>
      </details>

      <div>
        <Accordion
          title="FAQ"
          contents={["Answer A", "Answer B"]}
          defaultOpen
        />
      </div>
    </div>
  );
}

export default MechE;
