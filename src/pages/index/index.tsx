import React, { useState } from 'react'
import { View, Input } from '@tarojs/components'
import './index.less'
function Index() {
  const [value, setValue] = useState('');
  const handleInput = (e) => {
    setValue(e.detail.value || '');
  }
  return (
    <View className='nutui-react-demo'>
      <View>Input 组件</View>
      <Input placeholder='请输入内容' />
      <View>Input 组件 setValue</View>
      <Input placeholder='请输入内容' value={value} onInput={(e) => handleInput(e)} />
    </View>
  )
}

export default Index
