import { expect }  from 'chai'
import { Test } from 'mocha'
import { Item } from "../../src/models/Item"

// const expect = chai.expect

describe('Item', function() {
    it ('Should instantiate object', function(){
        let testObj = new Item()
        expect(testObj).to.be.an.instanceOf(Item)
    })

    it ('Should create factory items', function(){
        let testObj = Item.generateItemWithPrice(12.39)
        expect(testObj).to.haveOwnProperty('price')
        expect(testObj.price).to.eql(12.39)
    })

    it ('Should identify two equivalent objects', function(){
        let objA = Item.generateMockItem()
        let objB = Item.generateMockItem()

        expect(objA.equals(objB)).to.be.true

        // Change the values that matter
        objB.id = 4321

        expect(objA.equals(objB)).to.be.false
    })

})