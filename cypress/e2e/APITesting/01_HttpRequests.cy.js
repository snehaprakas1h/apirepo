/// <reference types="Cypress"/>

describe('Http Requests', () => {

    it('Get Call', () => {

        cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1").its('status').should('equal', 200);
    })

    it('Post Call', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "testtitle",
                body: "this is post call",
                userId: 1
            }
        }).its('status')
        .should('equal',201)
    })

    it('Put call',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title: "foofoo",
                body: "barbar",
                userId: 1,
                id:1
            }
        }).its('status').
        should('equal',200)
    })

    it('Delete',()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        }).its('status')
        .should('equal',200)
    })
})