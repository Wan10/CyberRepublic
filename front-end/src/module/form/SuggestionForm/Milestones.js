import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Popover } from 'antd'
import moment from 'moment'
import MilestoneForm from '@/module/form/MilestoneForm/Container'

class Milestones extends Component {
  constructor(props) {
    super(props)
    this.state = {
      milestones: props.initialValue ? props.initialValue : [],
      milestonesTrigger: props.initialValue
        ? this.milestonesTrigger(props.initialValue.length)
        : {}
    }
  }

  milestonesTrigger = size => {
    const triggers = {}
    for (let i = 0; i < size; i++) {
      triggers[i] = { clicked: false, hovered: false }
    }
    return triggers
  }

  handleSubmit = values => {
    const { milestones, milestonesTrigger } = this.state
    this.setState({ milestones: [...milestones, values] }, () => {
      this.props.onChange({ milestone: this.state.milestones })
    })
    this.setState({milestonesTrigger: {...milestonesTrigger, [milestones.length]: { clicked: false, hovered: false }}})
  }

  handleEdit = (index, values) => {
    const { milestones } = this.state
    const rs = milestones.map((item, key) => {
      if (index === key) {
        return values
      }
      return item
    })
    this.setState({ milestones: rs }, () => {
      this.props.onChange({ milestone: this.state.milestones })
    })
  }

  handleHoverChange = (index, visible) => {
    const { milestonesTrigger } = this.state
    this.setState({
      milestonesTrigger: {
        ...milestonesTrigger,
        [index]: { hovered: visible, clicked: false }
      }
    })
  }

  handleClickChange = (index, visible) => {
    const { milestonesTrigger } = this.state
    this.setState({
      milestonesTrigger: {
        ...milestonesTrigger,
        [index]: { clicked: visible, hovered: false }
      }
    })
  }

  render() {
    const { milestones, milestonesTrigger } = this.state
    const { editable } = this.props
    const visible = editable === false ? editable : true
    return (
      <Wrapper>
        <Timeline>
          {milestones.map((item, index) => (
            <Milestone key={index}>
              {visible ? (
                <Popover
                  content={
                    <MilestoneForm
                      item={{
                        ...item,
                        date: moment(item.date, 'YYYY-MM-DD'),
                        index
                      }}
                      onSubmit={this.handleEdit}
                    />
                  }
                  trigger="click"
                  visible={milestonesTrigger[index].clicked}
                  onVisibleChange={isVisible =>
                    this.handleClickChange(index, isVisible)
                  }
                  placement="top"
                >
                  <Popover
                    content={item.version}
                    trigger="hover"
                    visible={milestonesTrigger[index].hovered}
                    onVisibleChange={isVisible =>
                      this.handleHoverChange(index, isVisible)
                    }
                  >
                    <Square>
                      <div>{moment(item.date).format('MMM D, YYYY')}</div>
                      <div className="square-content">{item.version}</div>
                    </Square>
                    <Button
                      type="primary"
                      size="small"
                      shape="circle"
                      icon="edit"
                    />
                  </Popover>
                </Popover>
              ) : (
                <Fragment>
                  <Popover
                    content={item.version}
                    trigger="hover"
                    visible={milestonesTrigger[index].hovered}
                    onVisibleChange={isVisible => this.handleHoverChange(index, isVisible)}
                  >
                    <Square>
                      <div>{moment(item.date).format('MMM D, YYYY')}</div>
                      <div className="square-content">{item.version}</div>
                    </Square>
                    <Circle />
                  </Popover>
                </Fragment>
              )}
            </Milestone>
          ))}

          <Action visible={visible}>
            {visible && (
              <Popover
                content={<MilestoneForm onSubmit={this.handleSubmit} />}
                trigger="click"
                placement="top"
              >
                <Button size="small" shape="circle" icon="plus" />
              </Popover>
            )}
          </Action>
        </Timeline>
      </Wrapper>
    )
  }
}

Milestones.propTypes = {
  onChang: PropTypes.func,
  initialValue: PropTypes.array,
  editable: PropTypes.bool
}

export default Milestones

const Wrapper = styled.div`
  margin-bottom: 32px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 24px;
`

const Timeline = styled.div`
  display: flex;
`
const Milestone = styled.div`
  padding-right: 16px;
  border-bottom: 1px solid #ced6e3;
  button {
    display: block;
    margin: 8px auto -12px;
  }
`
const Square = styled.div`
  width: 150px;
  height: 88px;
  background: #0f2631;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  > div {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
    &.square-content {
      width: 140px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`
const Circle = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #1de9b6;
  margin: 8px auto -8px;
`
const Action = styled.div`
  padding-left: 110px;
  padding-right: ${props => (props.visible === false ? '0' : '150px')};
  border-bottom: 1px solid #ced6e3;
  position: relative;
  padding-bottom: 24px;
  > button {
    position: absolute;
    bottom: -12px;
    background: #0f2631;
    border-color: unset;
    > i {
      color: #1de9b6;
    }
  }
  &:after {
    content: '>';
    position: absolute;
    right: -2px;
    bottom: ${props => (props.visible === false ? '-8px' : '-17px')};
    color: #ced6e3;
  }
`
