import { BiDollar, BiBookOpen } from "react-icons/bi";
import PropTypes from 'prop-types';
const Courses = ({course, handleButton}) => {

    const { name, img, details, price, credit } = course;

    return (
        <div className=" rounded-xl bg-white p-4">
            <div className="rounded-lg overflow-hidden h-[250px] ">
                <img className="h-full" src={img} alt="" />
            </div>
            <div className=" space-y-3 mt-3">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className=" text-sm opacity-70 ">{details}</p>
                <div className="flex justify-between">

                    <div className="flex gap-4">
                        <BiDollar className="text-3xl opacity-100 font-normal"></BiDollar>
                        <h2 className="flex items-center text-xl opacity-60"> Price: {price}</h2>
                    </div>
                    <div className="flex gap-4">
                        <BiBookOpen className="text-3xl opacity-100 font-normal"></BiBookOpen>
                        <h2 className="flex items-center text-xl opacity-60">Credit: {credit}hr</h2>
                    </div>

                </div>
                <button onClick={() => handleButton(course)} className="w-full py-2 rounded-lg bg-[#2F80ED] text-white capitalize">select</button>
            </div>

        </div>
    )

}
Courses.propTypes = {
    course: PropTypes.object,
    handleButton: PropTypes.func
}
export default Courses;