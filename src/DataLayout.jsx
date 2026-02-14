import { Outlet } from 'react-router'

export default function DataLayout() {
  return (
    <>
      <header>
        <h1>This is header</h1>
        <nav>
          <a href="/data">Data</a> | <a href="/data/products">Products</a> |{' '}
          <a href="/data/customers">Customers</a> |{' '}
          <a href="/data/sellers">Sellers</a>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <p>This is footer</p>
      </footer>
    </>
  )
}
