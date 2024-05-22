import { useState } from 'react';
import './App.css';
import wm_logo from './assets/wm_logo_green.png';
import data_structures from './assets/data_structures.png';
import algorithms from './assets/algorithms.jpg';
import usecase from './assets/usecases.png';
import agile from './assets/agile.jpg';
import database from './assets/database.png';

import data from './data.json'
import { Collapse } from 'react-bootstrap';

export default function Education() {

    const [index, setIndex] = useState(0);
    const classes = data.classes;

    return (
        <>

            <div id="education" className='d-flex flex-column justify-content-center align-items-center p-3 pb-4 mx-5 my-3 rounded' >
                <h3><u>Education</u></h3>
                <div style={{columnGap: 10,}} className='d-flex flex-column flex-md-row justify-content-flex-start align-items-center mt-3'>
                    <div><img style={{width: 125}} src={wm_logo}/></div>
                    <div>
                        <h4>College of William and Mary</h4>
                        <h5>Bachelor of Science in Data Science, minor in Business Analytics</h5>
                        <span>Cumulative GPA: 3.89</span>
                    </div>
                </div>
            </div>

            <div className='border border-dark d-flex flex-column justify-content-center align-items-center p-3 py-3 mx-0 mx-md-5 rounded'>
                    <h3><u>Classes</u></h3>
                        <div className='d-none d-md-flex flex-row justify-content-center align-items-center' style={{columnGap: '30px'}}>
                            <div style={{textDecoration: classes[index].id == 301 ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(0)}>Software Development</div>
                            <div style={{textDecoration: classes[index].id == 435 ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(1)}>Software Engineering</div>
                            <div style={{textDecoration: classes[index].id == 421 ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(2)}>Database Systems</div>
                            <div style={{textDecoration: classes[index].id == 241 ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(3)}>Data Structures</div>
                            <div style={{textDecoration: classes[index].id == 303 ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(4)}>Algorithms</div>
                        </div>

                        {(<Collapse in={classes[index].id == 301}>
                            <div><div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                                <div className='col-md'>
                                    <div title='Click the picture to access its source'>
                                        <a href='https://www.pinterest.com/pin/810718370404271720/'><img style={{width: 250}} src={agile}/></a>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <h5>CSCI 141: Computational Problem Solving</h5>
                                    <span>
                                    An introduction to principled software development, emphasizing design at the module level as well as tools and techniques.
                                    Topics include object-oriented class design and implementation, abstraction techniques, debugging techniques,
                                    defensive programming, development and analysis tools, and testing. Emphasizes the role of the individual programmer
                                    in large software development projects.
                                    </span>
                                </div>
                            </div></div>
                        </Collapse>)}

                        {(<Collapse in={classes[index].id == 435}>
                            <div><div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                                <div className='col'>
                                    <div title='Click the picture to access its source'>
                                        <a><img style={{width: 250}} src={usecase}/></a>
                                    </div>
                                </div>               
                                <div className='col-md-9'>
                                    <h5>DATA 310: Applied Machine Leanring</h5>
                                    <span>
                                    Covered various topics in software engineering such as software life cycle,
                                    software requirements analysis, software system design, software implementation and
                                    testing, software maintenance, and team programming.  Large emphasis on the 
                                    <em> Agile Software Development</em> methodology, Requirements/Design Specification,
                                    and Continuous Testing.  Students worked in teams to complete projects using our understanding
                                    of software engineering practices. 
                                    </span>
                                </div>
                            </div></div>
                        </Collapse>)}

                        {(<Collapse in={classes[index].id == 421}>
                            <div><div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                                <div className='col'>
                                    <div title='Click the picture to access its source'>
                                        <a href='https://towardsdatascience.com/designing-a-relational-database-and-creating-an-entity-relationship-diagram-89c1c19320b2'>
                                            <img style={{width: 250}} src={database}/>
                                        </a>
                                    </div>
                                </div>  
                                <div className='col-md-9'>
                                    <h5>DATA 311: Databases</h5>
                                    <span>
                                    Introduced students to multiple aspects of database management systems. 
                                    Most of the course will focus on the relational model, SQL, 
                                    approaches to database design and normalization and application support.
                                    </span>
                                </div>
                            </div></div>
                        </Collapse>)}

                        {(<Collapse in={classes[index].id == 241}>
                            <div><div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                                <div className='col'>
                                    <div title='Click the picture to access its source'>
                                        <a href='https://www.freecodecamp.org/news/learn-all-about-data-structures-used-in-computer-science/'>
                                            <img style={{width: 250}} src={data_structures}/>
                                        </a>
                                    </div>
                                </div>        
                                <div className='col-md-9'>
                                    <h5>DATA 440: Automation & Workflows</h5>
                                    <span>
                                    Continuation of fundamental concepts of computer science: data abstraction, data structures, and data representation.
                                    Discussed various structures such as lists, stacks, queues, trees, balanced trees, priority queues, hashing, and their applications. 
                                    Students completed projects with various structures to strengthen their understanding of their usage.
                                    </span>
                                </div>

                            </div></div>
                        </Collapse>)}

                        {(<Collapse in={classes[index].id == 303}>
                            <div><div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                                <div className='col'>
                                    <div title='Click the picture to access its source'>
                                        <a href="https://www.geeksforgeeks.org/what-is-logarithmic-time-complexity/"><img style={{width: 250}} src={algorithms}/></a>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <h5>DATA 340: Natural Language Processing</h5>
                                    <span>
                                        A systematic study of algorithms and their complexity, including searching, sorting, selecting, and algorithms for graphs.
                                        A survey of algorithm design methods, including greedy algorithms, divide-and-conquer, dynamic programming, and backtracking.
                                        An introduction to NP-complete problems.
                                    </span>
                                </div>

                            </div></div>
                        </Collapse>)}
                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <button onClick={() => setIndex(index - 1 >= 0 ? index - 1 : classes.length-1)}>Back</button>
                            <button onClick={() => setIndex(index + 1 < classes.length ? index + 1 : 0)}>Next</button>
                        </div>
                </div>

    </>)

}