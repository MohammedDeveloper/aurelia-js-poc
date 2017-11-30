import { Customer } from './customer';

/**
 * App base class
 */
export class App {

    /**
     * Constructor
     */
    constructor() {

        /// set the page props
        this.customerName = "";
        this.customerPhone = "";
        this.customerAge = "";
        this.customerEmail = "";

        /// customers
        this.customers = this.getCustomersFromStorage();
    }

    /**
     * get customers info from localStorage
     */
    getCustomersFromStorage() {

        /// set the prop
        let customers = [];

        /// get the item
        if (localStorage.getItem("customers") === null)
            return customers;

        /// parse the data and return...
        return JSON.parse(localStorage.getItem("customers"));
    }

    /**
     * set customers info to localStorage
     */
    setCustomersToStorage(customers) {

        /// set the customer data
        localStorage.setItem("customers", JSON.stringify(customers));
    }

    /**
     * Add customer
     */
    addCustomer() {

        /// check for the data
        if (!this.customerAge && !this.customerPhone && !this.customerName)
            return;

        /// add to the base array
        this.customers.push(new Customer(this.customerName, this.customerAge, this.customerPhone, this.customerEmail));

        /// save in local storage
        this.setCustomersToStorage(this.customers);

        /// clear the page props
        this.customerName = "";
        this.customerPhone = "";
        this.customerAge = "";
        this.customerEmail = "";
    }

    /**
     * remove customer
     */
    removeCustomer(customer) {

        /// get the index from the passed customer
        let customerIndex = this.customers.indexOf(customer);

        /// check for the index value
        if (customerIndex !== - 1) {

            /// spice the indexed value
            this.customers.splice(customerIndex, 1);

            /// save in local storage
            this.setCustomersToStorage(this.customers);
        }
    }
}