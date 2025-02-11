interface PaymentButtonProps {
    title:string
    image:string
    price:number
}

export default function PaymentButton({}:PaymentButtonProps) {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
            </button>
        </div>
    );
}