import { ChoreographyDict, IChoreography } from '../../src';

function checkChoreography(choreography: IChoreography, toBe: {choreographyName: string, transactionsLength: number}){
    it("exists", () => {
        expect(choreography).toBeDefined()
    })

    it("have proper name", () => {
        expect(choreography.name).toBe(toBe.choreographyName)
    })
    
    it("have expected steps", () => {
        expect(choreography.transactions.length).toBe(toBe.transactionsLength)
    })
}

describe('choreography exists', () => {

    describe("DISCORD_UPDATE_CHANNELS", () => {

        checkChoreography(ChoreographyDict.DISCORD_UPDATE_CHANNELS, {
            choreographyName: "DISCORD_UPDATE_CHANNELS",
            transactionsLength: 2
        })

    })

    describe("DISCORD_SCHEDULED_JOB", () => {

        checkChoreography(ChoreographyDict.DISCORD_SCHEDULED_JOB, {
            choreographyName: "DISCORD_SCHEDULED_JOB",
            transactionsLength: 1
        })

    })

    describe("DISCORD_FETCH_MEMBERS", () => {

        checkChoreography(ChoreographyDict.DISCORD_FETCH_MEMBERS, {
            choreographyName: "DISCORD_FETCH_MEMBERS",
            transactionsLength: 1
        })

    })
    
})

