'use strict';
import { DataCollectionType } from "./DataCollectionType";


class PaymentMethod {

        /**
        * The data collection types that are supported by the payment method.
        */
    'dataCollectionTypes'?: Array<DataCollectionType>;

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The path to the payment method's image which is displayed to the customer.
        */
    'imagePath'?: string;

        /**
        * 
        */
    'merchantDescription'?: { [key: string]: string; };

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * The currencies that are supported by the payment method.
        */
    'supportedCurrencies'?: Array<string>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "dataCollectionTypes",
        "baseName": "dataCollectionTypes",
        "type": "Array<DataCollectionType>"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "imagePath",
        "baseName": "imagePath",
        "type": "string"
        },
        
        {
        "name": "merchantDescription",
        "baseName": "merchantDescription",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "supportedCurrencies",
        "baseName": "supportedCurrencies",
        "type": "Array<string>"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}

export { PaymentMethod }
