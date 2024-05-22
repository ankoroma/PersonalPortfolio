import './App.css'

export default function Skills() {
    return (
        <div id="skills" className='d-flex flex-column justify-content-center align-items-center mt-5 p-5'>
            <h3><u>Skills</u></h3>
            <div>
                <ul>
                    <li style={{fontSize: 'large'}}><em><b>Programming Languages:  </b></em>Python, R, Java, JavaScript, SQL</li>
                    <li style={{fontSize: 'large'}}><em><b>Front-end Development:  </b></em>React, Angular, HTML/CSS, JQuery, Bootstrap</li>
                    <li style={{fontSize: 'large'}}><em><b>Back-end Development:  </b></em> Django, Flask</li>
                    <li style={{fontSize: 'large'}}><em><b>Mobile App Development:  </b></em>React Native, Android Studio</li>
                    <li style={{fontSize: 'large'}}><em><b>Data Management:  </b></em>SQL, MySQL, PostgreSQL, Microsoft Office</li>
                    <li style={{fontSize: 'large'}}><em><b>Certificates:  </b></em>Microsoft Excel Specialist (2018), Google Data Analytics Professional (expected aug 2024)</li>
                    <li style={{fontSize: 'large'}}>Other Software: Eclipse, LaTeX</li>
                </ul>
            </div>

        </div>
    )
}