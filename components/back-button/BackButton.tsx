import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"

interface Props {
    destination?: string
}


const BackButton = ({ destination = "/" }: Props) => {
    return (
        <div className="flex">
            <Link href={destination} 
            className="bg-sky-800 text-white px-4 py-12 rounded-lg w-fit">
                <BsArrowLeft className="text-2x1" />
            </Link>
        </div>
    )
}

export default BackButton