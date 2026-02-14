import { Outlet } from 'react-router'

export default function DataLayout() {
  return (
    <>
      <header>
        <h1>This is header</h1>
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
