import './App.css';

export default function WorkExperience() {
    return (
        <div id="workexperience" className='border border-dark p-5 m-md-5 mt-5 d-flex flex-column justify-content-center align-items-center rounded'>
            <h3><u>Work Experience</u></h3>
            <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                {/* <div className='col-md'>
                    <div title='Click the picture to access its source'>
                    </div>
                </div> */}
                <div className='col-md-9'>
                    <h5>Chesterfield County IST: Data Analytics Intern</h5>
                    <span>
                        In close collaboration with Chesterfield County&#39;s IST Data & Analytics team, I was responsible for the management and analysis of data
                        critical to the operations of various departments within the county&#39;s Human Resources division.  Employing SQL, specifically MySQL via Microsoft Azure Studio, I conducted comprehensive data analyses to improve operational effectiveness and resource distribution.
                        This analysis was used to determine inconsistencies present across different database schema, such as variations in addresses or differing descriptions for county buildings.  inconsistencies were
                        mainly found by relating rows of tables using a building&#39;s Parcel ID.
                    </span>
                </div>
            </div>
        </div>
    )
}