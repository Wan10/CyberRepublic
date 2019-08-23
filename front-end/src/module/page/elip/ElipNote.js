import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import I18N from '@/I18N'
import NoteIcon from './NoteIcon'

const ElipNote = () => (
  <StyledRow>
    <StyledCol span={3} />
    <Col span={17}>
      <Wrapper>
        <Image>
          <NoteIcon />
        </Image>
        <Text>{I18N.get('elip.note')}</Text>
      </Wrapper>
    </Col>
  </StyledRow>
)

export default ElipNote

const StyledRow = styled(Row)`
  margin-top: 24px;
  margin-bottom: 24px;
`

const Wrapper = styled.div`
  background: #f6f9fd;
  display: flex;
  padding: 30px 48px 30px 35px;
  min-height: 140px;
  justify-content: center;
  align-items: center;
`
const Image = styled.div`
  flex-shrink: 1;
`
const Text = styled.div`
  margin-left: 32px;
`
const StyledCol = styled(Col)`
  margin-right: 20px;
  min-width: 120px;
`
