

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="space-y-4">
        <div className="flex gap-10 items-center justify-center mt-5">
            <progress className="progress w-56 bg-purple-600"></progress>
            <p className="text-purple-600 font-medium text-lg">{subHeading}</p>
            <progress className=" bg-purple-600 progress w-56"></progress>
        </div>


        <h2 className="text-3xl text-purple-400 text-center">--- {heading} ---</h2>
    </div>
    );
};

export default SectionTitle;