import Button from "./Button"; 

const Closer = () => {
    return (
        <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                {/* Tagline - Styled to Match Home Opener */}
                <h2 className="text-xl sm:text-3xl font-bold text-gray-900">
                    A quick estimate is great, 
                    <span className="text-gold"> but precision matters</span>.  
                    Let’s ensure your project gets the exact pricing it deserves.
                </h2>

                {/* Call to Action Button */}
                <div className="mt-6">
                    <Button href="/contact">Get Estimate</Button>
                </div>
            </div>
        </section>
    );
};

export default Closer;
