import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../Cartitem'
import { toast,ToastContainer } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const Cart = () => {
  const productdata=useSelector((store)=>store.shop.productData)
  const [totalAmt, settotalAmt]=useState("")
  const useInfo= useSelector((store)=>store.shop.userInfo)
  const [paynow, setPaynow]=useState(false)
  
  useEffect(()=>{

    let price=0;

    productdata.map((item)=>{
      price+=item.price*item.quantity
      return price
    })

    settotalAmt(price)
  },[productdata])

  const HandleCheckout=()=>{
    if(useInfo){
      setPaynow(true)

    }else{
      toast.error("Please sign in to Checkout")
    }

  }
  const payment= async(token)=>{
    await axios.post("http://localhost:8000/pay",{
      amount:totalAmt*100,
      token:token
    })
    
  }

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
     
      <div className='max max-w-screen-xl mx-auto py-20 flex'>
        <Cartitem></Cartitem>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
        <div className='flex flex-col border-b-[1px] border-b-gray-400 pb-6'>
          <h2 className='text-2xl font-medium'>cart Total</h2>
          <p className='flex items-center gap-4 text-base mt-2'>
            subtotal{" "}
            <span className='font-titleFont font-bold text-lg mt-2'>{}</span>

          </p>
          <p className="flex items-start gap-4 text-base mt-2">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
        </div>
        <p className='font-titleFont font-semibold flex justify-between mt-6'>
          Total <span className='text-xl font-bold'>{totalAmt}</span>
        </p>
        <button onClick={HandleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">Proceed to checkout</button>{
          paynow && <div className='w-full mt-6 flex items-center justify-center'> 
             <StripeCheckout
                  stripeKey="pk_test_51LXpmzBcfNkwYgIPXd3qq3e2m5JY0pvhaNZG7KSCklYpVyTCVGQATRH8tTWxDSYOnRTT5gxOjRVpUZmOWUEHnTxD00uxobBHkc"
                  name="Shopnow Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay to shopnow"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={useInfo.email}
                />  



















                


          </div>
        }
        
      

        </div>
      </div>
      {/* {
        productdata.map(()=)
      } */}

<ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Cart
