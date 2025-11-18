import { BiCheck } from 'react-icons/bi'
import aboutImage from "../../public/modern-retail-store-interior.jpeg"
import Image from 'next/image'
import { aboutConsts, aboutFeatures, statsConstants, valuesConstants } from "../../constants/aboutPageConstants"

export default function About() {

    return (
        <div className="min-h-screen">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center space-y-6 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold">{aboutConsts.header}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {aboutConsts.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <Image
                            src={aboutImage}
                            height={100}
                            width={100}
                            alt="ShopHub store"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">{aboutConsts.ourStory}</h2>
                        <p className="text-lg text-gray-600">
                           {aboutConsts.ourStoryDesc}
                        </p>
                        <div className="space-y-3">
                            {aboutFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <BiCheck className="w-6 h-6 text-primary shrink-0 border-2 border-gray-600 text-gray-600 rounded-full" />
                                    <span className="text-gray-600 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 py-16 border-t border-b border-gray-200">
                    {statsConstants.map((item, index) => (
                        <div className="text-center" key={index}>
                            <p className="text-4xl font-bold text-primary mb-2">{item.header}</p>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-16 pb-5">
                    <h2 className="text-3xl font-bold mb-12 text-center">{aboutConsts.ourValues}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {valuesConstants.map((item, index) => (
                            <div className="bg-card p-8 rounded-xl border border-gray-200" key={index}>
                                <h3 className="text-xl font-bold mb-3">{item.header}</h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
