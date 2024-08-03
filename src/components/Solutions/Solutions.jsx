import './Solutions.css'

const Solutions = () => {
  return (
    <div className='solutions container' id='solutions'>
        <h2>Solutions</h2>
        <div className="solution-cards">
            <div className="solution-card">
                <h3>Automatic Solution</h3>
                <p>BAGMANE's main products are widely used in various industries, including printing and packaging, food and beverage, machining processing and assembly, textile printing and dyeing, woodworking and building materials, machine tools, electronic manufacturing.</p>
                <ul class="industries-list">
                    <li> Machinery</li>
                    <li> Plastics Industry</li>
                    <li> Packaging</li>
                </ul>
            </div>
            <div className="solution-card">
                <h3>IIoT Solution</h3>
                <p>V-NET and V-BOX, developed by BAGMANE independently could quickly build applications of IIoT and realize functions of device management, data docking, unattended operation, remote operation and maintenance. They are used in smart water treatment, smart industry, textile industry, smart agriculture, vehicles.</p>
                <ul class="industries-list">
                    <li> Textile Industry</li>
                    <li> Smart Agriculture</li>
                    <li> Vehicles</li>
                </ul>
            </div>
        </div>
        <div class="view-all-solutions">
                <a href="#" class="view-all-btn">View All Solutions</a>
        </div> 
    </div>
  )
}

export default Solutions


                  

