import { Button } from "flowbite-react";
import { HiDownload } from "react-icons/hi";


export default function ButtonComp() {
  return (
    <div className="flex items-center gap-4 mt-8">
    
      <Button style={{ background: "black" }}>
        <HiDownload className="mr-2 h-5 w-5" />
        Download Resume
      </Button>

     

    </div>
  );
}