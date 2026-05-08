import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";

export default function TimelineComp() {
    const handleDownload = () => {
        const pdfUrl = "/CV-Hengkara Laurenchia Darmawan.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV-Hengkara Laurenchia Darmawan.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Timeline>
                <TimelineItem>
                    <TimelinePoint />
                    <TimelineContent className="space-y-4">
                        <TimelineTime className="text-[#779776]!">2024 - Present</TimelineTime>
                        <TimelineTitle className="mt-1">SMKS WIKRAMA BOGOR</TimelineTitle>
                        <TimelineBody className="text-justify">
                            Majoring in Software and Game Development (PPLG). I'm a motivated and enthusiastic student with a strong interest in technology.
                            <Button 
                                onClick={handleDownload}
                                style={{ background: "black" }} 
                                className="cursor-pointer hover:scale-103 transition hover:bg-[#779776] mt-5"
                            >
                                <HiDownload className="mr-2"/>
                                Download Resume
                            </Button>
                        </TimelineBody>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}