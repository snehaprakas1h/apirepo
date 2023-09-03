/// <reference types="Cypress"/>

describe('api testing', () => {

    it('approach 1-hard coded json object', () => {

        const email = "test3145@gmail.com"
        const requestBody = {
            tourist_name: "test",
            tourist_email: email,
            tourist_location: "munich",
        }

        cy.request({
            method: 'POST',
            url: "http://restapi.adequateshop.com/api/Tourist",
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq('test')
            expect(response.body.tourist_email).to.eq(email)
            expect(response.body.tourist_location).to.eq('munich')
        })
    })

    it('approach 2-dynamically generating json object', () => {
        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: `${Math.random().toString(5).substring(2)}@gmail.com`,
            tourist_location: "munich",
        }

        cy.request({
            method: 'POST',
            url: "http://restapi.adequateshop.com/api/Tourist",
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })

    it.only('approach 3-fixtures json object', () => {

        cy.fixture("touristdata").then((myfixturedata) => {
            const requestBody = myfixturedata

            cy.request({
                method: 'POST',
                url: "http://restapi.adequateshop.com/api/Tourist",
                body: requestBody
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                expect(response.body).has.property('tourist_email',requestBody.tourist_email)
                expect(response.body).to.have.property('tourist_email',requestBody.tourist_email)

            })
        })
    })
})