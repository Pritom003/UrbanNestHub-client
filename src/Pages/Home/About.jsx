
import { GoGoal } from "react-icons/go";
import { GiNightVision } from "react-icons/gi";
import img1 from '../../assets/banner.3.jpg';
import { useState } from "react";
const About = () => {
  const [ showmore,setshowmore]=useState(false)
  const [ morevisson,setshowmorevisson]=useState(false)
  return (

//  
<div >
<div className="text-center mt-20 mb-5">
<h1 className="text-4xl font-semibold">About us</h1>
        <h5 className="text-[#93b4ce] text-xl font-medium">Our Mission And Vision</h5>
      </div>

        <div className="flex">
          <div></div>
          <img className="h-[600px] w-[300px]" src={img1} alt="" />
<div>
<div className='bg-green-50 h-[300px] overflow-auto p-4 '>
    <h1 className="text-4xl font-semibold text-center my-4 flex  align-middle gap-2 items-center">
      Our vision <GiNightVision /></h1>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti doloribus facere voluptates modi. Ducimus totam, magnam quia architecto quod sint quam iure error deserunt. Earum ut debitis corporis eos voluptatum!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur! Perspiciatis, aliquid nihil debitis ipsam in natus asperiores nulla odio temporibus tempore odit neque blanditiis, nam sapiente saepe praesentium accusamus?
  Lorem ipsum dolor sit amet consectetur{
  showmore? <><p> adipisicing elit. Quaerat est ex, repellendus aut saepe, earum alias nesciunt maiores magnam similique nulla error? Ad fugit est rem consectetur eveniet ex tempore?
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit exercitationem eaque quia, dolor eligendi architecto vitae delectus laborum labore blanditiis omnis iure unde inventore in. Minus deleniti nesciunt quis unde!</p>
   <button onClick={() =>setshowmore(false)} className="text-blue-500 hover:underline">
   Show Less
 </button> </>:(
              <button onClick={() => setshowmore(true)} className="text-blue-500 hover:underline">
                Learn More
              </button>
            )}



    </div>
    <div className='bg-yellow-50 h-[300px] overflow-auto p-4'>

<h1 className="text-4xl flex gap-2 align-middle items-center font-semibold text-center my-4">Our Mission <GoGoal /></h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa blanditiis delectus quidem? Suscipit illo tenetur quasi numquam nostrum dolor doloremque culpa totam sapiente quia, a atque consequatur corporis odio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias laborum explicabo aliquid porro doloremque quasi. Placeat, quod laboriosam unde ratione earum deleniti, optio nemo voluptatem distinctio iusto voluptatibus vitae?
Lorem ipsum dolor sit amet consectetur {
  morevisson? <><p> adipisicing elit. Quaerat est ex, repellendus aut saepe, earum alias nesciunt maiores magnam similique nulla error? Ad fugit est rem consectetur eveniet ex tempore?
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit exercitationem eaque quia, dolor eligendi architecto vitae delectus laborum labore blanditiis omnis iure unde inventore in. Minus deleniti nesciunt quis unde!</p>
   <button onClick={() =>setshowmorevisson(false)} className="text-blue-500 hover:underline">
   Show Less
 </button> </>:(
              <button onClick={() => setshowmorevisson(true)} className="text-blue-500 hover:underline">
                Learn More
              </button>
            )}
</div>
</div>
        </div>
</div>
  );
};

export default About;
