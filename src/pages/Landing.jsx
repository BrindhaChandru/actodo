import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";

function Landing(){
    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md" >
        <Header />
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitile={"CHENNAI"} />
          <Card bgcolor={"#FD6663"} title={"20 December"} subtitile={"14:03:20"} />
          <Card bgcolor={"#FCA201"} title={"Built Using "} subtitile={"React"} />
      </div>
      <Todocontainer/>
      </div>
    </div>
    )
}
export default Landing