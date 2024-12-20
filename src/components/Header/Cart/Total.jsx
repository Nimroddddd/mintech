import Link from "next/link"
import { useCartStore } from "@/controllers/store"

export default function Total({total, count}) {

  const { setDisplayCart } = useCartStore()

  return (
    <div className="flex flex-col gap-5 w-full px-5 py-5">
      <div className="flex justify-between">
        <p>Subtotal <span className="font-light">({count} items)</span></p>
        <p>${total}</p>
      </div>
      <Link href="/checkout"><button onClick={() => setDisplayCart()} className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Proceed To Checkout</button></Link>
    </div>
  )
}