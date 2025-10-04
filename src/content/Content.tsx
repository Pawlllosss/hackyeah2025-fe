import Info from "./Info.tsx";
import ImageHolder from "./ImageHolder.tsx";

const Content = () => {
    return <div className="flex flex-1 h-[60vh] items-center justify-center flex-row space-x-20">
        <Info/>
        <ImageHolder/>
    </div>
}

export default Content;