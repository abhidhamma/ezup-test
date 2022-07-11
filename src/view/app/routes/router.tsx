import { Home } from '@components/panel/Home/Home'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { IdManagementContent } from '@components/panel/Preference/subtab/idManagement/IdManagementContent'
import { GeneralContent } from '@components/panel/Preference/subtab/general/GeneralContent'
import { Preference } from '@components/panel/Preference/Preference'

export const Router = () => {
  return (
    <>
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='preference' element={<Preference />}>
              <Route path='general' element={<GeneralContent />} />
              <Route path='management' element={<IdManagementContent />} />
            </Route>
            <Route path='productReception' element={<div>상품수신</div>} />
            <Route path='productManagement' element={<div>상품관리</div>} />
            <Route path='taskManagement' element={<div>작업관리</div>} />
            <Route path='orderManagement' element={<div>주문연동</div>} />
            <Route path='inquiryManagement' element={<div>문의연동</div>} />
            <Route path='categoryManagement' element={<div>카테고리관리</div>} />
            <Route path='mappingManagement' element={<div>매핑관리</div>} />
            <Route path='statistics' element={<div>통계정보</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    </>
  )
}
