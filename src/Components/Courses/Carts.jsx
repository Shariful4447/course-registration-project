import propTypes from "prop-types";
const Carts = ({ handleButton, priceCount, itemCredit }) => {
    let totalRemaining = 20;
    if(totalRemaining <0){
        alert("you have no remaining")
    }
    const remaining = totalRemaining - itemCredit
    return (
        <div className="space-y-4">
            <h1 className='text-[#2F80ED] text-xl'>Credit Hour Remaining {remaining} hr</h1>
            <hr />
            <h3 className="text-xl font-bold">Course Name</h3>
            {
                handleButton.map(courseName => <li key={courseName.id} className="list-decimal opacity-60">{courseName.name}</li>)
            }
            <hr />
            <h2 className="capitalize text-xl font-medium">total credit hour : {itemCredit} hr</h2>
            <hr />
            <h2 className="capitalize text-xl font-medium">total Price : {priceCount} USD</h2>

        </div>
    )
}
Carts.propTypes = {
    handleButton: propTypes.array,
    priceCount: propTypes.number,
    itemCredit: propTypes.number,
}

export default Carts;