import deepFreeze from 'deep-freeze'
import Reducer from './reducer'

describe('unicafe reducer', () => {
    const initialState = {
        good: 0,
        ok: 0,
        bad: 0
    }

    it('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = Reducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    it('good is incremented', () => {
        const action = {
            type: 'GOOD'
        }
        const state = initialState

        deepFreeze(state)
        const newState = Reducer(state, action)
        expect(newState).toEqual({
            good: 1,
            ok: 0,
            bad: 0
        })
    })
    it('statistics are reset', () => {
        const action = {
            type: 'ZERO'
        }
        const state = {
            good: 8,
            ok: 3,
            bad: 2
        }

        deepFreeze(state)
        const newState = Reducer(state, action)
        expect(newState).toEqual({
            good: 0,
            ok: 0,
            bad: 0
        })
    })
})