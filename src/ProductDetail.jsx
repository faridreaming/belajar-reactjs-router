import { useParams } from 'react-router'

export default function ProductDetail() {
  const params = useParams()
  const productId = params.id

  return (
    <div>
      <h1>Product {productId} Detail</h1>
      <p>Welcome to the product detail page!</p>
    </div>
  )
}
