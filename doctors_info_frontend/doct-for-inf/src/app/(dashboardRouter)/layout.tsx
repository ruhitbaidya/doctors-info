import AdminDashboard from '@/components/shere/adminDashboard';
import { ReactNode } from 'react'

const layout = ({children}: {children : ReactNode}) => {
  return (
    <div>
      <AdminDashboard children={children} />
    </div>
  )
}

export default layout
