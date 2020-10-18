export class Item {

    id: number
    name: string
    price: number
    imageURL: string

    // Meta values
    datePurchase: string

    /**
     * Compare this item to another item to see if they are the same item.  Please note that this method is not looking at the pricing information, just that they are the same items as you would pluck them off the shelf.
     * @param item The item to compare this item to
     */
    public equals(item: Item) {
        return item.id === this.id
    }


    public pricePerUnit(): number {
        return 1
    }

    public getUnit(): string {
        return ''
    }

    public static generateMockItem(): Item
    {
        let obj = new Item()
        obj.id = 1234
        obj.name = 'Test Item'
        obj.price = 12.34
        obj.imageURL = 'https://www.google.com'

        obj.datePurchase = '2020-10-18 16:06:45'

        return obj
    }
    
    public static generateItemWithPrice(price: number): Item
    {
        let item = Item.generateMockItem()
        item.price = price

        return item
    }
    

}

class UnitItem {

    unitName: string
    unitValue: number
}

// How to differentiate between items with units and those without?
// Maybe consider a different type of class for each unit?
// What is the public interface like?
// Who is responsible for building the list of items?
// What to do about qty purchased over time?