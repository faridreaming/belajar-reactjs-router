import { useParams } from 'react-router'

export default function NotFound() {
  const params = useParams()

  return (
    <div>
      <h1>404 not found baka mitai :v</h1>
      <p>Ur params : {params['*']}</p>
    </div>
  )
}
