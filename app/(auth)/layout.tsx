import { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-144px)]'>{children}</div>
  )
}

export default layout