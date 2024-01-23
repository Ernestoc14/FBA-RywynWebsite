"use client";

function ButtonCheckout({ priceId }) {
  return (
    <button
      className="bg-slate-300 p-3 rounded-md"
      onClick={async () => {
        const res = await fetch("/api/checkout", {
          method: "POST",
          body: JSON.stringify({ priceId }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        window.location.href = data.url;
      }}
    >
      BUY
    </button>
  );
}

export default ButtonCheckout;
