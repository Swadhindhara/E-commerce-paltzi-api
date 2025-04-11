import { addReferenceId } from "@/features/cart/cartSlice";
import { toast } from "sonner";

export const loadRazorpay = (amount, navigate, dispatch) => {
  const options = {
      key: "rzp_test_1PwaSNZkMjskIj",
      amount: amount * 100,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "http://localhost:5173/src/assets/images/logo.svg",
      handler: function (response) {
        // alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        navigate('/order-confirmation')
        toast.success("Payment Successful!")
        
        dispatch(addReferenceId(response))
      },
      prefill: {
        name: "Swadhin Dhara",
        email: "swadhin@example.com",
        contact: "7797707517"
      },
      notes: {
        address: "Your Address"
      },
      theme: {
        color: "#0a9396"
      }
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  