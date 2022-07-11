import { Section } from '@components/common/Section'
import { SelectBox } from '@components/common/SelectBox'

export const ProductManagement = () => {
  return (
    <Section title={'상품연동'}>
      <div>
        - 상품관리 기본검색일자
        <SelectBox text={'7일간 자료'} />
      </div>
      <div>
        <input type={'checkbox'} />
        상품 등록/수정 금지 키워드 사용 (콤마로 구분 예: 할인, 주의)
      </div>
      <div>
        <input type={'text'} />
      </div>
      <div>
        <input type={'checkbox'} />
        쇼핑몰에서 상품명 길이 제한 초과 시, 최대길이로 자동으로 잘라서 전송하기
      </div>
      <div>
        - 종료대기 전환일자 <SelectBox text={'7일'} />
      </div>
      <div>
        <input type={'checkbox'} />
        검색시 생성일자기준 정렬방식
      </div>
    </Section>
  )
}
