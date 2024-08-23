import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import "./payment.css";
import { createOrder, clearErrors } from "../../actions/orderAction";
import { generateOrderId } from "../utils/loadJs";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { clearCart } from "../../actions/cartAction";

const Payment = ({ history, apiKey }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const [Razorpay] = useRazorpay();
  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { order: orderState, error } = useSelector((state) => state.newOrder);

  const paymentData = Math.round(orderInfo.totalPrice * 100);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    order_id: generateOrderId(),
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    handlePayment();
    //   payBtn.current.disabled = true;

    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };
    //     const { data } = await axios.post(
    //       "/api/v1/payment/process",
    //       paymentData,
    //       config
    //     );

    //     const client_secret = data.client_secret;

    //     if (!stripe || !elements) return;

    //     const result = await stripe.confirmCardPayment(client_secret, {
    //       payment_method: {
    //         card: elements.getElement(CardNumberElement),
    //         billing_details: {
    //           name: user.name,
    //           email: user.email,
    //           address: {
    //             line1: shippingInfo.address,
    //             city: shippingInfo.city,
    //             state: shippingInfo.state,
    //             postal_code: shippingInfo.pinCode,
    //             country: shippingInfo.country,
    //           },
    //         },
    //       },
    //     });

    //     if (result.error) {
    //       payBtn.current.disabled = false;

    //       alert.error(result.error.message);
    //     } else {
    //       if (result.paymentIntent.status === "succeeded") {
    //         order.paymentInfo = {
    //           id: result.paymentIntent.id,
    //           status: result.paymentIntent.status,
    //         };

    //         dispatch(createOrder(order));

    //         history.push("/success");
    //       } else {
    //         alert.error("There's some issue while processing payment ");
    //       }
    //     }
    //   } catch (error) {
    //     payBtn.current.disabled = false;
    //     alert.error(error.response.data.message);
    //   }
  };

  const handlePayment = async (params) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/payment/process",
      {
        amount: paymentData,
        receipt: order.order_id,
      },
      config
    );

    const options = {
      key: apiKey, // Enter the Key ID generated from the Dashboard
      amount: paymentData, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: user.name,
      description: `Order for ${user.name}`,
      image: "https://example.com/your_logo",
      order_id: data.client_secret.id, //order.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        order.paymentInfo = {
          id: response.razorpay_payment_id,
          status: "success",
        };
        dispatch(createOrder(order));

        dispatch(clearCart());

        history.push("/success");
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9999999999",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      // console.log("error: ", response);
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      alert.error(response.error.reason);
    });

    rzp1.open();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          {/* <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div> */}
          <input
            type="submit"
            value={`Pay  ₹${orderInfo && Math.floor(orderInfo.totalPrice)}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
