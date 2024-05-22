import './App.css'
 
export default function Introduction() {
    return (
    <div id="about" className='d-flex flex-column flex-md-row justify-content-center' style={{columnGap: 0}}>
        <div className='col-md border p-2'>
            <h4>Who am I?</h4>
            <span>Hardworking recent graduate with great interest in AI and Automation. Diligent and resilient with my work.</span>
        </div>
        <div className='col-md border p-2'>
            <h4>Personal Info</h4>
            <ul className="list-unstyled">
                <li className='py-1'>Email: ankoroma@wm.edu</li>
                <li className='py-1'>Phone: +1 (704) 940-2202</li>
                <li className='py-1'>Residence: Woodbridge, VA</li>
            </ul>

        </div>
        <div className='col-md border p-2'>
            <h4>Expertise</h4>
            <ul>
                <li>Machine Learning</li>
                <li>Database Management</li>
                <li>Statistical Data Analysis</li>
                <li>Linear Programming & Optimization</li>
                <li>Technical Support</li>
            </ul>
        </div>
    </div>
    )

}