import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Heading from '../Shared/Heading/Heading';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blog");
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500" className='w-8/12 mx-auto pb-10'>
            <Heading>My Blogs Page</Heading>
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Both are used in authentication systems to provide secure access to protected route.

                            An access token is a short-lived credential that is issued after a user logs in or authorizes a website. It is used to authenticate the user and authorize access to specific route.

                            A refresh token is a long-lived credential issued alongside the access token. It allows the client to obtain a new access token without re-authenticating when the current one expires.

                            On the client-side, access and refresh tokens should be securely stored, typically in an HTTP-only secure cookie or a secure storage mechanism provided by the operating system or browser. This prevents unauthorized access to the tokens.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Compare SQL and NoSQL databases?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            SQL (relational) databases:
                            <br />
                            It's an relational database
                            Follow a structured data model with predefined schemas and tables.
                            Use SQL as the query language for data retrieval and manipulation.
                            Scale vertically by increasing the resources of a single server.
                            Suitable for applications with structured data, complex relationships, and transactional needs.
                            <br />
                            NoSQL (non-relational) databases:
                            <br />
                            Employ various data models like key-value pairs, documents, column families, or graphs.
                            Use specific query languages or APIs tailored to their data models.
                            Prioritize scalability and can distribute data across multiple servers for horizontal scaling.
                            Well-suited for unstructured or rapidly changing data, large-scale distributed systems, and real-time analytics.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is express js? What is Nest JS?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Express.js is a minimalistic and flexible web application framework for Node.js, known for its simplicity and lightweight nature.
                            <br />
                            Express.js focuses on simplicity and flexibility, while NestJS offers a structured and opinionated approach to building scalable server-side applications.
                            <br />
                            NestJS is a TypeScript-based web application framework built on top of Node.js, providing a structured and scalable architecture inspired by Angular.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is MongoDB aggregate and how does it work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
                        <br />
                        MongoDB's aggregate function is used for advanced data processing in collections. Each stage performs a specific operation like filtering, grouping, sorting, or joining. Popular stages include $match, $group, $sort, $project, $limit, $skip, $lookup, and $unwind. By arranging these stages in a pipeline, complex data analysis tasks can be achieved. The aggregate function returns a cursor with the aggregated data, allowing for powerful and flexible data processing within MongoDB.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blogs;