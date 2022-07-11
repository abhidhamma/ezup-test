import { OrderManagement } from './sections/OrderManagement'
import { ProductManagement } from './sections/ProductManagement'
import { StatisticsOption } from './sections/StatisticsOption'
import { WorkManagement } from './sections/WorkManagement'

export const GeneralContent = () => {
  return (
    <>
      <WorkManagement />
      <OrderManagement />
      <ProductManagement />
      <StatisticsOption />
    </>
  )
}
