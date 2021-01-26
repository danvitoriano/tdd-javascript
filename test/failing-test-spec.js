'use strict'

const chai = require('chai')
const Entrada =  require('../src/booking')
const expect = chai.expect    

describe('Lakewood', function () {
  it('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)', function () {
    const hotel = Entrada.adicionar(['16Mar2009', '17Mar2009', '18Mar2009'])
    expect(hotel).to.equal('Lakewood');
  })
})

describe('Bridgewood', function () {
  it('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)', function () {
    const hotel = Entrada.adicionar(['20Mar2009', '21Mar2009', '22Mar2009'])
    expect(hotel).to.equal('Bridgewood');
  })
})

describe('Ridgewood', function () {
  it('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)', function () {
    const hotel = Entrada.adicionar(['26Mar2009', '27Mar2009', '28Mar2009'],'reward')
    expect(hotel).to.equal('Ridgewood');
  })
})