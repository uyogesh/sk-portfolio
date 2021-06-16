import React from 'react'

const SideBar = ({navItems}) => {
  return (
    <header>
      <strong>{`sabjikothi`}</strong>
      <nav>
        <menu>
        {
            navItems.map((navItem) => <li className="nav-a">{navItem.title}</li>)
        }
        </menu>
      </nav>
    </header>
  )
}

export default SideBar