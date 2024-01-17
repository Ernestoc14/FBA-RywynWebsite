"use client"

function ButtonCheckout({priceId}) {
  return (
    <button
      className="bg-slate-300 p-3 rounded-md"
      onClick={() => {
        console.log(priceId);
      }}
    >
      BUY
    </button>
  );
}

export default ButtonCheckout;
