import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div className='my-5 pt-5 container' style={{color: '#DF01A5'}}>
            <h2 className='fw-bold'>Some blog questions are given below:</h2>
            <Accordion className='mt-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b style={{color:'#316ac1'}}>What is an access token and refresh token? How do they work and where should we store them on the client-side?</b> </Accordion.Header>
                    <Accordion.Body>
                        <b>What Is A Token? </b><br />
                        Tokens are pieces of data that carry just enough information to facilitate the process of determining a user's identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process. <br />
                        An access token and a refresh token are commonly used in authentication and authorization systems. <br />
                        <b>  What's an access token?</b> <br />
                        When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources. <br />
                        <b>What Is a Refresh Token?</b> <br />
                        As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b style={{color:'#316ac1'}}>Compare SQL and NoSQL databases?</b></Accordion.Header>
                    <Accordion.Body>
                       <b> SQL (Structured Query Language)</b> and <b>NoSQL (Not only SQL)</b> are two types of database systems that differ in their data models, querying mechanisms, scalability, and use cases. <br /> <br />
                        <b>The five critical differences between SQL and NoSQL are:</b> <br />
                        SQL databases are relational, and NoSQL databases are non-relational.
                        SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b style={{color:'#316ac1'}}>What is express js? What is Nest JS ?</b></Accordion.Header>
                    <Accordion.Body>
                        NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.
                        <br />
                        One of the cool things about NestJS is that anything supported in Express (i.e., Express functions) is also supported in Nest.               
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b style={{color:'#316ac1'}}>What is MongoDB aggregate and how does it work?</b></Accordion.Header>
                    <Accordion.Body>
                        In MongoDB, the aggregate framework is a powerful tool used for data processing and transformation. It allows you to perform advanced data analysis, aggregation, and computation operations on your MongoDB collections. The aggregate operation works by processing a collection's documents through a series of stages, allowing you to reshape, filter, group, project, and analyze the data in various ways.                  
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;