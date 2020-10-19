declare namespace WalmartAPI {

    interface OrderList {
        totalCount: number
        orders: Order[]
    }

    interface ReservationDetails {
        complete: string
    }

    enum UnitOfMeasure {
        Each = "EA"
    }

    enum SalesUnit {
        Each = "Each"
    }

    interface Item {
        name: string
        USItemID: string
        unitOfMeasure: UnitOfMeasure
        salesUnit: SalesUnit
        // WC: Not sure if this is the correct on to use
        quantity: number
        unitPrice: number
        lineTotal: number
        fulfilledQuantity: number
        // WC: Need to see if this value is evern not zero
        outOfStockQuantity: number
    }

    interface Order {
        id: string
        reservation: ReservationDetails
        items: Item[]
    }
}