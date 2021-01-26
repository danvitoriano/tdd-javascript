'use strict'
const isWeekend = require('date-fns/isWeekend')
const data = require('./data.json')
module.exports = {
    adicionar: (nights, options) => {
        let _weekdays = 0, _weekends = 0
        nights.map(date => isWeekend(new Date(date)) ? _weekends++ : _weekdays++)
        return data
            .map(
                i => options
                    ? ({ name: i.name, stars: i.stars, rate: (i.weekPromo * _weekdays) + (i.weekendPromo * _weekends) })
                    : ({ name: i.name, stars: i.stars, rate: (i.week * _weekdays) + (i.weekend * _weekends) })
            )
            .sort((a, b) => a.rate - b.rate || b.stars - a.stars)
            .shift().name
    }
}