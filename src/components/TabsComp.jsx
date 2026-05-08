
import { Card, TabItem, Tabs, } from "flowbite-react";
import CardCarrousel from "./CardCarrousel";
import { HiLocationMarker, HiUserCircle } from "react-icons/hi";
import { VscRocket } from "react-icons/vsc";
import { VscFlame } from "react-icons/vsc";
import { GoFileDirectory } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";



import TimelineComp from "./TimelineComp";
import CardComp from "./CardComp";

export default function TabsComp() {
    return (
        <Tabs
            aria-label="Tabs with icons"
            variant="underline"
            className="px-12 [&>div]:-mx-24 
            **:[[role=tab]]:text-gray-500 
            [&_[role=tab][aria-selected=true]]:text-[#779677] 
            [&_[role=tab][aria-selected=true]]:border-[#779677]"
        >
            <TabItem active title="About Me" icon={HiUserCircle}>
                <div className="grid md:grid-cols-2 gap-10 mt-10 ml-12 mr-12">
                    <div className="text-justify space-y-4">
                        <h2 className="text-2xl font-semibold">
                            About <span className="text-[#779677]">Me</span>
                        </h2>
                        <p className="text-black">
                            I'm a mobile developer who focuses on creating simple, smooth, and user friendly applications.
                        </p>
                        <br />
                        <p className="text-black">
                            I'm very curious and always excited to try new ideas, which is why most of my projects are built with different concepts and approaches.
                            I like experimenting, exploring new features, and turning small ideas into something unique.
                        </p>
                        {/* <br />
                        <p className="text-black">
                            Right now, I'm also learning how to connect mobile apps with back-end systems to create more complete and scalable applications.
                        </p> */}
                        <div className="flex gap-2 mt-4 text-sm text-gray-500 items-center">
                            <HiLocationMarker className="w-4 h-4 text-gray-400" />
                            <span>Indonesia</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <span>Bogor City</span>
                            </span>
                        </div>
                    </div>
                    <div className="space-y-4 mt-7">
                        <TimelineComp />
                    </div>
                </div>
            </TabItem>
            <TabItem active title="Projects" icon={GoFileDirectory}>
                <div className="mt-10 px-12 mb-12">
                    <CardComp />
                </div>
            </TabItem>
            <TabItem active title="Certificate" icon={VscFlame}>
                <div className="gap-10 mt-10 ml-12 mr-12 mb-12">
                    <div className="text-justify space-y-4">
                        <CardCarrousel/>                        
                    </div>
                </div>
            </TabItem>
            {/* <TabItem active title="Contact" icon={MdLocalPhone}>
                <div className="grid md:grid-cols-2 gap-10 mt-10 ml-12 mr-12">
                    <div className="text-justify space-y-4">
                        <h2 className="text-2xl font-bold">
                            About <span className="text-[#779677]">Me</span>
                        </h2>
                        <p>
                            This is Profile tab's associated content
                            Clicking another tab will toggle the visibility of this one for the next.
                        </p>
                        <p>
                            I am a passionate web developer who loves building modern UI using React,
                            Tailwind CSS, and Flowbite.
                        </p>
                    </div>
                    <TimelineComp />
                </div>
            </TabItem> */}
        </Tabs>
    );
}
