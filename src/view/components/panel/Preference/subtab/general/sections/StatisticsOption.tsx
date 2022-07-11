import { Section } from '@components/common/Section'
import { SelectBox } from '@components/common/SelectBox'

export const StatisticsOption = () => {
  return (
    <Section title={'통계관리'}>
      <div>
        - 기본 검색일자 : <SelectBox text={'7일간 자료'} />
      </div>
    </Section>
  )
}
