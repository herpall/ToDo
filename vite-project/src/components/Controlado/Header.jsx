import Controlado from "./Controlado"
import MoonIcon from "../icons/MoonIcon";

const Header = () => {


    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3rem]"> ToDo </h1>
                <button> <MoonIcon className="fill-red-400" /> </button>
            </div>
            <Controlado />
        </header>
    )
}

export default Header;