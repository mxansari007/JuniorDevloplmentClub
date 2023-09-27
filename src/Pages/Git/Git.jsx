import { useEffect,useState } from 'react';
import './Assets/Git.scss';
import fileImage from './Assets/file-version.png';
import gitWorkflow from './Assets/git-workflow.png';

const Git = ()=>{
    const Elements = document.getElementsByClassName('section');
    const navLinks = document.getElementsByClassName('navLinks');
    useEffect(()=>{
        console.log(Elements);
        
        window.addEventListener('scroll',()=>{
            for(let i =0; i<Elements.length; i++){
                if(window.scrollY>=Elements[i].offsetTop){
                    for(let j = 0; j<navLinks.length; j++){
                        if(navLinks[j].href.includes(Elements[i].id))
                        {
                            navLinks[j].children[0].classList.add('active');
                        }else{
                            navLinks[j].children[0].classList.remove('active');
                        }
                        // console.log(navLinks[j].href);
                    }
                }else{
                    
                }
            }
        })
    },[])

    const handleOpen = ()=>{
        const ele = document.getElementsByClassName('invisible');
        const btn = document.getElementsByClassName('nav-button');
        ele[0].classList.remove('invisible');
        btn[0].classList.add('invisible');
    }

    const handleClose = ()=>{
        const ele = document.getElementsByClassName('scroll-nav-mobile');
        const btn = document.getElementsByClassName('nav-button');
        ele[0].classList.add('invisible');
        btn[0].classList.remove('invisible');
    }

    return <>
    <div className='nav-button' onClick={handleOpen}>
        <i className='fa-solid fa-arrow-right'></i>
    </div>
    <div className='Git-container'>
    <div className='scroll-nav'>
        <ul>
            <li>
                Class #1 
                <a className='navLinks' href="#what-is-git"><li>What is git?</li></a>
                <a className='navLinks' href="#what-is-repository"><li>What is Repository?</li></a>
                <a className='navLinks' href="#what-is-working-directory"><li>What is Working Directory or Working Tree?</li></a>
                <a className='navLinks' href="#git-workflow-locally"><li>Basic workflow of Git Locally</li></a>
            </li>
            <li>
                Class #2
                ...
            </li>

        </ul>
    </div>
    <div className='scroll-nav-mobile invisible'>
    <div className='nav-header'>
    <h2>Table Of Content</h2>
    <i onClick={handleClose} className='fa-solid fa-xmark cross-mark'></i>
    </div>
        <ul className='nav-content'>
            <li>
                Class #1 
                <a className='navLinks' href="#what-is-git"><li>What is git?</li></a>
                <a className='navLinks' href="#what-is-repository"><li>What is Repository?</li></a>
                <a className='navLinks' href="#what-is-working-directory"><li>What is Working Directory or Working Tree?</li></a>
                <a className='navLinks' href="#git-workflow-locally"><li>Basic workflow of Git Locally</li></a>
            </li>
            <li>
                Class #2
                ...
            </li>

        </ul>
    </div>
    <div className='scroll-content'>
        <div id="class1" className='section'>
            <h1>Class #1</h1>
            <div id="what-is-git" className='section'>
                <h3>Q. What is Git?</h3>
                <p>Git is a distributed version control system (DVCS) that is widely used for tracking changes in source code during software development. It was created by Linus Torvalds in 2005 and has since become one of the most popular and essential tools in the software development industry. </p>
                <figure>
                <img src={fileImage} className='figure'/>
                <figcaption>
                fig1: Diagram Depicting changes made to the file, Each change reflect a new version.
                </figcaption>
                </figure>
            </div>
            <div id='what-is-repository' className='section'>
                <h3>Q. What is a Repository?</h3>
                <p>In Git, a <strong>"repository"</strong> (often abbreviated as "<strong>repo</strong>") is a data structure that stores a collection of files, along with the entire history of changes made to those files. It's a fundamental concept in Git and serves as a centralized location where you can manage and version control your project's source code and related files. Repositories play a crucial role in collaborative software development and version control.</p>
            </div>
            <div id='what-is-working-directory' className='section'>
                <h3>Q. What is a Working Tree or Working Directory?</h3>
                <p>In Git, the "working tree," also known as the "working directory" or simply "working copy," refers to the directory on your local file system where you have your project's files and folders. It's the place where you do your actual work on the files, such as editing, adding, deleting, or renaming them. The working tree represents the current state of your project's files as they exist in your local development environment.</p>
            </div>
            </div>
            <div id='class2' className='section'>
            <div id="git-workflow-locally" className='section'>
                <h3>Git Workflow Locally</h3>
                <figure>
                <img src={gitWorkflow} className='figure'/>
                <figcaption>
                fig2: Diagram shows the basic workflow of git locally. 
                </figcaption>
                </figure>
                <p>The basic Git workflow typically involves several key steps. Here's a simplified overview of the process:</p>
                <h4>Initialize a Repository:</h4>
                <p>
                Start by creating a new Git repository. To initialize a new repository, you can use the git init command in an empty directory.
                </p>
                <div className='command-box'>
                    <p className='comment'>#Initialize a new Repository</p>
                    <p>~ git init</p>
                </div>
                <h4>Modify Files:</h4>
                <p>Add, modify, or delete files in your project's working directory (working tree).</p>
                <h4>Stage Changes:</h4>
                <p>Use the git add command to stage the changes you want to include in the next commit. The staging area allows you to select specific changes for the commit.</p>
                <div className='command-box'>
                    <p className='comment'># Stage all changes in the working directory</p>
                    <p>~ git add .</p>
                    <br/>
                    <p className='comment'># Stage specific files or directories</p>
                    <p>~ git add &lt;file_or_directory&gt;</p>
                </div>
                <h4>Create a Commit:</h4>
                <p>After staging your changes, use the git commit command to create a new commit. Each commit captures a snapshot of your project's state, along with a commit message that describes the changes.</p>
                <div className='command-box'>
                    <p>~ git commit -m "Your commit message here"</p>
                </div>
                <h4>Repeat:</h4>
                <p>Continue the cycle of making changes, staging them, and creating commits as needed. Commits build upon each other, creating a history of your project.</p>
                <h4>View History:</h4>
                <p>Use commands like git log to view the commit history and see the changes made over time.</p>
                <div className='command-box'>
                    <p>~ git log</p>
                </div>
            </div>
            </div>
    </div>
    </div>
   </>
}

export default Git;