import React from 'react'

type LayoutProps = {
  children: React.ReactNode; // 👈️ type children
};

function Layout(props: LayoutProps) {
  return <div>{props.children}</div>;
}

export default Layout