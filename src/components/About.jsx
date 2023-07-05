import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Welcome to Delicious Kitchen, your ultimate destination for convenient and delightful food ordering experiences. We are passionate about connecting food lovers with their favorite restaurants, bringing the best cuisines right to your doorstep. With our user-friendly interface and extensive restaurant network, we strive to make every dining experience a memorable one.

                    At Delcious Kitchen, we understand that everyone has unique tastes and preferences when it comes to food. That's why we have curated a diverse range of restaurants, offering a wide selection of cuisines to cater to every craving. Whether you're in the mood for a sizzling pizza, mouthwatering sushi, or comforting home-cooked meals, our app has got you covered.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}