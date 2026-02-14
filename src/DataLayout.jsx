import { NavLink, Outlet } from 'react-router'

export default function DataLayout() {
  return (
    <>
      <header>
        <h1>This is header</h1>
        <nav>
          <NavLink to="/data/products">Products</NavLink> |{' '}
          <NavLink to="/data/customers">Customers</NavLink> |{' '}
          <NavLink to="/data/sellers">Sellers</NavLink> |{' '}
          <NavLink
            to={{
              pathname: '/data/products',
              search: '?category=shoes',
              hash: '#top',
            }}
          >
            Products
          </NavLink>
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
