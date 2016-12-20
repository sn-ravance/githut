import React from 'react'
import expect from 'expect.js'
import LangTable from '../src/js/components/LangTable'
import { mount } from 'enzyme'
import _ from 'lodash'
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

describe('Test LangTable', () => {
  it('component import should work', () => {
    expect(LangTable).not.to.be.equal(null)
  })

  it('render should work', () => {
    mount(<LangTable/>)
  })

  it('chart should contain top 50 languages', async () => {
    const wrapper = mount(<LangTable/>)
    await sleep(500)
    const html = wrapper.html()
    _.each(['Ranking', 'Python', 'TypeScript',
        'CoffeeScript', 'Haskell'], (lang) =>
        expect(html).to.contain(lang)
    )
  })

  it('chart should not contain non programming languages', async () => {
    const wrapper = mount(<LangTable/>)
    await sleep(500)
    const html = wrapper.html()
    _.each(['Makefile', 'Jupyter Notebook', 'Smalltalk'], (lang) =>
        expect(html).to.not.contain(lang)
    )
  })
})
