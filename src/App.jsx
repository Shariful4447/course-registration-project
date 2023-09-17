import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import { useEffect } from 'react';
import Carts from './Components/Carts/Carts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  const [courses, setCourses] = useState([]);
  const [cartDetails, setCartDetails] =useState([]);
  const [priceCount, setPriceCount]= useState(0);
  const [itemCredit, setItemCredit] = useState(0);

  useEffect(() => {
    fetch(`course.json`)
      .then(res => res.json())
      .then(data => setCourses(data))

  }, [])
  console.log(itemCredit);

  const handleButton = (singleCart)=> {
    const isExist = cartDetails.find(item => item.id == singleCart.id);
    let count = singleCart.price;
    let credit = singleCart.credit

// credit alert 
    if(itemCredit >=20){
      toast.warn("you have no remaining credit to book!");
      return 
    }
// 
    if(isExist){
      toast.warn("all ready booked");
    }else{
      cartDetails.forEach((test) => {
        count += test.price;
        credit += test.credit
      })

      setPriceCount(count);
      setItemCredit(credit);
      
      setCartDetails([...cartDetails, singleCart]);
    }
}
  return (
    <div className='container mx-auto px-2  '>
      {/* course main title */}
      <div className='text-center mt-8 md:mt-10 lg:pt-12'>
        <h1 className='text-3xl font-bold my '>Course Registration</h1>
      </div>
      {/* main body */}
      <div className='grid lg:flex gap-2  py-2 '>
        <div className='flex-1 order-[2] lg:order-[-1]'>
          <div className='grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-2'>
            {
              courses.map(course => <Courses 
                 course={course} 
                 key={course.id}
                 handleButton={handleButton}
              ></Courses>)
            }
          </div>
        </div>
        {/* card section  */}
        <div className='px-2 lg:px-2 justify-center mt-5 lg:mt-0 w-auto'>
          <div className='bg-white gird justify-center w-full lg:w-auto inline-block p-6 rounded-lg'>
            <Carts 
            handleButton={cartDetails} 
            priceCount={priceCount}
            itemCredit={itemCredit}
            
            ></Carts>
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </div>
  )
}
export default App
