/* eslint-disable no-underscore-dangle */
import _ from 'lodash'

const comp = () => {
    const element = document.createElement('div')
    element.textContent = _.join(['Hello', 'Webpack'], ' ')
    return element
}
document.body.append(comp())
