import React from 'react'
import I18N from '@/I18N'
import _ from 'lodash'
import styled from 'styled-components'
import './style.scss'
import MediaQuery from 'react-responsive'
import { Row, Col, Timeline, Button } from 'antd'

import { LG_WIDTH, MAX_WIDTH_MOBILE } from '../../../config/constant'
import { USER_LANGUAGE } from '@/constant'
import CRCFlow from './CRCFlow'

import { images } from './images'

export default class extends React.Component {
  render () {
    return (
      <ContainerMid className="mid-section">
        <MainContainer>
          <CRCIntroContainer>
            <CRCLogo src={images.CRCLogoImg} alt="CRCLogoImg" />
            <CRCTitle>
              {I18N.get('home.crc.title')}
            </CRCTitle>
            <CRCDesc>
              <MainDesc>
                <div dangerouslySetInnerHTML={{__html: I18N.get('home.crc.desc')}} />
              </MainDesc>
              {/* <Timeline>
                <Timeline.Item>
                  <ItemTitle>{I18N.get('home.crc.list.1.date')}</ItemTitle>
                  <ItemDesc>{I18N.get('home.crc.list.1.text')}</ItemDesc>
                </Timeline.Item>
                <Timeline.Item>
                  <ItemTitle>{I18N.get('home.crc.list.2.date')}</ItemTitle>
                  <ItemDesc>
                    {I18N.get('home.crc.list.2.text')}
                    {' '}
-
                    {' '}
                    <a href="/whitepaper">{I18N.get('home.crc.list.2.link')}</a>
.
                  </ItemDesc>
                </Timeline.Item>
                <Timeline.Item>
                  <ItemTitle>{I18N.get('home.crc.list.3.date')}</ItemTitle>
                  <ItemDesc>
                    {I18N.get('home.crc.list.3.text')}
                    {' '}
                    <a href="https://www.cyberrepublic.org/docs/#/overview/crc" target="_blank">{I18N.get('home.crc.list.3.link')}</a>
.
                  </ItemDesc>
                </Timeline.Item>
                <Timeline.Item>
                  <ItemTitle>{I18N.get('home.crc.list.4.date')}</ItemTitle>
                  <ItemDesc>
                    {I18N.get('home.crc.list.4.text')}
                    {' '}
                    <a href="/proposals">{I18N.get('home.crc.list.4.link')}</a>
.
                  </ItemDesc>
                </Timeline.Item>
              </Timeline> */}
            </CRCDesc>
            <BottomImg src={images.StripLightImg} alt="StripLightImg" />
          </CRCIntroContainer>
          <CRCFlow />

          <SectionContainer>
            <CRCTitle>
              {I18N.get('home.crc.regionalComm')}
            </CRCTitle>
            <CommunityImg src={images.RegionMapImg} />
          </SectionContainer>

          <SectionContainer>
            <CRCTitle>
              {I18N.get('home.crc.submit-suggestion.1')}
            </CRCTitle>
            <Button style={{ height: 'auto' }} className="cr-btn cr-btn-primary" href="/suggestion">{I18N.get('home.crc.submit-suggestion.2')}</Button>
          </SectionContainer>
        </MainContainer>
        <GroupImg src={images.ShapeGroupImg} alt="ShapeGroupImg" />
      </ContainerMid>
    )
  }
}


const ContainerMid = styled.div`
  padding: 50px 0 30px;
  color: #fff;
`

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const CRCIntroContainer = styled.div`
  position: relative;
  background: #031E28;
  max-width: 750px;
  padding: 80px;
  margin: 0 auto 30px;
  text-align: left;
  @media only screen and (max-width: ${LG_WIDTH}px) {
   padding: 30px 15px;
  }
`

const CRCLogo = styled.img`
  position: absolute;
  top: -50px;
  left: -50px;
  @media only screen and (max-width: ${MAX_WIDTH_MOBILE}px) {
   display: none;
  }
`

const CRCTitle = styled.div`
  font-family: komu-a, Synthese, sans-serif;
  font-size: 48px;
  text-align: center;

  > a {
    font-family: komu-a, Synthese, sans-serif;
    font-size: 48px;
  }
`

const CRCDesc = styled.div`
  text-align: left;
  margin-top: 25px;
  font-weight: 200;
  @media only screen and (max-width: ${LG_WIDTH}px) {
    width: 90%;
  }
  .ant-timeline-item-head {
    background-color: #43af92;
  }
  .ant-timeline-item-tail {
    border-color: #43af92;
  }
`

const MainDesc = styled.div`
  margin-bottom: 25px;
`

const ItemTitle = styled.div`
  color: #18FFFF;
  font-size: 16px;
`

const ItemDesc = styled.div`
  color: white;
  font-size: 13px;
`

const BottomImg = styled.img`
  position: absolute;
  bottom: 30px;
  right: -30px;
`

const GroupImg = styled.img`
  position: absolute;
  bottom: -30px;
  left: 50px;
  @media only screen and (max-width: ${MAX_WIDTH_MOBILE}px) {
    left: 5px;
  }
`

const SectionContainer = styled.div`
  margin-top: 60px;
`

const CommunityImg = styled.img`
  width: 70%;
  margin: 0 auto;
  display: block;

  @media only screen and (max-width: ${LG_WIDTH}px) {
    width: 95%;
  }
`
