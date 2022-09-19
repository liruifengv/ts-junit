import Context from './Context'
import IStrategy from './IStrategy'
import UvuStrategy from './UvuStrategy'
import { Debug } from './Utils'

const debug = Debug()

export * from './decrator'
export * from './IStrategy'
export * from './Watch'
export * from './ast'

export function executeWithDefaultStrategy(dir: string[]) {
    debug('executeWithDefaultStrategy')
    const context = new Context(new UvuStrategy())

    context.runTests(dir)
}

export function executeFileWithDefaultStrategy(file: String) {
    debug('executeFileWithDefaultStrategy')
    const context = new Context(new UvuStrategy())

    context.runTest(file)
}

export function execute(dir: string[], strategy: IStrategy) {
    debug('execute With Strategy')
    const context = new Context(strategy)
    context.runTests(dir)
}
