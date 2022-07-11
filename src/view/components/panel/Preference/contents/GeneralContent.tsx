import { Section } from '@components/common/Section'
import { SelectBox } from '@components/common/SelectBox'
import { WorkManagement } from './sections/WorkManagement'

export const GeneralContent = () => {
  return (
    <div className='bg-SoftTab border-SoftTabBorder border border-t-0 p-1'>
      <WorkManagement />
      <Section title={'주문관리'}>
        <div className='pl-[43px] my-1'>
          - 기본 검색일자 : <SelectBox text={'7일간 자료'} />
        </div>
        <div className='my-1'>
          - 기본 표시 주문 상태 : <SelectBox text={'전체보기'} />
        </div>
        <div className='pl-[43px] my-1'>
          - 주문 검색기간 : <SelectBox text={'90일'} />
          <span className='text-blue-500'>(일부 쇼핑몰은 최대 7일까지만 가능합니다.)</span>
        </div>
        <div className='pl-[27px] my-1'>
          - 자주사용 택배사 : <SelectBox text={'선택해주세요'} />
        </div>
      </Section>
      <Section title={'상품연동'}>
        <div>상품연동콘텐츠</div>
      </Section>
      <Section title={'통계관리'}>
        <div>통계관리콘텐츠</div>
      </Section>
    </div>
  )
}
