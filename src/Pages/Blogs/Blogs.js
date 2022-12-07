import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <div className="min-h-screen my-10 blogContainer m-5 flex flex-col items-center">
                <div className="blog text-left w-[80%] my-5">
                    <p className='text-2xl font-semibold my-2'>Difference between Node.JS and Javascript</p>
                    <div className='content flex '>
                        <span className='mx-2'>1.</span>
                        <div className="line">
                            <p>Javascript is a programming language</p>
                            <p>NodeJS is a Javascript runtime</p>
                        </div>
                    </div>
                    <div className='content flex'>
                        <span className='mx-2'>2.</span>
                        <div className="line">
                            <p>Javascript can only run on the browser</p>
                            <p>Javascript can run outside from the browser by NodeJS</p>
                        </div>
                    </div>
                    <div className='content flex'>
                        <span className='mx-2'>3.</span>
                        <div className="line">
                            <p>Javascript used to client-side in general</p>
                            <p>Usually, NodeJS used for server-side</p>
                        </div>
                    </div>
                    <div className='content flex'>
                        <span className='mx-2'>4.</span>
                        <div className="line">
                            <p>Javascript is the updated version of the ECMA script which uses chrome's V8 engine</p>
                            <p>C, C++, and Javascript are the languages used for NodeJS</p>
                        </div>
                    </div>
                </div>

                <div className="blog text-left w-[80%] my-5">
                    <p className='text-2xl font-semibold my-2'>Difference between SQL and NoSQL</p>
                    <div className='content flex '>
                        <span className='mx-2'>1.</span>
                        <div className="line">
                            <p>SQL databases are primarily called as Relational Databases RDBMS</p>
                            <p>NoSQL database are primarily called as non-relational or distributed database</p>
                        </div>
                    </div>
                    <div className='content flex'>
                        <span className='mx-2'>2.</span>
                        <div className="line">
                            <p>SQL databases are table-based</p>
                            <p>NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores</p>
                        </div>
                    </div>
                    <div className='content flex'>
                        <span className='mx-2'>3.</span>
                        <div className="line">
                            <p>SQL databases have fixed or static or predefined schema</p>
                            <p>NoSQL have dynamic schema</p>
                        </div>
                    </div>
                    <div className='content flex'>
                        <span className='mx-2'>4.</span>
                        <div className="line">
                            <p>SQL vertically Scalable</p>
                            <p>NoSQL horizontally scalable</p>
                        </div>
                    </div>
                </div>
            
                <div className="blog text-left w-[80%] my-5">
                    <p className='text-2xl font-semibold my-2'>What is the purpose of jwt and how does it work</p>
                    <div className='content'>
                        <div className="line">
                        <p>JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs).</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;