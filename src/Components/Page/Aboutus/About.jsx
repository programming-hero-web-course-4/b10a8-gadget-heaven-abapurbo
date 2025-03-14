import DynamicTitle from "../../DynamicTitle/DynamicTitle";


const About = () => {
    return (
        <div className="h-[900px]">
           <DynamicTitle title={'Gadget Heaven | About'}/>
            <div className="bg-[#9538E2]  h-[250px]  ">
                <div className="text-center space-y-3 pt-10 text-white">
                    <h1 className="text-4xl font-semibold ">About Us</h1>
                    <p className="text-xl font-thin">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className=" p-10 bg-white rounded-2xl shadow-2xl space-y-3 mx-36 h-[700px]  mt-10">
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">Our Mission</h1>
                        <p className="text-[18px]">At Gadget Heaven, our mission is to provide the latest and greatest in technology and accessories. We strive to offer products that enhance your lifestyle and keep you connected in today's fast-paced world.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">Our Story</h1>
                        <p>Founded in 2021, Gadget Heaven started with a simple idea: to make cutting-edge technology accessible to everyone. Our team of tech enthusiasts works tirelessly to curate a selection of products that are both innovative and affordable.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">Our Values</h1>
                        <div className="pl-4 ">
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Innovation: We are committed to staying ahead of the curve.</li>
                                <li>Quality: We offer products that are built to last.</li>
                                <li>Customer Satisfaction: Your happiness is our top priority.</li>
                                <li>Integrity: We believe in honest and transparent business practices.</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">Meet the Team</h1>
                        <p>Our team is made up of passionate individuals who live and breathe technology. From our customer service representatives to our product specialists, everyone at Gadget Heaven is dedicated to providing you with the best possible experience.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
                        <p>Have questions or need assistance? Reach out to us at <a href="#" className="text-blue-600">support239@gadgetheaven.com</a> or call us at (123) 456-7890. We're here to help!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;