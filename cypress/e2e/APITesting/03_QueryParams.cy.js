/// <reference types="Cypress"/>

describe('Query parameter', () => {

    const queryparam = {
        page: 2
    }
    it('Passing query param', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryparam
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.status).equal(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).have.property('id', 7)
            expect(response.body.data[0]).has.property('first_name', 'Michael')
            expect(response.body.data[0]).has.property('last_name', 'Lawson')
        })

    })
})