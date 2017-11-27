// external imports
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import browserEnv from 'browser-env'

// add a request animation frame polyfill
import raf from 'raf'
raf.polyfill()

// enable the react 16 adapter for enzyme
Enzyme.configure({ adapter: new Adapter() })

// add various browser mocks
browserEnv()
