

const Heading = ({children}) => {
    return (
        <>
            <h2 style={{fontFamily: "Kalam"}} className="text-center text-3xl capitalize font-bold before:border-x-4 before:mr-3 md:before:mr-5 before:border-yellow-500 before:rounded-l-3xl before:py-3 py-14 md:after:border-x-4 after:ml-3 md:after:ml-5 after:border-yellow-500 after:rounded-r-3xl after:py-3 px-5">{children}</h2>
        </>
    );
};

export default Heading;