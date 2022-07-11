import { Section } from '@components/common/Section'
import { SelectBox } from '@components/common/SelectBox'

export const WorkManagement = () => {
  const options = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
  ]
  return (
    <Section title={'작업관리'}>
      <div>
        제안 최대 프로세스 개수
        <SelectBox text={'1'} />개 입니다. (보유하신 P/C 코어개수를 확인 하여 절반이하로 설정하세요)
      </div>
    </Section>
  )
}
